#!/usr/bin/env python3
"""CPU-only Redrob candidate ranker and dashboard data builder.

The challenge rewards understanding the JD, not counting AI keywords. This
script scores career evidence, production retrieval/ranking experience,
availability signals, logistics fit, and anti-signals in one deterministic pass
over candidates.jsonl.
"""

from __future__ import annotations

import csv
import heapq
import json
import math
import re
from collections import Counter
from datetime import date, datetime
from pathlib import Path
from typing import Any


BASE_DIR = Path(__file__).resolve().parents[1]
CANDIDATE_FILE = BASE_DIR / "candidates.jsonl"
OUTPUT_DIR = BASE_DIR / "outputs"
SITE_DATA_DIR = BASE_DIR / "site" / "data"
SUBMISSION_CSV = OUTPUT_DIR / "redrob_scout_submission.csv"
DASHBOARD_JS = SITE_DATA_DIR / "ranking-data.js"

# Fixed to the bundle/current challenge date for reproducible recency scoring.
REFERENCE_DATE = date(2026, 6, 19)

PROFICIENCY_WEIGHT = {
    "beginner": 0.35,
    "intermediate": 0.60,
    "advanced": 0.85,
    "expert": 1.00,
}

SERVICE_COMPANIES = {
    "tcs",
    "infosys",
    "wipro",
    "accenture",
    "cognizant",
    "capgemini",
    "mindtree",
}

PRODUCT_INDUSTRIES = {
    "internet",
    "software",
    "saas",
    "e-commerce",
    "edtech",
    "fintech",
    "healthtech ai",
    "food delivery",
    "consumer electronics",
    "ai/ml",
    "marketplace",
}

RETRIEVAL_SKILLS = {
    "embeddings",
    "sentence transformers",
    "vector search",
    "semantic search",
    "information retrieval",
    "information retrieval systems",
    "faiss",
    "pinecone",
    "qdrant",
    "weaviate",
    "milvus",
    "opensearch",
    "elasticsearch",
    "pgvector",
    "bm25",
    "rag",
    "haystack",
    "llamaindex",
    "search backend",
    "search infrastructure",
    "vector representations",
    "text encoders",
}

RANKING_SKILLS = {
    "recommendation systems",
    "learning to rank",
    "ranking systems",
    "content matching",
    "search & discovery",
}

ML_SYSTEM_SKILLS = {
    "python",
    "machine learning",
    "deep learning",
    "data science",
    "feature engineering",
    "mlops",
    "mlflow",
    "kubeflow",
    "bentoml",
    "pytorch",
    "tensorflow",
    "scikit-learn",
    "fastapi",
    "docker",
    "kubernetes",
    "spark",
    "airflow",
    "apache flink",
    "apache beam",
    "workflow orchestration",
}

LLM_TUNING_SKILLS = {
    "llms",
    "fine-tuning llms",
    "lora",
    "qlora",
    "peft",
    "hugging face transformers",
    "model adaptation",
}

CV_SPEECH_SKILLS = {
    "computer vision",
    "image classification",
    "object detection",
    "yolo",
    "cnn",
    "speech recognition",
    "asr",
    "tts",
    "robotics",
    "diffusion models",
    "gans",
}

EVAL_TERMS = [
    "ndcg",
    "mrr",
    "map",
    "offline-online",
    "offline online",
    "offline metrics",
    "online metrics",
    "a/b test",
    "ab test",
    "evaluation framework",
    "evaluation harness",
    "relevance improvement",
    "ranking calibration",
    "recruiter-feedback",
    "feedback loop",
]

PRODUCTION_TERMS = [
    "production",
    "shipped",
    "deployed",
    "real users",
    "served",
    "scale",
    "millions",
    "billion",
    "qps",
    "latency",
    "p95",
    "index refresh",
    "regression",
    "on-call",
    "owned",
]

