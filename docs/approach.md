# Redrob Scout Approach

## Objective

Find the top 100 candidates for Redrob AI's Senior AI Engineer founding-team role. The JD is intentionally narrow: it values production retrieval, ranking, evaluation, and product-engineering judgment over generic AI keyword matching.

## Model design

The ranker is a deterministic rule-based model. This is deliberate: the challenge requires CPU-only, no network calls, no hosted LLMs, and reproducible output within five minutes. A transparent scorer is also easier to defend during manual review.

The score combines seven components:

| Component | Purpose |
| --- | --- |
| Technical retrieval/ranking depth | Rewards profile evidence for embeddings, vector/hybrid search, retrieval, ranking, recommendations, evaluation, production ML, and LLM tuning. |
| Role/title fit | Rewards senior AI/search/ML roles and adjacent roles with real retrieval plus production evidence. |
| Experience fit | Favors the JD's 5-9 year band while allowing strong near-band candidates. |
| Product-company signal | Rewards product/SaaS/marketplace/AI companies and down-weights services-only careers. |
| Behavioral availability | Uses Redrob signals such as recency, response rate, open-to-work status, recruiter saves, interviews, GitHub, profile views, and assessments. |
| Logistics | Scores India, Pune/Noida, tier-1 Indian cities, relocation, notice period, and work-mode fit. |
| Cross-check term | Requires retrieval strength to be backed by production or evaluation evidence. |

Dynamic penalties handle anti-signals that the JD explicitly warns about.

## Why this should perform well

The hidden score heavily weights NDCG@10 and NDCG@50. Redrob Scout therefore protects the top of the list from the challenge traps:

- AI keyword stuffing is not enough. Skill claims are weighted by proficiency, duration, endorsements, title, career text, and assessment scores.
- Pure research is penalized when production deployment evidence is weak.
- Services-only consulting careers are down-weighted.
- CV, speech, and robotics profiles need real NLP/IR evidence to survive.
- Stale or low-response candidates are pushed down even when their resume is strong.
- Timeline contradictions, impossible seniority, and suspicious skill claims become explicit penalties.

## Reasoning generation

Each CSV row includes a concise, candidate-specific explanation. The reason references facts available in the candidate profile: current title, years, company, matched skills, location, recruiter response rate, recency, notice period, and the strongest concern when present. This is designed for Stage 4 manual review: specific, honest, varied, and non-hallucinated.

## Dashboard

The static dashboard is a recruiter review console, not a marketing page. It exposes:

- Shortlist metrics and quality gates
- Recruiter-ready and risk labels
- Keyword search across skills, career history, signals, and concerns
- Filters for score, open-to-work, notice period, and India fit
- Candidate cards with reasoning and score bars
- Candidate detail pane with breakdown, behavior signals, assessments, and career evidence
- CSV download matching the challenge schema

Live deployment: `https://ai-recruitment-ayush.vercel.app/`

## Runtime and reproducibility

The ranker uses only the Python standard library. It performs one pass over `candidates.jsonl`, keeps a bounded top-candidate heap, writes the top 100 CSV, and emits the dashboard payload.

Local timing on the bundled Codex Python runtime:

- Candidate pool: 100,000 profiles
- Runtime: about 197 seconds
- Memory: bounded by a small heap and the current JSON record
- Network: none
- GPU: none

## Known tradeoffs

The scorer is transparent rather than learned. That makes it robust and reproducible, but it cannot infer every semantic nuance a supervised model might learn from labeled examples. The design compensates by using many independent signals from the JD, career text, structured profile fields, and Redrob behavior data.