RETRIEVAL_TERMS = [
    "embedding",
    "embeddings",
    "dense vector",
    "vector recall",
    "vector search",
    "hybrid retrieval",
    "semantic search",
    "information retrieval",
    "bm25",
    "sentence-transformer",
    "bge",
    "faiss",
    "pinecone",
    "qdrant",
    "milvus",
    "weaviate",
    "opensearch",
    "elasticsearch",
    "query expansion",
    "retrieval quality",
    "rag",
]

RANKING_TERMS = [
    "ranking",
    "re-ranking",
    "reranking",
    "learning-to-rank",
    "learning to rank",
    "recommendation",
    "recommendations",
    "discovery feed",
    "matching layer",
    "candidate sourcing",
    "xgboost",
    "lightgbm",
    "collaborative filtering",
]

PREFERRED_LOCATION_TERMS = ["pune", "noida"]
WELCOME_LOCATION_TERMS = [
    "delhi",
    "gurgaon",
    "gurugram",
    "hyderabad",
    "mumbai",
    "bangalore",
    "bengaluru",
    "chennai",
]


def clamp(value: float, low: float = 0.0, high: float = 1.0) -> float:
    return max(low, min(high, value))


def parse_date(value: str | None) -> date | None:
    if not value:
        return None
    try:
        return datetime.strptime(value, "%Y-%m-%d").date()
    except ValueError:
        return None


def norm_text(value: str) -> str:
    return re.sub(r"\s+", " ", value.lower().replace("–", "-").replace("—", "-"))


def build_text(candidate: dict[str, Any]) -> str:
    profile = candidate["profile"]
    parts = [
        profile.get("headline", ""),
        profile.get("summary", ""),
        profile.get("current_title", ""),
        profile.get("current_industry", ""),
        profile.get("location", ""),
        profile.get("country", ""),
    ]
    for job in candidate.get("career_history", []):
        parts.extend(
            [
                job.get("company", ""),
                job.get("title", ""),
                job.get("industry", ""),
                job.get("description", ""),
            ]
        )
    for skill in candidate.get("skills", []):
        parts.append(skill.get("name", ""))
    return norm_text(" ".join(parts))


def count_hits(text: str, terms: list[str]) -> int:
    return sum(1 for term in terms if term in text)


def skill_strength(skill: dict[str, Any]) -> float:
    proficiency = PROFICIENCY_WEIGHT.get(skill.get("proficiency", ""), 0.45)
    duration = float(skill.get("duration_months") or 0)
    endorsements = float(skill.get("endorsements") or 0)
    duration_factor = 0.55 + 0.45 * clamp(duration / 30.0)
    endorsement_factor = 1.0 + min(0.25, math.log1p(endorsements) / 18.0)
    return proficiency * duration_factor * endorsement_factor


def score_skill_group(
    skills: list[dict[str, Any]],
    group: set[str],
    cap: float,
) -> tuple[float, list[str]]:
    total = 0.0
    matched: list[str] = []
    for skill in skills:
        name = skill.get("name", "")
        key = name.lower()
        if key in group:
            total += skill_strength(skill)
            matched.append(name)
    return clamp(total / cap), matched


def experience_fit(years: float) -> float:
    if 5.0 <= years <= 9.0:
        return 1.0
    if 4.0 <= years < 5.0:
        return 0.82
    if 9.0 < years <= 11.0:
        return 0.78
    if 3.0 <= years < 4.0:
        return 0.58
    if 11.0 < years <= 13.0:
        return 0.52
    if 13.0 < years <= 15.0:
        return 0.35
    return 0.18


def role_fit(candidate: dict[str, Any], retrieval: float, ranking: float, production: float) -> float:
    profile = candidate["profile"]
    current_title = profile.get("current_title", "").lower()
    titles = " ".join(job.get("title", "") for job in candidate.get("career_history", [])).lower()
    all_titles = f"{current_title} {titles}"

    if any(token in current_title for token in ["senior ai engineer", "lead ai engineer"]):
        return 1.0
    if "staff machine learning engineer" in current_title:
        return 0.98
    if any(token in current_title for token in ["recommendation systems engineer", "search engineer"]):
        return 0.96
    if any(
        token in current_title
        for token in [
            "senior machine learning engineer",
            "applied ml engineer",
            "machine learning engineer",
        ]
    ):
        return 0.91
    if any(token in current_title for token in ["ml engineer", "ai engineer", "data scientist"]):
        return 0.76
    if "ai research engineer" in current_title:
        return 0.45 + 0.25 * min(production, retrieval)
    if any(token in all_titles for token in ["search engineer", "recommendation", "machine learning"]):
        return 0.62 + 0.25 * min(retrieval, production)
    if any(token in current_title for token in ["data engineer", "backend engineer", "software engineer"]):
        return 0.38 + 0.42 * min(1.0, 0.55 * retrieval + 0.45 * production)
    if any(token in current_title for token in ["cloud engineer", "devops engineer", "full stack developer"]):
        return 0.25 + 0.35 * min(retrieval, production)
    return 0.08 + 0.18 * min(retrieval, ranking)


def company_fit(candidate: dict[str, Any]) -> tuple[float, bool]:
    profile = candidate["profile"]
    current_industry = profile.get("current_industry", "").lower()
    jobs = candidate.get("career_history", [])
    company_names = {job.get("company", "").lower() for job in jobs}
    industries = {job.get("industry", "").lower() for job in jobs}
    service_only = bool(jobs) and all(
        (job.get("company", "").lower() in SERVICE_COMPANIES)
        or (job.get("industry", "").lower() in {"it services", "consulting"})
        for job in jobs
    )

    score = 0.50
    if current_industry in PRODUCT_INDUSTRIES:
        score += 0.28
    if industries & PRODUCT_INDUSTRIES:
        score += 0.16
    if company_names - SERVICE_COMPANIES:
        score += 0.08
    if service_only:
        score -= 0.30
    return clamp(score), service_only


def logistics_fit(candidate: dict[str, Any]) -> tuple[float, str]:
    profile = candidate["profile"]
    signals = candidate["redrob_signals"]
    location = profile.get("location", "").lower()
    country = profile.get("country", "").lower()
    notice = int(signals.get("notice_period_days") or 180)
    work_mode = signals.get("preferred_work_mode", "")
    relocate = bool(signals.get("willing_to_relocate"))

    if country == "india" and any(term in location for term in PREFERRED_LOCATION_TERMS):
        location_score = 1.0
        location_label = "preferred office city"
    elif country == "india" and any(term in location for term in WELCOME_LOCATION_TERMS):
        location_score = 0.82
        location_label = "tier-1 India city"
    elif country == "india" and relocate:
        location_score = 0.70
        location_label = "India, relocation-ready"
    elif country == "india":
        location_score = 0.55
        location_label = "India, non-preferred city"
    elif relocate:
        location_score = 0.18
        location_label = "outside India, relocation-ready"
    else:
        location_score = 0.05
        location_label = "outside India"

    if notice <= 30:
        notice_score = 1.0
    elif notice <= 60:
        notice_score = 0.76
    elif notice <= 90:
        notice_score = 0.52
    elif notice <= 120:
        notice_score = 0.28
    else:
        notice_score = 0.08

    mode_score = {"hybrid": 1.0, "flexible": 0.92, "onsite": 0.84, "remote": 0.58}.get(
        work_mode, 0.65
    )
    return 0.48 * location_score + 0.34 * notice_score + 0.18 * mode_score, location_label


def behavior_fit(candidate: dict[str, Any]) -> tuple[float, dict[str, float]]:
    signals = candidate["redrob_signals"]
    last_active = parse_date(signals.get("last_active_date"))
    days_inactive = 999
    if last_active:
        days_inactive = max(0, (REFERENCE_DATE - last_active).days)

    if days_inactive <= 30:
        recency = 1.0
    elif days_inactive <= 60:
        recency = 0.82
    elif days_inactive <= 120:
        recency = 0.58
    elif days_inactive <= 180:
        recency = 0.34
    else:
        recency = 0.10

    response_rate = clamp(float(signals.get("recruiter_response_rate") or 0))
    response_time = float(signals.get("avg_response_time_hours") or 240)
    response_speed = clamp(1.0 - response_time / 240.0)
    open_to_work = 1.0 if signals.get("open_to_work_flag") else 0.35
    completeness = clamp(float(signals.get("profile_completeness_score") or 0) / 100.0)
    saved = clamp(math.log1p(float(signals.get("saved_by_recruiters_30d") or 0)) / math.log1p(80))
    interview = clamp(float(signals.get("interview_completion_rate") or 0))
    github_raw = float(signals.get("github_activity_score") or -1)
    github = 0.18 if github_raw < 0 else clamp(github_raw / 100.0)
    verified = (
        (1.0 if signals.get("verified_email") else 0.0)
        + (1.0 if signals.get("verified_phone") else 0.0)
        + (1.0 if signals.get("linkedin_connected") else 0.0)
    ) / 3.0

    parts = {
        "recency": recency,
        "response": response_rate,
        "speed": response_speed,
        "open_to_work": open_to_work,
        "completeness": completeness,
        "saved": saved,
        "interview": interview,
        "github": github,
        "verified": verified,
    }
    score = (
        0.18 * recency
        + 0.20 * response_rate
        + 0.08 * response_speed
        + 0.13 * open_to_work
        + 0.09 * completeness
        + 0.08 * saved
        + 0.08 * interview
        + 0.10 * github
        + 0.06 * verified
    )
    return score, parts


def text_year_mismatch(profile: dict[str, Any]) -> float:
    summary = profile.get("summary", "")
    years = float(profile.get("years_of_experience") or 0)
    mentions = [
        float(match)
        for match in re.findall(r"(\d+(?:\.\d+)?)\+?\s+years? of experience", summary.lower())
    ]
    if not mentions:
        return 0.0
    nearest = min(abs(years - mentioned) for mentioned in mentions)
    if nearest > 5.0:
        return 0.65
    if nearest > 3.0:
        return 0.35
    return 0.0


def anti_signal_penalty(
    candidate: dict[str, Any],
    text: str,
    retrieval: float,
    ranking: float,
    production: float,
    role: float,
    service_only: bool,
) -> tuple[float, list[str]]:
    profile = candidate["profile"]
    signals = candidate["redrob_signals"]
    skills = candidate.get("skills", [])
    title = profile.get("current_title", "").lower()
    years = float(profile.get("years_of_experience") or 0)
    concerns: list[str] = []
    penalty = 0.0

    high_ai_skill_count = sum(
        1
        for skill in skills
        if skill.get("name", "").lower() in RETRIEVAL_SKILLS | RANKING_SKILLS | LLM_TUNING_SKILLS
    )
    weak_claims = [
        skill
        for skill in skills
        if skill.get("proficiency") in {"advanced", "expert"}
        and int(skill.get("duration_months") or 0) <= 3
        and int(skill.get("endorsements") or 0) <= 1
    ]
    expert_zero_tenure = [
        skill
        for skill in skills
        if skill.get("proficiency") == "expert" and int(skill.get("duration_months") or 0) <= 2
    ]

    if high_ai_skill_count >= 7 and role < 0.35 and production < 0.35:
        penalty += 12.0
        concerns.append("AI keyword-heavy profile without matching production career evidence")
    if len(weak_claims) >= 6 or len(expert_zero_tenure) >= 3:
        penalty += 8.0
        concerns.append("skill claims look thin relative to tenure and endorsements")
    if any(word in title for word in ["senior", "lead", "staff"]) and years < 4.0:
        penalty += 7.0
        concerns.append("seniority/title is hard to reconcile with total experience")
    mismatch = text_year_mismatch(profile)
    if mismatch:
        penalty += 6.0 * mismatch
        concerns.append("profile summary and structured experience years are inconsistent")
    if service_only:
        penalty += 6.0
        concerns.append("career appears services/consulting-only")
    if profile.get("country", "").lower() != "india":
        penalty += 5.0
        concerns.append("outside India despite India-first logistics")
    if signals.get("notice_period_days", 0) >= 90:
        penalty += 4.5
        concerns.append("long notice period")
    if not signals.get("open_to_work_flag") and float(signals.get("recruiter_response_rate") or 0) < 0.35:
        penalty += 5.0
        concerns.append("weak availability signals")
    if count_hits(text, ["research", "paper", "academic"]) >= 2 and production < 0.45:
        penalty += 4.0
        concerns.append("research-leaning evidence without enough deployment signal")

    cv_speech_strength, _ = score_skill_group(skills, CV_SPEECH_SKILLS, cap=4.0)
    if cv_speech_strength > 0.70 and retrieval < 0.45:
        penalty += 5.0
        concerns.append("primary AI evidence skews to CV/speech rather than IR/NLP")

    return penalty, concerns[:4]


def score_candidate(candidate: dict[str, Any]) -> dict[str, Any]:
    profile = candidate["profile"]
    skills = candidate.get("skills", [])
    text = build_text(candidate)

    retrieval_skill, retrieval_names = score_skill_group(skills, RETRIEVAL_SKILLS, cap=5.0)
    ranking_skill, ranking_names = score_skill_group(skills, RANKING_SKILLS, cap=2.3)
    ml_skill, ml_names = score_skill_group(skills, ML_SYSTEM_SKILLS, cap=5.0)
    llm_skill, llm_names = score_skill_group(skills, LLM_TUNING_SKILLS, cap=3.0)

    retrieval_text = clamp(count_hits(text, RETRIEVAL_TERMS) / 8.0)
    ranking_text = clamp(count_hits(text, RANKING_TERMS) / 6.0)
    eval_text = clamp(count_hits(text, EVAL_TERMS) / 5.0)
    production_text = clamp(count_hits(text, PRODUCTION_TERMS) / 7.0)

    retrieval = 0.70 * retrieval_skill + 0.30 * retrieval_text
    ranking = 0.62 * ranking_skill + 0.38 * ranking_text
    evaluation = eval_text
    production = production_text
    ml_systems = 0.75 * ml_skill + 0.25 * production_text
    llm = 0.80 * llm_skill + 0.20 * retrieval_text

    technical = (
        0.30 * retrieval
        + 0.20 * ranking
        + 0.18 * evaluation
        + 0.15 * production
        + 0.11 * ml_systems
        + 0.06 * llm
    )
    role = role_fit(candidate, retrieval, ranking, production)
    experience = experience_fit(float(profile.get("years_of_experience") or 0))
    company, service_only = company_fit(candidate)
    logistics, location_label = logistics_fit(candidate)
    behavior, behavior_parts = behavior_fit(candidate)
    penalty, concerns = anti_signal_penalty(
        candidate, text, retrieval, ranking, production, role, service_only
    )

    score_100 = (
        34.0 * technical
        + 16.0 * role
        + 10.0 * experience
        + 9.0 * company
        + 13.0 * behavior
        + 10.0 * logistics
        + 8.0 * min(retrieval, production + evaluation)
        - penalty
    )
    normalized = clamp(score_100 / 100.0)

    core_names = unique_ordered(retrieval_names + ranking_names + ml_names + llm_names)
    evidence = []
    if retrieval > 0.55:
        evidence.append("retrieval")
    if ranking > 0.55:
        evidence.append("ranking/recommendations")
    if evaluation > 0.45:
        evidence.append("evaluation")
    if production > 0.45:
        evidence.append("production shipping")

    return {
        "candidate_id": candidate["candidate_id"],
        "score": normalized,
        "score_100": score_100,
        "profile": profile,
        "career_history": candidate.get("career_history", []),
        "skills": skills,
        "signals": candidate["redrob_signals"],
        "breakdown": {
            "technical": round(technical * 100, 1),
            "role": round(role * 100, 1),
            "experience": round(experience * 100, 1),
            "company": round(company * 100, 1),
            "behavior": round(behavior * 100, 1),
            "logistics": round(logistics * 100, 1),
            "penalty": round(penalty, 1),
            "retrieval": round(retrieval * 100, 1),
            "ranking": round(ranking * 100, 1),
            "evaluation": round(evaluation * 100, 1),
            "production": round(production * 100, 1),
        },
        "behavior_parts": {key: round(value * 100, 1) for key, value in behavior_parts.items()},
        "matched_skills": core_names[:10],
        "evidence": evidence,
        "concerns": concerns,
        "location_label": location_label,
    }


def unique_ordered(values: list[str]) -> list[str]:
    seen: set[str] = set()
    ordered: list[str] = []
    for value in values:
        key = value.lower()
        if key not in seen:
            ordered.append(value)
            seen.add(key)
    return ordered


def top_career_evidence(scored: dict[str, Any]) -> str:
    evidence = scored["evidence"]
    if not evidence:
        return "career text has limited direct retrieval/ranking evidence"
    if "retrieval" in evidence and "ranking/recommendations" in evidence:
        return "career and skills show retrieval plus ranking/recommendation depth"
    if "retrieval" in evidence:
        return "career and skills show strong retrieval/search depth"
    if "ranking/recommendations" in evidence:
        return "career and skills show ranking/recommendation depth"
    if "evaluation" in evidence:
        return "career text includes ranking evaluation signals"
    return "career text includes production ML delivery signals"


def make_reasoning(scored: dict[str, Any]) -> str:
    profile = scored["profile"]
    signals = scored["signals"]
    title = profile.get("current_title", "Candidate")
    years = float(profile.get("years_of_experience") or 0)
    company = profile.get("current_company", "current company")
    location = profile.get("location", "unknown location")
    skills = ", ".join(scored["matched_skills"][:4]) or "relevant ML skills"
    response = float(signals.get("recruiter_response_rate") or 0)
    notice = int(signals.get("notice_period_days") or 0)
    active = signals.get("last_active_date", "unknown")

    first = (
        f"{title} with {years:.1f} yrs at {company}; "
        f"{top_career_evidence(scored)} ({skills})."
    )
    second_bits = [
        f"{location}",
        f"{response:.0%} recruiter response",
        f"last active {active}",
        f"{notice}-day notice",
    ]
    if scored["concerns"]:
        second_bits.append("concern: " + scored["concerns"][0])
    else:
        second_bits.append("behavior/logistics are broadly workable")
    return first + " " + "; ".join(second_bits) + "."


def dashboard_candidate(scored: dict[str, Any], rank: int) -> dict[str, Any]:
    profile = scored["profile"]
    signals = scored["signals"]
    career = scored["career_history"]
    current_job = career[0] if career else {}
    salary = signals.get("expected_salary_range_inr_lpa", {})
    education = scored.get("education", [])
    return {
        "candidate_id": scored["candidate_id"],
        "rank": rank,
        "score": round(scored["score"], 4),
        "name": profile.get("anonymized_name", ""),
        "title": profile.get("current_title", ""),
        "headline": profile.get("headline", ""),
        "summary": profile.get("summary", ""),
        "company": profile.get("current_company", ""),
        "industry": profile.get("current_industry", ""),
        "company_size": profile.get("current_company_size", ""),
        "location": profile.get("location", ""),
        "country": profile.get("country", ""),
        "years": profile.get("years_of_experience", 0),
        "current_work": current_job.get("description", ""),
        "matched_skills": scored["matched_skills"][:8],
        "all_skills": [
            {
                "name": skill.get("name", ""),
                "proficiency": skill.get("proficiency", ""),
                "duration_months": skill.get("duration_months", 0),
                "endorsements": skill.get("endorsements", 0),
            }
            for skill in scored["skills"][:18]
        ],
        "signals": {
            "open_to_work": signals.get("open_to_work_flag"),
            "last_active": signals.get("last_active_date"),
            "response_rate": signals.get("recruiter_response_rate"),
            "response_time_hours": signals.get("avg_response_time_hours"),
            "notice_days": signals.get("notice_period_days"),
            "github": signals.get("github_activity_score"),
            "saved": signals.get("saved_by_recruiters_30d"),
            "profile_completeness": signals.get("profile_completeness_score"),
            "interview_completion": signals.get("interview_completion_rate"),
            "offer_acceptance": signals.get("offer_acceptance_rate"),
            "work_mode": signals.get("preferred_work_mode"),
            "relocate": signals.get("willing_to_relocate"),
            "salary_min": salary.get("min"),
            "salary_max": salary.get("max"),
            "verified_email": signals.get("verified_email"),
            "verified_phone": signals.get("verified_phone"),
            "linkedin_connected": signals.get("linkedin_connected"),
        },
        "breakdown": scored["breakdown"],
        "behavior_parts": scored["behavior_parts"],
        "evidence": scored["evidence"],
        "concerns": scored["concerns"],
        "location_label": scored["location_label"],
        "reasoning": make_reasoning(scored),
        "career": [
            {
                "title": job.get("title", ""),
                "company": job.get("company", ""),
                "industry": job.get("industry", ""),
                "duration_months": job.get("duration_months", 0),
                "is_current": job.get("is_current", False),
                "description": job.get("description", ""),
            }
            for job in career[:4]
        ],
        "education": education,
    }


def iter_scored_candidates() -> Any:
    with CANDIDATE_FILE.open("r", encoding="utf-8") as handle:
        for line_number, line in enumerate(handle, start=1):
            if not line.strip():
                continue
            try:
                candidate = json.loads(line)
            except json.JSONDecodeError as exc:
                raise RuntimeError(f"Bad JSON on line {line_number}: {exc}") from exc
            scored = score_candidate(candidate)
            scored["education"] = candidate.get("education", [])
            yield scored


def summary_payload(scored_top: list[dict[str, Any]], total_count: int) -> dict[str, Any]:
    top100 = scored_top[:100]
    title_counter = Counter(item["profile"].get("current_title", "") for item in top100)
    city_counter = Counter(item["profile"].get("location", "") for item in top100)
    country_counter = Counter(item["profile"].get("country", "") for item in top100)
    skill_counter: Counter[str] = Counter()
    for item in top100:
        skill_counter.update(item["matched_skills"][:6])

    def avg(key: str) -> float:
        if not top100:
            return 0.0
        return round(sum(item["breakdown"][key] for item in top100) / len(top100), 1)

    return {
        "generated_at": REFERENCE_DATE.isoformat(),
        "source_file": CANDIDATE_FILE.name,
        "total_candidates_scanned": total_count,
        "shortlist_size": len(top100),
        "top_score": round(top100[0]["score"], 4) if top100 else 0,
        "cutoff_score": round(top100[-1]["score"], 4) if top100 else 0,
        "top10_average_score": round(sum(item["score"] for item in top100[:10]) / 10, 4)
        if len(top100) >= 10
        else 0,
        "average_breakdown": {
            "technical": avg("technical"),
            "role": avg("role"),
            "experience": avg("experience"),
            "company": avg("company"),
            "behavior": avg("behavior"),
            "logistics": avg("logistics"),
            "retrieval": avg("retrieval"),
            "ranking": avg("ranking"),
            "evaluation": avg("evaluation"),
            "production": avg("production"),
        },
        "top_titles": title_counter.most_common(8),
        "top_locations": city_counter.most_common(8),
        "top_countries": country_counter.most_common(8),
        "top_skills": skill_counter.most_common(12),
    }


def write_outputs(scored: list[dict[str, Any]], total_count: int) -> None:
    OUTPUT_DIR.mkdir(exist_ok=True)
    SITE_DATA_DIR.mkdir(parents=True, exist_ok=True)

    top100 = scored[:100]
    with SUBMISSION_CSV.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=["candidate_id", "rank", "score", "reasoning"])
        writer.writeheader()
        for rank, item in enumerate(top100, start=1):
            writer.writerow(
                {
                    "candidate_id": item["candidate_id"],
                    "rank": rank,
                    "score": f"{item['score']:.6f}",
                    "reasoning": make_reasoning(item),
                }
            )

    candidates = [dashboard_candidate(item, rank) for rank, item in enumerate(top100, start=1)]
    payload = {
        "job": {
            "title": "Senior AI Engineer - Founding Team",
            "company": "Redrob AI",
            "location": "Pune/Noida, India",
            "must_have": [
                "Production embeddings-based retrieval",
                "Vector or hybrid search infrastructure",
                "Ranking/search/recommendation evaluation",
                "Strong Python and production ML systems",
                "Scrappy product-engineering judgement",
            ],
            "nice_to_have": [
                "LLM fine-tuning / LoRA / PEFT",
                "Learning-to-rank models",
                "HR-tech, marketplace, or recruiting product exposure",
                "Distributed systems or inference optimization",
                "Open-source AI/ML signal",
            ],
            "anti_signals": [
                "AI keyword stuffing without shipped systems",
                "Pure research with no deployment history",
                "Services-only consulting career",
                "CV/speech-only profile without IR/NLP",
                "Stale or low-response platform behavior",
            ],
        },
        "weights": [
            {"label": "Technical retrieval/ranking depth", "weight": 34},
            {"label": "Role/title fit", "weight": 16},
            {"label": "Experience band", "weight": 10},
            {"label": "Product-company signal", "weight": 9},
            {"label": "Behavioral availability", "weight": 13},
            {"label": "Location/notice/work mode", "weight": 10},
            {"label": "Cross-check: retrieval plus production/eval", "weight": 8},
            {"label": "Anti-signal penalties", "weight": "dynamic"},
        ],
        "summary": summary_payload(top100, total_count),
        "candidates": candidates,
    }
    js = "window.RANKING_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"
    DASHBOARD_JS.write_text(js, encoding="utf-8")


def main() -> None:
    if not CANDIDATE_FILE.exists():
        raise FileNotFoundError(f"Missing candidate pool: {CANDIDATE_FILE}")

    top_heap: list[tuple[tuple[float, int], int, dict[str, Any]]] = []
    total_count = 0
    buffer_size = 500

    for total_count, item in enumerate(iter_scored_candidates(), start=1):
        candidate_number = int(item["candidate_id"].split("_")[1])
        heap_key = (item["score"], -candidate_number)
        entry = (heap_key, total_count, item)
        if len(top_heap) < buffer_size:
            heapq.heappush(top_heap, entry)
        elif heap_key > top_heap[0][0]:
            heapq.heapreplace(top_heap, entry)

    scored = [entry[2] for entry in top_heap]
    scored.sort(key=lambda item: (-round(item["score"], 6), item["candidate_id"]))
    write_outputs(scored[:100], total_count)

    print(f"Scanned {total_count:,} candidates")
    print(f"Wrote {SUBMISSION_CSV}")
    print(f"Wrote {DASHBOARD_JS}")
    print(f"Top score: {scored[0]['score']:.6f}; rank-100 cutoff: {scored[99]['score']:.6f}")


if __name__ == "__main__":
    main()
