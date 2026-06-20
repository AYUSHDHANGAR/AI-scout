window.RANKING_DATA = {
  "job": {
    "title": "Senior AI Engineer - Founding Team",
    "company": "Redrob AI",
    "location": "Pune/Noida, India",
    "must_have": [
      "Production embeddings-based retrieval",
      "Vector or hybrid search infrastructure",
      "Ranking/search/recommendation evaluation",
      "Strong Python and production ML systems",
      "Scrappy product-engineering judgement"
    ],
    "nice_to_have": [
      "LLM fine-tuning / LoRA / PEFT",
      "Learning-to-rank models",
      "HR-tech, marketplace, or recruiting product exposure",
      "Distributed systems or inference optimization",
      "Open-source AI/ML signal"
    ],
    "anti_signals": [
      "AI keyword stuffing without shipped systems",
      "Pure research with no deployment history",
      "Services-only consulting career",
      "CV/speech-only profile without IR/NLP",
      "Stale or low-response platform behavior"
    ]
  },
  "weights": [
    {
      "label": "Technical retrieval/ranking depth",
      "weight": 34
    },
    {
      "label": "Role/title fit",
      "weight": 16
    },
    {
      "label": "Experience band",
      "weight": 10
    },
    {
      "label": "Product-company signal",
      "weight": 9
    },
    {
      "label": "Behavioral availability",
      "weight": 13
    },
    {
      "label": "Location/notice/work mode",
      "weight": 10
    },
    {
      "label": "Cross-check: retrieval plus production/eval",
      "weight": 8
    },
    {
      "label": "Anti-signal penalties",
      "weight": "dynamic"
    }
  ],
  "methodology": {
    "positioning": "Offline, deterministic ranker optimized for the JD's real intent: production retrieval/ranking builders who are reachable now.",
    "quality_gates": [
      "Career evidence must support retrieval, ranking, evaluation, or production ML claims.",
      "Skill claims are cross-checked with duration, endorsements, assessments, title, and career text.",
      "Behavioral availability adjusts the rank so unreachable candidates do not crowd out hireable ones.",
      "Honeypot-style contradictions trigger explicit penalties and show up as concerns."
    ],
    "runtime": "CPU-only, no network calls, one deterministic pass over candidates.jsonl."
  },
  "summary": {
    "generated_at": "2026-06-19",
    "source_file": "candidates.jsonl",
    "total_candidates_scanned": 100000,
    "shortlist_size": 100,
    "top_score": 0.9285,
    "cutoff_score": 0.6957,
    "top10_average_score": 0.8622,
    "recruiter_ready_count": 41,
    "preferred_city_count": 15,
    "india_count": 98,
    "concern_count": 28,
    "clear_risk_count": 72,
    "watch_risk_count": 27,
    "high_risk_count": 1,
    "average_breakdown": {
      "technical": 65.5,
      "role": 87.1,
      "experience": 96.5,
      "company": 94.7,
      "behavior": 73.5,
      "logistics": 77.1,
      "retrieval": 92.3,
      "ranking": 48.8,
      "evaluation": 55.6,
      "production": 46.3,
      "assessment": 69.3
    },
    "top_titles": [
      [
        "Recommendation Systems Engineer",
        18
      ],
      [
        "Applied ML Engineer",
        15
      ],
      [
        "Machine Learning Engineer",
        13
      ],
      [
        "Senior Data Scientist",
        10
      ],
      [
        "Search Engineer",
        9
      ],
      [
        "AI Engineer",
        9
      ],
      [
        "Staff Machine Learning Engineer",
        6
      ],
      [
        "Senior Machine Learning Engineer",
        5
      ]
    ],
    "top_locations": [
      [
        "Noida, Uttar Pradesh",
        10
      ],
      [
        "Coimbatore, Tamil Nadu",
        9
      ],
      [
        "Trivandrum, Kerala",
        8
      ],
      [
        "Gurgaon, Haryana",
        7
      ],
      [
        "Vizag, Andhra Pradesh",
        7
      ],
      [
        "Delhi, Delhi",
        7
      ],
      [
        "Jaipur, Rajasthan",
        6
      ],
      [
        "Indore, Madhya Pradesh",
        6
      ]
    ],
    "top_countries": [
      [
        "India",
        98
      ],
      [
        "UK",
        1
      ],
      [
        "USA",
        1
      ]
    ],
    "top_skills": [
      [
        "Embeddings",
        36
      ],
      [
        "OpenSearch",
        36
      ],
      [
        "Qdrant",
        36
      ],
      [
        "Elasticsearch",
        35
      ],
      [
        "BM25",
        33
      ],
      [
        "Haystack",
        32
      ],
      [
        "pgvector",
        31
      ],
      [
        "Vector Search",
        29
      ],
      [
        "Pinecone",
        29
      ],
      [
        "Weaviate",
        28
      ],
      [
        "Sentence Transformers",
        28
      ],
      [
        "LlamaIndex",
        27
      ]
    ]
  },
  "candidates": [
    {
      "candidate_id": "CAND_0081846",
      "rank": 1,
      "score": 0.9285,
      "score_100": 92.85,
      "readiness": 84.7,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Arjun Khanna",
      "title": "Lead AI Engineer",
      "headline": "Lead AI Engineer | LLMs, RAG, Vector Search | ex-Top Tech",
      "summary": "Senior AI engineer with 6.7 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I have strong opinions about when LLMs are the right hammer and when classical IR is - usually it's both. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Razorpay",
      "industry": "Fintech",
      "company_size": "1001-5000",
      "location": "Jaipur, Rajasthan",
      "country": "India",
      "years": 6.7,
      "current_work": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases.",
      "matched_skills": [
        "Information Retrieval",
        "LlamaIndex",
        "pgvector",
        "Elasticsearch",
        "Vector Search",
        "Embeddings",
        "Semantic Search",
        "BM25"
      ],
      "all_skills": [
        {
          "name": "Data Science",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 30
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 59
        },
        {
          "name": "LlamaIndex",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 5
        },
        {
          "name": "pgvector",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 11
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 51,
          "endorsements": 26
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 58,
          "endorsements": 54
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 60,
          "endorsements": 23
        },
        {
          "name": "PyTorch",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 37
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 79,
          "endorsements": 53
        },
        {
          "name": "scikit-learn",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 3
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 2
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 62,
          "endorsements": 36
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 16
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 4
        },
        {
          "name": "Semantic Search",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 8
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 40
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 53
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 49,
          "endorsements": 38
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-03",
        "response_rate": 0.73,
        "response_time_hours": 40.2,
        "notice_days": 30,
        "github": 33.7,
        "profile_views": 231,
        "applications": 16,
        "search_appearance": 347,
        "saved": 62,
        "endorsements": 166,
        "profile_completeness": 95.7,
        "interview_completion": 0.94,
        "offer_acceptance": -1,
        "work_mode": "remote",
        "relocate": true,
        "salary_min": 33.3,
        "salary_max": 52.8,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "LlamaIndex",
            "score": 67.7
          },
          {
            "skill": "Information Retrieval",
            "score": 64.8
          },
          {
            "skill": "Data Science",
            "score": 62.9
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 92.4,
        "role": 100.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 81.7,
        "logistics": 78.0,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 93.7,
        "evaluation": 100.0,
        "production": 100.0,
        "assessment": 65.1
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 73.0,
        "speed": 83.2,
        "open_to_work": 100.0,
        "completeness": 95.7,
        "saved": 94.3,
        "market_demand": 91.2,
        "applications": 93.1,
        "interview": 94.0,
        "github": 33.7,
        "assessment": 65.1,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation",
        "production shipping"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "Lead AI Engineer with 6.7 yrs at Razorpay; career and skills show retrieval plus ranking/recommendation depth (Information Retrieval, LlamaIndex, pgvector, Elasticsearch). Jaipur, Rajasthan; India, relocation-ready; 73% recruiter response; last active 2026-05-03; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Lead AI Engineer",
          "company": "Razorpay",
          "industry": "Fintech",
          "duration_months": 27,
          "is_current": true,
          "description": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
        },
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Paytm",
          "industry": "Fintech",
          "duration_months": 52,
          "is_current": false,
          "description": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout."
        }
      ],
      "education": [
        {
          "institution": "IIT Hyderabad",
          "degree": "B.E.",
          "field_of_study": "Data Science",
          "start_year": 2006,
          "end_year": 2009,
          "grade": "83%",
          "tier": "tier_1"
        },
        {
          "institution": "IIT Delhi",
          "degree": "Ph.D",
          "field_of_study": "Computer Engineering",
          "start_year": 2015,
          "end_year": 2019,
          "grade": "8.39 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0018499",
      "rank": 2,
      "score": 0.9191,
      "score_100": 91.91,
      "readiness": 85.2,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Aarav Trivedi",
      "title": "Senior Machine Learning Engineer",
      "headline": "Senior Machine Learning Engineer | Building AI-native search & ranking systems",
      "summary": "Senior AI engineer with 7.2 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I have strong opinions about when LLMs are the right hammer and when classical IR is - usually it's both. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Zomato",
      "industry": "Food Delivery",
      "company_size": "5001-10000",
      "location": "Noida, Uttar Pradesh",
      "country": "India",
      "years": 7.2,
      "current_work": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases.",
      "matched_skills": [
        "Weaviate",
        "Pinecone",
        "Information Retrieval",
        "Milvus",
        "RAG",
        "Embeddings",
        "BM25",
        "Recommendation Systems"
      ],
      "all_skills": [
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 46
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 88,
          "endorsements": 6
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 52
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 58
        },
        {
          "name": "Diffusion Models",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 49
        },
        {
          "name": "Pinecone",
          "proficiency": "advanced",
          "duration_months": 54,
          "endorsements": 31
        },
        {
          "name": "Information Retrieval",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 49
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 40,
          "endorsements": 18
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 34
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 1
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 65,
          "endorsements": 48
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 70,
          "endorsements": 50
        },
        {
          "name": "CNN",
          "proficiency": "intermediate",
          "duration_months": 16,
          "endorsements": 9
        },
        {
          "name": "Go",
          "proficiency": "beginner",
          "duration_months": 16,
          "endorsements": 1
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 18,
          "endorsements": 27
        },
        {
          "name": "LangChain",
          "proficiency": "advanced",
          "duration_months": 53,
          "endorsements": 15
        },
        {
          "name": "Weights & Biases",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 12
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-13",
        "response_rate": 0.61,
        "response_time_hours": 59.6,
        "notice_days": 15,
        "github": 94.8,
        "profile_views": 75,
        "applications": 18,
        "search_appearance": 1291,
        "saved": 16,
        "endorsements": 189,
        "profile_completeness": 98.0,
        "interview_completion": 0.8,
        "offer_acceptance": 0.75,
        "work_mode": "remote",
        "relocate": true,
        "salary_min": 36.8,
        "salary_max": 56.6,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "Deep Learning",
            "score": 94.0
          },
          {
            "skill": "Weaviate",
            "score": 72.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 89.1,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 83.2,
        "logistics": 92.4,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 93.7,
        "evaluation": 100.0,
        "production": 85.7,
        "assessment": 83.2
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 61.0,
        "speed": 75.2,
        "open_to_work": 100.0,
        "completeness": 98.0,
        "saved": 64.5,
        "market_demand": 80.0,
        "applications": 96.7,
        "interview": 80.0,
        "github": 94.8,
        "assessment": 83.2,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation",
        "production shipping"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Senior Machine Learning Engineer with 7.2 yrs at Zomato; career and skills show retrieval plus ranking/recommendation depth (Weaviate, Pinecone, Information Retrieval, Milvus). Noida, Uttar Pradesh; preferred office city; 61% recruiter response; last active 2026-05-13; 15-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Zomato",
          "industry": "Food Delivery",
          "duration_months": 26,
          "is_current": true,
          "description": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
        },
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 18,
          "is_current": false,
          "description": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
        },
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Flipkart",
          "industry": "E-commerce",
          "duration_months": 42,
          "is_current": false,
          "description": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
        }
      ],
      "education": [
        {
          "institution": "Massachusetts Institute of Technology",
          "degree": "B.Sc",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2013,
          "end_year": 2017,
          "grade": "6.54 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "NIT Surathkal",
          "degree": "M.S.",
          "field_of_study": "Data Science",
          "start_year": 2017,
          "end_year": 2021,
          "grade": "69%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0011687",
      "rank": 3,
      "score": 0.8814,
      "score_100": 88.14,
      "readiness": 85.4,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Shreya Tiwari",
      "title": "Senior NLP Engineer",
      "headline": "Senior NLP Engineer | Production ML at scale | 7.8+ yrs",
      "summary": "Senior AI engineer with 7.8 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I owned the offline-online evaluation harness - NDCG/MRR/recall calibrated to live A/B metrics, with an index footprint of ~600GB and incremental refresh every 15 min. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Niramai",
      "industry": "HealthTech AI",
      "company_size": "51-200",
      "location": "Indore, Madhya Pradesh",
      "country": "India",
      "years": 7.8,
      "current_work": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing -> embedding generation (using a fine-tuned BGE-large) -> Pinecone retrieval -> learning-to-rank re-scoring (XGBoost) -> behavioral-signal integration. The hardest part wasn't the ML - it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months.",
      "matched_skills": [
        "OpenSearch",
        "FAISS",
        "Embeddings",
        "Weaviate",
        "Semantic Search",
        "LlamaIndex",
        "TensorFlow",
        "Feature Engineering"
      ],
      "all_skills": [
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 9
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 31
        },
        {
          "name": "FAISS",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 41
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 10
        },
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 12
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 46
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 63,
          "endorsements": 55
        },
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 24
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 60,
          "endorsements": 29
        },
        {
          "name": "PyTorch",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 49
        },
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 53,
          "endorsements": 50
        },
        {
          "name": "Semantic Search",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 56
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 67,
          "endorsements": 39
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-10",
        "response_rate": 0.89,
        "response_time_hours": 7.5,
        "notice_days": 15,
        "github": 76.3,
        "profile_views": 309,
        "applications": 16,
        "search_appearance": 403,
        "saved": 27,
        "endorsements": 77,
        "profile_completeness": 64.9,
        "interview_completion": 0.77,
        "offer_acceptance": 0.6,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 28.7,
        "salary_max": 60.7,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "TensorFlow",
            "score": 78.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 83.0,
        "role": 87.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 86.0,
        "logistics": 78.4,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 38.0,
        "evaluation": 100.0,
        "production": 100.0,
        "assessment": 78.1
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 89.0,
        "speed": 96.9,
        "open_to_work": 100.0,
        "completeness": 64.9,
        "saved": 75.8,
        "market_demand": 86.6,
        "applications": 93.1,
        "interview": 77.0,
        "github": 76.3,
        "assessment": 78.1,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation",
        "production shipping"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Senior NLP Engineer with 7.8 yrs at Niramai; career and skills show strong retrieval/search depth (OpenSearch, FAISS, Embeddings, Weaviate). Indore, Madhya Pradesh; India, non-preferred city; 89% recruiter response; last active 2026-05-10; 15-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior NLP Engineer",
          "company": "Niramai",
          "industry": "HealthTech AI",
          "duration_months": 52,
          "is_current": true,
          "description": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing -> embedding generation (using a fine-tuned BGE-large) -> Pinecone retrieval -> learning-to-rank re-scoring (XGBoost) -> behavioral-signal integration. The hardest part wasn't the ML - it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
        },
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Krutrim",
          "industry": "AI/ML",
          "duration_months": 40,
          "is_current": false,
          "description": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
        }
      ],
      "education": [
        {
          "institution": "IIT Delhi",
          "degree": "Ph.D",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2009,
          "end_year": 2014,
          "grade": "9.10 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0002025",
      "rank": 4,
      "score": 0.8681,
      "score_100": 86.81,
      "readiness": 81.1,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Ira Dalal",
      "title": "Senior AI Engineer",
      "headline": "Senior AI Engineer | Building AI-native search & ranking systems",
      "summary": "Senior AI engineer with 5.9 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, across a corpus of 30M+ candidate profiles. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I care more about shipping a working system in 6 weeks than a theoretically perfect one in 6 months. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Apple",
      "industry": "Consumer Electronics",
      "company_size": "10001+",
      "location": "Trivandrum, Kerala",
      "country": "India",
      "years": 5.9,
      "current_work": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month.",
      "matched_skills": [
        "FAISS",
        "OpenSearch",
        "Haystack",
        "Weaviate",
        "Sentence Transformers",
        "Pinecone",
        "Recommendation Systems",
        "TensorFlow"
      ],
      "all_skills": [
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 31,
          "endorsements": 7
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 47
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 85,
          "endorsements": 36
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 13
        },
        {
          "name": "OpenSearch",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 41
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 64,
          "endorsements": 38
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 43
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 81,
          "endorsements": 3
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 81,
          "endorsements": 10
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 38,
          "endorsements": 51
        },
        {
          "name": "Pinecone",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 4
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 40
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 38,
          "endorsements": 57
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 54,
          "endorsements": 30
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 32
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 34
        },
        {
          "name": "OpenCV",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 21
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 41
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-26",
        "response_rate": 0.8,
        "response_time_hours": 20.9,
        "notice_days": 30,
        "github": 96.9,
        "profile_views": 125,
        "applications": 17,
        "search_appearance": 949,
        "saved": 22,
        "endorsements": 39,
        "profile_completeness": 81.8,
        "interview_completion": 0.81,
        "offer_acceptance": 0.46,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 32.5,
        "salary_max": 63.6,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 72.6,
        "role": 100.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 87.8,
        "logistics": 77.0,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 64.2,
        "evaluation": 20.0,
        "production": 85.7,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 80.0,
        "speed": 91.3,
        "open_to_work": 100.0,
        "completeness": 81.8,
        "saved": 71.4,
        "market_demand": 81.4,
        "applications": 94.9,
        "interview": 81.0,
        "github": 96.9,
        "assessment": 50.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "production shipping"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Senior AI Engineer with 5.9 yrs at Apple; career and skills show retrieval plus ranking/recommendation depth (FAISS, OpenSearch, Haystack, Weaviate). Trivandrum, Kerala; India, non-preferred city; 80% recruiter response; last active 2026-05-26; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior AI Engineer",
          "company": "Apple",
          "industry": "Consumer Electronics",
          "duration_months": 42,
          "is_current": true,
          "description": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month."
        },
        {
          "title": "Lead AI Engineer",
          "company": "Aganitha",
          "industry": "AI/ML",
          "duration_months": 28,
          "is_current": false,
          "description": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
        }
      ],
      "education": [
        {
          "institution": "IIIT Bangalore",
          "degree": "M.Sc",
          "field_of_study": "Data Science",
          "start_year": 2012,
          "end_year": 2016,
          "grade": "7.58 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "IIIT Bangalore",
          "degree": "M.S.",
          "field_of_study": "Data Science",
          "start_year": 2013,
          "end_year": 2017,
          "grade": "8.80 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0064326",
      "rank": 5,
      "score": 0.8557,
      "score_100": 85.57,
      "readiness": 80.3,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Nisha Pillai",
      "title": "Search Engineer",
      "headline": "Search Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 7.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Sarvam AI",
      "industry": "AI/ML",
      "company_size": "51-200",
      "location": "Gurgaon, Haryana",
      "country": "India",
      "years": 7.6,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "Milvus",
        "Semantic Search",
        "Weaviate",
        "RAG",
        "BM25",
        "scikit-learn",
        "PyTorch",
        "Deep Learning"
      ],
      "all_skills": [
        {
          "name": "scikit-learn",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 40
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 5
        },
        {
          "name": "Milvus",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 1
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 73,
          "endorsements": 55
        },
        {
          "name": "Semantic Search",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 31
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 47
        },
        {
          "name": "Object Detection",
          "proficiency": "intermediate",
          "duration_months": 32,
          "endorsements": 3
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 55
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 21
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 1
        },
        {
          "name": "Webpack",
          "proficiency": "beginner",
          "duration_months": 7,
          "endorsements": 14
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 60,
          "endorsements": 25
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 2
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 10
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-21",
        "response_rate": 0.94,
        "response_time_hours": 13.5,
        "notice_days": 45,
        "github": 61.4,
        "profile_views": 59,
        "applications": 14,
        "search_appearance": 916,
        "saved": 60,
        "endorsements": 21,
        "profile_completeness": 54.1,
        "interview_completion": 0.9,
        "offer_acceptance": -1,
        "work_mode": "onsite",
        "relocate": false,
        "salary_min": 29.2,
        "salary_max": 38.5,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "Milvus",
            "score": 75.5
          },
          {
            "skill": "PyTorch",
            "score": 71.9
          },
          {
            "skill": "scikit-learn",
            "score": 60.5
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 70.6,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 86.0,
        "logistics": 80.3,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 38.0,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 69.3
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 94.0,
        "speed": 94.4,
        "open_to_work": 100.0,
        "completeness": 54.1,
        "saved": 93.5,
        "market_demand": 82.1,
        "applications": 88.9,
        "interview": 90.0,
        "github": 61.4,
        "assessment": 69.3,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Search Engineer with 7.6 yrs at Sarvam AI; career and skills show strong retrieval/search depth (Milvus, Semantic Search, Weaviate, RAG). Gurgaon, Haryana; tier-1 India city; 94% recruiter response; last active 2026-05-21; 45-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Search Engineer",
          "company": "Sarvam AI",
          "industry": "AI/ML",
          "duration_months": 31,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Aganitha",
          "industry": "AI/ML",
          "duration_months": 24,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Freshworks",
          "industry": "SaaS",
          "duration_months": 24,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Apple",
          "industry": "Consumer Electronics",
          "duration_months": 12,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        }
      ],
      "education": [
        {
          "institution": "COEP Pune",
          "degree": "B.Tech",
          "field_of_study": "Computer Science",
          "start_year": 2016,
          "end_year": 2020,
          "grade": "70%",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0046525",
      "rank": 6,
      "score": 0.8442,
      "score_100": 84.42,
      "readiness": 82.0,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Tanvi Mukherjee",
      "title": "Senior Machine Learning Engineer",
      "headline": "Senior Machine Learning Engineer | Building AI-native search & ranking systems",
      "summary": "Senior AI engineer with 6.1 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I care more about shipping a working system in 6 weeks than a theoretically perfect one in 6 months. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Genpact AI",
      "industry": "AI Services",
      "company_size": "10001+",
      "location": "Pune, Maharashtra",
      "country": "India",
      "years": 6.1,
      "current_work": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout.",
      "matched_skills": [
        "Elasticsearch",
        "LlamaIndex",
        "Information Retrieval",
        "Sentence Transformers",
        "pgvector",
        "Qdrant",
        "Machine Learning",
        "TensorFlow"
      ],
      "all_skills": [
        {
          "name": "Elasticsearch",
          "proficiency": "advanced",
          "duration_months": 31,
          "endorsements": 24
        },
        {
          "name": "Redux",
          "proficiency": "beginner",
          "duration_months": 11,
          "endorsements": 6
        },
        {
          "name": "LangChain",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 12
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 70,
          "endorsements": 13
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 10
        },
        {
          "name": "Information Retrieval",
          "proficiency": "advanced",
          "duration_months": 59,
          "endorsements": 45
        },
        {
          "name": "TensorFlow",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 15
        },
        {
          "name": "LLMs",
          "proficiency": "advanced",
          "duration_months": 56,
          "endorsements": 4
        },
        {
          "name": "NLP",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 9
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 15
        },
        {
          "name": "YOLO",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 56
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 56,
          "endorsements": 19
        },
        {
          "name": "pgvector",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 46
        },
        {
          "name": "Image Classification",
          "proficiency": "intermediate",
          "duration_months": 13,
          "endorsements": 5
        },
        {
          "name": "Weights & Biases",
          "proficiency": "intermediate",
          "duration_months": 23,
          "endorsements": 6
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 46,
          "endorsements": 38
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 2
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-23",
        "response_rate": 0.88,
        "response_time_hours": 12.0,
        "notice_days": 60,
        "github": 36.7,
        "profile_views": 108,
        "applications": 7,
        "search_appearance": 663,
        "saved": 38,
        "endorsements": 239,
        "profile_completeness": 62.8,
        "interview_completion": 0.81,
        "offer_acceptance": 0.48,
        "work_mode": "onsite",
        "relocate": true,
        "salary_min": 28.4,
        "salary_max": 51.9,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "LangChain",
            "score": 96.5
          },
          {
            "skill": "LlamaIndex",
            "score": 96.1
          },
          {
            "skill": "Machine Learning",
            "score": 86.7
          },
          {
            "skill": "Elasticsearch",
            "score": 77.1
          },
          {
            "skill": "Information Retrieval",
            "score": 66.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 74.5,
        "role": 91.0,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 84.5,
        "logistics": 89.0,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 19.0,
        "evaluation": 100.0,
        "production": 85.7,
        "assessment": 81.6
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 88.0,
        "speed": 95.0,
        "open_to_work": 100.0,
        "completeness": 62.8,
        "saved": 83.4,
        "market_demand": 87.1,
        "applications": 68.3,
        "interview": 81.0,
        "github": 36.7,
        "assessment": 81.6,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation",
        "production shipping"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Senior Machine Learning Engineer with 6.1 yrs at Genpact AI; career and skills show strong retrieval/search depth (Elasticsearch, LlamaIndex, Information Retrieval, Sentence Transformers). Pune, Maharashtra; preferred office city; 88% recruiter response; last active 2026-05-23; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Genpact AI",
          "industry": "AI Services",
          "duration_months": 48,
          "is_current": true,
          "description": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
        },
        {
          "title": "Senior Machine Learning Engineer",
          "company": "LinkedIn",
          "industry": "Internet",
          "duration_months": 25,
          "is_current": false,
          "description": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
        }
      ],
      "education": [
        {
          "institution": "Manipal Institute of Technology",
          "degree": "M.S.",
          "field_of_study": "Computer Engineering",
          "start_year": 2009,
          "end_year": 2013,
          "grade": "9.36 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "IIT Hyderabad",
          "degree": "M.Sc",
          "field_of_study": "Information Technology",
          "start_year": 2017,
          "end_year": 2020,
          "grade": "6.85 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0071974",
      "rank": 7,
      "score": 0.8379,
      "score_100": 83.79,
      "readiness": 75.6,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Sai Verma",
      "title": "Senior AI Engineer",
      "headline": "Senior AI Engineer | Production ML at scale | 7.8+ yrs",
      "summary": "Senior AI engineer with 7.8 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I led the migration from keyword-based ranking to a learning-to-rank model with embedded behavioral signals, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Netflix",
      "industry": "Media",
      "company_size": "10001+",
      "location": "Vizag, Andhra Pradesh",
      "country": "India",
      "years": 7.8,
      "current_work": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing -> embedding generation (using a fine-tuned BGE-large) -> Pinecone retrieval -> learning-to-rank re-scoring (XGBoost) -> behavioral-signal integration. The hardest part wasn't the ML - it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months.",
      "matched_skills": [
        "Weaviate",
        "BM25",
        "Pinecone",
        "Information Retrieval",
        "Qdrant",
        "Embeddings",
        "RAG",
        "Sentence Transformers"
      ],
      "all_skills": [
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 42
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 5
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 5
        },
        {
          "name": "PEFT",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 55
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 58,
          "endorsements": 40
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 5
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 45
        },
        {
          "name": "Information Retrieval",
          "proficiency": "advanced",
          "duration_months": 29,
          "endorsements": 33
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 53
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 50
        },
        {
          "name": "CNN",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 22
        },
        {
          "name": "RAG",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 2
        },
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 47,
          "endorsements": 45
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 37
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 26
        },
        {
          "name": "Content Writing",
          "proficiency": "intermediate",
          "duration_months": 33,
          "endorsements": 5
        },
        {
          "name": "Speech Recognition",
          "proficiency": "advanced",
          "duration_months": 18,
          "endorsements": 56
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 96,
          "endorsements": 44
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-16",
        "response_rate": 0.76,
        "response_time_hours": 38.2,
        "notice_days": 45,
        "github": 82.8,
        "profile_views": 335,
        "applications": 14,
        "search_appearance": 132,
        "saved": 50,
        "endorsements": 167,
        "profile_completeness": 87.1,
        "interview_completion": 0.85,
        "offer_acceptance": -1,
        "work_mode": "onsite",
        "relocate": false,
        "salary_min": 46.7,
        "salary_max": 58.1,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "LoRA",
            "score": 86.7
          },
          {
            "skill": "PEFT",
            "score": 85.6
          },
          {
            "skill": "Learning to Rank",
            "score": 77.2
          },
          {
            "skill": "Weaviate",
            "score": 69.2
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 75.9,
        "role": 100.0,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 81.6,
        "logistics": 67.4,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 63.2,
        "evaluation": 40.0,
        "production": 100.0,
        "assessment": 79.7
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 76.0,
        "speed": 84.1,
        "open_to_work": 100.0,
        "completeness": 87.1,
        "saved": 89.5,
        "market_demand": 88.2,
        "applications": 88.9,
        "interview": 85.0,
        "github": 82.8,
        "assessment": 79.7,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "production shipping"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Senior AI Engineer with 7.8 yrs at Netflix; career and skills show retrieval plus ranking/recommendation depth (Weaviate, BM25, Pinecone, Information Retrieval). Vizag, Andhra Pradesh; India, non-preferred city; 76% recruiter response; last active 2026-04-16; 45-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior AI Engineer",
          "company": "Netflix",
          "industry": "Media",
          "duration_months": 50,
          "is_current": true,
          "description": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing -> embedding generation (using a fine-tuned BGE-large) -> Pinecone retrieval -> learning-to-rank re-scoring (XGBoost) -> behavioral-signal integration. The hardest part wasn't the ML - it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
        },
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Meta",
          "industry": "Internet",
          "duration_months": 28,
          "is_current": false,
          "description": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
        },
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Mad Street Den",
          "industry": "AI/ML",
          "duration_months": 14,
          "is_current": false,
          "description": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month."
        }
      ],
      "education": [
        {
          "institution": "NIT Warangal",
          "degree": "M.Sc",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2007,
          "end_year": 2011,
          "grade": "7.11 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0077337",
      "rank": 8,
      "score": 0.8319,
      "score_100": 83.19,
      "readiness": 80.0,
      "risk_level": "watch",
      "recruiter_ready": true,
      "name": "Aarav Agarwal",
      "title": "Staff Machine Learning Engineer",
      "headline": "Staff Machine Learning Engineer | Building AI-native search & ranking systems",
      "summary": "Senior AI engineer with 7.0 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I care more about shipping a working system in 6 weeks than a theoretically perfect one in 6 months. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Paytm",
      "industry": "Fintech",
      "company_size": "10001+",
      "location": "Kochi, Kerala",
      "country": "India",
      "years": 7.0,
      "current_work": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month.",
      "matched_skills": [
        "Semantic Search",
        "pgvector",
        "Pinecone",
        "BM25",
        "Information Retrieval",
        "RAG",
        "Qdrant",
        "Sentence Transformers"
      ],
      "all_skills": [
        {
          "name": "GANs",
          "proficiency": "intermediate",
          "duration_months": 27,
          "endorsements": 2
        },
        {
          "name": "Semantic Search",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 23
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 34
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 19
        },
        {
          "name": "Pinecone",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 3
        },
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 9
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 12
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 46
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 63,
          "endorsements": 53
        },
        {
          "name": "OpenCV",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 9
        },
        {
          "name": "Data Science",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 5
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 3
        },
        {
          "name": "Excel",
          "proficiency": "intermediate",
          "duration_months": 29,
          "endorsements": 3
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 77,
          "endorsements": 43
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 21
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 35
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 39
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 54
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-26",
        "response_rate": 0.95,
        "response_time_hours": 26.0,
        "notice_days": 60,
        "github": 68.0,
        "profile_views": 106,
        "applications": 9,
        "search_appearance": 240,
        "saved": 32,
        "endorsements": 27,
        "profile_completeness": 64.6,
        "interview_completion": 0.73,
        "offer_acceptance": 0.77,
        "work_mode": "remote",
        "relocate": true,
        "salary_min": 46.0,
        "salary_max": 51.3,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Semantic Search",
            "score": 63.2
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 76.1,
        "role": 98.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 85.7,
        "logistics": 69.9,
        "penalty": 3.5,
        "retrieval": 100.0,
        "ranking": 64.0,
        "evaluation": 40.0,
        "production": 100.0,
        "assessment": 63.2
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 95.0,
        "speed": 89.2,
        "open_to_work": 100.0,
        "completeness": 64.6,
        "saved": 79.6,
        "market_demand": 77.4,
        "applications": 75.6,
        "interview": 73.0,
        "github": 68.0,
        "assessment": 63.2,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "production shipping"
      ],
      "concerns": [
        "frequent short senior-role moves may hurt founding-team stability"
      ],
      "location_label": "India, relocation-ready",
      "reasoning": "Staff Machine Learning Engineer with 7.0 yrs at Paytm; career and skills show retrieval plus ranking/recommendation depth (Semantic Search, pgvector, Pinecone, BM25). Kochi, Kerala; India, relocation-ready; 95% recruiter response; last active 2026-05-26; 60-day notice; concern: frequent short senior-role moves may hurt founding-team stability.",
      "career": [
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Paytm",
          "industry": "Fintech",
          "duration_months": 19,
          "is_current": true,
          "description": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month."
        },
        {
          "title": "Senior NLP Engineer",
          "company": "Razorpay",
          "industry": "Fintech",
          "duration_months": 14,
          "is_current": false,
          "description": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout."
        },
        {
          "title": "Senior NLP Engineer",
          "company": "Glance",
          "industry": "AI/ML",
          "duration_months": 44,
          "is_current": false,
          "description": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
        },
        {
          "title": "Senior AI Engineer",
          "company": "Aganitha",
          "industry": "AI/ML",
          "duration_months": 6,
          "is_current": false,
          "description": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
        }
      ],
      "education": [
        {
          "institution": "Georgia Tech",
          "degree": "B.Tech",
          "field_of_study": "Computer Engineering",
          "start_year": 2014,
          "end_year": 2018,
          "grade": "67%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0030953",
      "rank": 9,
      "score": 0.8305,
      "score_100": 83.05,
      "readiness": 70.9,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Dhruv Hegde",
      "title": "Search Engineer",
      "headline": "Search Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 7.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Nykaa",
      "industry": "E-commerce",
      "company_size": "1001-5000",
      "location": "Chennai, Tamil Nadu",
      "country": "India",
      "years": 7.8,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "Qdrant",
        "pgvector",
        "Weaviate",
        "RAG",
        "Learning to Rank",
        "MLOps",
        "Python",
        "Hugging Face Transformers"
      ],
      "all_skills": [
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 27
        },
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 16
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 51,
          "endorsements": 48
        },
        {
          "name": "Databricks",
          "proficiency": "intermediate",
          "duration_months": 26,
          "endorsements": 2
        },
        {
          "name": "Time Series",
          "proficiency": "intermediate",
          "duration_months": 31,
          "endorsements": 14
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 36
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 31
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 17,
          "endorsements": 12
        },
        {
          "name": "Python",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 37
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 12
        },
        {
          "name": "pgvector",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 37
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 3
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 44
        },
        {
          "name": "LangChain",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 39
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-11",
        "response_rate": 0.63,
        "response_time_hours": 62.1,
        "notice_days": 45,
        "github": 21.0,
        "profile_views": 153,
        "applications": 5,
        "search_appearance": 472,
        "saved": 46,
        "endorsements": 89,
        "profile_completeness": 85.2,
        "interview_completion": 0.62,
        "offer_acceptance": 0.83,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 43.1,
        "salary_max": 62.5,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "Learning to Rank",
            "score": 85.3
          },
          {
            "skill": "MLOps",
            "score": 66.4
          },
          {
            "skill": "TTS",
            "score": 65.5
          },
          {
            "skill": "ASR",
            "score": 53.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 73.6,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 60.8,
        "logistics": 83.2,
        "penalty": 0.0,
        "retrieval": 93.0,
        "ranking": 65.9,
        "evaluation": 100.0,
        "production": 42.9,
        "assessment": 75.8
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 63.0,
        "speed": 74.1,
        "open_to_work": 35.0,
        "completeness": 85.2,
        "saved": 87.6,
        "market_demand": 86.8,
        "applications": 58.9,
        "interview": 62.0,
        "github": 21.0,
        "assessment": 75.8,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Search Engineer with 7.8 yrs at Nykaa; career and skills show retrieval plus ranking/recommendation depth (Qdrant, pgvector, Weaviate, RAG). Chennai, Tamil Nadu; tier-1 India city; 63% recruiter response; last active 2026-04-11; 45-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Search Engineer",
          "company": "Nykaa",
          "industry": "E-commerce",
          "duration_months": 30,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "NLP Engineer",
          "company": "Niramai",
          "industry": "HealthTech AI",
          "duration_months": 16,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Vedantu",
          "industry": "EdTech",
          "duration_months": 24,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Observe.AI",
          "industry": "AI/ML",
          "duration_months": 15,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "SRM University",
          "degree": "M.S.",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2002,
          "end_year": 2006,
          "grade": "82%",
          "tier": "tier_2"
        },
        {
          "institution": "Georgia Tech",
          "degree": "M.Sc",
          "field_of_study": "Data Science",
          "start_year": 2008,
          "end_year": 2011,
          "grade": "9.13 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0017960",
      "rank": 10,
      "score": 0.8247,
      "score_100": 82.47,
      "readiness": 74.2,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Pari Shah",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 7.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Nykaa",
      "industry": "E-commerce",
      "company_size": "1001-5000",
      "location": "Bangalore, Karnataka",
      "country": "India",
      "years": 7.7,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "LlamaIndex",
        "Haystack",
        "Qdrant",
        "Information Retrieval",
        "Machine Learning",
        "Data Science",
        "Python",
        "BentoML"
      ],
      "all_skills": [
        {
          "name": "LlamaIndex",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 2
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 63,
          "endorsements": 28
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 15
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 12,
          "endorsements": 1
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 6
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 10
        },
        {
          "name": "YOLO",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 3
        },
        {
          "name": "Data Science",
          "proficiency": "intermediate",
          "duration_months": 17,
          "endorsements": 14
        },
        {
          "name": "Speech Recognition",
          "proficiency": "intermediate",
          "duration_months": 9,
          "endorsements": 13
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 45,
          "endorsements": 7
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 1
        },
        {
          "name": "Python",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 51
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 67,
          "endorsements": 12
        },
        {
          "name": "BentoML",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 49
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-27",
        "response_rate": 0.72,
        "response_time_hours": 35.2,
        "notice_days": 60,
        "github": 92.4,
        "profile_views": 13,
        "applications": 6,
        "search_appearance": 899,
        "saved": 43,
        "endorsements": 150,
        "profile_completeness": 71.1,
        "interview_completion": 0.64,
        "offer_acceptance": 0.64,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 35.2,
        "salary_max": 55.4,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 66.2,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 77.4,
        "logistics": 83.2,
        "penalty": 0.0,
        "retrieval": 90.1,
        "ranking": 31.7,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 72.0,
        "speed": 85.3,
        "open_to_work": 100.0,
        "completeness": 71.1,
        "saved": 86.1,
        "market_demand": 76.0,
        "applications": 63.9,
        "interview": 64.0,
        "github": 92.4,
        "assessment": 50.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Recommendation Systems Engineer with 7.7 yrs at Nykaa; career and skills show strong retrieval/search depth (LlamaIndex, Haystack, Qdrant, Information Retrieval). Bangalore, Karnataka; tier-1 India city; 72% recruiter response; last active 2026-04-27; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Nykaa",
          "industry": "E-commerce",
          "duration_months": 54,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "NLP Engineer",
          "company": "Wysa",
          "industry": "HealthTech AI",
          "duration_months": 21,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Search Engineer",
          "company": "Sarvam AI",
          "industry": "AI/ML",
          "duration_months": 16,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "IIT Delhi",
          "degree": "B.Sc",
          "field_of_study": "Information Technology",
          "start_year": 2015,
          "end_year": 2018,
          "grade": "9.17 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0006567",
      "rank": 11,
      "score": 0.8243,
      "score_100": 82.43,
      "readiness": 76.1,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Aditya Subramanian",
      "title": "Senior AI Engineer",
      "headline": "Senior Engineer | Information Retrieval at scale",
      "summary": "Senior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer - the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes - over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want - so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.",
      "company": "Meta",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Noida, Uttar Pradesh",
      "country": "India",
      "years": 7.9,
      "current_work": "Built systems that understand what users are looking for and connect them to the most relevant matches across a large dataset. Worked at the intersection of infrastructure, algorithms, and product judgment - none of the three were optional. Recent project was a complete overhaul of the matching layer; took it from a hand-tuned heuristic system to one with explicit modeling and evaluation. The team grew from just me to 6 engineers over the course of that work.",
      "matched_skills": [
        "Search Backend",
        "Vector Representations",
        "BM25",
        "Text Encoders",
        "Haystack",
        "Ranking Systems",
        "Search & Discovery",
        "Content Matching"
      ],
      "all_skills": [
        {
          "name": "Speech Recognition",
          "proficiency": "intermediate",
          "duration_months": 23,
          "endorsements": 14
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 64,
          "endorsements": 46
        },
        {
          "name": "Search Backend",
          "proficiency": "advanced",
          "duration_months": 31,
          "endorsements": 47
        },
        {
          "name": "Model Adaptation",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 44
        },
        {
          "name": "Vector Representations",
          "proficiency": "advanced",
          "duration_months": 46,
          "endorsements": 9
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 80,
          "endorsements": 5
        },
        {
          "name": "Workflow Orchestration",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 39
        },
        {
          "name": "GANs",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 4
        },
        {
          "name": "NLP",
          "proficiency": "advanced",
          "duration_months": 22,
          "endorsements": 54
        },
        {
          "name": "Kubernetes",
          "proficiency": "beginner",
          "duration_months": 14,
          "endorsements": 12
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 14
        },
        {
          "name": "Ranking Systems",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 52
        },
        {
          "name": "Text Encoders",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 8
        },
        {
          "name": "Data Science",
          "proficiency": "intermediate",
          "duration_months": 10,
          "endorsements": 8
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 37
        },
        {
          "name": "Search & Discovery",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 17
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 12
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 37
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-03",
        "response_rate": 0.79,
        "response_time_hours": 25.5,
        "notice_days": 60,
        "github": 35.2,
        "profile_views": 167,
        "applications": 0,
        "search_appearance": 1049,
        "saved": 76,
        "endorsements": 194,
        "profile_completeness": 58.6,
        "interview_completion": 0.93,
        "offer_acceptance": 0.79,
        "work_mode": "onsite",
        "relocate": true,
        "salary_min": 44.2,
        "salary_max": 53.9,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "scikit-learn",
            "score": 89.9
          },
          {
            "skill": "Fine-tuning LLMs",
            "score": 88.7
          },
          {
            "skill": "Embeddings",
            "score": 64.4
          },
          {
            "skill": "Weaviate",
            "score": 63.0
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 65.6,
        "role": 100.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 77.0,
        "logistics": 89.0,
        "penalty": 0.0,
        "retrieval": 77.5,
        "ranking": 81.0,
        "evaluation": 40.0,
        "production": 42.9,
        "assessment": 76.5
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 79.0,
        "speed": 89.4,
        "open_to_work": 100.0,
        "completeness": 58.6,
        "saved": 98.8,
        "market_demand": 94.2,
        "applications": 0.0,
        "interview": 93.0,
        "github": 35.2,
        "assessment": 76.5,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Senior AI Engineer with 7.9 yrs at Meta; career and skills show retrieval plus ranking/recommendation depth (Search Backend, Vector Representations, BM25, Text Encoders). Noida, Uttar Pradesh; preferred office city; 79% recruiter response; last active 2026-05-03; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior AI Engineer",
          "company": "Meta",
          "industry": "Internet",
          "duration_months": 26,
          "is_current": true,
          "description": "Built systems that understand what users are looking for and connect them to the most relevant matches across a large dataset. Worked at the intersection of infrastructure, algorithms, and product judgment - none of the three were optional. Recent project was a complete overhaul of the matching layer; took it from a hand-tuned heuristic system to one with explicit modeling and evaluation. The team grew from just me to 6 engineers over the course of that work."
        },
        {
          "title": "Senior Applied Scientist",
          "company": "Razorpay",
          "industry": "Fintech",
          "duration_months": 49,
          "is_current": false,
          "description": "Owned the search and discovery experience end-to-end at a consumer product, from how content is represented internally through to how the most relevant results appear for each user's intent. The work spanned data infrastructure, ranking algorithms, evaluation methodology, and direct collaboration with product/PM on what 'relevance' actually means for our users. Spent a fair amount of time on the eval side - building offline metrics that actually correlated with online engagement, which turned out to be the hardest part."
        },
        {
          "title": "Senior ML Engineer - Search & Ranking",
          "company": "Glance",
          "industry": "AI/ML",
          "duration_months": 19,
          "is_current": false,
          "description": "Shipped the personalization infrastructure: the system that learns from user behavior and improves relevance over time. Designed the offline experimentation environment, the online A/B testing framework, and the feature-engineering pipeline that connected them. Most of my time went into the boring-but-critical operational layer - feature monitoring, drift detection, retraining cadence - rather than the modeling itself. Worked closely with the product and growth teams."
        }
      ],
      "education": [
        {
          "institution": "IIT Bombay",
          "degree": "B.Sc",
          "field_of_study": "Machine Learning",
          "start_year": 2016,
          "end_year": 2020,
          "grade": "7.89 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0080766",
      "rank": 12,
      "score": 0.8188,
      "score_100": 81.88,
      "readiness": 64.1,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Kiara Mittal",
      "title": "Staff Machine Learning Engineer",
      "headline": "Senior Engineer | Search & Discovery Infrastructure",
      "summary": "Senior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer - the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes - over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want - so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.",
      "company": "Salesforce",
      "industry": "Software",
      "company_size": "10001+",
      "location": "Coimbatore, Tamil Nadu",
      "country": "India",
      "years": 8.8,
      "current_work": "Shipped the personalization infrastructure: the system that learns from user behavior and improves relevance over time. Designed the offline experimentation environment, the online A/B testing framework, and the feature-engineering pipeline that connected them. Most of my time went into the boring-but-critical operational layer - feature monitoring, drift detection, retraining cadence - rather than the modeling itself. Worked closely with the product and growth teams.",
      "matched_skills": [
        "Search Backend",
        "Search Infrastructure",
        "Information Retrieval Systems",
        "Elasticsearch",
        "OpenSearch",
        "Milvus",
        "Search & Discovery",
        "MLOps"
      ],
      "all_skills": [
        {
          "name": "Search Backend",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 23
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 5
        },
        {
          "name": "Vue.js",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 7
        },
        {
          "name": "Tally",
          "proficiency": "intermediate",
          "duration_months": 18,
          "endorsements": 12
        },
        {
          "name": "Search & Discovery",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 25
        },
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 14
        },
        {
          "name": "Search Infrastructure",
          "proficiency": "expert",
          "duration_months": 49,
          "endorsements": 52
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 44
        },
        {
          "name": "Open-source ML libraries",
          "proficiency": "expert",
          "duration_months": 59,
          "endorsements": 6
        },
        {
          "name": "Information Retrieval Systems",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 0
        },
        {
          "name": "Elasticsearch",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 38
        },
        {
          "name": "Computer Vision",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 45
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 55
        },
        {
          "name": "Natural Language Processing",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 19
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 39
        },
        {
          "name": "YOLO",
          "proficiency": "intermediate",
          "duration_months": 17,
          "endorsements": 3
        },
        {
          "name": "OpenSearch",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 59
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 42
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-09",
        "response_rate": 0.66,
        "response_time_hours": 37.9,
        "notice_days": 0,
        "github": 32.9,
        "profile_views": 374,
        "applications": 17,
        "search_appearance": 1105,
        "saved": 27,
        "endorsements": 182,
        "profile_completeness": 92.0,
        "interview_completion": 0.88,
        "offer_acceptance": 0.63,
        "work_mode": "flexible",
        "relocate": true,
        "salary_min": 41.4,
        "salary_max": 52.7,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Weaviate",
            "score": 84.5
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 83.5,
        "role": 98.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 69.5,
        "logistics": 52.9,
        "penalty": 3.5,
        "retrieval": 100.0,
        "ranking": 38.2,
        "evaluation": 80.0,
        "production": 100.0,
        "assessment": 84.5
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 66.0,
        "speed": 84.2,
        "open_to_work": 35.0,
        "completeness": 92.0,
        "saved": 75.8,
        "market_demand": 92.2,
        "applications": 94.9,
        "interview": 88.0,
        "github": 32.9,
        "assessment": 84.5,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation",
        "production shipping"
      ],
      "concerns": [
        "frequent short senior-role moves may hurt founding-team stability"
      ],
      "location_label": "India, relocation-ready",
      "reasoning": "Staff Machine Learning Engineer with 8.8 yrs at Salesforce; career and skills show strong retrieval/search depth (Search Backend, Search Infrastructure, Information Retrieval Systems, Elasticsearch). Coimbatore, Tamil Nadu; India, relocation-ready; 66% recruiter response; last active 2026-04-09; 0-day notice; concern: frequent short senior-role moves may hurt founding-team stability.",
      "career": [
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Salesforce",
          "industry": "Software",
          "duration_months": 38,
          "is_current": true,
          "description": "Shipped the personalization infrastructure: the system that learns from user behavior and improves relevance over time. Designed the offline experimentation environment, the online A/B testing framework, and the feature-engineering pipeline that connected them. Most of my time went into the boring-but-critical operational layer - feature monitoring, drift detection, retraining cadence - rather than the modeling itself. Worked closely with the product and growth teams."
        },
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Aganitha",
          "industry": "AI/ML",
          "duration_months": 12,
          "is_current": false,
          "description": "Owned the search and discovery experience end-to-end at a consumer product, from how content is represented internally through to how the most relevant results appear for each user's intent. The work spanned data infrastructure, ranking algorithms, evaluation methodology, and direct collaboration with product/PM on what 'relevance' actually means for our users. Spent a fair amount of time on the eval side - building offline metrics that actually correlated with online engagement, which turned out to be the hardest part."
        },
        {
          "title": "Lead AI Engineer",
          "company": "Swiggy",
          "industry": "Food Delivery",
          "duration_months": 43,
          "is_current": false,
          "description": "Designed the ranking layer for the company's flagship product: how do we surface the right thing at the right time, across millions of items, for millions of users. The hard problem was rarely the modeling - it was the data pipeline that fed the models, the evaluation framework that told us whether they worked, and the operational discipline of keeping all of it healthy in production. I owned all three across roughly 14 months."
        },
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Haptik",
          "industry": "Conversational AI",
          "duration_months": 12,
          "is_current": false,
          "description": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout."
        }
      ],
      "education": [
        {
          "institution": "RV College of Engineering",
          "degree": "M.Sc",
          "field_of_study": "Computer Engineering",
          "start_year": 2010,
          "end_year": 2015,
          "grade": "6.99 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "NIT Surathkal",
          "degree": "M.E.",
          "field_of_study": "Computer Science",
          "start_year": 2018,
          "end_year": 2021,
          "grade": "71%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0053695",
      "rank": 13,
      "score": 0.8182,
      "score_100": 81.82,
      "readiness": 72.3,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Sanjay Sharma",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 5.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Meesho",
      "industry": "E-commerce",
      "company_size": "1001-5000",
      "location": "Bhubaneswar, Odisha",
      "country": "India",
      "years": 5.8,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "Pinecone",
        "pgvector",
        "Embeddings",
        "Sentence Transformers",
        "Recommendation Systems",
        "MLOps",
        "Apache Flink",
        "TensorFlow"
      ],
      "all_skills": [
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 54,
          "endorsements": 53
        },
        {
          "name": "Apache Flink",
          "proficiency": "beginner",
          "duration_months": 11,
          "endorsements": 0
        },
        {
          "name": "GCP",
          "proficiency": "intermediate",
          "duration_months": 18,
          "endorsements": 4
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 33
        },
        {
          "name": "CNN",
          "proficiency": "intermediate",
          "duration_months": 13,
          "endorsements": 10
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 25,
          "endorsements": 17
        },
        {
          "name": "ASR",
          "proficiency": "intermediate",
          "duration_months": 24,
          "endorsements": 6
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 54
        },
        {
          "name": "Object Detection",
          "proficiency": "intermediate",
          "duration_months": 8,
          "endorsements": 8
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 50
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 49,
          "endorsements": 29
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 19
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 77,
          "endorsements": 45
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 42
        },
        {
          "name": "SEO",
          "proficiency": "beginner",
          "duration_months": 9,
          "endorsements": 10
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-02",
        "response_rate": 0.6,
        "response_time_hours": 71.8,
        "notice_days": 15,
        "github": 67.6,
        "profile_views": 274,
        "applications": 15,
        "search_appearance": 742,
        "saved": 34,
        "endorsements": 96,
        "profile_completeness": 51.3,
        "interview_completion": 0.55,
        "offer_acceptance": -1,
        "work_mode": "onsite",
        "relocate": false,
        "salary_min": 41.0,
        "salary_max": 41.7,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 68.6,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 70.4,
        "logistics": 75.5,
        "penalty": 0.0,
        "retrieval": 92.9,
        "ranking": 70.8,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 60.0,
        "speed": 70.1,
        "open_to_work": 100.0,
        "completeness": 51.3,
        "saved": 80.9,
        "market_demand": 90.2,
        "applications": 91.1,
        "interview": 55.0,
        "github": 67.6,
        "assessment": 50.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Recommendation Systems Engineer with 5.8 yrs at Meesho; career and skills show retrieval plus ranking/recommendation depth (Pinecone, pgvector, Embeddings, Sentence Transformers). Bhubaneswar, Odisha; India, non-preferred city; 60% recruiter response; last active 2026-04-02; 15-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Meesho",
          "industry": "E-commerce",
          "duration_months": 20,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Genpact AI",
          "industry": "AI Services",
          "duration_months": 34,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Niramai",
          "industry": "HealthTech AI",
          "duration_months": 14,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "RV College of Engineering",
          "degree": "M.E.",
          "field_of_study": "Machine Learning",
          "start_year": 2016,
          "end_year": 2019,
          "grade": "6.97 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "IIT Delhi",
          "degree": "B.E.",
          "field_of_study": "Computer Science",
          "start_year": 2011,
          "end_year": 2016,
          "grade": "6.68 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0000031",
      "rank": 14,
      "score": 0.8148,
      "score_100": 81.48,
      "readiness": 76.1,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Ela Singh",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 6.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Swiggy",
      "industry": "Food Delivery",
      "company_size": "5001-10000",
      "location": "Hyderabad, Telangana",
      "country": "India",
      "years": 6.0,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "FAISS",
        "Pinecone",
        "Embeddings",
        "Information Retrieval",
        "Sentence Transformers",
        "MLflow",
        "Machine Learning",
        "BentoML"
      ],
      "all_skills": [
        {
          "name": "Go",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 7
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 59
        },
        {
          "name": "FAISS",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 19
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 88,
          "endorsements": 34
        },
        {
          "name": "Angular",
          "proficiency": "beginner",
          "duration_months": 18,
          "endorsements": 4
        },
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 56
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 43
        },
        {
          "name": "Speech Recognition",
          "proficiency": "intermediate",
          "duration_months": 24,
          "endorsements": 14
        },
        {
          "name": "BentoML",
          "proficiency": "intermediate",
          "duration_months": 14,
          "endorsements": 6
        },
        {
          "name": "MLOps",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 15
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 60,
          "endorsements": 48
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 2
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 18
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 38
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 16
        },
        {
          "name": "scikit-learn",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 41
        },
        {
          "name": "Marketing",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 11
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-24",
        "response_rate": 0.91,
        "response_time_hours": 76.1,
        "notice_days": 60,
        "github": 32.6,
        "profile_views": 194,
        "applications": 2,
        "search_appearance": 778,
        "saved": 13,
        "endorsements": 177,
        "profile_completeness": 83.4,
        "interview_completion": 0.6,
        "offer_acceptance": 0.38,
        "work_mode": "flexible",
        "relocate": true,
        "salary_min": 27.3,
        "salary_max": 60.2,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "MLflow",
            "score": 75.1
          },
          {
            "skill": "FAISS",
            "score": 68.4
          },
          {
            "skill": "Image Classification",
            "score": 57.1
          },
          {
            "skill": "Pinecone",
            "score": 53.6
          }
        ],
        "verified_email": false,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 64.1,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 77.3,
        "logistics": 81.8,
        "penalty": 0.0,
        "retrieval": 88.8,
        "ranking": 38.0,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 65.7
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 91.0,
        "speed": 68.3,
        "open_to_work": 100.0,
        "completeness": 83.4,
        "saved": 60.1,
        "market_demand": 83.9,
        "applications": 36.1,
        "interview": 60.0,
        "github": 32.6,
        "assessment": 65.7,
        "verified": 33.3
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Recommendation Systems Engineer with 6.0 yrs at Swiggy; career and skills show strong retrieval/search depth (FAISS, Pinecone, Embeddings, Information Retrieval). Hyderabad, Telangana; tier-1 India city; 91% recruiter response; last active 2026-05-24; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Swiggy",
          "industry": "Food Delivery",
          "duration_months": 14,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Search Engineer",
          "company": "Mad Street Den",
          "industry": "AI/ML",
          "duration_months": 16,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "NLP Engineer",
          "company": "Uber",
          "industry": "Transportation",
          "duration_months": 27,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Zomato",
          "industry": "Food Delivery",
          "duration_months": 13,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        }
      ],
      "education": [
        {
          "institution": "SRM University",
          "degree": "M.Tech",
          "field_of_study": "Computer Engineering",
          "start_year": 2002,
          "end_year": 2006,
          "grade": "9.16 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0094759",
      "rank": 15,
      "score": 0.8106,
      "score_100": 81.06,
      "readiness": 66.5,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Aditya Pillai",
      "title": "Lead AI Engineer",
      "headline": "Lead AI Engineer | Production ML at scale | 8.6+ yrs",
      "summary": "Senior AI engineer with 8.6 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Meta",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Mumbai, Maharashtra",
      "country": "India",
      "years": 8.6,
      "current_work": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout.",
      "matched_skills": [
        "Semantic Search",
        "Qdrant",
        "Vector Search",
        "FAISS",
        "Weaviate",
        "Learning to Rank",
        "scikit-learn",
        "MLOps"
      ],
      "all_skills": [
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 33
        },
        {
          "name": "scikit-learn",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 39
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 72,
          "endorsements": 13
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 4
        },
        {
          "name": "Semantic Search",
          "proficiency": "expert",
          "duration_months": 52,
          "endorsements": 23
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 0
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 65,
          "endorsements": 5
        },
        {
          "name": "Agile",
          "proficiency": "intermediate",
          "duration_months": 28,
          "endorsements": 15
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 41,
          "endorsements": 1
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 22,
          "endorsements": 35
        },
        {
          "name": "NLP",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 39
        },
        {
          "name": "Object Detection",
          "proficiency": "intermediate",
          "duration_months": 24,
          "endorsements": 5
        },
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 23
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 11
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 29
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 45,
          "endorsements": 38
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-01-08",
        "response_rate": 0.11,
        "response_time_hours": 219.9,
        "notice_days": 30,
        "github": 76.2,
        "profile_views": 143,
        "applications": 18,
        "search_appearance": 146,
        "saved": 5,
        "endorsements": 38,
        "profile_completeness": 59.3,
        "interview_completion": 0.94,
        "offer_acceptance": 0.71,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 44.9,
        "salary_max": 61.7,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "Prompt Engineering",
            "score": 80.9
          },
          {
            "skill": "Hugging Face Transformers",
            "score": 80.5
          },
          {
            "skill": "scikit-learn",
            "score": 65.9
          },
          {
            "skill": "Learning to Rank",
            "score": 63.3
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 81.1,
        "role": 100.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 48.8,
        "logistics": 91.4,
        "penalty": 5.0,
        "retrieval": 100.0,
        "ranking": 50.3,
        "evaluation": 100.0,
        "production": 85.7,
        "assessment": 69.9
      },
      "behavior_parts": {
        "recency": 34.0,
        "response": 11.0,
        "speed": 8.4,
        "open_to_work": 35.0,
        "completeness": 59.3,
        "saved": 40.8,
        "market_demand": 67.0,
        "applications": 96.7,
        "interview": 94.0,
        "github": 76.2,
        "assessment": 69.9,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation",
        "production shipping"
      ],
      "concerns": [
        "weak availability signals"
      ],
      "location_label": "tier-1 India city",
      "reasoning": "Lead AI Engineer with 8.6 yrs at Meta; career and skills show strong retrieval/search depth (Semantic Search, Qdrant, Vector Search, FAISS). Mumbai, Maharashtra; tier-1 India city; 11% recruiter response; last active 2026-01-08; 30-day notice; concern: weak availability signals.",
      "career": [
        {
          "title": "Lead AI Engineer",
          "company": "Meta",
          "industry": "Internet",
          "duration_months": 32,
          "is_current": true,
          "description": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
        },
        {
          "title": "Senior NLP Engineer",
          "company": "Apple",
          "industry": "Consumer Electronics",
          "duration_months": 28,
          "is_current": false,
          "description": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
        },
        {
          "title": "Senior Applied Scientist",
          "company": "Locobuzz",
          "industry": "AI/ML",
          "duration_months": 41,
          "is_current": false,
          "description": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
        }
      ],
      "education": [
        {
          "institution": "Manipal Institute of Technology",
          "degree": "M.Tech",
          "field_of_study": "Information Technology",
          "start_year": 2012,
          "end_year": 2017,
          "grade": "6.86 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0007411",
      "rank": 16,
      "score": 0.8089,
      "score_100": 80.89,
      "readiness": 66.7,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Rahul Bansal",
      "title": "Senior Machine Learning Engineer",
      "headline": "Senior Machine Learning Engineer | Production ML at scale | 8.0+ yrs",
      "summary": "Senior AI engineer with 8.0 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I owned the offline-online evaluation harness - NDCG/MRR/recall calibrated to live A/B metrics, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I care more about shipping a working system in 6 weeks than a theoretically perfect one in 6 months. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Amazon",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Kochi, Kerala",
      "country": "India",
      "years": 8.0,
      "current_work": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing -> embedding generation (using a fine-tuned BGE-large) -> Pinecone retrieval -> learning-to-rank re-scoring (XGBoost) -> behavioral-signal integration. The hardest part wasn't the ML - it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months.",
      "matched_skills": [
        "OpenSearch",
        "Vector Search",
        "BM25",
        "Information Retrieval",
        "Pinecone",
        "Learning to Rank",
        "Data Science",
        "PyTorch"
      ],
      "all_skills": [
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 43
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 50,
          "endorsements": 53
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 43
        },
        {
          "name": "Vector Search",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 55
        },
        {
          "name": "Data Science",
          "proficiency": "intermediate",
          "duration_months": 18,
          "endorsements": 8
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 4
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 73,
          "endorsements": 5
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 57
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 35
        },
        {
          "name": "TensorFlow",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 51
        },
        {
          "name": "Accounting",
          "proficiency": "intermediate",
          "duration_months": 11,
          "endorsements": 13
        },
        {
          "name": "Computer Vision",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 21
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 47
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 2
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2025-12-02",
        "response_rate": 0.12,
        "response_time_hours": 215.1,
        "notice_days": 15,
        "github": 89.5,
        "profile_views": 113,
        "applications": 12,
        "search_appearance": 1490,
        "saved": 3,
        "endorsements": 224,
        "profile_completeness": 58.9,
        "interview_completion": 0.8,
        "offer_acceptance": 0.65,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 30.2,
        "salary_max": 59.6,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "Vector Search",
            "score": 91.3
          },
          {
            "skill": "BM25",
            "score": 86.6
          },
          {
            "skill": "Fine-tuning LLMs",
            "score": 75.8
          },
          {
            "skill": "OpenSearch",
            "score": 63.4
          },
          {
            "skill": "Prompt Engineering",
            "score": 62.0
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 87.7,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 45.9,
        "logistics": 85.6,
        "penalty": 5.0,
        "retrieval": 100.0,
        "ranking": 65.8,
        "evaluation": 100.0,
        "production": 100.0,
        "assessment": 79.3
      },
      "behavior_parts": {
        "recency": 10.0,
        "response": 12.0,
        "speed": 10.4,
        "open_to_work": 35.0,
        "completeness": 58.9,
        "saved": 31.5,
        "market_demand": 73.5,
        "applications": 84.2,
        "interview": 80.0,
        "github": 89.5,
        "assessment": 79.3,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation",
        "production shipping"
      ],
      "concerns": [
        "weak availability signals"
      ],
      "location_label": "India, relocation-ready",
      "reasoning": "Senior Machine Learning Engineer with 8.0 yrs at Amazon; career and skills show retrieval plus ranking/recommendation depth (OpenSearch, Vector Search, BM25, Information Retrieval). Kochi, Kerala; India, relocation-ready; 12% recruiter response; last active 2025-12-02; 15-day notice; concern: weak availability signals.",
      "career": [
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Amazon",
          "industry": "Internet",
          "duration_months": 38,
          "is_current": true,
          "description": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing -> embedding generation (using a fine-tuned BGE-large) -> Pinecone retrieval -> learning-to-rank re-scoring (XGBoost) -> behavioral-signal integration. The hardest part wasn't the ML - it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
        },
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Yellow.ai",
          "industry": "AI/ML",
          "duration_months": 57,
          "is_current": false,
          "description": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
        }
      ],
      "education": [
        {
          "institution": "IIT Roorkee",
          "degree": "B.Tech",
          "field_of_study": "Information Technology",
          "start_year": 2011,
          "end_year": 2014,
          "grade": "7.84 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0041669",
      "rank": 17,
      "score": 0.8079,
      "score_100": 80.79,
      "readiness": 74.7,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Aisha Banerjee",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 8.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "CRED",
      "industry": "Fintech",
      "company_size": "1001-5000",
      "location": "Noida, Uttar Pradesh",
      "country": "India",
      "years": 8.0,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "FAISS",
        "Milvus",
        "Haystack",
        "Semantic Search",
        "Weaviate",
        "Information Retrieval",
        "Qdrant",
        "MLflow"
      ],
      "all_skills": [
        {
          "name": "FAISS",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 7
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 11
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 14
        },
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 11,
          "endorsements": 15
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 29,
          "endorsements": 39
        },
        {
          "name": "QLoRA",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 1
        },
        {
          "name": "Haystack",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 30
        },
        {
          "name": "Semantic Search",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 7
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 18,
          "endorsements": 59
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 46
        },
        {
          "name": "Flask",
          "proficiency": "intermediate",
          "duration_months": 20,
          "endorsements": 10
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 15
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 44,
          "endorsements": 10
        },
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 26
        },
        {
          "name": "Vue.js",
          "proficiency": "intermediate",
          "duration_months": 31,
          "endorsements": 4
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 54
        },
        {
          "name": "Information Retrieval",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 21
        },
        {
          "name": "TypeScript",
          "proficiency": "intermediate",
          "duration_months": 22,
          "endorsements": 13
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-06",
        "response_rate": 0.77,
        "response_time_hours": 3.7,
        "notice_days": 60,
        "github": 70.9,
        "profile_views": 143,
        "applications": 9,
        "search_appearance": 326,
        "saved": 37,
        "endorsements": 52,
        "profile_completeness": 62.5,
        "interview_completion": 0.93,
        "offer_acceptance": 0.82,
        "work_mode": "onsite",
        "relocate": false,
        "salary_min": 30.2,
        "salary_max": 52.8,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "FAISS",
            "score": 83.7
          },
          {
            "skill": "Milvus",
            "score": 76.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 61.0,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 78.1,
        "logistics": 89.0,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 25.3,
        "evaluation": 40.0,
        "production": 42.9,
        "assessment": 79.9
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 77.0,
        "speed": 98.5,
        "open_to_work": 100.0,
        "completeness": 62.5,
        "saved": 82.8,
        "market_demand": 82.5,
        "applications": 75.6,
        "interview": 93.0,
        "github": 70.9,
        "assessment": 79.9,
        "verified": 66.7
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Recommendation Systems Engineer with 8.0 yrs at CRED; career and skills show strong retrieval/search depth (FAISS, Milvus, Haystack, Semantic Search). Noida, Uttar Pradesh; preferred office city; 77% recruiter response; last active 2026-04-06; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "CRED",
          "industry": "Fintech",
          "duration_months": 37,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Search Engineer",
          "company": "Mad Street Den",
          "industry": "AI/ML",
          "duration_months": 52,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "NLP Engineer",
          "company": "Yellow.ai",
          "industry": "AI/ML",
          "duration_months": 6,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        }
      ],
      "education": [
        {
          "institution": "IIT Guwahati",
          "degree": "B.Tech",
          "field_of_study": "Information Technology",
          "start_year": 2006,
          "end_year": 2010,
          "grade": "7.04 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "IIT Guwahati",
          "degree": "B.E.",
          "field_of_study": "Computer Engineering",
          "start_year": 2007,
          "end_year": 2012,
          "grade": "6.87 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0042029",
      "rank": 18,
      "score": 0.8078,
      "score_100": 80.78,
      "readiness": 72.2,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Dhruv Joshi",
      "title": "Senior Data Scientist",
      "headline": "Senior Data Scientist | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 6.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Flipkart",
      "industry": "E-commerce",
      "company_size": "10001+",
      "location": "Delhi, Delhi",
      "country": "India",
      "years": 6.5,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "RAG",
        "Haystack",
        "Elasticsearch",
        "Embeddings",
        "OpenSearch",
        "Weaviate",
        "Learning to Rank",
        "PyTorch"
      ],
      "all_skills": [
        {
          "name": "YOLO",
          "proficiency": "advanced",
          "duration_months": 29,
          "endorsements": 30
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 40
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 88,
          "endorsements": 41
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 72,
          "endorsements": 18
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 70,
          "endorsements": 26
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 46
        },
        {
          "name": "TypeScript",
          "proficiency": "beginner",
          "duration_months": 14,
          "endorsements": 1
        },
        {
          "name": "Elasticsearch",
          "proficiency": "advanced",
          "duration_months": 54,
          "endorsements": 37
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 54,
          "endorsements": 26
        },
        {
          "name": "REST APIs",
          "proficiency": "intermediate",
          "duration_months": 29,
          "endorsements": 15
        },
        {
          "name": "Speech Recognition",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 4
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 96,
          "endorsements": 8
        },
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 11
        },
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 22,
          "endorsements": 12
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 8
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 60
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 52
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 9
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-13",
        "response_rate": 0.67,
        "response_time_hours": 20.6,
        "notice_days": 45,
        "github": 78.7,
        "profile_views": 84,
        "applications": 7,
        "search_appearance": 209,
        "saved": 16,
        "endorsements": 82,
        "profile_completeness": 53.0,
        "interview_completion": 0.74,
        "offer_acceptance": 0.83,
        "work_mode": "onsite",
        "relocate": true,
        "salary_min": 44.7,
        "salary_max": 50.5,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "YOLO",
            "score": 82.9
          },
          {
            "skill": "NLP",
            "score": 82.7
          },
          {
            "skill": "Haystack",
            "score": 78.6
          },
          {
            "skill": "RAG",
            "score": 76.9
          },
          {
            "skill": "PyTorch",
            "score": 50.5
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 73.5,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 66.2,
        "logistics": 80.3,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 66.1,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 72.2
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 67.0,
        "speed": 91.4,
        "open_to_work": 35.0,
        "completeness": 53.0,
        "saved": 64.5,
        "market_demand": 73.6,
        "applications": 68.3,
        "interview": 74.0,
        "github": 78.7,
        "assessment": 72.2,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Senior Data Scientist with 6.5 yrs at Flipkart; career and skills show retrieval plus ranking/recommendation depth (RAG, Haystack, Elasticsearch, Embeddings). Delhi, Delhi; tier-1 India city; 67% recruiter response; last active 2026-04-13; 45-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Data Scientist",
          "company": "Flipkart",
          "industry": "E-commerce",
          "duration_months": 36,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Observe.AI",
          "industry": "AI/ML",
          "duration_months": 42,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "PES University",
          "degree": "B.E.",
          "field_of_study": "Computer Science",
          "start_year": 2013,
          "end_year": 2016,
          "grade": "90%",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0091909",
      "rank": 19,
      "score": 0.8074,
      "score_100": 80.74,
      "readiness": 71.4,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Pooja Tiwari",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 6.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Rephrase.ai",
      "industry": "AI/ML",
      "company_size": "11-50",
      "location": "Bangalore, Karnataka",
      "country": "India",
      "years": 6.9,
      "current_work": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.",
      "matched_skills": [
        "Pinecone",
        "Qdrant",
        "OpenSearch",
        "Sentence Transformers",
        "Learning to Rank",
        "BentoML",
        "scikit-learn",
        "MLflow"
      ],
      "all_skills": [
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 16
        },
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 9
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 27
        },
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 30,
          "endorsements": 15
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 89,
          "endorsements": 5
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 55
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 59,
          "endorsements": 43
        },
        {
          "name": "BentoML",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 13
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 91,
          "endorsements": 7
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 57,
          "endorsements": 30
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 3
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 56,
          "endorsements": 40
        },
        {
          "name": "MLflow",
          "proficiency": "intermediate",
          "duration_months": 34,
          "endorsements": 1
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 16
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-18",
        "response_rate": 0.65,
        "response_time_hours": 27.7,
        "notice_days": 45,
        "github": 49.7,
        "profile_views": 42,
        "applications": 0,
        "search_appearance": 495,
        "saved": 64,
        "endorsements": 32,
        "profile_completeness": 71.5,
        "interview_completion": 0.66,
        "offer_acceptance": 0.34,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 29.7,
        "salary_max": 61.1,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "Image Classification",
            "score": 89.5
          },
          {
            "skill": "LLMs",
            "score": 84.9
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 68.0,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 68.5,
        "logistics": 83.2,
        "penalty": 0.0,
        "retrieval": 85.3,
        "ranking": 65.6,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 84.9
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 65.0,
        "speed": 88.5,
        "open_to_work": 100.0,
        "completeness": 71.5,
        "saved": 95.0,
        "market_demand": 79.7,
        "applications": 0.0,
        "interview": 66.0,
        "github": 49.7,
        "assessment": 84.9,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Machine Learning Engineer with 6.9 yrs at Rephrase.ai; career and skills show retrieval plus ranking/recommendation depth (Pinecone, Qdrant, OpenSearch, Sentence Transformers). Bangalore, Karnataka; tier-1 India city; 65% recruiter response; last active 2026-03-18; 45-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "Rephrase.ai",
          "industry": "AI/ML",
          "duration_months": 51,
          "is_current": true,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "NLP Engineer",
          "company": "Meta",
          "industry": "Internet",
          "duration_months": 31,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "IIIT Bangalore",
          "degree": "M.E.",
          "field_of_study": "Information Technology",
          "start_year": 2013,
          "end_year": 2016,
          "grade": "9.24 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0088025",
      "rank": 20,
      "score": 0.8071,
      "score_100": 80.71,
      "readiness": 72.5,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Amit Arora",
      "title": "Staff Machine Learning Engineer",
      "headline": "Staff Machine Learning Engineer | Building AI-native search & ranking systems",
      "summary": "Senior AI engineer with 8.6 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I designed the company's first hybrid retrieval system combining BM25 with dense vector recall, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I'm comfortable across the stack from infra to algorithms, but my heart is in retrieval and ranking. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Yellow.ai",
      "industry": "AI/ML",
      "company_size": "201-500",
      "location": "Jaipur, Rajasthan",
      "country": "India",
      "years": 8.6,
      "current_work": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing -> embedding generation (using a fine-tuned BGE-large) -> Pinecone retrieval -> learning-to-rank re-scoring (XGBoost) -> behavioral-signal integration. The hardest part wasn't the ML - it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months.",
      "matched_skills": [
        "Pinecone",
        "RAG",
        "BM25",
        "Elasticsearch",
        "pgvector",
        "Learning to Rank",
        "TensorFlow",
        "MLOps"
      ],
      "all_skills": [
        {
          "name": "Pinecone",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 25
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 8
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 48
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 6
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 41,
          "endorsements": 56
        },
        {
          "name": "SAP",
          "proficiency": "beginner",
          "duration_months": 7,
          "endorsements": 14
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 1
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 22,
          "endorsements": 29
        },
        {
          "name": "Flask",
          "proficiency": "beginner",
          "duration_months": 14,
          "endorsements": 5
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 37
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 50
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 59
        },
        {
          "name": "MLOps",
          "proficiency": "intermediate",
          "duration_months": 17,
          "endorsements": 8
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 16
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 57
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 50
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 63,
          "endorsements": 35
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 35
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-14",
        "response_rate": 0.83,
        "response_time_hours": 24.1,
        "notice_days": 90,
        "github": 74.6,
        "profile_views": 201,
        "applications": 17,
        "search_appearance": 1398,
        "saved": 19,
        "endorsements": 18,
        "profile_completeness": 60.3,
        "interview_completion": 0.95,
        "offer_acceptance": 0.82,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 38.5,
        "salary_max": 51.3,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "Pinecone",
            "score": 93.6
          },
          {
            "skill": "QLoRA",
            "score": 87.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 74.8,
        "role": 98.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 85.5,
        "logistics": 62.1,
        "penalty": 4.5,
        "retrieval": 100.0,
        "ranking": 71.0,
        "evaluation": 40.0,
        "production": 57.1,
        "assessment": 90.3
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 83.0,
        "speed": 90.0,
        "open_to_work": 100.0,
        "completeness": 60.3,
        "saved": 68.2,
        "market_demand": 81.6,
        "applications": 94.9,
        "interview": 95.0,
        "github": 74.6,
        "assessment": 90.3,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "production shipping"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "India, non-preferred city",
      "reasoning": "Staff Machine Learning Engineer with 8.6 yrs at Yellow.ai; career and skills show retrieval plus ranking/recommendation depth (Pinecone, RAG, BM25, Elasticsearch). Jaipur, Rajasthan; India, non-preferred city; 83% recruiter response; last active 2026-05-14; 90-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Yellow.ai",
          "industry": "AI/ML",
          "duration_months": 45,
          "is_current": true,
          "description": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing -> embedding generation (using a fine-tuned BGE-large) -> Pinecone retrieval -> learning-to-rank re-scoring (XGBoost) -> behavioral-signal integration. The hardest part wasn't the ML - it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
        },
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Niramai",
          "industry": "HealthTech AI",
          "duration_months": 44,
          "is_current": false,
          "description": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing -> embedding generation (using a fine-tuned BGE-large) -> Pinecone retrieval -> learning-to-rank re-scoring (XGBoost) -> behavioral-signal integration. The hardest part wasn't the ML - it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
        },
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Genpact AI",
          "industry": "AI Services",
          "duration_months": 13,
          "is_current": false,
          "description": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
        }
      ],
      "education": [
        {
          "institution": "COEP Pune",
          "degree": "Ph.D",
          "field_of_study": "Data Science",
          "start_year": 2004,
          "end_year": 2009,
          "grade": "77%",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0006418",
      "rank": 21,
      "score": 0.8048,
      "score_100": 80.48,
      "readiness": 76.8,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Rahul Mukherjee",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 5.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Verloop.io",
      "industry": "Conversational AI",
      "company_size": "51-200",
      "location": "Gurgaon, Haryana",
      "country": "India",
      "years": 5.7,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "Semantic Search",
        "Embeddings",
        "Weaviate",
        "Elasticsearch",
        "Qdrant",
        "OpenSearch",
        "Learning to Rank",
        "Kubernetes"
      ],
      "all_skills": [
        {
          "name": "Kubernetes",
          "proficiency": "intermediate",
          "duration_months": 17,
          "endorsements": 2
        },
        {
          "name": "gRPC",
          "proficiency": "intermediate",
          "duration_months": 26,
          "endorsements": 14
        },
        {
          "name": "Semantic Search",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 30
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 43
        },
        {
          "name": "TensorFlow",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 30
        },
        {
          "name": "Object Detection",
          "proficiency": "intermediate",
          "duration_months": 31,
          "endorsements": 10
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 9
        },
        {
          "name": "Elasticsearch",
          "proficiency": "advanced",
          "duration_months": 44,
          "endorsements": 59
        },
        {
          "name": "Snowflake",
          "proficiency": "intermediate",
          "duration_months": 34,
          "endorsements": 0
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 25,
          "endorsements": 30
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 1
        },
        {
          "name": "Forecasting",
          "proficiency": "intermediate",
          "duration_months": 8,
          "endorsements": 8
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 49
        },
        {
          "name": "Diffusion Models",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 21
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 53
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 55
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-31",
        "response_rate": 0.92,
        "response_time_hours": 47.0,
        "notice_days": 60,
        "github": 59.7,
        "profile_views": 151,
        "applications": 9,
        "search_appearance": 372,
        "saved": 9,
        "endorsements": 10,
        "profile_completeness": 73.5,
        "interview_completion": 0.89,
        "offer_acceptance": 0.51,
        "work_mode": "remote",
        "relocate": true,
        "salary_min": 41.9,
        "salary_max": 62.9,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "Semantic Search",
            "score": 89.0
          },
          {
            "skill": "Embeddings",
            "score": 88.9
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 69.1,
        "role": 91.0,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 78.5,
        "logistics": 75.6,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 66.0,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 88.9
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 92.0,
        "speed": 80.4,
        "open_to_work": 100.0,
        "completeness": 73.5,
        "saved": 52.4,
        "market_demand": 71.4,
        "applications": 75.6,
        "interview": 89.0,
        "github": 59.7,
        "assessment": 88.9,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Machine Learning Engineer with 5.7 yrs at Verloop.io; career and skills show retrieval plus ranking/recommendation depth (Semantic Search, Embeddings, Weaviate, Elasticsearch). Gurgaon, Haryana; tier-1 India city; 92% recruiter response; last active 2026-03-31; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "Verloop.io",
          "industry": "Conversational AI",
          "duration_months": 40,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "AI Engineer",
          "company": "Flipkart",
          "industry": "E-commerce",
          "duration_months": 27,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        }
      ],
      "education": [
        {
          "institution": "Stanford University",
          "degree": "M.S.",
          "field_of_study": "Data Science",
          "start_year": 2014,
          "end_year": 2017,
          "grade": "73%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0075574",
      "rank": 22,
      "score": 0.8043,
      "score_100": 80.43,
      "readiness": 70.8,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Karan Ghosh",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 5.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Haptik",
      "industry": "Conversational AI",
      "company_size": "201-500",
      "location": "Bangalore, Karnataka",
      "country": "India",
      "years": 5.7,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "pgvector",
        "Weaviate",
        "OpenSearch",
        "LlamaIndex",
        "Qdrant",
        "Vector Search",
        "Elasticsearch",
        "BM25"
      ],
      "all_skills": [
        {
          "name": "Hugging Face Transformers",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 2
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 60,
          "endorsements": 50
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 51
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 30
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 17
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 16
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 35
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 8
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "intermediate",
          "duration_months": 14,
          "endorsements": 1
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 29
        },
        {
          "name": "MongoDB",
          "proficiency": "beginner",
          "duration_months": 10,
          "endorsements": 5
        },
        {
          "name": "Vector Search",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 19
        },
        {
          "name": "TTS",
          "proficiency": "intermediate",
          "duration_months": 34,
          "endorsements": 1
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 3
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 16
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 78,
          "endorsements": 60
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-17",
        "response_rate": 0.58,
        "response_time_hours": 44.7,
        "notice_days": 60,
        "github": 37.7,
        "profile_views": 55,
        "applications": 6,
        "search_appearance": 625,
        "saved": 24,
        "endorsements": 24,
        "profile_completeness": 50.8,
        "interview_completion": 0.96,
        "offer_acceptance": -1,
        "work_mode": "remote",
        "relocate": true,
        "salary_min": 42.2,
        "salary_max": 62.7,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "pgvector",
            "score": 82.9
          },
          {
            "skill": "Weaviate",
            "score": 74.1
          },
          {
            "skill": "Hugging Face Transformers",
            "score": 67.1
          },
          {
            "skill": "Recommendation Systems",
            "score": 52.1
          }
        ],
        "verified_email": true,
        "verified_phone": false,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 71.4,
        "role": 91.0,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 72.1,
        "logistics": 75.6,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 61.6,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 69.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 58.0,
        "speed": 81.4,
        "open_to_work": 100.0,
        "completeness": 50.8,
        "saved": 73.2,
        "market_demand": 75.4,
        "applications": 63.9,
        "interview": 96.0,
        "github": 37.7,
        "assessment": 69.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Machine Learning Engineer with 5.7 yrs at Haptik; career and skills show retrieval plus ranking/recommendation depth (pgvector, Weaviate, OpenSearch, LlamaIndex). Bangalore, Karnataka; tier-1 India city; 58% recruiter response; last active 2026-05-17; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "Haptik",
          "industry": "Conversational AI",
          "duration_months": 24,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Observe.AI",
          "industry": "AI/ML",
          "duration_months": 36,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "NLP Engineer",
          "company": "Genpact AI",
          "industry": "AI Services",
          "duration_months": 8,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "Carnegie Mellon University",
          "degree": "M.S.",
          "field_of_study": "Computer Science",
          "start_year": 2018,
          "end_year": 2021,
          "grade": "6.77 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0077285",
      "rank": 23,
      "score": 0.8032,
      "score_100": 80.32,
      "readiness": 67.6,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Priya Chowdary",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 5.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Nykaa",
      "industry": "E-commerce",
      "company_size": "1001-5000",
      "location": "Ahmedabad, Gujarat",
      "country": "India",
      "years": 5.5,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "Pinecone",
        "Sentence Transformers",
        "Embeddings",
        "Information Retrieval",
        "Milvus",
        "LlamaIndex",
        "FAISS",
        "BentoML"
      ],
      "all_skills": [
        {
          "name": "OpenCV",
          "proficiency": "intermediate",
          "duration_months": 30,
          "endorsements": 13
        },
        {
          "name": "Excel",
          "proficiency": "intermediate",
          "duration_months": 18,
          "endorsements": 6
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 79,
          "endorsements": 34
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 2
        },
        {
          "name": "Pinecone",
          "proficiency": "advanced",
          "duration_months": 51,
          "endorsements": 32
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 55
        },
        {
          "name": "CNN",
          "proficiency": "advanced",
          "duration_months": 51,
          "endorsements": 16
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 44
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 58,
          "endorsements": 59
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 87,
          "endorsements": 46
        },
        {
          "name": "Milvus",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 43
        },
        {
          "name": "NLP",
          "proficiency": "advanced",
          "duration_months": 18,
          "endorsements": 0
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 17
        },
        {
          "name": "BentoML",
          "proficiency": "advanced",
          "duration_months": 30,
          "endorsements": 51
        },
        {
          "name": "FAISS",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 44
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-03",
        "response_rate": 0.56,
        "response_time_hours": 15.9,
        "notice_days": 60,
        "github": 75.6,
        "profile_views": 89,
        "applications": 9,
        "search_appearance": 494,
        "saved": 65,
        "endorsements": 93,
        "profile_completeness": 71.2,
        "interview_completion": 0.67,
        "offer_acceptance": -1,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 39.2,
        "salary_max": 40.6,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": false,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 63.4,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 75.5,
        "logistics": 68.8,
        "penalty": 0.0,
        "retrieval": 96.2,
        "ranking": 31.7,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 56.0,
        "speed": 93.4,
        "open_to_work": 100.0,
        "completeness": 71.2,
        "saved": 95.3,
        "market_demand": 86.2,
        "applications": 75.6,
        "interview": 67.0,
        "github": 75.6,
        "assessment": 50.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Recommendation Systems Engineer with 5.5 yrs at Nykaa; career and skills show strong retrieval/search depth (Pinecone, Sentence Transformers, Embeddings, Information Retrieval). Ahmedabad, Gujarat; India, non-preferred city; 56% recruiter response; last active 2026-05-03; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Nykaa",
          "industry": "E-commerce",
          "duration_months": 42,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Netflix",
          "industry": "Media",
          "duration_months": 15,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "AI Engineer",
          "company": "upGrad",
          "industry": "EdTech",
          "duration_months": 8,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "PES University",
          "degree": "B.Sc",
          "field_of_study": "Computer Science",
          "start_year": 2006,
          "end_year": 2010,
          "grade": "72%",
          "tier": "tier_2"
        },
        {
          "institution": "PES University",
          "degree": "Ph.D",
          "field_of_study": "Computer Science",
          "start_year": 2010,
          "end_year": 2013,
          "grade": "8.75 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0045250",
      "rank": 24,
      "score": 0.8003,
      "score_100": 80.03,
      "readiness": 74.8,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Priya Pandey",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 6.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Rephrase.ai",
      "industry": "AI/ML",
      "company_size": "11-50",
      "location": "Delhi, Delhi",
      "country": "India",
      "years": 6.6,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "Sentence Transformers",
        "Milvus",
        "Embeddings",
        "Vector Search",
        "BM25",
        "Qdrant",
        "MLflow",
        "TensorFlow"
      ],
      "all_skills": [
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 57,
          "endorsements": 60
        },
        {
          "name": "Milvus",
          "proficiency": "advanced",
          "duration_months": 51,
          "endorsements": 50
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 42
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 16
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 79,
          "endorsements": 51
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 14
        },
        {
          "name": "Image Classification",
          "proficiency": "intermediate",
          "duration_months": 35,
          "endorsements": 15
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 85,
          "endorsements": 15
        },
        {
          "name": "ASR",
          "proficiency": "intermediate",
          "duration_months": 29,
          "endorsements": 1
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 30
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 87,
          "endorsements": 14
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 33
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 15
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 85,
          "endorsements": 7
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 50
        },
        {
          "name": "LLMs",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 34
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 40
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-29",
        "response_rate": 0.74,
        "response_time_hours": 34.3,
        "notice_days": 15,
        "github": -1,
        "profile_views": 59,
        "applications": 17,
        "search_appearance": 1005,
        "saved": 39,
        "endorsements": 179,
        "profile_completeness": 89.8,
        "interview_completion": 0.65,
        "offer_acceptance": 0.68,
        "work_mode": "onsite",
        "relocate": false,
        "salary_min": 28.9,
        "salary_max": 46.7,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "Sentence Transformers",
            "score": 83.2
          },
          {
            "skill": "Embeddings",
            "score": 73.0
          },
          {
            "skill": "LoRA",
            "score": 65.0
          },
          {
            "skill": "Milvus",
            "score": 53.9
          }
        ],
        "verified_email": false,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 62.6,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 68.9,
        "logistics": 88.5,
        "penalty": 0.0,
        "retrieval": 92.5,
        "ranking": 31.7,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 68.8
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 74.0,
        "speed": 85.7,
        "open_to_work": 35.0,
        "completeness": 89.8,
        "saved": 83.9,
        "market_demand": 84.0,
        "applications": 94.9,
        "interview": 65.0,
        "github": 18.0,
        "assessment": 68.8,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Applied ML Engineer with 6.6 yrs at Rephrase.ai; career and skills show strong retrieval/search depth (Sentence Transformers, Milvus, Embeddings, Vector Search). Delhi, Delhi; tier-1 India city; 74% recruiter response; last active 2026-04-29; 15-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Rephrase.ai",
          "industry": "AI/ML",
          "duration_months": 46,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Paytm",
          "industry": "Fintech",
          "duration_months": 32,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        }
      ],
      "education": [
        {
          "institution": "Symbiosis International",
          "degree": "Ph.D",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2001,
          "end_year": 2005,
          "grade": "8.90 CGPA",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0079387",
      "rank": 25,
      "score": 0.7978,
      "score_100": 79.78,
      "readiness": 79.8,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Sneha Arora",
      "title": "AI Engineer",
      "headline": "AI Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 6.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Microsoft",
      "industry": "Software",
      "company_size": "10001+",
      "location": "Trivandrum, Kerala",
      "country": "India",
      "years": 6.9,
      "current_work": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.",
      "matched_skills": [
        "Sentence Transformers",
        "Vector Search",
        "OpenSearch",
        "BM25",
        "Haystack",
        "Recommendation Systems",
        "Learning to Rank",
        "scikit-learn"
      ],
      "all_skills": [
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 37,
          "endorsements": 53
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 59,
          "endorsements": 37
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 14
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 54
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 72,
          "endorsements": 45
        },
        {
          "name": "JavaScript",
          "proficiency": "intermediate",
          "duration_months": 32,
          "endorsements": 8
        },
        {
          "name": "Illustrator",
          "proficiency": "intermediate",
          "duration_months": 22,
          "endorsements": 9
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 18
        },
        {
          "name": "Next.js",
          "proficiency": "intermediate",
          "duration_months": 28,
          "endorsements": 12
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 87,
          "endorsements": 16
        },
        {
          "name": "YOLO",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 15
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 24,
          "endorsements": 9
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 41
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 85,
          "endorsements": 10
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 0
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 13
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 37,
          "endorsements": 60
        },
        {
          "name": "BentoML",
          "proficiency": "advanced",
          "duration_months": 44,
          "endorsements": 41
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-25",
        "response_rate": 0.81,
        "response_time_hours": 29.1,
        "notice_days": 30,
        "github": 64.1,
        "profile_views": 241,
        "applications": 4,
        "search_appearance": 189,
        "saved": 22,
        "endorsements": 100,
        "profile_completeness": 90.2,
        "interview_completion": 0.9,
        "offer_acceptance": 0.5,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 39.8,
        "salary_max": 54.7,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "Sentence Transformers",
            "score": 85.8
          },
          {
            "skill": "Recommendation Systems",
            "score": 84.4
          },
          {
            "skill": "scikit-learn",
            "score": 66.5
          },
          {
            "skill": "Python",
            "score": 57.8
          },
          {
            "skill": "Time Series",
            "score": 53.2
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 70.8,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 82.8,
        "logistics": 78.4,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 77.6,
        "evaluation": 60.0,
        "production": 14.3,
        "assessment": 73.6
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 81.0,
        "speed": 87.9,
        "open_to_work": 100.0,
        "completeness": 90.2,
        "saved": 71.4,
        "market_demand": 81.5,
        "applications": 52.9,
        "interview": 90.0,
        "github": 64.1,
        "assessment": 73.6,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "AI Engineer with 6.9 yrs at Microsoft; career and skills show retrieval plus ranking/recommendation depth (Sentence Transformers, Vector Search, OpenSearch, BM25). Trivandrum, Kerala; India, non-preferred city; 81% recruiter response; last active 2026-04-25; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "AI Engineer",
          "company": "Microsoft",
          "industry": "Software",
          "duration_months": 22,
          "is_current": true,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "NLP Engineer",
          "company": "upGrad",
          "industry": "EdTech",
          "duration_months": 22,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Ola",
          "industry": "Transportation",
          "duration_months": 18,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "AI Engineer",
          "company": "BYJU'S",
          "industry": "EdTech",
          "duration_months": 19,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "IIIT Hyderabad",
          "degree": "M.Sc",
          "field_of_study": "Computer Science",
          "start_year": 2010,
          "end_year": 2013,
          "grade": "8.47 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "PES University",
          "degree": "B.E.",
          "field_of_study": "Data Science",
          "start_year": 2002,
          "end_year": 2007,
          "grade": "7.46 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0011432",
      "rank": 26,
      "score": 0.7965,
      "score_100": 79.65,
      "readiness": 72.7,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Deepak Trivedi",
      "title": "Senior Data Scientist",
      "headline": "Senior Data Scientist | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 7.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Amazon",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Chennai, Tamil Nadu",
      "country": "India",
      "years": 7.6,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "Haystack",
        "OpenSearch",
        "pgvector",
        "LlamaIndex",
        "Elasticsearch",
        "MLOps",
        "Data Science",
        "BentoML"
      ],
      "all_skills": [
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 45,
          "endorsements": 44
        },
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 51,
          "endorsements": 20
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 46
        },
        {
          "name": "Data Science",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 9
        },
        {
          "name": "OpenSearch",
          "proficiency": "advanced",
          "duration_months": 59,
          "endorsements": 54
        },
        {
          "name": "AWS",
          "proficiency": "intermediate",
          "duration_months": 12,
          "endorsements": 13
        },
        {
          "name": "BentoML",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 21
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 65,
          "endorsements": 24
        },
        {
          "name": "PEFT",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 60
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 8
        },
        {
          "name": "MLflow",
          "proficiency": "intermediate",
          "duration_months": 28,
          "endorsements": 15
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 60
        },
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 29,
          "endorsements": 3
        },
        {
          "name": "LlamaIndex",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 56
        },
        {
          "name": "Elasticsearch",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 58
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-16",
        "response_rate": 0.67,
        "response_time_hours": 51.3,
        "notice_days": 60,
        "github": 20.0,
        "profile_views": 250,
        "applications": 10,
        "search_appearance": 331,
        "saved": 13,
        "endorsements": 73,
        "profile_completeness": 85.8,
        "interview_completion": 0.83,
        "offer_acceptance": 0.83,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 39.8,
        "salary_max": 55.1,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "Haystack",
            "score": 82.2
          },
          {
            "skill": "BentoML",
            "score": 75.8
          },
          {
            "skill": "MLOps",
            "score": 64.2
          },
          {
            "skill": "OpenSearch",
            "score": 57.3
          },
          {
            "skill": "Time Series",
            "score": 50.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 69.1,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 72.4,
        "logistics": 81.8,
        "penalty": 0.0,
        "retrieval": 92.5,
        "ranking": 31.7,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 69.9
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 67.0,
        "speed": 78.6,
        "open_to_work": 100.0,
        "completeness": 85.8,
        "saved": 60.1,
        "market_demand": 80.1,
        "applications": 78.8,
        "interview": 83.0,
        "github": 20.0,
        "assessment": 69.9,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Senior Data Scientist with 7.6 yrs at Amazon; career and skills show strong retrieval/search depth (Haystack, OpenSearch, pgvector, LlamaIndex). Chennai, Tamil Nadu; tier-1 India city; 67% recruiter response; last active 2026-03-16; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Data Scientist",
          "company": "Amazon",
          "industry": "Internet",
          "duration_months": 28,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Krutrim",
          "industry": "AI/ML",
          "duration_months": 36,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "NLP Engineer",
          "company": "Nykaa",
          "industry": "E-commerce",
          "duration_months": 26,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "Bharati Vidyapeeth",
          "degree": "M.Sc",
          "field_of_study": "Data Science",
          "start_year": 2005,
          "end_year": 2008,
          "grade": "9.07 CGPA",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0028793",
      "rank": 27,
      "score": 0.7921,
      "score_100": 79.21,
      "readiness": 64.4,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Myra Dutta",
      "title": "Search Engineer",
      "headline": "Search Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 7.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Google",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Trivandrum, Kerala",
      "country": "India",
      "years": 7.2,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "Embeddings",
        "Haystack",
        "Information Retrieval",
        "pgvector",
        "Learning to Rank",
        "Kubeflow",
        "PyTorch",
        "LoRA"
      ],
      "all_skills": [
        {
          "name": "SAP",
          "proficiency": "intermediate",
          "duration_months": 20,
          "endorsements": 6
        },
        {
          "name": "Kubeflow",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 3
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 78,
          "endorsements": 16
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 12
        },
        {
          "name": "YOLO",
          "proficiency": "intermediate",
          "duration_months": 13,
          "endorsements": 0
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 56
        },
        {
          "name": "PowerPoint",
          "proficiency": "beginner",
          "duration_months": 8,
          "endorsements": 2
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 32
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 1
        },
        {
          "name": "PEFT",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 19
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 41
        },
        {
          "name": "PyTorch",
          "proficiency": "advanced",
          "duration_months": 22,
          "endorsements": 46
        },
        {
          "name": "pgvector",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 29
        },
        {
          "name": "NLP",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 38
        },
        {
          "name": "Weights & Biases",
          "proficiency": "intermediate",
          "duration_months": 16,
          "endorsements": 12
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-13",
        "response_rate": 0.57,
        "response_time_hours": 16.9,
        "notice_days": 120,
        "github": 83.1,
        "profile_views": 159,
        "applications": 19,
        "search_appearance": 1096,
        "saved": 43,
        "endorsements": 179,
        "profile_completeness": 95.9,
        "interview_completion": 0.7,
        "offer_acceptance": 0.74,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 31.7,
        "salary_max": 38.1,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "Embeddings",
            "score": 88.7
          },
          {
            "skill": "Haystack",
            "score": 85.1
          },
          {
            "skill": "Kubeflow",
            "score": 66.8
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 75.5,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 79.1,
        "logistics": 61.1,
        "penalty": 4.5,
        "retrieval": 90.9,
        "ranking": 65.4,
        "evaluation": 100.0,
        "production": 42.9,
        "assessment": 80.2
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 57.0,
        "speed": 93.0,
        "open_to_work": 100.0,
        "completeness": 95.9,
        "saved": 86.1,
        "market_demand": 90.2,
        "applications": 98.4,
        "interview": 70.0,
        "github": 83.1,
        "assessment": 80.2,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "India, relocation-ready",
      "reasoning": "Search Engineer with 7.2 yrs at Google; career and skills show retrieval plus ranking/recommendation depth (Embeddings, Haystack, Information Retrieval, pgvector). Trivandrum, Kerala; India, relocation-ready; 57% recruiter response; last active 2026-04-13; 120-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Search Engineer",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 32,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Senior Data Scientist",
          "company": "Amazon",
          "industry": "Internet",
          "duration_months": 40,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Meesho",
          "industry": "E-commerce",
          "duration_months": 13,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "BITS Pilani",
          "degree": "B.E.",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2016,
          "end_year": 2019,
          "grade": "6.97 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "Massachusetts Institute of Technology",
          "degree": "B.Sc",
          "field_of_study": "Computer Engineering",
          "start_year": 2016,
          "end_year": 2020,
          "grade": "7.58 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0007009",
      "rank": 28,
      "score": 0.7916,
      "score_100": 79.16,
      "readiness": 74.2,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Anika Pillai",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 7.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Wysa",
      "industry": "HealthTech AI",
      "company_size": "51-200",
      "location": "Noida, Uttar Pradesh",
      "country": "India",
      "years": 7.9,
      "current_work": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.",
      "matched_skills": [
        "Weaviate",
        "Embeddings",
        "BM25",
        "Sentence Transformers",
        "Haystack",
        "OpenSearch",
        "Learning to Rank",
        "Python"
      ],
      "all_skills": [
        {
          "name": "Statistical Modeling",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 54
        },
        {
          "name": "ETL",
          "proficiency": "intermediate",
          "duration_months": 32,
          "endorsements": 11
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 40,
          "endorsements": 6
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 38
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 28
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 56
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 21
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 45
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 17
        },
        {
          "name": "CNN",
          "proficiency": "advanced",
          "duration_months": 54,
          "endorsements": 10
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 18
        },
        {
          "name": "LLMs",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 46
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 16
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 31,
          "endorsements": 18
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 3
        },
        {
          "name": "Data Science",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 34
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 58,
          "endorsements": 58
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 96,
          "endorsements": 23
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-19",
        "response_rate": 0.62,
        "response_time_hours": 41.8,
        "notice_days": 30,
        "github": 69.2,
        "profile_views": 85,
        "applications": 13,
        "search_appearance": 615,
        "saved": 5,
        "endorsements": 120,
        "profile_completeness": 82.8,
        "interview_completion": 0.87,
        "offer_acceptance": 0.49,
        "work_mode": "remote",
        "relocate": false,
        "salary_min": 24.7,
        "salary_max": 49.6,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Statistical Modeling",
            "score": 51.2
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 60.6,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 72.9,
        "logistics": 92.4,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 45.7,
        "evaluation": 40.0,
        "production": 28.6,
        "assessment": 50.2
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 62.0,
        "speed": 82.6,
        "open_to_work": 100.0,
        "completeness": 82.8,
        "saved": 40.8,
        "market_demand": 72.1,
        "applications": 86.7,
        "interview": 87.0,
        "github": 69.2,
        "assessment": 50.2,
        "verified": 66.7
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Recommendation Systems Engineer with 7.9 yrs at Wysa; career and skills show strong retrieval/search depth (Weaviate, Embeddings, BM25, Sentence Transformers). Noida, Uttar Pradesh; preferred office city; 62% recruiter response; last active 2026-03-19; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Wysa",
          "industry": "HealthTech AI",
          "duration_months": 14,
          "is_current": true,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "PolicyBazaar",
          "industry": "Insurance Tech",
          "duration_months": 48,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "Netflix",
          "industry": "Media",
          "duration_months": 32,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "Symbiosis International",
          "degree": "M.Tech",
          "field_of_study": "Data Science",
          "start_year": 2011,
          "end_year": 2014,
          "grade": "7.52 CGPA",
          "tier": "tier_3"
        },
        {
          "institution": "Anna University",
          "degree": "M.Sc",
          "field_of_study": "Computer Science",
          "start_year": 2017,
          "end_year": 2021,
          "grade": "7.74 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0061257",
      "rank": 29,
      "score": 0.7913,
      "score_100": 79.13,
      "readiness": 79.0,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Advaith Pillai",
      "title": "Staff Machine Learning Engineer",
      "headline": "Senior Engineer | 8.0+ yrs in production systems",
      "summary": "Senior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer - the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes - over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want - so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.",
      "company": "LinkedIn",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Noida, Uttar Pradesh",
      "country": "India",
      "years": 8.0,
      "current_work": "Designed the ranking layer for the company's flagship product: how do we surface the right thing at the right time, across millions of items, for millions of users. The hard problem was rarely the modeling - it was the data pipeline that fed the models, the evaluation framework that told us whether they worked, and the operational discipline of keeping all of it healthy in production. I owned all three across roughly 14 months.",
      "matched_skills": [
        "Haystack",
        "Information Retrieval Systems",
        "Search Infrastructure",
        "Search Backend",
        "Vector Representations",
        "Machine Learning",
        "Feature Engineering",
        "Workflow Orchestration"
      ],
      "all_skills": [
        {
          "name": "PEFT",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 5
        },
        {
          "name": "Haystack",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 36
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 0
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 23
        },
        {
          "name": "Information Retrieval Systems",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 32
        },
        {
          "name": "Search Infrastructure",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 37
        },
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 22,
          "endorsements": 37
        },
        {
          "name": "TTS",
          "proficiency": "intermediate",
          "duration_months": 24,
          "endorsements": 3
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 9
        },
        {
          "name": "ETL",
          "proficiency": "intermediate",
          "duration_months": 14,
          "endorsements": 8
        },
        {
          "name": "Model Adaptation",
          "proficiency": "expert",
          "duration_months": 79,
          "endorsements": 54
        },
        {
          "name": "Indexing Algorithms",
          "proficiency": "expert",
          "duration_months": 39,
          "endorsements": 56
        },
        {
          "name": "Workflow Orchestration",
          "proficiency": "expert",
          "duration_months": 62,
          "endorsements": 59
        },
        {
          "name": "Search Backend",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 10
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 72,
          "endorsements": 38
        },
        {
          "name": "Vector Representations",
          "proficiency": "expert",
          "duration_months": 41,
          "endorsements": 55
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-16",
        "response_rate": 0.87,
        "response_time_hours": 49.7,
        "notice_days": 30,
        "github": 45.3,
        "profile_views": 236,
        "applications": 24,
        "search_appearance": 80,
        "saved": 80,
        "endorsements": 56,
        "profile_completeness": 93.3,
        "interview_completion": 0.8,
        "offer_acceptance": -1,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 49.7,
        "salary_max": 52.3,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "Haystack",
            "score": 69.6
          },
          {
            "skill": "PEFT",
            "score": 69.5
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 53.4,
        "role": 98.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 79.9,
        "logistics": 100.0,
        "penalty": 0.0,
        "retrieval": 73.8,
        "ranking": 6.3,
        "evaluation": 40.0,
        "production": 57.1,
        "assessment": 69.5
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 87.0,
        "speed": 79.3,
        "open_to_work": 100.0,
        "completeness": 93.3,
        "saved": 100.0,
        "market_demand": 84.9,
        "applications": 100.0,
        "interview": 80.0,
        "github": 45.3,
        "assessment": 69.5,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "production shipping"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Staff Machine Learning Engineer with 8.0 yrs at LinkedIn; career and skills show strong retrieval/search depth (Haystack, Information Retrieval Systems, Search Infrastructure, Search Backend). Noida, Uttar Pradesh; preferred office city; 87% recruiter response; last active 2026-04-16; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Staff Machine Learning Engineer",
          "company": "LinkedIn",
          "industry": "Internet",
          "duration_months": 43,
          "is_current": true,
          "description": "Designed the ranking layer for the company's flagship product: how do we surface the right thing at the right time, across millions of items, for millions of users. The hard problem was rarely the modeling - it was the data pipeline that fed the models, the evaluation framework that told us whether they worked, and the operational discipline of keeping all of it healthy in production. I owned all three across roughly 14 months."
        },
        {
          "title": "Senior Applied Scientist",
          "company": "Yellow.ai",
          "industry": "AI/ML",
          "duration_months": 52,
          "is_current": false,
          "description": "Owned the search and discovery experience end-to-end at a consumer product, from how content is represented internally through to how the most relevant results appear for each user's intent. The work spanned data infrastructure, ranking algorithms, evaluation methodology, and direct collaboration with product/PM on what 'relevance' actually means for our users. Spent a fair amount of time on the eval side - building offline metrics that actually correlated with online engagement, which turned out to be the hardest part."
        }
      ],
      "education": [
        {
          "institution": "VJTI Mumbai",
          "degree": "M.S.",
          "field_of_study": "Computer Science",
          "start_year": 2005,
          "end_year": 2010,
          "grade": "9.27 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "IIT Roorkee",
          "degree": "M.E.",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2003,
          "end_year": 2008,
          "grade": "8.06 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0030031",
      "rank": 30,
      "score": 0.7902,
      "score_100": 79.02,
      "readiness": 77.6,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Anil Joshi",
      "title": "AI Engineer",
      "headline": "AI Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 5.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Microsoft",
      "industry": "Software",
      "company_size": "10001+",
      "location": "Trivandrum, Kerala",
      "country": "India",
      "years": 5.7,
      "current_work": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.",
      "matched_skills": [
        "Information Retrieval",
        "RAG",
        "BM25",
        "Sentence Transformers",
        "Milvus",
        "Vector Search",
        "PyTorch",
        "Python"
      ],
      "all_skills": [
        {
          "name": "Information Retrieval",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 28
        },
        {
          "name": "PyTorch",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 5
        },
        {
          "name": "Object Detection",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 8
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 57,
          "endorsements": 17
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 40
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 45,
          "endorsements": 25
        },
        {
          "name": "OpenCV",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 7
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 24
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 28
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 15
        },
        {
          "name": "Time Series",
          "proficiency": "intermediate",
          "duration_months": 15,
          "endorsements": 7
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 14
        },
        {
          "name": "YOLO",
          "proficiency": "intermediate",
          "duration_months": 13,
          "endorsements": 10
        },
        {
          "name": "Milvus",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 3
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 37
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 55
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-05-22",
        "response_rate": 0.94,
        "response_time_hours": 71.5,
        "notice_days": 30,
        "github": 32.4,
        "profile_views": 281,
        "applications": 21,
        "search_appearance": 784,
        "saved": 13,
        "endorsements": 92,
        "profile_completeness": 81.2,
        "interview_completion": 0.81,
        "offer_acceptance": -1,
        "work_mode": "remote",
        "relocate": false,
        "salary_min": 39.3,
        "salary_max": 63.5,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "PyTorch",
            "score": 91.0
          },
          {
            "skill": "Object Detection",
            "score": 77.3
          },
          {
            "skill": "NLP",
            "score": 63.5
          },
          {
            "skill": "Python",
            "score": 53.9
          },
          {
            "skill": "Information Retrieval",
            "score": 53.7
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 66.8,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 77.4,
        "logistics": 70.8,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 38.0,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 65.5
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 94.0,
        "speed": 70.2,
        "open_to_work": 35.0,
        "completeness": 81.2,
        "saved": 60.1,
        "market_demand": 84.6,
        "applications": 100.0,
        "interview": 81.0,
        "github": 32.4,
        "assessment": 65.5,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "AI Engineer with 5.7 yrs at Microsoft; career and skills show strong retrieval/search depth (Information Retrieval, RAG, BM25, Sentence Transformers). Trivandrum, Kerala; India, non-preferred city; 94% recruiter response; last active 2026-05-22; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "AI Engineer",
          "company": "Microsoft",
          "industry": "Software",
          "duration_months": 13,
          "is_current": true,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Senior Data Scientist",
          "company": "Amazon",
          "industry": "Internet",
          "duration_months": 27,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Search Engineer",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 27,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "IIT Bombay",
          "degree": "B.Sc",
          "field_of_study": "Data Science",
          "start_year": 2004,
          "end_year": 2008,
          "grade": "65%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0078002",
      "rank": 31,
      "score": 0.7894,
      "score_100": 78.94,
      "readiness": 73.9,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Reyansh Sharma",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 6.3 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Meta",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Coimbatore, Tamil Nadu",
      "country": "India",
      "years": 6.3,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "pgvector",
        "Weaviate",
        "LlamaIndex",
        "Haystack",
        "FastAPI",
        "TensorFlow",
        "BentoML",
        "scikit-learn"
      ],
      "all_skills": [
        {
          "name": "Statistical Modeling",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 34
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 60,
          "endorsements": 2
        },
        {
          "name": "Flask",
          "proficiency": "intermediate",
          "duration_months": 34,
          "endorsements": 14
        },
        {
          "name": "FastAPI",
          "proficiency": "beginner",
          "duration_months": 18,
          "endorsements": 11
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 80,
          "endorsements": 3
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 50,
          "endorsements": 40
        },
        {
          "name": "BentoML",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 32
        },
        {
          "name": "scikit-learn",
          "proficiency": "advanced",
          "duration_months": 30,
          "endorsements": 22
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 23
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 35
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 11
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 27
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 11
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 59
        },
        {
          "name": "LangChain",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 0
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 45,
          "endorsements": 45
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-21",
        "response_rate": 0.86,
        "response_time_hours": 54.2,
        "notice_days": 60,
        "github": 50.6,
        "profile_views": 173,
        "applications": 12,
        "search_appearance": 798,
        "saved": 6,
        "endorsements": 53,
        "profile_completeness": 85.8,
        "interview_completion": 0.86,
        "offer_acceptance": 0.41,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 35.3,
        "salary_max": 52.2,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "pgvector",
            "score": 80.2
          },
          {
            "skill": "Statistical Modeling",
            "score": 68.7
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 62.7,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 82.7,
        "logistics": 70.2,
        "penalty": 0.0,
        "retrieval": 78.5,
        "ranking": 38.0,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 80.2
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 86.0,
        "speed": 77.4,
        "open_to_work": 100.0,
        "completeness": 85.8,
        "saved": 44.3,
        "market_demand": 76.3,
        "applications": 84.2,
        "interview": 86.0,
        "github": 50.6,
        "assessment": 80.2,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Machine Learning Engineer with 6.3 yrs at Meta; career and skills show strong retrieval/search depth (pgvector, Weaviate, LlamaIndex, Haystack). Coimbatore, Tamil Nadu; India, non-preferred city; 86% recruiter response; last active 2026-04-21; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "Meta",
          "industry": "Internet",
          "duration_months": 34,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Genpact AI",
          "industry": "AI Services",
          "duration_months": 30,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Senior Data Scientist",
          "company": "CRED",
          "industry": "Fintech",
          "duration_months": 10,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "NIT Trichy",
          "degree": "M.E.",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2012,
          "end_year": 2016,
          "grade": "84%",
          "tier": "tier_1"
        },
        {
          "institution": "IIT Guwahati",
          "degree": "B.E.",
          "field_of_study": "Machine Learning",
          "start_year": 2014,
          "end_year": 2017,
          "grade": "7.90 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0060054",
      "rank": 32,
      "score": 0.7873,
      "score_100": 78.73,
      "readiness": 77.0,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Aisha Kapoor",
      "title": "AI Engineer",
      "headline": "AI Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 6.4 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Mad Street Den",
      "industry": "AI/ML",
      "company_size": "201-500",
      "location": "Jaipur, Rajasthan",
      "country": "India",
      "years": 6.4,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "Weaviate",
        "FAISS",
        "Elasticsearch",
        "Semantic Search",
        "Recommendation Systems",
        "TensorFlow",
        "Feature Engineering"
      ],
      "all_skills": [
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 14
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 41
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 18,
          "endorsements": 11
        },
        {
          "name": "FAISS",
          "proficiency": "advanced",
          "duration_months": 59,
          "endorsements": 37
        },
        {
          "name": "Time Series",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 5
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 4
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 77,
          "endorsements": 30
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 17
        },
        {
          "name": "Semantic Search",
          "proficiency": "expert",
          "duration_months": 70,
          "endorsements": 19
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 87,
          "endorsements": 39
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-03-17",
        "response_rate": 0.86,
        "response_time_hours": 66.3,
        "notice_days": 15,
        "github": -1,
        "profile_views": 17,
        "applications": 3,
        "search_appearance": 256,
        "saved": 39,
        "endorsements": 114,
        "profile_completeness": 67.3,
        "interview_completion": 0.78,
        "offer_acceptance": -1,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 39.0,
        "salary_max": 40.3,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "TensorFlow",
            "score": 89.9
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 69.4,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 64.5,
        "logistics": 85.6,
        "penalty": 0.0,
        "retrieval": 88.0,
        "ranking": 70.5,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 89.9
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 86.0,
        "speed": 72.4,
        "open_to_work": 35.0,
        "completeness": 67.3,
        "saved": 83.9,
        "market_demand": 71.8,
        "applications": 45.5,
        "interview": 78.0,
        "github": 18.0,
        "assessment": 89.9,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "AI Engineer with 6.4 yrs at Mad Street Den; career and skills show retrieval plus ranking/recommendation depth (Weaviate, FAISS, Elasticsearch, Semantic Search). Jaipur, Rajasthan; India, relocation-ready; 86% recruiter response; last active 2026-03-17; 15-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "AI Engineer",
          "company": "Mad Street Den",
          "industry": "AI/ML",
          "duration_months": 31,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "Zomato",
          "industry": "Food Delivery",
          "duration_months": 24,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "AI Engineer",
          "company": "Uber",
          "industry": "Transportation",
          "duration_months": 21,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "RV College of Engineering",
          "degree": "Ph.D",
          "field_of_study": "Data Science",
          "start_year": 2006,
          "end_year": 2009,
          "grade": "9.44 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0074225",
      "rank": 33,
      "score": 0.7839,
      "score_100": 78.39,
      "readiness": 71.5,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Kabir Agarwal",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 4.3 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Unacademy",
      "industry": "EdTech",
      "company_size": "5001-10000",
      "location": "Vizag, Andhra Pradesh",
      "country": "India",
      "years": 4.3,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "Semantic Search",
        "Elasticsearch",
        "Milvus",
        "Haystack",
        "Qdrant",
        "Vector Search",
        "Recommendation Systems",
        "Apache Beam"
      ],
      "all_skills": [
        {
          "name": "Apache Beam",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 7
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "intermediate",
          "duration_months": 24,
          "endorsements": 5
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 36
        },
        {
          "name": "Semantic Search",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 3
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 43
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 37,
          "endorsements": 42
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 46
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 56
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 59,
          "endorsements": 18
        },
        {
          "name": "Haystack",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 11
        },
        {
          "name": "scikit-learn",
          "proficiency": "advanced",
          "duration_months": 29,
          "endorsements": 32
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 62,
          "endorsements": 17
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 22
        },
        {
          "name": "CI/CD",
          "proficiency": "beginner",
          "duration_months": 10,
          "endorsements": 8
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 14
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 59
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 45
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-20",
        "response_rate": 0.91,
        "response_time_hours": 34.1,
        "notice_days": 120,
        "github": 54.3,
        "profile_views": 113,
        "applications": 11,
        "search_appearance": 654,
        "saved": 53,
        "endorsements": 122,
        "profile_completeness": 74.0,
        "interview_completion": 0.8,
        "offer_acceptance": -1,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 35.8,
        "salary_max": 46.7,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "Semantic Search",
            "score": 89.2
          },
          {
            "skill": "Recommendation Systems",
            "score": 58.5
          },
          {
            "skill": "ASR",
            "score": 56.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 75.7,
        "role": 91.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 86.8,
        "logistics": 61.1,
        "penalty": 4.5,
        "retrieval": 100.0,
        "ranking": 59.2,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 73.8
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 91.0,
        "speed": 85.8,
        "open_to_work": 100.0,
        "completeness": 74.0,
        "saved": 90.8,
        "market_demand": 88.0,
        "applications": 81.6,
        "interview": 80.0,
        "github": 54.3,
        "assessment": 73.8,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "India, relocation-ready",
      "reasoning": "Machine Learning Engineer with 4.3 yrs at Unacademy; career and skills show retrieval plus ranking/recommendation depth (Semantic Search, Elasticsearch, Milvus, Haystack). Vizag, Andhra Pradesh; India, relocation-ready; 91% recruiter response; last active 2026-05-20; 120-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "Unacademy",
          "industry": "EdTech",
          "duration_months": 26,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Mad Street Den",
          "industry": "AI/ML",
          "duration_months": 25,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "Thapar University",
          "degree": "M.S.",
          "field_of_study": "Computer Engineering",
          "start_year": 2001,
          "end_year": 2005,
          "grade": "73%",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0087364",
      "rank": 34,
      "score": 0.7824,
      "score_100": 78.24,
      "readiness": 69.8,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Pari Rao",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 4.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Glance",
      "industry": "AI/ML",
      "company_size": "501-1000",
      "location": "Gurgaon, Haryana",
      "country": "India",
      "years": 4.9,
      "current_work": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.",
      "matched_skills": [
        "Qdrant",
        "Milvus",
        "LlamaIndex",
        "Pinecone",
        "RAG",
        "OpenSearch",
        "Elasticsearch",
        "Deep Learning"
      ],
      "all_skills": [
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 38,
          "endorsements": 13
        },
        {
          "name": "TypeScript",
          "proficiency": "beginner",
          "duration_months": 6,
          "endorsements": 11
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 60
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 33
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 91,
          "endorsements": 30
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 10
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 51
        },
        {
          "name": "Data Science",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 14
        },
        {
          "name": "RAG",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 35
        },
        {
          "name": "Speech Recognition",
          "proficiency": "intermediate",
          "duration_months": 33,
          "endorsements": 15
        },
        {
          "name": "Object Detection",
          "proficiency": "advanced",
          "duration_months": 30,
          "endorsements": 4
        },
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 34,
          "endorsements": 14
        },
        {
          "name": "Time Series",
          "proficiency": "intermediate",
          "duration_months": 14,
          "endorsements": 10
        },
        {
          "name": "Docker",
          "proficiency": "intermediate",
          "duration_months": 27,
          "endorsements": 2
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 45,
          "endorsements": 24
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 50,
          "endorsements": 12
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-30",
        "response_rate": 0.48,
        "response_time_hours": 54.5,
        "notice_days": 30,
        "github": 21.8,
        "profile_views": 126,
        "applications": 7,
        "search_appearance": 552,
        "saved": 50,
        "endorsements": 126,
        "profile_completeness": 60.2,
        "interview_completion": 0.84,
        "offer_acceptance": 0.72,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 36.4,
        "salary_max": 48.1,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "Milvus",
            "score": 78.9
          },
          {
            "skill": "LlamaIndex",
            "score": 73.4
          },
          {
            "skill": "Qdrant",
            "score": 67.4
          },
          {
            "skill": "Deep Learning",
            "score": 67.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 61.4,
        "role": 96.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 63.7,
        "logistics": 91.4,
        "penalty": 0.0,
        "retrieval": 92.5,
        "ranking": 31.7,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 71.7
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 48.0,
        "speed": 77.3,
        "open_to_work": 35.0,
        "completeness": 60.2,
        "saved": 89.5,
        "market_demand": 87.6,
        "applications": 68.3,
        "interview": 84.0,
        "github": 21.8,
        "assessment": 71.7,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Recommendation Systems Engineer with 4.9 yrs at Glance; career and skills show strong retrieval/search depth (Qdrant, Milvus, LlamaIndex, Pinecone). Gurgaon, Haryana; tier-1 India city; 48% recruiter response; last active 2026-04-30; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Glance",
          "industry": "AI/ML",
          "duration_months": 45,
          "is_current": true,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "Rephrase.ai",
          "industry": "AI/ML",
          "duration_months": 13,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "Bharati Vidyapeeth",
          "degree": "B.E.",
          "field_of_study": "Computer Engineering",
          "start_year": 2017,
          "end_year": 2022,
          "grade": "7.26 CGPA",
          "tier": "tier_3"
        },
        {
          "institution": "Anna University",
          "degree": "B.Tech",
          "field_of_study": "Machine Learning",
          "start_year": 2012,
          "end_year": 2016,
          "grade": "88%",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0064270",
      "rank": 35,
      "score": 0.7824,
      "score_100": 78.24,
      "readiness": 75.7,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Anil Rao",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 4.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Verloop.io",
      "industry": "Conversational AI",
      "company_size": "51-200",
      "location": "Pune, Maharashtra",
      "country": "India",
      "years": 4.2,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "LlamaIndex",
        "Sentence Transformers",
        "Embeddings",
        "OpenSearch",
        "Elasticsearch",
        "BM25",
        "Haystack",
        "Learning to Rank"
      ],
      "all_skills": [
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 60,
          "endorsements": 24
        },
        {
          "name": "BentoML",
          "proficiency": "intermediate",
          "duration_months": 27,
          "endorsements": 9
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 35
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 88,
          "endorsements": 19
        },
        {
          "name": "Angular",
          "proficiency": "intermediate",
          "duration_months": 32,
          "endorsements": 12
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 15
        },
        {
          "name": "Microservices",
          "proficiency": "beginner",
          "duration_months": 16,
          "endorsements": 11
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 73,
          "endorsements": 4
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 34
        },
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 31,
          "endorsements": 9
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 96,
          "endorsements": 38
        },
        {
          "name": "OpenSearch",
          "proficiency": "advanced",
          "duration_months": 59,
          "endorsements": 12
        },
        {
          "name": "React",
          "proficiency": "intermediate",
          "duration_months": 28,
          "endorsements": 12
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 45,
          "endorsements": 0
        },
        {
          "name": "YOLO",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 0
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 10
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 37
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 38,
          "endorsements": 32
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-03-20",
        "response_rate": 0.82,
        "response_time_hours": 74.5,
        "notice_days": 45,
        "github": -1,
        "profile_views": 170,
        "applications": 1,
        "search_appearance": 692,
        "saved": 22,
        "endorsements": 45,
        "profile_completeness": 70.1,
        "interview_completion": 0.69,
        "offer_acceptance": 0.41,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 26.6,
        "salary_max": 50.9,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "LlamaIndex",
            "score": 73.5
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 73.5,
        "role": 91.0,
        "experience": 82.0,
        "company": 58.0,
        "behavior": 62.1,
        "logistics": 91.8,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 69.4,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 73.5
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 82.0,
        "speed": 69.0,
        "open_to_work": 35.0,
        "completeness": 70.1,
        "saved": 71.4,
        "market_demand": 82.9,
        "applications": 22.8,
        "interview": 69.0,
        "github": 18.0,
        "assessment": 73.5,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Applied ML Engineer with 4.2 yrs at Verloop.io; career and skills show retrieval plus ranking/recommendation depth (LlamaIndex, Sentence Transformers, Embeddings, OpenSearch). Pune, Maharashtra; preferred office city; 82% recruiter response; last active 2026-03-20; 45-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Verloop.io",
          "industry": "Conversational AI",
          "duration_months": 37,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "AI Engineer",
          "company": "Uber",
          "industry": "Transportation",
          "duration_months": 13,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        }
      ],
      "education": [
        {
          "institution": "SRM Chennai",
          "degree": "M.Sc",
          "field_of_study": "Computer Science",
          "start_year": 2017,
          "end_year": 2021,
          "grade": "6.56 CGPA",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0037944",
      "rank": 36,
      "score": 0.782,
      "score_100": 78.2,
      "readiness": 71.1,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Suresh Singh",
      "title": "Senior Data Scientist",
      "headline": "Senior Data Scientist | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 4.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Vedantu",
      "industry": "EdTech",
      "company_size": "1001-5000",
      "location": "Jaipur, Rajasthan",
      "country": "India",
      "years": 4.9,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "Vector Search",
        "OpenSearch",
        "Embeddings",
        "LlamaIndex",
        "Sentence Transformers",
        "BM25",
        "Feature Engineering",
        "Machine Learning"
      ],
      "all_skills": [
        {
          "name": "Next.js",
          "proficiency": "intermediate",
          "duration_months": 34,
          "endorsements": 9
        },
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 20,
          "endorsements": 8
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 65,
          "endorsements": 3
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 73,
          "endorsements": 48
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 58
        },
        {
          "name": "QLoRA",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 56
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 1
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 72,
          "endorsements": 48
        },
        {
          "name": "CNN",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 15
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 96,
          "endorsements": 48
        },
        {
          "name": "NLP",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 45
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 34
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 81,
          "endorsements": 54
        },
        {
          "name": "Terraform",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 7
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 11
        },
        {
          "name": "Apache Flink",
          "proficiency": "intermediate",
          "duration_months": 16,
          "endorsements": 2
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 16
        },
        {
          "name": "PEFT",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 15
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-22",
        "response_rate": 0.42,
        "response_time_hours": 33.6,
        "notice_days": 30,
        "github": 83.0,
        "profile_views": 266,
        "applications": 16,
        "search_appearance": 898,
        "saved": 17,
        "endorsements": 132,
        "profile_completeness": 73.3,
        "interview_completion": 0.62,
        "offer_acceptance": -1,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 42.3,
        "salary_max": 43.4,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "Vector Search",
            "score": 91.6
          },
          {
            "skill": "Machine Learning",
            "score": 90.6
          },
          {
            "skill": "QLoRA",
            "score": 88.8
          },
          {
            "skill": "ASR",
            "score": 80.1
          },
          {
            "skill": "OpenSearch",
            "score": 66.6
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 70.3,
        "role": 76.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 73.4,
        "logistics": 77.0,
        "penalty": 0.0,
        "retrieval": 96.2,
        "ranking": 31.7,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 84.4
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 42.0,
        "speed": 86.0,
        "open_to_work": 100.0,
        "completeness": 73.3,
        "saved": 65.8,
        "market_demand": 86.7,
        "applications": 93.1,
        "interview": 62.0,
        "github": 83.0,
        "assessment": 84.4,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Senior Data Scientist with 4.9 yrs at Vedantu; career and skills show strong retrieval/search depth (Vector Search, OpenSearch, Embeddings, LlamaIndex). Jaipur, Rajasthan; India, non-preferred city; 42% recruiter response; last active 2026-03-22; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Data Scientist",
          "company": "Vedantu",
          "industry": "EdTech",
          "duration_months": 37,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Applied ML Engineer",
          "company": "PolicyBazaar",
          "industry": "Insurance Tech",
          "duration_months": 21,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "IISc Bangalore",
          "degree": "M.E.",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2002,
          "end_year": 2006,
          "grade": "77%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0039383",
      "rank": 37,
      "score": 0.7811,
      "score_100": 78.11,
      "readiness": 68.1,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Riya Malhotra",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 7.1 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Meesho",
      "industry": "E-commerce",
      "company_size": "1001-5000",
      "location": "Gurgaon, Haryana",
      "country": "India",
      "years": 7.1,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "FAISS",
        "Vector Search",
        "Elasticsearch",
        "pgvector",
        "Recommendation Systems",
        "Kubeflow",
        "Feature Engineering",
        "MLflow"
      ],
      "all_skills": [
        {
          "name": "GANs",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 0
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 67,
          "endorsements": 38
        },
        {
          "name": "ASR",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 11
        },
        {
          "name": "Kubeflow",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 16
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 47
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 58,
          "endorsements": 8
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 12
        },
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 20,
          "endorsements": 1
        },
        {
          "name": "NLP",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 59
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 46
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 15
        },
        {
          "name": "MLflow",
          "proficiency": "intermediate",
          "duration_months": 28,
          "endorsements": 14
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 37
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 49,
          "endorsements": 26
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 2
        },
        {
          "name": "CNN",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 55
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-19",
        "response_rate": 0.61,
        "response_time_hours": 67.6,
        "notice_days": 90,
        "github": 86.4,
        "profile_views": 283,
        "applications": 18,
        "search_appearance": 388,
        "saved": 34,
        "endorsements": 16,
        "profile_completeness": 89.0,
        "interview_completion": 0.97,
        "offer_acceptance": 0.78,
        "work_mode": "onsite",
        "relocate": true,
        "salary_min": 34.9,
        "salary_max": 39.7,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "Hugging Face Transformers",
            "score": 85.8
          },
          {
            "skill": "Recommendation Systems",
            "score": 64.9
          },
          {
            "skill": "FAISS",
            "score": 62.8
          },
          {
            "skill": "GANs",
            "score": 59.0
          },
          {
            "skill": "Kubeflow",
            "score": 50.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 71.3,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 77.1,
        "logistics": 72.2,
        "penalty": 4.5,
        "retrieval": 94.7,
        "ranking": 57.0,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 65.9
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 61.0,
        "speed": 71.8,
        "open_to_work": 100.0,
        "completeness": 89.0,
        "saved": 80.9,
        "market_demand": 84.0,
        "applications": 96.7,
        "interview": 97.0,
        "github": 86.4,
        "assessment": 65.9,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "tier-1 India city",
      "reasoning": "Applied ML Engineer with 7.1 yrs at Meesho; career and skills show retrieval plus ranking/recommendation depth (FAISS, Vector Search, Elasticsearch, pgvector). Gurgaon, Haryana; tier-1 India city; 61% recruiter response; last active 2026-03-19; 90-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Meesho",
          "industry": "E-commerce",
          "duration_months": 34,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Swiggy",
          "industry": "Food Delivery",
          "duration_months": 13,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "NLP Engineer",
          "company": "Paytm",
          "industry": "Fintech",
          "duration_months": 37,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "IISc Bangalore",
          "degree": "B.Sc",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2009,
          "end_year": 2012,
          "grade": "8.09 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0055905",
      "rank": 38,
      "score": 0.7773,
      "score_100": 77.73,
      "readiness": 75.1,
      "risk_level": "watch",
      "recruiter_ready": true,
      "name": "Anika Rao",
      "title": "Senior Machine Learning Engineer",
      "headline": "Senior Machine Learning Engineer | LLMs, RAG, Vector Search | ex-Top Tech",
      "summary": "Senior AI engineer with 8.1 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I led the migration from keyword-based ranking to a learning-to-rank model with embedded behavioral signals, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I care more about shipping a working system in 6 weeks than a theoretically perfect one in 6 months. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Flipkart",
      "industry": "E-commerce",
      "company_size": "10001+",
      "location": "London",
      "country": "UK",
      "years": 8.1,
      "current_work": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout.",
      "matched_skills": [
        "Elasticsearch",
        "Haystack",
        "OpenSearch",
        "Information Retrieval",
        "Embeddings",
        "Vector Search",
        "Python",
        "Hugging Face Transformers"
      ],
      "all_skills": [
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 80,
          "endorsements": 23
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 56
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 54
        },
        {
          "name": "Haystack",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 6
        },
        {
          "name": "Speech Recognition",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 20
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 70,
          "endorsements": 33
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 45,
          "endorsements": 34
        },
        {
          "name": "LLMs",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 50
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 57
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 57
        },
        {
          "name": "Information Retrieval",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 8
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 17
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 1
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-17",
        "response_rate": 0.87,
        "response_time_hours": 11.3,
        "notice_days": 30,
        "github": -1,
        "profile_views": 196,
        "applications": 9,
        "search_appearance": 392,
        "saved": 13,
        "endorsements": 209,
        "profile_completeness": 56.7,
        "interview_completion": 0.67,
        "offer_acceptance": 0.93,
        "work_mode": "remote",
        "relocate": false,
        "salary_min": 38.9,
        "salary_max": 64.1,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "Elasticsearch",
            "score": 83.0
          },
          {
            "skill": "ASR",
            "score": 69.5
          },
          {
            "skill": "Hugging Face Transformers",
            "score": 64.8
          },
          {
            "skill": "Haystack",
            "score": 61.8
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 77.6,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 77.7,
        "logistics": 46.8,
        "penalty": 5.0,
        "retrieval": 100.0,
        "ranking": 19.0,
        "evaluation": 100.0,
        "production": 100.0,
        "assessment": 69.9
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 87.0,
        "speed": 95.3,
        "open_to_work": 100.0,
        "completeness": 56.7,
        "saved": 60.1,
        "market_demand": 81.6,
        "applications": 75.6,
        "interview": 67.0,
        "github": 18.0,
        "assessment": 69.9,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation",
        "production shipping"
      ],
      "concerns": [
        "outside India despite India-first logistics"
      ],
      "location_label": "outside India",
      "reasoning": "Senior Machine Learning Engineer with 8.1 yrs at Flipkart; career and skills show strong retrieval/search depth (Elasticsearch, Haystack, OpenSearch, Information Retrieval). London; outside India; 87% recruiter response; last active 2026-05-17; 30-day notice; concern: outside India despite India-first logistics.",
      "career": [
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Flipkart",
          "industry": "E-commerce",
          "duration_months": 14,
          "is_current": true,
          "description": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout."
        },
        {
          "title": "Senior AI Engineer",
          "company": "Uber",
          "industry": "Transportation",
          "duration_months": 37,
          "is_current": false,
          "description": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
        },
        {
          "title": "Senior Applied Scientist",
          "company": "Rephrase.ai",
          "industry": "AI/ML",
          "duration_months": 45,
          "is_current": false,
          "description": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
        }
      ],
      "education": [
        {
          "institution": "Anna University",
          "degree": "B.Tech",
          "field_of_study": "Computer Engineering",
          "start_year": 2009,
          "end_year": 2013,
          "grade": "7.12 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "IIT Kharagpur",
          "degree": "M.S.",
          "field_of_study": "Data Science",
          "start_year": 2002,
          "end_year": 2005,
          "grade": "9.14 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0010685",
      "rank": 39,
      "score": 0.7758,
      "score_100": 77.58,
      "readiness": 74.6,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Sunil Mishra",
      "title": "NLP Engineer",
      "headline": "NLP Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 6.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Rephrase.ai",
      "industry": "AI/ML",
      "company_size": "11-50",
      "location": "Kolkata, West Bengal",
      "country": "India",
      "years": 6.7,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "LlamaIndex",
        "Information Retrieval",
        "Elasticsearch",
        "Haystack",
        "RAG",
        "Deep Learning",
        "PyTorch",
        "MLflow"
      ],
      "all_skills": [
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 50
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 47
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 56
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "intermediate",
          "duration_months": 23,
          "endorsements": 9
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 35
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 41,
          "endorsements": 43
        },
        {
          "name": "ASR",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 1
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 78,
          "endorsements": 51
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 23
        },
        {
          "name": "Java",
          "proficiency": "intermediate",
          "duration_months": 18,
          "endorsements": 13
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 60
        },
        {
          "name": "LangChain",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 15
        },
        {
          "name": "Diffusion Models",
          "proficiency": "advanced",
          "duration_months": 31,
          "endorsements": 34
        },
        {
          "name": "Haystack",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 57
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 59,
          "endorsements": 53
        },
        {
          "name": "Photoshop",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 11
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-16",
        "response_rate": 0.83,
        "response_time_hours": 77.7,
        "notice_days": 30,
        "github": -1,
        "profile_views": 246,
        "applications": 13,
        "search_appearance": 779,
        "saved": 46,
        "endorsements": 123,
        "profile_completeness": 70.7,
        "interview_completion": 0.89,
        "offer_acceptance": -1,
        "work_mode": "remote",
        "relocate": false,
        "salary_min": 22.6,
        "salary_max": 64.5,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 65.9,
        "role": 72.7,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 72.8,
        "logistics": 70.8,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 38.0,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 83.0,
        "speed": 67.6,
        "open_to_work": 100.0,
        "completeness": 70.7,
        "saved": 87.6,
        "market_demand": 92.1,
        "applications": 86.7,
        "interview": 89.0,
        "github": 18.0,
        "assessment": 50.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "NLP Engineer with 6.7 yrs at Rephrase.ai; career and skills show strong retrieval/search depth (LlamaIndex, Information Retrieval, Elasticsearch, Haystack). Kolkata, West Bengal; India, non-preferred city; 83% recruiter response; last active 2026-03-16; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "NLP Engineer",
          "company": "Rephrase.ai",
          "industry": "AI/ML",
          "duration_months": 18,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "NLP Engineer",
          "company": "Microsoft",
          "industry": "Software",
          "duration_months": 28,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Mad Street Den",
          "industry": "AI/ML",
          "duration_months": 12,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Search Engineer",
          "company": "Mad Street Den",
          "industry": "AI/ML",
          "duration_months": 21,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "Christ University",
          "degree": "B.Tech",
          "field_of_study": "Data Science",
          "start_year": 2004,
          "end_year": 2008,
          "grade": "8.80 CGPA",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0041610",
      "rank": 40,
      "score": 0.7743,
      "score_100": 77.43,
      "readiness": 71.1,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Anil Subramanian",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 6.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Zoho",
      "industry": "SaaS",
      "company_size": "10001+",
      "location": "Indore, Madhya Pradesh",
      "country": "India",
      "years": 6.7,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "Elasticsearch",
        "OpenSearch",
        "BM25",
        "Embeddings",
        "pgvector",
        "Learning to Rank",
        "Recommendation Systems",
        "Data Science"
      ],
      "all_skills": [
        {
          "name": "OpenCV",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 2
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 46
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "advanced",
          "duration_months": 47,
          "endorsements": 19
        },
        {
          "name": "Data Science",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 8
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 28
        },
        {
          "name": "GANs",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 48
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 54
        },
        {
          "name": "LangChain",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 19
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 5
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 85,
          "endorsements": 19
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 28
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 33
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 36
        },
        {
          "name": "Embeddings",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 41
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 39,
          "endorsements": 43
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 62,
          "endorsements": 38
        },
        {
          "name": "PyTorch",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 36
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-14",
        "response_rate": 0.52,
        "response_time_hours": 4.8,
        "notice_days": 30,
        "github": 52.1,
        "profile_views": 44,
        "applications": 16,
        "search_appearance": 717,
        "saved": 18,
        "endorsements": 11,
        "profile_completeness": 53.9,
        "interview_completion": 0.8,
        "offer_acceptance": 0.8,
        "work_mode": "remote",
        "relocate": true,
        "salary_min": 35.4,
        "salary_max": 59.4,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "OpenCV",
            "score": 73.0
          },
          {
            "skill": "LoRA",
            "score": 55.6
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 64.0,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 74.0,
        "logistics": 78.0,
        "penalty": 0.0,
        "retrieval": 96.2,
        "ranking": 87.3,
        "evaluation": 20.0,
        "production": 28.6,
        "assessment": 55.6
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 52.0,
        "speed": 98.0,
        "open_to_work": 100.0,
        "completeness": 53.9,
        "saved": 67.0,
        "market_demand": 71.3,
        "applications": 93.1,
        "interview": 80.0,
        "github": 52.1,
        "assessment": 55.6,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "Recommendation Systems Engineer with 6.7 yrs at Zoho; career and skills show retrieval plus ranking/recommendation depth (Elasticsearch, OpenSearch, BM25, Embeddings). Indore, Madhya Pradesh; India, relocation-ready; 52% recruiter response; last active 2026-05-14; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Zoho",
          "industry": "SaaS",
          "duration_months": 31,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Observe.AI",
          "industry": "AI/ML",
          "duration_months": 26,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Search Engineer",
          "company": "InMobi",
          "industry": "AdTech",
          "duration_months": 15,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Swiggy",
          "industry": "Food Delivery",
          "duration_months": 7,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        }
      ],
      "education": [
        {
          "institution": "SRM University",
          "degree": "B.Tech",
          "field_of_study": "Information Technology",
          "start_year": 2008,
          "end_year": 2011,
          "grade": "8.92 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "Lovely Professional University",
          "degree": "M.Tech",
          "field_of_study": "Computer Science",
          "start_year": 2014,
          "end_year": 2017,
          "grade": "8.10 CGPA",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0070398",
      "rank": 41,
      "score": 0.7721,
      "score_100": 77.21,
      "readiness": 64.0,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Riya Saxena",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 7.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Genpact AI",
      "industry": "AI Services",
      "company_size": "10001+",
      "location": "Kochi, Kerala",
      "country": "India",
      "years": 7.2,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "BM25",
        "RAG",
        "FAISS",
        "Embeddings",
        "Information Retrieval",
        "pgvector",
        "Learning to Rank",
        "Recommendation Systems"
      ],
      "all_skills": [
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 27
        },
        {
          "name": "Data Science",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 54
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 55
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 72,
          "endorsements": 26
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 29
        },
        {
          "name": "Object Detection",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 37
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 10
        },
        {
          "name": "PyTorch",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 33
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 49
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 40,
          "endorsements": 5
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 65,
          "endorsements": 24
        },
        {
          "name": "pgvector",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 40
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 37,
          "endorsements": 18
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 87,
          "endorsements": 1
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 27
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 13,
          "endorsements": 5
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-14",
        "response_rate": 0.6,
        "response_time_hours": 67.5,
        "notice_days": 120,
        "github": 63.1,
        "profile_views": 105,
        "applications": 21,
        "search_appearance": 69,
        "saved": 13,
        "endorsements": 19,
        "profile_completeness": 50.3,
        "interview_completion": 0.64,
        "offer_acceptance": 0.63,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 23.2,
        "salary_max": 61.1,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "RAG",
            "score": 84.8
          },
          {
            "skill": "BM25",
            "score": 67.5
          },
          {
            "skill": "Image Classification",
            "score": 61.9
          },
          {
            "skill": "Data Science",
            "score": 50.7
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 80.3,
        "role": 91.0,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 69.8,
        "logistics": 61.1,
        "penalty": 4.5,
        "retrieval": 100.0,
        "ranking": 96.5,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 67.7
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 60.0,
        "speed": 71.9,
        "open_to_work": 100.0,
        "completeness": 50.3,
        "saved": 60.1,
        "market_demand": 66.3,
        "applications": 100.0,
        "interview": 64.0,
        "github": 63.1,
        "assessment": 67.7,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "India, relocation-ready",
      "reasoning": "Machine Learning Engineer with 7.2 yrs at Genpact AI; career and skills show retrieval plus ranking/recommendation depth (BM25, RAG, FAISS, Embeddings). Kochi, Kerala; India, relocation-ready; 60% recruiter response; last active 2026-04-14; 120-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "Genpact AI",
          "industry": "AI Services",
          "duration_months": 37,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Uber",
          "industry": "Transportation",
          "duration_months": 22,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Mad Street Den",
          "industry": "AI/ML",
          "duration_months": 26,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "SRM University",
          "degree": "M.E.",
          "field_of_study": "Machine Learning",
          "start_year": 2005,
          "end_year": 2008,
          "grade": "7.95 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "IIT Kharagpur",
          "degree": "M.Sc",
          "field_of_study": "Computer Engineering",
          "start_year": 2008,
          "end_year": 2013,
          "grade": "81%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0005649",
      "rank": 42,
      "score": 0.7687,
      "score_100": 76.87,
      "readiness": 66.5,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Riya Kapoor",
      "title": "Senior Data Scientist",
      "headline": "Senior Data Scientist | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 7.4 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Sarvam AI",
      "industry": "AI/ML",
      "company_size": "51-200",
      "location": "Delhi, Delhi",
      "country": "India",
      "years": 7.4,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "Haystack",
        "Semantic Search",
        "Weaviate",
        "RAG",
        "Information Retrieval",
        "Recommendation Systems",
        "Deep Learning",
        "TensorFlow"
      ],
      "all_skills": [
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 52
        },
        {
          "name": "Redis",
          "proficiency": "beginner",
          "duration_months": 12,
          "endorsements": 5
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "advanced",
          "duration_months": 47,
          "endorsements": 30
        },
        {
          "name": "Object Detection",
          "proficiency": "intermediate",
          "duration_months": 29,
          "endorsements": 12
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 38,
          "endorsements": 43
        },
        {
          "name": "TensorFlow",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 35
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 63,
          "endorsements": 27
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 89,
          "endorsements": 24
        },
        {
          "name": "QLoRA",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 57
        },
        {
          "name": "OpenCV",
          "proficiency": "intermediate",
          "duration_months": 28,
          "endorsements": 15
        },
        {
          "name": "Semantic Search",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 20
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 20
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 49,
          "endorsements": 27
        },
        {
          "name": "RAG",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 56
        },
        {
          "name": "Microservices",
          "proficiency": "intermediate",
          "duration_months": 12,
          "endorsements": 0
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 60
        },
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 10
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-14",
        "response_rate": 0.57,
        "response_time_hours": 59.1,
        "notice_days": 90,
        "github": 80.7,
        "profile_views": 15,
        "applications": 5,
        "search_appearance": 595,
        "saved": 26,
        "endorsements": 51,
        "profile_completeness": 57.8,
        "interview_completion": 0.88,
        "offer_acceptance": 0.82,
        "work_mode": "remote",
        "relocate": true,
        "salary_min": 37.1,
        "salary_max": 54.8,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 77.9,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 69.1,
        "logistics": 67.5,
        "penalty": 4.5,
        "retrieval": 100.0,
        "ranking": 63.4,
        "evaluation": 100.0,
        "production": 42.9,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 57.0,
        "speed": 75.4,
        "open_to_work": 100.0,
        "completeness": 57.8,
        "saved": 75.0,
        "market_demand": 70.2,
        "applications": 58.9,
        "interview": 88.0,
        "github": 80.7,
        "assessment": 50.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "tier-1 India city",
      "reasoning": "Senior Data Scientist with 7.4 yrs at Sarvam AI; career and skills show retrieval plus ranking/recommendation depth (Haystack, Semantic Search, Weaviate, RAG). Delhi, Delhi; tier-1 India city; 57% recruiter response; last active 2026-04-14; 90-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Senior Data Scientist",
          "company": "Sarvam AI",
          "industry": "AI/ML",
          "duration_months": 18,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "Aganitha",
          "industry": "AI/ML",
          "duration_months": 12,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Senior Data Scientist",
          "company": "Amazon",
          "industry": "Internet",
          "duration_months": 42,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Search Engineer",
          "company": "Glance",
          "industry": "AI/ML",
          "duration_months": 16,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "RV College of Engineering",
          "degree": "Ph.D",
          "field_of_study": "Information Technology",
          "start_year": 2016,
          "end_year": 2019,
          "grade": "8.63 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0030468",
      "rank": 43,
      "score": 0.7681,
      "score_100": 76.81,
      "readiness": 75.6,
      "risk_level": "watch",
      "recruiter_ready": true,
      "name": "Pooja Bose",
      "title": "Senior Applied Scientist",
      "headline": "Senior Engineer | Search & Discovery Infrastructure",
      "summary": "Senior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer - the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes - over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want - so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.",
      "company": "Swiggy",
      "industry": "Food Delivery",
      "company_size": "5001-10000",
      "location": "Indore, Madhya Pradesh",
      "country": "India",
      "years": 5.4,
      "current_work": "Led the engineering team building infrastructure to surface relevant content to users at scale. The system processed billions of documents and served millions of queries with low latency. Most of the technical effort went into the boring-but-essential parts: index refresh, query understanding, ranking calibration, and the dashboards that made the system's behavior legible to product and business teams. I had a small team of 4 across this work.",
      "matched_skills": [
        "Information Retrieval Systems",
        "Text Encoders",
        "OpenSearch",
        "Milvus",
        "Content Matching",
        "Search & Discovery",
        "Ranking Systems",
        "Recommendation Systems"
      ],
      "all_skills": [
        {
          "name": "Information Retrieval Systems",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 39
        },
        {
          "name": "Content Matching",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 46
        },
        {
          "name": "Text Encoders",
          "proficiency": "expert",
          "duration_months": 77,
          "endorsements": 53
        },
        {
          "name": "TensorFlow",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 21
        },
        {
          "name": "Search & Discovery",
          "proficiency": "expert",
          "duration_months": 45,
          "endorsements": 57
        },
        {
          "name": "CNN",
          "proficiency": "intermediate",
          "duration_months": 9,
          "endorsements": 3
        },
        {
          "name": "Model Adaptation",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 45
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 67,
          "endorsements": 38
        },
        {
          "name": "Ranking Systems",
          "proficiency": "expert",
          "duration_months": 72,
          "endorsements": 42
        },
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 23,
          "endorsements": 4
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 43
        },
        {
          "name": "Computer Vision",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 32
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 85,
          "endorsements": 15
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 79,
          "endorsements": 9
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-03",
        "response_rate": 0.78,
        "response_time_hours": 4.7,
        "notice_days": 45,
        "github": 45.0,
        "profile_views": 135,
        "applications": 13,
        "search_appearance": 148,
        "saved": 17,
        "endorsements": 118,
        "profile_completeness": 84.7,
        "interview_completion": 0.82,
        "offer_acceptance": 0.56,
        "work_mode": "remote",
        "relocate": true,
        "salary_min": 46.5,
        "salary_max": 59.1,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "Sentence Transformers",
            "score": 97.0
          },
          {
            "skill": "RAG",
            "score": 80.5
          },
          {
            "skill": "Semantic Search",
            "score": 72.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 72.9,
        "role": 80.6,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 82.2,
        "logistics": 69.9,
        "penalty": 3.5,
        "retrieval": 74.5,
        "ranking": 74.7,
        "evaluation": 60.0,
        "production": 100.0,
        "assessment": 83.3
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 78.0,
        "speed": 98.0,
        "open_to_work": 100.0,
        "completeness": 84.7,
        "saved": 65.8,
        "market_demand": 76.1,
        "applications": 86.7,
        "interview": 82.0,
        "github": 45.0,
        "assessment": 83.3,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation",
        "production shipping"
      ],
      "concerns": [
        "frequent short senior-role moves may hurt founding-team stability"
      ],
      "location_label": "India, relocation-ready",
      "reasoning": "Senior Applied Scientist with 5.4 yrs at Swiggy; career and skills show retrieval plus ranking/recommendation depth (Information Retrieval Systems, Text Encoders, OpenSearch, Milvus). Indore, Madhya Pradesh; India, relocation-ready; 78% recruiter response; last active 2026-05-03; 45-day notice; concern: frequent short senior-role moves may hurt founding-team stability.",
      "career": [
        {
          "title": "Senior Applied Scientist",
          "company": "Swiggy",
          "industry": "Food Delivery",
          "duration_months": 14,
          "is_current": true,
          "description": "Led the engineering team building infrastructure to surface relevant content to users at scale. The system processed billions of documents and served millions of queries with low latency. Most of the technical effort went into the boring-but-essential parts: index refresh, query understanding, ranking calibration, and the dashboards that made the system's behavior legible to product and business teams. I had a small team of 4 across this work."
        },
        {
          "title": "Senior Applied Scientist",
          "company": "CRED",
          "industry": "Fintech",
          "duration_months": 18,
          "is_current": false,
          "description": "Shipped the personalization infrastructure: the system that learns from user behavior and improves relevance over time. Designed the offline experimentation environment, the online A/B testing framework, and the feature-engineering pipeline that connected them. Most of my time went into the boring-but-critical operational layer - feature monitoring, drift detection, retraining cadence - rather than the modeling itself. Worked closely with the product and growth teams."
        },
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Wysa",
          "industry": "HealthTech AI",
          "duration_months": 32,
          "is_current": false,
          "description": "Shipped the personalization infrastructure: the system that learns from user behavior and improves relevance over time. Designed the offline experimentation environment, the online A/B testing framework, and the feature-engineering pipeline that connected them. Most of my time went into the boring-but-critical operational layer - feature monitoring, drift detection, retraining cadence - rather than the modeling itself. Worked closely with the product and growth teams."
        }
      ],
      "education": [
        {
          "institution": "IIT Delhi",
          "degree": "M.Tech",
          "field_of_study": "Machine Learning",
          "start_year": 2013,
          "end_year": 2016,
          "grade": "73%",
          "tier": "tier_1"
        },
        {
          "institution": "IIT Delhi",
          "degree": "M.Tech",
          "field_of_study": "Machine Learning",
          "start_year": 2005,
          "end_year": 2008,
          "grade": "6.53 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0005538",
      "rank": 44,
      "score": 0.7675,
      "score_100": 76.75,
      "readiness": 72.4,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Aryan Goyal",
      "title": "Senior AI Engineer",
      "headline": "Senior Engineer | 5.9+ yrs in production systems",
      "summary": "Senior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer - the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes - over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want - so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.",
      "company": "Adobe",
      "industry": "Software",
      "company_size": "10001+",
      "location": "Kolkata, West Bengal",
      "country": "India",
      "years": 5.9,
      "current_work": "Led the engineering team building infrastructure to surface relevant content to users at scale. The system processed billions of documents and served millions of queries with low latency. Most of the technical effort went into the boring-but-essential parts: index refresh, query understanding, ranking calibration, and the dashboards that made the system's behavior legible to product and business teams. I had a small team of 4 across this work.",
      "matched_skills": [
        "Vector Representations",
        "Information Retrieval Systems",
        "pgvector",
        "Haystack",
        "Content Matching",
        "Deep Learning",
        "Apache Flink",
        "Feature Engineering"
      ],
      "all_skills": [
        {
          "name": "Project Management",
          "proficiency": "intermediate",
          "duration_months": 29,
          "endorsements": 11
        },
        {
          "name": "Vector Representations",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 34
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 32
        },
        {
          "name": "Content Matching",
          "proficiency": "advanced",
          "duration_months": 44,
          "endorsements": 17
        },
        {
          "name": "Apache Flink",
          "proficiency": "intermediate",
          "duration_months": 26,
          "endorsements": 6
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 7
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "intermediate",
          "duration_months": 22,
          "endorsements": 14
        },
        {
          "name": "QLoRA",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 11
        },
        {
          "name": "Python",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 16
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 34
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 41
        },
        {
          "name": "Data Science",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 12
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 14
        },
        {
          "name": "Information Retrieval Systems",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 56
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 91,
          "endorsements": 48
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 28
        },
        {
          "name": "Workflow Orchestration",
          "proficiency": "expert",
          "duration_months": 57,
          "endorsements": 42
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 50
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-17",
        "response_rate": 0.81,
        "response_time_hours": 28.4,
        "notice_days": 90,
        "github": 58.0,
        "profile_views": 322,
        "applications": 23,
        "search_appearance": 1147,
        "saved": 20,
        "endorsements": 68,
        "profile_completeness": 88.2,
        "interview_completion": 0.76,
        "offer_acceptance": 0.81,
        "work_mode": "onsite",
        "relocate": false,
        "salary_min": 45.7,
        "salary_max": 69.6,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Embeddings",
            "score": 92.9
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 77.5,
        "role": 100.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 85.3,
        "logistics": 59.2,
        "penalty": 8.0,
        "retrieval": 80.0,
        "ranking": 58.3,
        "evaluation": 60.0,
        "production": 100.0,
        "assessment": 92.9
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 81.0,
        "speed": 88.2,
        "open_to_work": 100.0,
        "completeness": 88.2,
        "saved": 69.3,
        "market_demand": 87.4,
        "applications": 100.0,
        "interview": 76.0,
        "github": 58.0,
        "assessment": 92.9,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation",
        "production shipping"
      ],
      "concerns": [
        "long notice period",
        "frequent short senior-role moves may hurt founding-team stability"
      ],
      "location_label": "India, non-preferred city",
      "reasoning": "Senior AI Engineer with 5.9 yrs at Adobe; career and skills show retrieval plus ranking/recommendation depth (Vector Representations, Information Retrieval Systems, pgvector, Haystack). Kolkata, West Bengal; India, non-preferred city; 81% recruiter response; last active 2026-05-17; 90-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Senior AI Engineer",
          "company": "Adobe",
          "industry": "Software",
          "duration_months": 15,
          "is_current": true,
          "description": "Led the engineering team building infrastructure to surface relevant content to users at scale. The system processed billions of documents and served millions of queries with low latency. Most of the technical effort went into the boring-but-essential parts: index refresh, query understanding, ranking calibration, and the dashboards that made the system's behavior legible to product and business teams. I had a small team of 4 across this work."
        },
        {
          "title": "Lead AI Engineer",
          "company": "Locobuzz",
          "industry": "AI/ML",
          "duration_months": 30,
          "is_current": false,
          "description": "Built systems that understand what users are looking for and connect them to the most relevant matches across a large dataset. Worked at the intersection of infrastructure, algorithms, and product judgment - none of the three were optional. Recent project was a complete overhaul of the matching layer; took it from a hand-tuned heuristic system to one with explicit modeling and evaluation. The team grew from just me to 6 engineers over the course of that work."
        },
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 14,
          "is_current": false,
          "description": "Built systems that understand what users are looking for and connect them to the most relevant matches across a large dataset. Worked at the intersection of infrastructure, algorithms, and product judgment - none of the three were optional. Recent project was a complete overhaul of the matching layer; took it from a hand-tuned heuristic system to one with explicit modeling and evaluation. The team grew from just me to 6 engineers over the course of that work."
        },
        {
          "title": "Lead AI Engineer",
          "company": "Glance",
          "industry": "AI/ML",
          "duration_months": 10,
          "is_current": false,
          "description": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month."
        }
      ],
      "education": [
        {
          "institution": "SRM University",
          "degree": "B.Tech",
          "field_of_study": "Data Science",
          "start_year": 2003,
          "end_year": 2008,
          "grade": "8.86 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0083307",
      "rank": 45,
      "score": 0.7668,
      "score_100": 76.68,
      "readiness": 62.0,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Neha Patel",
      "title": "Search Engineer",
      "headline": "Search Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 7.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "CRED",
      "industry": "Fintech",
      "company_size": "1001-5000",
      "location": "Vizag, Andhra Pradesh",
      "country": "India",
      "years": 7.8,
      "current_work": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.",
      "matched_skills": [
        "Embeddings",
        "Pinecone",
        "Weaviate",
        "Semantic Search",
        "Vector Search",
        "pgvector",
        "Learning to Rank",
        "scikit-learn"
      ],
      "all_skills": [
        {
          "name": "OpenCV",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 24
        },
        {
          "name": "scikit-learn",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 53
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 5
        },
        {
          "name": "Image Classification",
          "proficiency": "intermediate",
          "duration_months": 32,
          "endorsements": 8
        },
        {
          "name": "Weights & Biases",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 5
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 11
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 35
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 14
        },
        {
          "name": "GCP",
          "proficiency": "beginner",
          "duration_months": 13,
          "endorsements": 12
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 64,
          "endorsements": 58
        },
        {
          "name": "Semantic Search",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 20
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 88,
          "endorsements": 55
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 19
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 16
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 81,
          "endorsements": 33
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 60,
          "endorsements": 7
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 2
        },
        {
          "name": "Data Science",
          "proficiency": "intermediate",
          "duration_months": 16,
          "endorsements": 9
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-21",
        "response_rate": 0.7,
        "response_time_hours": 25.7,
        "notice_days": 120,
        "github": 69.2,
        "profile_views": 95,
        "applications": 22,
        "search_appearance": 233,
        "saved": 28,
        "endorsements": 145,
        "profile_completeness": 53.0,
        "interview_completion": 0.83,
        "offer_acceptance": 0.51,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 23.8,
        "salary_max": 38.7,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 70.0,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 75.1,
        "logistics": 52.5,
        "penalty": 4.5,
        "retrieval": 100.0,
        "ranking": 52.1,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 70.0,
        "speed": 89.3,
        "open_to_work": 100.0,
        "completeness": 53.0,
        "saved": 76.6,
        "market_demand": 79.4,
        "applications": 100.0,
        "interview": 83.0,
        "github": 69.2,
        "assessment": 50.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "India, non-preferred city",
      "reasoning": "Search Engineer with 7.8 yrs at CRED; career and skills show strong retrieval/search depth (Embeddings, Pinecone, Weaviate, Semantic Search). Vizag, Andhra Pradesh; India, non-preferred city; 70% recruiter response; last active 2026-03-21; 120-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Search Engineer",
          "company": "CRED",
          "industry": "Fintech",
          "duration_months": 20,
          "is_current": true,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Netflix",
          "industry": "Media",
          "duration_months": 51,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Ola",
          "industry": "Transportation",
          "duration_months": 14,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "NLP Engineer",
          "company": "Saarthi.ai",
          "industry": "Voice AI",
          "duration_months": 7,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        }
      ],
      "education": [
        {
          "institution": "COEP Pune",
          "degree": "B.Sc",
          "field_of_study": "Machine Learning",
          "start_year": 2007,
          "end_year": 2011,
          "grade": "8.89 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "VIT Chennai",
          "degree": "Ph.D",
          "field_of_study": "Computer Engineering",
          "start_year": 2012,
          "end_year": 2015,
          "grade": "90%",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0099806",
      "rank": 46,
      "score": 0.7658,
      "score_100": 76.58,
      "readiness": 76.5,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Pranav Subramanian",
      "title": "AI Engineer",
      "headline": "AI Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 4.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Mad Street Den",
      "industry": "AI/ML",
      "company_size": "201-500",
      "location": "Bhubaneswar, Odisha",
      "country": "India",
      "years": 4.6,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "RAG",
        "pgvector",
        "FAISS",
        "Embeddings",
        "Sentence Transformers",
        "Weaviate",
        "Qdrant",
        "Elasticsearch"
      ],
      "all_skills": [
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 6
        },
        {
          "name": "OpenCV",
          "proficiency": "intermediate",
          "duration_months": 14,
          "endorsements": 1
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 18
        },
        {
          "name": "RAG",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 9
        },
        {
          "name": "Agile",
          "proficiency": "intermediate",
          "duration_months": 23,
          "endorsements": 14
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 37
        },
        {
          "name": "Speech Recognition",
          "proficiency": "intermediate",
          "duration_months": 34,
          "endorsements": 15
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 34,
          "endorsements": 0
        },
        {
          "name": "pgvector",
          "proficiency": "advanced",
          "duration_months": 18,
          "endorsements": 30
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 58,
          "endorsements": 26
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 89,
          "endorsements": 14
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 7
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 27
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 35
        },
        {
          "name": "dbt",
          "proficiency": "intermediate",
          "duration_months": 16,
          "endorsements": 7
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 63,
          "endorsements": 58
        },
        {
          "name": "Elasticsearch",
          "proficiency": "advanced",
          "duration_months": 56,
          "endorsements": 10
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 46
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-05",
        "response_rate": 0.76,
        "response_time_hours": 33.0,
        "notice_days": 30,
        "github": 86.9,
        "profile_views": 129,
        "applications": 1,
        "search_appearance": 401,
        "saved": 9,
        "endorsements": 70,
        "profile_completeness": 90.1,
        "interview_completion": 0.85,
        "offer_acceptance": 0.38,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 31.8,
        "salary_max": 45.6,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "LoRA",
            "score": 69.0
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 59.3,
        "role": 76.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 80.8,
        "logistics": 85.6,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 31.7,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 69.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 76.0,
        "speed": 86.2,
        "open_to_work": 100.0,
        "completeness": 90.1,
        "saved": 52.4,
        "market_demand": 74.9,
        "applications": 22.8,
        "interview": 85.0,
        "github": 86.9,
        "assessment": 69.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "AI Engineer with 4.6 yrs at Mad Street Den; career and skills show strong retrieval/search depth (RAG, pgvector, FAISS, Embeddings). Bhubaneswar, Odisha; India, relocation-ready; 76% recruiter response; last active 2026-05-05; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "AI Engineer",
          "company": "Mad Street Den",
          "industry": "AI/ML",
          "duration_months": 33,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "upGrad",
          "industry": "EdTech",
          "duration_months": 21,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "IIT Roorkee",
          "degree": "M.Tech",
          "field_of_study": "Computer Engineering",
          "start_year": 2016,
          "end_year": 2019,
          "grade": "68%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0011162",
      "rank": 47,
      "score": 0.7638,
      "score_100": 76.38,
      "readiness": 67.2,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Nisha Sharma",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 5.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "upGrad",
      "industry": "EdTech",
      "company_size": "1001-5000",
      "location": "Coimbatore, Tamil Nadu",
      "country": "India",
      "years": 5.8,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "FAISS",
        "Vector Search",
        "Milvus",
        "OpenSearch",
        "Sentence Transformers",
        "Pinecone",
        "Weaviate",
        "Embeddings"
      ],
      "all_skills": [
        {
          "name": "Weights & Biases",
          "proficiency": "intermediate",
          "duration_months": 10,
          "endorsements": 13
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 34
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 30
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 31
        },
        {
          "name": "CNN",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 18
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 35
        },
        {
          "name": "Milvus",
          "proficiency": "advanced",
          "duration_months": 59,
          "endorsements": 0
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 89,
          "endorsements": 45
        },
        {
          "name": "Django",
          "proficiency": "intermediate",
          "duration_months": 20,
          "endorsements": 9
        },
        {
          "name": "Kubeflow",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 19
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "advanced",
          "duration_months": 56,
          "endorsements": 40
        },
        {
          "name": "gRPC",
          "proficiency": "beginner",
          "duration_months": 6,
          "endorsements": 14
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 78,
          "endorsements": 28
        },
        {
          "name": "Python",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 44
        },
        {
          "name": "PEFT",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 0
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 33
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 1
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-10",
        "response_rate": 0.75,
        "response_time_hours": 45.3,
        "notice_days": 90,
        "github": 34.3,
        "profile_views": 63,
        "applications": 15,
        "search_appearance": 216,
        "saved": 63,
        "endorsements": 177,
        "profile_completeness": 85.6,
        "interview_completion": 0.66,
        "offer_acceptance": 0.58,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 35.1,
        "salary_max": 58.5,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 63.3,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 77.4,
        "logistics": 69.3,
        "penalty": 4.5,
        "retrieval": 100.0,
        "ranking": 38.0,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 75.0,
        "speed": 81.1,
        "open_to_work": 100.0,
        "completeness": 85.6,
        "saved": 94.6,
        "market_demand": 82.3,
        "applications": 91.1,
        "interview": 66.0,
        "github": 34.3,
        "assessment": 50.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "India, relocation-ready",
      "reasoning": "Recommendation Systems Engineer with 5.8 yrs at upGrad; career and skills show strong retrieval/search depth (FAISS, Vector Search, Milvus, OpenSearch). Coimbatore, Tamil Nadu; India, relocation-ready; 75% recruiter response; last active 2026-05-10; 90-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "upGrad",
          "industry": "EdTech",
          "duration_months": 25,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "Meesho",
          "industry": "E-commerce",
          "duration_months": 28,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 15,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        }
      ],
      "education": [
        {
          "institution": "PES University",
          "degree": "M.S.",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2005,
          "end_year": 2009,
          "grade": "8.16 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "IIT Kharagpur",
          "degree": "M.S.",
          "field_of_study": "Data Science",
          "start_year": 2004,
          "end_year": 2009,
          "grade": "8.97 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0044855",
      "rank": 48,
      "score": 0.7637,
      "score_100": 76.37,
      "readiness": 68.7,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Kavya Joshi",
      "title": "Senior Data Scientist",
      "headline": "Senior Data Scientist | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 6.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Flipkart",
      "industry": "E-commerce",
      "company_size": "10001+",
      "location": "Coimbatore, Tamil Nadu",
      "country": "India",
      "years": 6.6,
      "current_work": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.",
      "matched_skills": [
        "OpenSearch",
        "Information Retrieval",
        "Pinecone",
        "Vector Search",
        "Qdrant",
        "Embeddings",
        "Learning to Rank",
        "BentoML"
      ],
      "all_skills": [
        {
          "name": "Object Detection",
          "proficiency": "advanced",
          "duration_months": 29,
          "endorsements": 13
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 16
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 59
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 81,
          "endorsements": 12
        },
        {
          "name": "BentoML",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 29
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 91,
          "endorsements": 3
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 41
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 81,
          "endorsements": 28
        },
        {
          "name": "Vector Search",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 6
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 33
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 7
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 27
        },
        {
          "name": "Data Science",
          "proficiency": "intermediate",
          "duration_months": 35,
          "endorsements": 12
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 54
        },
        {
          "name": "Image Classification",
          "proficiency": "intermediate",
          "duration_months": 9,
          "endorsements": 13
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 44
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 49
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-24",
        "response_rate": 0.57,
        "response_time_hours": 3.6,
        "notice_days": 60,
        "github": 46.7,
        "profile_views": 219,
        "applications": 3,
        "search_appearance": 821,
        "saved": 43,
        "endorsements": 67,
        "profile_completeness": 93.5,
        "interview_completion": 0.9,
        "offer_acceptance": -1,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 41.5,
        "salary_max": 48.7,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "BentoML",
            "score": 79.9
          },
          {
            "skill": "OpenSearch",
            "score": 78.6
          },
          {
            "skill": "Hugging Face Transformers",
            "score": 66.7
          },
          {
            "skill": "Learning to Rank",
            "score": 63.7
          },
          {
            "skill": "Object Detection",
            "score": 55.7
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 66.2,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 69.3,
        "logistics": 77.4,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 62.9,
        "evaluation": 60.0,
        "production": 14.3,
        "assessment": 72.2
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 57.0,
        "speed": 98.5,
        "open_to_work": 35.0,
        "completeness": 93.5,
        "saved": 86.1,
        "market_demand": 89.9,
        "applications": 45.5,
        "interview": 90.0,
        "github": 46.7,
        "assessment": 72.2,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "Senior Data Scientist with 6.6 yrs at Flipkart; career and skills show retrieval plus ranking/recommendation depth (OpenSearch, Information Retrieval, Pinecone, Vector Search). Coimbatore, Tamil Nadu; India, relocation-ready; 57% recruiter response; last active 2026-04-24; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Data Scientist",
          "company": "Flipkart",
          "industry": "E-commerce",
          "duration_months": 31,
          "is_current": true,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "LinkedIn",
          "industry": "Internet",
          "duration_months": 22,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Verloop.io",
          "industry": "Conversational AI",
          "duration_months": 25,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "RV College of Engineering",
          "degree": "B.E.",
          "field_of_study": "Machine Learning",
          "start_year": 2004,
          "end_year": 2007,
          "grade": "6.73 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0079284",
      "rank": 49,
      "score": 0.7571,
      "score_100": 75.71,
      "readiness": 74.2,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Ishaan Dutta",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 4.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Google",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Hyderabad, Telangana",
      "country": "India",
      "years": 4.9,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "LlamaIndex",
        "Qdrant",
        "Elasticsearch",
        "Recommendation Systems",
        "scikit-learn",
        "Feature Engineering",
        "Machine Learning",
        "QLoRA"
      ],
      "all_skills": [
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 47
        },
        {
          "name": "scikit-learn",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 10
        },
        {
          "name": "QLoRA",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 49
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 65,
          "endorsements": 39
        },
        {
          "name": "Illustrator",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 9
        },
        {
          "name": "Project Management",
          "proficiency": "beginner",
          "duration_months": 16,
          "endorsements": 6
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 59,
          "endorsements": 11
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 35
        },
        {
          "name": "Terraform",
          "proficiency": "intermediate",
          "duration_months": 10,
          "endorsements": 2
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 22,
          "endorsements": 58
        },
        {
          "name": "Weights & Biases",
          "proficiency": "intermediate",
          "duration_months": 8,
          "endorsements": 10
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "advanced",
          "duration_months": 51,
          "endorsements": 34
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 46
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 50,
          "endorsements": 40
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 43
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-11",
        "response_rate": 0.79,
        "response_time_hours": 59.2,
        "notice_days": 30,
        "github": -1,
        "profile_views": 57,
        "applications": 14,
        "search_appearance": 295,
        "saved": 17,
        "endorsements": 107,
        "profile_completeness": 85.5,
        "interview_completion": 0.94,
        "offer_acceptance": 0.34,
        "work_mode": "remote",
        "relocate": false,
        "salary_min": 33.2,
        "salary_max": 64.7,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "scikit-learn",
            "score": 84.2
          },
          {
            "skill": "Recommendation Systems",
            "score": 68.9
          },
          {
            "skill": "LlamaIndex",
            "score": 66.0
          },
          {
            "skill": "QLoRA",
            "score": 64.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 62.8,
        "role": 91.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 67.0,
        "logistics": 83.8,
        "penalty": 0.0,
        "retrieval": 68.5,
        "ranking": 70.8,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 70.8
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 79.0,
        "speed": 75.3,
        "open_to_work": 35.0,
        "completeness": 85.5,
        "saved": 65.8,
        "market_demand": 73.7,
        "applications": 88.9,
        "interview": 94.0,
        "github": 18.0,
        "assessment": 70.8,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Machine Learning Engineer with 4.9 yrs at Google; career and skills show retrieval plus ranking/recommendation depth (LlamaIndex, Qdrant, Elasticsearch, Recommendation Systems). Hyderabad, Telangana; tier-1 India city; 79% recruiter response; last active 2026-04-11; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 36,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Swiggy",
          "industry": "Food Delivery",
          "duration_months": 22,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        }
      ],
      "education": [
        {
          "institution": "IIT Roorkee",
          "degree": "M.S.",
          "field_of_study": "Computer Science",
          "start_year": 2013,
          "end_year": 2018,
          "grade": "75%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0044222",
      "rank": 50,
      "score": 0.7565,
      "score_100": 75.65,
      "readiness": 70.2,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Dev Shah",
      "title": "AI Engineer",
      "headline": "AI Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 7.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "PolicyBazaar",
      "industry": "Insurance Tech",
      "company_size": "5001-10000",
      "location": "Vizag, Andhra Pradesh",
      "country": "India",
      "years": 7.7,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "Vector Search",
        "LlamaIndex",
        "OpenSearch",
        "Qdrant",
        "Weaviate",
        "BM25",
        "Feature Engineering",
        "Deep Learning"
      ],
      "all_skills": [
        {
          "name": "Vector Search",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 16
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 15
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 34
        },
        {
          "name": "Java",
          "proficiency": "intermediate",
          "duration_months": 14,
          "endorsements": 9
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 31
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 52
        },
        {
          "name": "Time Series",
          "proficiency": "intermediate",
          "duration_months": 33,
          "endorsements": 6
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 18,
          "endorsements": 22
        },
        {
          "name": "Content Writing",
          "proficiency": "intermediate",
          "duration_months": 12,
          "endorsements": 4
        },
        {
          "name": "NLP",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 36
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 18
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 39
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 7
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 18
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 45
        },
        {
          "name": "ASR",
          "proficiency": "intermediate",
          "duration_months": 17,
          "endorsements": 8
        },
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 31,
          "endorsements": 0
        },
        {
          "name": "QLoRA",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 8
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-15",
        "response_rate": 0.6,
        "response_time_hours": 47.0,
        "notice_days": 60,
        "github": 28.9,
        "profile_views": 118,
        "applications": 15,
        "search_appearance": 666,
        "saved": 54,
        "endorsements": 92,
        "profile_completeness": 71.3,
        "interview_completion": 0.89,
        "offer_acceptance": 0.3,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 42.9,
        "salary_max": 60.1,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "LlamaIndex",
            "score": 84.6
          },
          {
            "skill": "Vector Search",
            "score": 52.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 68.5,
        "role": 76.0,
        "experience": 100.0,
        "company": 58.0,
        "behavior": 76.5,
        "logistics": 70.2,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 31.7,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 68.5
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 60.0,
        "speed": 80.4,
        "open_to_work": 100.0,
        "completeness": 71.3,
        "saved": 91.2,
        "market_demand": 87.8,
        "applications": 91.1,
        "interview": 89.0,
        "github": 28.9,
        "assessment": 68.5,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "AI Engineer with 7.7 yrs at PolicyBazaar; career and skills show strong retrieval/search depth (Vector Search, LlamaIndex, OpenSearch, Qdrant). Vizag, Andhra Pradesh; India, non-preferred city; 60% recruiter response; last active 2026-05-15; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "AI Engineer",
          "company": "PolicyBazaar",
          "industry": "Insurance Tech",
          "duration_months": 49,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "AI Engineer",
          "company": "InMobi",
          "industry": "AdTech",
          "duration_months": 43,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "IISc Bangalore",
          "degree": "M.Sc",
          "field_of_study": "Machine Learning",
          "start_year": 2017,
          "end_year": 2021,
          "grade": "7.28 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0068351",
      "rank": 51,
      "score": 0.7565,
      "score_100": 75.65,
      "readiness": 58.8,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Aadhya Iyer",
      "title": "Lead AI Engineer",
      "headline": "Senior Engineer | Search & Discovery Infrastructure",
      "summary": "Senior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer - the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes - over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want - so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.",
      "company": "Sarvam AI",
      "industry": "AI/ML",
      "company_size": "51-200",
      "location": "Delhi, Delhi",
      "country": "India",
      "years": 6.4,
      "current_work": "Owned the search and discovery experience end-to-end at a consumer product, from how content is represented internally through to how the most relevant results appear for each user's intent. The work spanned data infrastructure, ranking algorithms, evaluation methodology, and direct collaboration with product/PM on what 'relevance' actually means for our users. Spent a fair amount of time on the eval side - building offline metrics that actually correlated with online engagement, which turned out to be the hardest part.",
      "matched_skills": [
        "pgvector",
        "Qdrant",
        "Elasticsearch",
        "Text Encoders",
        "Haystack",
        "Information Retrieval Systems",
        "Search Backend",
        "Ranking Systems"
      ],
      "all_skills": [
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 77,
          "endorsements": 18
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 50
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 78,
          "endorsements": 47
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 39
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 25
        },
        {
          "name": "Text Encoders",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 9
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 58
        },
        {
          "name": "Spring Boot",
          "proficiency": "beginner",
          "duration_months": 13,
          "endorsements": 14
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 67,
          "endorsements": 11
        },
        {
          "name": "Redis",
          "proficiency": "intermediate",
          "duration_months": 30,
          "endorsements": 1
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 60,
          "endorsements": 18
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 12
        },
        {
          "name": "Open-source ML libraries",
          "proficiency": "expert",
          "duration_months": 81,
          "endorsements": 0
        },
        {
          "name": "Ranking Systems",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 35
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 49,
          "endorsements": 34
        },
        {
          "name": "Information Retrieval Systems",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 33
        },
        {
          "name": "Search Backend",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 10
        },
        {
          "name": "GANs",
          "proficiency": "intermediate",
          "duration_months": 16,
          "endorsements": 15
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-11",
        "response_rate": 0.86,
        "response_time_hours": 39.4,
        "notice_days": 0,
        "github": -1,
        "profile_views": 179,
        "applications": 0,
        "search_appearance": 1347,
        "saved": 66,
        "endorsements": 100,
        "profile_completeness": 94.5,
        "interview_completion": 0.95,
        "offer_acceptance": -1,
        "work_mode": "remote",
        "relocate": false,
        "salary_min": 34.8,
        "salary_max": 57.1,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": false,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 60.4,
        "role": 100.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 64.4,
        "logistics": 52.5,
        "penalty": 0.0,
        "retrieval": 81.2,
        "ranking": 37.3,
        "evaluation": 40.0,
        "production": 57.1,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 86.0,
        "speed": 83.6,
        "open_to_work": 35.0,
        "completeness": 94.5,
        "saved": 95.7,
        "market_demand": 92.3,
        "applications": 0.0,
        "interview": 95.0,
        "github": 18.0,
        "assessment": 50.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "production shipping"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Lead AI Engineer with 6.4 yrs at Sarvam AI; career and skills show strong retrieval/search depth (pgvector, Qdrant, Elasticsearch, Text Encoders). Delhi, Delhi; tier-1 India city; 86% recruiter response; last active 2026-04-11; 0-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Lead AI Engineer",
          "company": "Sarvam AI",
          "industry": "AI/ML",
          "duration_months": 25,
          "is_current": true,
          "description": "Owned the search and discovery experience end-to-end at a consumer product, from how content is represented internally through to how the most relevant results appear for each user's intent. The work spanned data infrastructure, ranking algorithms, evaluation methodology, and direct collaboration with product/PM on what 'relevance' actually means for our users. Spent a fair amount of time on the eval side - building offline metrics that actually correlated with online engagement, which turned out to be the hardest part."
        },
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Verloop.io",
          "industry": "Conversational AI",
          "duration_months": 45,
          "is_current": false,
          "description": "Built systems that understand what users are looking for and connect them to the most relevant matches across a large dataset. Worked at the intersection of infrastructure, algorithms, and product judgment - none of the three were optional. Recent project was a complete overhaul of the matching layer; took it from a hand-tuned heuristic system to one with explicit modeling and evaluation. The team grew from just me to 6 engineers over the course of that work."
        },
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Microsoft",
          "industry": "Software",
          "duration_months": 6,
          "is_current": false,
          "description": "Designed the ranking layer for the company's flagship product: how do we surface the right thing at the right time, across millions of items, for millions of users. The hard problem was rarely the modeling - it was the data pipeline that fed the models, the evaluation framework that told us whether they worked, and the operational discipline of keeping all of it healthy in production. I owned all three across roughly 14 months."
        }
      ],
      "education": [
        {
          "institution": "IIIT Bangalore",
          "degree": "M.E.",
          "field_of_study": "Computer Science",
          "start_year": 2012,
          "end_year": 2016,
          "grade": "9.12 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "Carnegie Mellon University",
          "degree": "B.Tech",
          "field_of_study": "Computer Engineering",
          "start_year": 2011,
          "end_year": 2016,
          "grade": "85%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0052328",
      "rank": 52,
      "score": 0.7564,
      "score_100": 75.64,
      "readiness": 77.4,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Vikram Banerjee",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 6.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Amazon",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Pune, Maharashtra",
      "country": "India",
      "years": 6.5,
      "current_work": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.",
      "matched_skills": [
        "OpenSearch",
        "Vector Search",
        "Sentence Transformers",
        "Recommendation Systems",
        "Learning to Rank",
        "scikit-learn",
        "Python",
        "LoRA"
      ],
      "all_skills": [
        {
          "name": "Object Detection",
          "proficiency": "intermediate",
          "duration_months": 22,
          "endorsements": 11
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 53,
          "endorsements": 17
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 24
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 30,
          "endorsements": 4
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 54,
          "endorsements": 43
        },
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 30
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 2
        },
        {
          "name": "ASR",
          "proficiency": "intermediate",
          "duration_months": 27,
          "endorsements": 0
        },
        {
          "name": "Computer Vision",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 8
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 35
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 20
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 9
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 26
        },
        {
          "name": "YOLO",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 3
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 23
        },
        {
          "name": "Python",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 20
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-31",
        "response_rate": 0.79,
        "response_time_hours": 31.9,
        "notice_days": 30,
        "github": 77.6,
        "profile_views": 107,
        "applications": 4,
        "search_appearance": 627,
        "saved": 31,
        "endorsements": 85,
        "profile_completeness": 76.7,
        "interview_completion": 0.95,
        "offer_acceptance": 0.54,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 23.6,
        "salary_max": 53.9,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "LoRA",
            "score": 85.4
          },
          {
            "skill": "OpenSearch",
            "score": 65.7
          }
        ],
        "verified_email": false,
        "verified_phone": false,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 54.6,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 76.6,
        "logistics": 100.0,
        "penalty": 0.0,
        "retrieval": 72.0,
        "ranking": 82.0,
        "evaluation": 20.0,
        "production": 14.3,
        "assessment": 75.6
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 79.0,
        "speed": 86.7,
        "open_to_work": 100.0,
        "completeness": 76.7,
        "saved": 78.9,
        "market_demand": 83.4,
        "applications": 52.9,
        "interview": 95.0,
        "github": 77.6,
        "assessment": 75.6,
        "verified": 33.3
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Recommendation Systems Engineer with 6.5 yrs at Amazon; career and skills show retrieval plus ranking/recommendation depth (OpenSearch, Vector Search, Sentence Transformers, Recommendation Systems). Pune, Maharashtra; preferred office city; 79% recruiter response; last active 2026-03-31; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Amazon",
          "industry": "Internet",
          "duration_months": 52,
          "is_current": true,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Senior Data Scientist",
          "company": "Observe.AI",
          "industry": "AI/ML",
          "duration_months": 25,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        }
      ],
      "education": [
        {
          "institution": "VIT Vellore",
          "degree": "B.Sc",
          "field_of_study": "Computer Science",
          "start_year": 2013,
          "end_year": 2016,
          "grade": "71%",
          "tier": "tier_2"
        },
        {
          "institution": "Stanford University",
          "degree": "M.Tech",
          "field_of_study": "Computer Science",
          "start_year": 2017,
          "end_year": 2020,
          "grade": "82%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0020877",
      "rank": 53,
      "score": 0.7563,
      "score_100": 75.63,
      "readiness": 68.1,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Anil Rao",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 5.1 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "CRED",
      "industry": "Fintech",
      "company_size": "1001-5000",
      "location": "Gurgaon, Haryana",
      "country": "India",
      "years": 5.1,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "Elasticsearch",
        "OpenSearch",
        "Information Retrieval",
        "LlamaIndex",
        "Weaviate",
        "Milvus",
        "Qdrant",
        "Kubeflow"
      ],
      "all_skills": [
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 51
        },
        {
          "name": "Kubeflow",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 17
        },
        {
          "name": "YOLO",
          "proficiency": "advanced",
          "duration_months": 46,
          "endorsements": 57
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 30
        },
        {
          "name": "PyTorch",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 58
        },
        {
          "name": "OpenSearch",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 16
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 53
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 21
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "intermediate",
          "duration_months": 13,
          "endorsements": 3
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 48
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 3
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 91,
          "endorsements": 19
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 62,
          "endorsements": 14
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 72,
          "endorsements": 19
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 96,
          "endorsements": 29
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 56
        },
        {
          "name": "Illustrator",
          "proficiency": "beginner",
          "duration_months": 5,
          "endorsements": 10
        },
        {
          "name": "Java",
          "proficiency": "intermediate",
          "duration_months": 31,
          "endorsements": 13
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-03",
        "response_rate": 0.66,
        "response_time_hours": 66.6,
        "notice_days": 60,
        "github": 74.4,
        "profile_views": 300,
        "applications": 12,
        "search_appearance": 781,
        "saved": 19,
        "endorsements": 137,
        "profile_completeness": 65.2,
        "interview_completion": 0.75,
        "offer_acceptance": 0.7,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 26.6,
        "salary_max": 49.4,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "YOLO",
            "score": 89.3
          },
          {
            "skill": "Kubeflow",
            "score": 82.1
          },
          {
            "skill": "Elasticsearch",
            "score": 67.2
          },
          {
            "skill": "QLoRA",
            "score": 63.0
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 57.3,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 67.4,
        "logistics": 83.2,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 6.3,
        "evaluation": 40.0,
        "production": 28.6,
        "assessment": 70.8
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 66.0,
        "speed": 72.2,
        "open_to_work": 35.0,
        "completeness": 65.2,
        "saved": 68.2,
        "market_demand": 88.1,
        "applications": 84.2,
        "interview": 75.0,
        "github": 74.4,
        "assessment": 70.8,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Applied ML Engineer with 5.1 yrs at CRED; career and skills show strong retrieval/search depth (Elasticsearch, OpenSearch, Information Retrieval, LlamaIndex). Gurgaon, Haryana; tier-1 India city; 66% recruiter response; last active 2026-04-03; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "CRED",
          "industry": "Fintech",
          "duration_months": 38,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Senior Data Scientist",
          "company": "BYJU'S",
          "industry": "EdTech",
          "duration_months": 22,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "Stanford University",
          "degree": "B.E.",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2016,
          "end_year": 2019,
          "grade": "8.12 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "Delhi College of Engineering",
          "degree": "B.E.",
          "field_of_study": "Computer Science",
          "start_year": 2016,
          "end_year": 2020,
          "grade": "7.22 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0096142",
      "rank": 54,
      "score": 0.7545,
      "score_100": 75.45,
      "readiness": 67.6,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Pranav Sethi",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 5.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "upGrad",
      "industry": "EdTech",
      "company_size": "1001-5000",
      "location": "Hyderabad, Telangana",
      "country": "India",
      "years": 5.0,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "Weaviate",
        "Pinecone",
        "RAG",
        "BM25",
        "Kubeflow",
        "Python",
        "BentoML",
        "LoRA"
      ],
      "all_skills": [
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 23,
          "endorsements": 9
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 3
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 38
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 62,
          "endorsements": 18
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 72,
          "endorsements": 29
        },
        {
          "name": "CSS",
          "proficiency": "beginner",
          "duration_months": 3,
          "endorsements": 0
        },
        {
          "name": "BentoML",
          "proficiency": "advanced",
          "duration_months": 53,
          "endorsements": 57
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 18,
          "endorsements": 60
        },
        {
          "name": "RAG",
          "proficiency": "advanced",
          "duration_months": 47,
          "endorsements": 52
        },
        {
          "name": "CNN",
          "proficiency": "intermediate",
          "duration_months": 31,
          "endorsements": 5
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 35
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 13
        },
        {
          "name": "OpenCV",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 28
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 29
        },
        {
          "name": "dbt",
          "proficiency": "intermediate",
          "duration_months": 16,
          "endorsements": 2
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-21",
        "response_rate": 0.84,
        "response_time_hours": 7.3,
        "notice_days": 120,
        "github": 80.5,
        "profile_views": 159,
        "applications": 14,
        "search_appearance": 715,
        "saved": 18,
        "endorsements": 174,
        "profile_completeness": 67.3,
        "interview_completion": 0.55,
        "offer_acceptance": 0.82,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 34.3,
        "salary_max": 59.3,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "LoRA",
            "score": 91.8
          },
          {
            "skill": "Weaviate",
            "score": 85.7
          },
          {
            "skill": "Pinecone",
            "score": 82.0
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 63.5,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 85.6,
        "logistics": 66.9,
        "penalty": 4.5,
        "retrieval": 87.4,
        "ranking": 38.0,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 86.5
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 84.0,
        "speed": 97.0,
        "open_to_work": 100.0,
        "completeness": 67.3,
        "saved": 67.0,
        "market_demand": 84.3,
        "applications": 88.9,
        "interview": 55.0,
        "github": 80.5,
        "assessment": 86.5,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "tier-1 India city",
      "reasoning": "Applied ML Engineer with 5.0 yrs at upGrad; career and skills show strong retrieval/search depth (Weaviate, Pinecone, RAG, BM25). Hyderabad, Telangana; tier-1 India city; 84% recruiter response; last active 2026-05-21; 120-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "upGrad",
          "industry": "EdTech",
          "duration_months": 42,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Applied ML Engineer",
          "company": "BYJU'S",
          "industry": "EdTech",
          "duration_months": 18,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        }
      ],
      "education": [
        {
          "institution": "IIIT Bangalore",
          "degree": "M.Tech",
          "field_of_study": "Machine Learning",
          "start_year": 2015,
          "end_year": 2020,
          "grade": "9.27 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0093912",
      "rank": 55,
      "score": 0.753,
      "score_100": 75.3,
      "readiness": 74.0,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Advik Sethi",
      "title": "Senior Data Scientist",
      "headline": "Senior Data Scientist | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 5.3 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Razorpay",
      "industry": "Fintech",
      "company_size": "1001-5000",
      "location": "Chandigarh, Chandigarh",
      "country": "India",
      "years": 5.3,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "Milvus",
        "Embeddings",
        "Vector Search",
        "Haystack",
        "Elasticsearch",
        "Recommendation Systems",
        "Learning to Rank",
        "Feature Engineering"
      ],
      "all_skills": [
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 23,
          "endorsements": 12
        },
        {
          "name": "SAP",
          "proficiency": "beginner",
          "duration_months": 17,
          "endorsements": 2
        },
        {
          "name": "CNN",
          "proficiency": "intermediate",
          "duration_months": 10,
          "endorsements": 7
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 58
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 5
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 46
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 80,
          "endorsements": 35
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 39,
          "endorsements": 34
        },
        {
          "name": "Sales",
          "proficiency": "intermediate",
          "duration_months": 18,
          "endorsements": 13
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 22,
          "endorsements": 16
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 77,
          "endorsements": 50
        },
        {
          "name": "FastAPI",
          "proficiency": "intermediate",
          "duration_months": 26,
          "endorsements": 9
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 8
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-11",
        "response_rate": 0.66,
        "response_time_hours": 39.7,
        "notice_days": 30,
        "github": 81.5,
        "profile_views": 292,
        "applications": 0,
        "search_appearance": 773,
        "saved": 56,
        "endorsements": 52,
        "profile_completeness": 87.8,
        "interview_completion": 0.96,
        "offer_acceptance": -1,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 31.4,
        "salary_max": 44.3,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Milvus",
            "score": 75.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 61.4,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 80.0,
        "logistics": 78.4,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 76.5,
        "evaluation": 20.0,
        "production": 42.9,
        "assessment": 75.4
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 66.0,
        "speed": 83.5,
        "open_to_work": 100.0,
        "completeness": 87.8,
        "saved": 92.0,
        "market_demand": 92.5,
        "applications": 0.0,
        "interview": 96.0,
        "github": 81.5,
        "assessment": 75.4,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Senior Data Scientist with 5.3 yrs at Razorpay; career and skills show retrieval plus ranking/recommendation depth (Milvus, Embeddings, Vector Search, Haystack). Chandigarh, Chandigarh; India, non-preferred city; 66% recruiter response; last active 2026-05-11; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Data Scientist",
          "company": "Razorpay",
          "industry": "Fintech",
          "duration_months": 27,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Search Engineer",
          "company": "Flipkart",
          "industry": "E-commerce",
          "duration_months": 19,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "AI Engineer",
          "company": "Apple",
          "industry": "Consumer Electronics",
          "duration_months": 16,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        }
      ],
      "education": [
        {
          "institution": "RV College of Engineering",
          "degree": "B.Sc",
          "field_of_study": "Computer Science",
          "start_year": 2013,
          "end_year": 2017,
          "grade": "6.52 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0046064",
      "rank": 56,
      "score": 0.7514,
      "score_100": 75.14,
      "readiness": 81.6,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Saanvi Naidu",
      "title": "Senior NLP Engineer",
      "headline": "Senior NLP Engineer | LLMs, RAG, Vector Search | ex-Top Tech",
      "summary": "Senior AI engineer with 8.9 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, operating at single-digit-millisecond p95 retrieval latency. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Salesforce",
      "industry": "Software",
      "company_size": "10001+",
      "location": "Coimbatore, Tamil Nadu",
      "country": "India",
      "years": 8.9,
      "current_work": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001.",
      "matched_skills": [
        "Pinecone",
        "Haystack",
        "BM25",
        "OpenSearch",
        "Elasticsearch",
        "Semantic Search",
        "Python",
        "Deep Learning"
      ],
      "all_skills": [
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 40,
          "endorsements": 41
        },
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 48
        },
        {
          "name": "OpenCV",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 27
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 85,
          "endorsements": 58
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 18
        },
        {
          "name": "Six Sigma",
          "proficiency": "intermediate",
          "duration_months": 12,
          "endorsements": 1
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 18,
          "endorsements": 39
        },
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 30,
          "endorsements": 7
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 64,
          "endorsements": 58
        },
        {
          "name": "YOLO",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 36
        },
        {
          "name": "OpenSearch",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 18
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 57
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 60
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 78,
          "endorsements": 49
        },
        {
          "name": "QLoRA",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 58
        },
        {
          "name": "Semantic Search",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 46
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-26",
        "response_rate": 0.78,
        "response_time_hours": 40.8,
        "notice_days": 30,
        "github": 67.3,
        "profile_views": 323,
        "applications": 3,
        "search_appearance": 802,
        "saved": 25,
        "endorsements": 132,
        "profile_completeness": 75.3,
        "interview_completion": 0.8,
        "offer_acceptance": -1,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 36.6,
        "salary_max": 53.4,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Python",
            "score": 64.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 81.2,
        "role": 14.8,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 80.4,
        "logistics": 77.0,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 38.0,
        "evaluation": 100.0,
        "production": 100.0,
        "assessment": 64.1
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 78.0,
        "speed": 83.0,
        "open_to_work": 100.0,
        "completeness": 75.3,
        "saved": 74.1,
        "market_demand": 90.2,
        "applications": 45.5,
        "interview": 80.0,
        "github": 67.3,
        "assessment": 64.1,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation",
        "production shipping"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Senior NLP Engineer with 8.9 yrs at Salesforce; career and skills show strong retrieval/search depth (Pinecone, Haystack, BM25, OpenSearch). Coimbatore, Tamil Nadu; India, non-preferred city; 78% recruiter response; last active 2026-04-26; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior NLP Engineer",
          "company": "Salesforce",
          "industry": "Software",
          "duration_months": 36,
          "is_current": true,
          "description": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
        },
        {
          "title": "Lead AI Engineer",
          "company": "Verloop.io",
          "industry": "Conversational AI",
          "duration_months": 34,
          "is_current": false,
          "description": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
        },
        {
          "title": "Senior ML Engineer - Search & Ranking",
          "company": "Amazon",
          "industry": "Internet",
          "duration_months": 36,
          "is_current": false,
          "description": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing -> embedding generation (using a fine-tuned BGE-large) -> Pinecone retrieval -> learning-to-rank re-scoring (XGBoost) -> behavioral-signal integration. The hardest part wasn't the ML - it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
        }
      ],
      "education": [
        {
          "institution": "IIT Hyderabad",
          "degree": "M.Tech",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2003,
          "end_year": 2006,
          "grade": "7.18 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "BITS Pilani",
          "degree": "B.Tech",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2012,
          "end_year": 2017,
          "grade": "8.90 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0075249",
      "rank": 57,
      "score": 0.7507,
      "score_100": 75.07,
      "readiness": 70.5,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Ishaan Arora",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 6.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Zomato",
      "industry": "Food Delivery",
      "company_size": "5001-10000",
      "location": "Ahmedabad, Gujarat",
      "country": "India",
      "years": 6.2,
      "current_work": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.",
      "matched_skills": [
        "Sentence Transformers",
        "Milvus",
        "BM25",
        "Pinecone",
        "Haystack",
        "Learning to Rank",
        "Machine Learning",
        "MLflow"
      ],
      "all_skills": [
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 12
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 77,
          "endorsements": 17
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 46
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 11
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 56,
          "endorsements": 10
        },
        {
          "name": "Hadoop",
          "proficiency": "beginner",
          "duration_months": 14,
          "endorsements": 8
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 40,
          "endorsements": 14
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 80,
          "endorsements": 45
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 52
        },
        {
          "name": "Time Series",
          "proficiency": "intermediate",
          "duration_months": 17,
          "endorsements": 9
        },
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 13
        },
        {
          "name": "ASR",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 2
        },
        {
          "name": "Kubeflow",
          "proficiency": "advanced",
          "duration_months": 56,
          "endorsements": 53
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 37,
          "endorsements": 8
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-09",
        "response_rate": 0.82,
        "response_time_hours": 23.8,
        "notice_days": 45,
        "github": 36.8,
        "profile_views": 172,
        "applications": 18,
        "search_appearance": 850,
        "saved": 9,
        "endorsements": 143,
        "profile_completeness": 70.1,
        "interview_completion": 0.63,
        "offer_acceptance": 0.43,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 27.5,
        "salary_max": 60.3,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "Sentence Transformers",
            "score": 80.7
          },
          {
            "skill": "Milvus",
            "score": 77.9
          },
          {
            "skill": "Machine Learning",
            "score": 69.0
          },
          {
            "skill": "Fine-tuning LLMs",
            "score": 57.6
          },
          {
            "skill": "MLflow",
            "score": 54.7
          }
        ],
        "verified_email": false,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 60.3,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 74.3,
        "logistics": 70.2,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 55.6,
        "evaluation": 40.0,
        "production": 14.3,
        "assessment": 68.0
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 82.0,
        "speed": 90.1,
        "open_to_work": 100.0,
        "completeness": 70.1,
        "saved": 52.4,
        "market_demand": 80.7,
        "applications": 96.7,
        "interview": 63.0,
        "github": 36.8,
        "assessment": 68.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Applied ML Engineer with 6.2 yrs at Zomato; career and skills show retrieval plus ranking/recommendation depth (Sentence Transformers, Milvus, BM25, Pinecone). Ahmedabad, Gujarat; India, non-preferred city; 82% recruiter response; last active 2026-04-09; 45-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Zomato",
          "industry": "Food Delivery",
          "duration_months": 36,
          "is_current": true,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Search Engineer",
          "company": "upGrad",
          "industry": "EdTech",
          "duration_months": 38,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "IIT Hyderabad",
          "degree": "M.Tech",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2009,
          "end_year": 2013,
          "grade": "76%",
          "tier": "tier_1"
        },
        {
          "institution": "NIT Warangal",
          "degree": "M.E.",
          "field_of_study": "Computer Engineering",
          "start_year": 2006,
          "end_year": 2011,
          "grade": "7.31 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0043228",
      "rank": 58,
      "score": 0.7494,
      "score_100": 74.94,
      "readiness": 68.5,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Kiara Sen",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 6.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Zoho",
      "industry": "SaaS",
      "company_size": "10001+",
      "location": "Chennai, Tamil Nadu",
      "country": "India",
      "years": 6.8,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "Haystack",
        "Vector Search",
        "Sentence Transformers",
        "Weaviate",
        "OpenSearch",
        "pgvector",
        "Learning to Rank",
        "FastAPI"
      ],
      "all_skills": [
        {
          "name": "BigQuery",
          "proficiency": "beginner",
          "duration_months": 4,
          "endorsements": 4
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 20
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 45
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 31
        },
        {
          "name": "FastAPI",
          "proficiency": "intermediate",
          "duration_months": 13,
          "endorsements": 11
        },
        {
          "name": "Haystack",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 47
        },
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 51,
          "endorsements": 14
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 17
        },
        {
          "name": "Vector Search",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 44
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 53
        },
        {
          "name": "YOLO",
          "proficiency": "intermediate",
          "duration_months": 27,
          "endorsements": 11
        },
        {
          "name": "TTS",
          "proficiency": "intermediate",
          "duration_months": 16,
          "endorsements": 6
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 0
        },
        {
          "name": "Kubeflow",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 8
        },
        {
          "name": "React",
          "proficiency": "beginner",
          "duration_months": 7,
          "endorsements": 0
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 29,
          "endorsements": 41
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 31
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 23
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-05-22",
        "response_rate": 0.41,
        "response_time_hours": 42.0,
        "notice_days": 30,
        "github": 47.6,
        "profile_views": 72,
        "applications": 1,
        "search_appearance": 316,
        "saved": 65,
        "endorsements": 22,
        "profile_completeness": 88.3,
        "interview_completion": 0.94,
        "offer_acceptance": 0.52,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 32.8,
        "salary_max": 43.2,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "Image Classification",
            "score": 83.6
          },
          {
            "skill": "NLP",
            "score": 83.0
          },
          {
            "skill": "ASR",
            "score": 76.5
          },
          {
            "skill": "Haystack",
            "score": 65.0
          },
          {
            "skill": "Hugging Face Transformers",
            "score": 64.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 57.6,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 67.3,
        "logistics": 91.4,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 52.6,
        "evaluation": 20.0,
        "production": 28.6,
        "assessment": 70.8
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 41.0,
        "speed": 82.5,
        "open_to_work": 35.0,
        "completeness": 88.3,
        "saved": 95.3,
        "market_demand": 80.2,
        "applications": 22.8,
        "interview": 94.0,
        "github": 47.6,
        "assessment": 70.8,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Applied ML Engineer with 6.8 yrs at Zoho; career and skills show strong retrieval/search depth (Haystack, Vector Search, Sentence Transformers, Weaviate). Chennai, Tamil Nadu; tier-1 India city; 41% recruiter response; last active 2026-05-22; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Zoho",
          "industry": "SaaS",
          "duration_months": 25,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Vedantu",
          "industry": "EdTech",
          "duration_months": 44,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Search Engineer",
          "company": "Yellow.ai",
          "industry": "AI/ML",
          "duration_months": 11,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "IIT Madras",
          "degree": "B.E.",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2016,
          "end_year": 2020,
          "grade": "6.58 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0075439",
      "rank": 59,
      "score": 0.7457,
      "score_100": 74.57,
      "readiness": 69.5,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Pooja Mehta",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 4.3 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Flipkart",
      "industry": "E-commerce",
      "company_size": "10001+",
      "location": "Vizag, Andhra Pradesh",
      "country": "India",
      "years": 4.3,
      "current_work": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.",
      "matched_skills": [
        "Elasticsearch",
        "OpenSearch",
        "Vector Search",
        "Information Retrieval",
        "Semantic Search",
        "Embeddings",
        "Learning to Rank",
        "Feature Engineering"
      ],
      "all_skills": [
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 9
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 24,
          "endorsements": 54
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 27
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 88,
          "endorsements": 6
        },
        {
          "name": "JavaScript",
          "proficiency": "intermediate",
          "duration_months": 29,
          "endorsements": 10
        },
        {
          "name": "OpenSearch",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 38
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 18
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 25
        },
        {
          "name": "Information Retrieval",
          "proficiency": "advanced",
          "duration_months": 30,
          "endorsements": 26
        },
        {
          "name": "Semantic Search",
          "proficiency": "advanced",
          "duration_months": 54,
          "endorsements": 3
        },
        {
          "name": "Embeddings",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 36
        },
        {
          "name": "MLflow",
          "proficiency": "intermediate",
          "duration_months": 26,
          "endorsements": 6
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-05-07",
        "response_rate": 0.56,
        "response_time_hours": 30.5,
        "notice_days": 30,
        "github": 66.3,
        "profile_views": 31,
        "applications": 14,
        "search_appearance": 914,
        "saved": 42,
        "endorsements": 80,
        "profile_completeness": 85.2,
        "interview_completion": 0.83,
        "offer_acceptance": 0.7,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 41.4,
        "salary_max": 62.8,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "Learning to Rank",
            "score": 84.7
          },
          {
            "skill": "LoRA",
            "score": 63.8
          },
          {
            "skill": "Feature Engineering",
            "score": 54.9
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 60.0,
        "role": 91.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 71.0,
        "logistics": 77.0,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 55.7,
        "evaluation": 40.0,
        "production": 28.6,
        "assessment": 67.8
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 56.0,
        "speed": 87.3,
        "open_to_work": 35.0,
        "completeness": 85.2,
        "saved": 85.6,
        "market_demand": 79.2,
        "applications": 88.9,
        "interview": 83.0,
        "github": 66.3,
        "assessment": 67.8,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Machine Learning Engineer with 4.3 yrs at Flipkart; career and skills show retrieval plus ranking/recommendation depth (Elasticsearch, OpenSearch, Vector Search, Information Retrieval). Vizag, Andhra Pradesh; India, non-preferred city; 56% recruiter response; last active 2026-05-07; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "Flipkart",
          "industry": "E-commerce",
          "duration_months": 26,
          "is_current": true,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "AI Engineer",
          "company": "Genpact AI",
          "industry": "AI Services",
          "duration_months": 25,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        }
      ],
      "education": [
        {
          "institution": "VIT Vellore",
          "degree": "M.Sc",
          "field_of_study": "Machine Learning",
          "start_year": 2017,
          "end_year": 2022,
          "grade": "87%",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0051292",
      "rank": 60,
      "score": 0.7455,
      "score_100": 74.55,
      "readiness": 67.2,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Shreya Chatterjee",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 5.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Freshworks",
      "industry": "SaaS",
      "company_size": "5001-10000",
      "location": "Trivandrum, Kerala",
      "country": "India",
      "years": 5.2,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "pgvector",
        "FAISS",
        "Vector Search",
        "RAG",
        "Elasticsearch",
        "BentoML",
        "LLMs",
        "PEFT"
      ],
      "all_skills": [
        {
          "name": "Vue.js",
          "proficiency": "beginner",
          "duration_months": 15,
          "endorsements": 10
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 64,
          "endorsements": 41
        },
        {
          "name": "FAISS",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 50
        },
        {
          "name": "BentoML",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 54
        },
        {
          "name": "LLMs",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 31
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 57
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 36
        },
        {
          "name": "PEFT",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 44
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 51
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 44
        },
        {
          "name": "JavaScript",
          "proficiency": "beginner",
          "duration_months": 12,
          "endorsements": 13
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 41
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 59
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 39,
          "endorsements": 26
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-12",
        "response_rate": 0.52,
        "response_time_hours": 14.3,
        "notice_days": 30,
        "github": 61.7,
        "profile_views": 182,
        "applications": 19,
        "search_appearance": 56,
        "saved": 9,
        "endorsements": 139,
        "profile_completeness": 50.6,
        "interview_completion": 0.56,
        "offer_acceptance": 0.65,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 24.0,
        "salary_max": 53.8,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 55.1,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 68.6,
        "logistics": 78.4,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 25.3,
        "evaluation": 40.0,
        "production": 28.6,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 52.0,
        "speed": 94.0,
        "open_to_work": 100.0,
        "completeness": 50.6,
        "saved": 52.4,
        "market_demand": 70.7,
        "applications": 98.4,
        "interview": 56.0,
        "github": 61.7,
        "assessment": 50.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Applied ML Engineer with 5.2 yrs at Freshworks; career and skills show strong retrieval/search depth (pgvector, FAISS, Vector Search, RAG). Trivandrum, Kerala; India, non-preferred city; 52% recruiter response; last active 2026-04-12; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Freshworks",
          "industry": "SaaS",
          "duration_months": 16,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Search Engineer",
          "company": "Vedantu",
          "industry": "EdTech",
          "duration_months": 28,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Search Engineer",
          "company": "Vedantu",
          "industry": "EdTech",
          "duration_months": 16,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "Manipal Institute of Technology",
          "degree": "B.Sc",
          "field_of_study": "Computer Science",
          "start_year": 2017,
          "end_year": 2021,
          "grade": "9.18 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "Jadavpur University",
          "degree": "B.Tech",
          "field_of_study": "Computer Science",
          "start_year": 2009,
          "end_year": 2013,
          "grade": "9.31 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0093193",
      "rank": 61,
      "score": 0.7446,
      "score_100": 74.46,
      "readiness": 68.8,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Aarohi Bose",
      "title": "Senior Machine Learning Engineer",
      "headline": "Senior Engineer | 7.9+ yrs in production systems",
      "summary": "Senior engineer who has spent the last several years building systems that connect users with relevant information at scale. Comfortable across the full stack from infrastructure to algorithms to product experience, though most of my time has been in the middle layer - the ranking and retrieval systems that decide what to show. Strong preference for shipping real systems over research-only work; I'd rather have a working v1 in 6 weeks than a perfect v2 in 6 months. I've made the standard mistakes - over-engineering early, optimizing offline metrics that didn't move online numbers, building beautiful infrastructure for features that users didn't actually want - so I notice them faster now. Looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end at a product company.",
      "company": "Niramai",
      "industry": "HealthTech AI",
      "company_size": "51-200",
      "location": "Bangalore, Karnataka",
      "country": "India",
      "years": 7.9,
      "current_work": "Built systems that understand what users are looking for and connect them to the most relevant matches across a large dataset. Worked at the intersection of infrastructure, algorithms, and product judgment - none of the three were optional. Recent project was a complete overhaul of the matching layer; took it from a hand-tuned heuristic system to one with explicit modeling and evaluation. The team grew from just me to 6 engineers over the course of that work.",
      "matched_skills": [
        "Text Encoders",
        "Vector Representations",
        "Qdrant",
        "OpenSearch",
        "Information Retrieval Systems",
        "Haystack",
        "Search Backend",
        "Ranking Systems"
      ],
      "all_skills": [
        {
          "name": "Ranking Systems",
          "proficiency": "expert",
          "duration_months": 77,
          "endorsements": 3
        },
        {
          "name": "Text Encoders",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 25
        },
        {
          "name": "Indexing Algorithms",
          "proficiency": "expert",
          "duration_months": 37,
          "endorsements": 34
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 44,
          "endorsements": 29
        },
        {
          "name": "Vector Representations",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 46
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 57
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 88,
          "endorsements": 41
        },
        {
          "name": "Open-source ML libraries",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 13
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 54,
          "endorsements": 12
        },
        {
          "name": "Content Matching",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 54
        },
        {
          "name": "Information Retrieval Systems",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 7
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 58,
          "endorsements": 30
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "intermediate",
          "duration_months": 8,
          "endorsements": 11
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 14
        },
        {
          "name": "Search & Discovery",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 34
        },
        {
          "name": "GANs",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 6
        },
        {
          "name": "Search Backend",
          "proficiency": "advanced",
          "duration_months": 56,
          "endorsements": 42
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 11
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-18",
        "response_rate": 0.61,
        "response_time_hours": 11.9,
        "notice_days": 45,
        "github": 34.2,
        "profile_views": 16,
        "applications": 24,
        "search_appearance": 777,
        "saved": 43,
        "endorsements": 164,
        "profile_completeness": 92.6,
        "interview_completion": 0.86,
        "offer_acceptance": 0.54,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 46.3,
        "salary_max": 50.5,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "Learning to Rank",
            "score": 86.6
          },
          {
            "skill": "Sentence Transformers",
            "score": 73.1
          },
          {
            "skill": "FAISS",
            "score": 64.0
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 55.6,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 75.3,
        "logistics": 83.2,
        "penalty": 0.0,
        "retrieval": 81.2,
        "ranking": 74.7,
        "evaluation": 20.0,
        "production": 28.6,
        "assessment": 74.6
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 61.0,
        "speed": 95.0,
        "open_to_work": 100.0,
        "completeness": 92.6,
        "saved": 86.1,
        "market_demand": 77.2,
        "applications": 100.0,
        "interview": 86.0,
        "github": 34.2,
        "assessment": 74.6,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Senior Machine Learning Engineer with 7.9 yrs at Niramai; career and skills show retrieval plus ranking/recommendation depth (Text Encoders, Vector Representations, Qdrant, OpenSearch). Bangalore, Karnataka; tier-1 India city; 61% recruiter response; last active 2026-04-18; 45-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Machine Learning Engineer",
          "company": "Niramai",
          "industry": "HealthTech AI",
          "duration_months": 44,
          "is_current": true,
          "description": "Built systems that understand what users are looking for and connect them to the most relevant matches across a large dataset. Worked at the intersection of infrastructure, algorithms, and product judgment - none of the three were optional. Recent project was a complete overhaul of the matching layer; took it from a hand-tuned heuristic system to one with explicit modeling and evaluation. The team grew from just me to 6 engineers over the course of that work."
        },
        {
          "title": "Lead AI Engineer",
          "company": "Netflix",
          "industry": "Media",
          "duration_months": 50,
          "is_current": false,
          "description": "Built systems that understand what users are looking for and connect them to the most relevant matches across a large dataset. Worked at the intersection of infrastructure, algorithms, and product judgment - none of the three were optional. Recent project was a complete overhaul of the matching layer; took it from a hand-tuned heuristic system to one with explicit modeling and evaluation. The team grew from just me to 6 engineers over the course of that work."
        }
      ],
      "education": [
        {
          "institution": "Jadavpur University",
          "degree": "Ph.D",
          "field_of_study": "Information Technology",
          "start_year": 2007,
          "end_year": 2010,
          "grade": "8.76 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0086022",
      "rank": 62,
      "score": 0.7439,
      "score_100": 74.39,
      "readiness": 64.8,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Dhruv Naidu",
      "title": "Senior Applied Scientist",
      "headline": "Senior Applied Scientist | LLMs, RAG, Vector Search | ex-Top Tech",
      "summary": "Senior AI engineer with 5.3 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I led the migration from keyword-based ranking to a learning-to-rank model with embedded behavioral signals, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I've made all the standard mistakes - embedding everything before defining the metric, over-investing in fine-tuning, optimizing offline metrics that don't move online - so I notice them faster now. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Sarvam AI",
      "industry": "AI/ML",
      "company_size": "51-200",
      "location": "Kolkata, West Bengal",
      "country": "India",
      "years": 5.3,
      "current_work": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases.",
      "matched_skills": [
        "Vector Search",
        "pgvector",
        "Elasticsearch",
        "Pinecone",
        "Embeddings",
        "Sentence Transformers",
        "Recommendation Systems",
        "MLflow"
      ],
      "all_skills": [
        {
          "name": "Vector Search",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 45
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 46,
          "endorsements": 37
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 53,
          "endorsements": 54
        },
        {
          "name": "Databricks",
          "proficiency": "beginner",
          "duration_months": 15,
          "endorsements": 6
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 0
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 78,
          "endorsements": 53
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 4
        },
        {
          "name": "Elasticsearch",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 2
        },
        {
          "name": "QLoRA",
          "proficiency": "advanced",
          "duration_months": 54,
          "endorsements": 45
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 63,
          "endorsements": 39
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 12
        },
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 10,
          "endorsements": 0
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 40
        },
        {
          "name": "ETL",
          "proficiency": "intermediate",
          "duration_months": 15,
          "endorsements": 13
        },
        {
          "name": "TensorFlow",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 16
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 41,
          "endorsements": 4
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 80,
          "endorsements": 32
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 43
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-15",
        "response_rate": 0.55,
        "response_time_hours": 59.2,
        "notice_days": 0,
        "github": 75.2,
        "profile_views": 68,
        "applications": 6,
        "search_appearance": 723,
        "saved": 53,
        "endorsements": 35,
        "profile_completeness": 80.1,
        "interview_completion": 0.68,
        "offer_acceptance": 0.53,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 31.2,
        "salary_max": 72.6,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "Vector Search",
            "score": 92.7
          },
          {
            "skill": "pgvector",
            "score": 88.6
          },
          {
            "skill": "Deep Learning",
            "score": 79.9
          },
          {
            "skill": "Recommendation Systems",
            "score": 79.3
          },
          {
            "skill": "MLflow",
            "score": 78.6
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 87.1,
        "role": 17.6,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 73.3,
        "logistics": 54.3,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 53.3,
        "evaluation": 100.0,
        "production": 85.7,
        "assessment": 83.8
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 55.0,
        "speed": 75.3,
        "open_to_work": 100.0,
        "completeness": 80.1,
        "saved": 90.8,
        "market_demand": 82.8,
        "applications": 63.9,
        "interview": 68.0,
        "github": 75.2,
        "assessment": 83.8,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation",
        "production shipping"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "Senior Applied Scientist with 5.3 yrs at Sarvam AI; career and skills show strong retrieval/search depth (Vector Search, pgvector, Elasticsearch, Pinecone). Kolkata, West Bengal; India, relocation-ready; 55% recruiter response; last active 2026-04-15; 0-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Applied Scientist",
          "company": "Sarvam AI",
          "industry": "AI/ML",
          "duration_months": 25,
          "is_current": true,
          "description": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
        },
        {
          "title": "Senior ML Engineer - Search & Ranking",
          "company": "Uber",
          "industry": "Transportation",
          "duration_months": 38,
          "is_current": false,
          "description": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
        }
      ],
      "education": [
        {
          "institution": "Stanford University",
          "degree": "B.Tech",
          "field_of_study": "Data Science",
          "start_year": 2016,
          "end_year": 2020,
          "grade": "7.52 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0022812",
      "rank": 63,
      "score": 0.7409,
      "score_100": 74.09,
      "readiness": 69.5,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Rohan Saxena",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 4.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Dream11",
      "industry": "Gaming",
      "company_size": "1001-5000",
      "location": "Coimbatore, Tamil Nadu",
      "country": "India",
      "years": 4.5,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "Weaviate",
        "Pinecone",
        "Qdrant",
        "pgvector",
        "Sentence Transformers",
        "MLOps",
        "Feature Engineering",
        "TensorFlow"
      ],
      "all_skills": [
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 57
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 89,
          "endorsements": 44
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 4
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 42
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 91,
          "endorsements": 18
        },
        {
          "name": "JavaScript",
          "proficiency": "intermediate",
          "duration_months": 15,
          "endorsements": 11
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 48
        },
        {
          "name": "pgvector",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 23
        },
        {
          "name": "MLOps",
          "proficiency": "intermediate",
          "duration_months": 10,
          "endorsements": 11
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 85,
          "endorsements": 42
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 13
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 43
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 69,
          "endorsements": 35
        },
        {
          "name": "Hadoop",
          "proficiency": "beginner",
          "duration_months": 3,
          "endorsements": 10
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 36
        },
        {
          "name": "LangChain",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 0
        },
        {
          "name": "Spark",
          "proficiency": "beginner",
          "duration_months": 17,
          "endorsements": 0
        },
        {
          "name": "GANs",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 8
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-03-19",
        "response_rate": 0.79,
        "response_time_hours": 2.8,
        "notice_days": 60,
        "github": -1,
        "profile_views": 159,
        "applications": 15,
        "search_appearance": 181,
        "saved": 51,
        "endorsements": 150,
        "profile_completeness": 62.8,
        "interview_completion": 0.74,
        "offer_acceptance": 0.52,
        "work_mode": "flexible",
        "relocate": true,
        "salary_min": 40.8,
        "salary_max": 64.8,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": false,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 62.7,
        "role": 91.0,
        "experience": 82.0,
        "company": 74.0,
        "behavior": 64.4,
        "logistics": 76.0,
        "penalty": 0.0,
        "retrieval": 92.5,
        "ranking": 38.0,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 79.0,
        "speed": 98.8,
        "open_to_work": 35.0,
        "completeness": 62.8,
        "saved": 89.9,
        "market_demand": 85.1,
        "applications": 91.1,
        "interview": 74.0,
        "github": 18.0,
        "assessment": 50.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "Applied ML Engineer with 4.5 yrs at Dream11; career and skills show strong retrieval/search depth (Weaviate, Pinecone, Qdrant, pgvector). Coimbatore, Tamil Nadu; India, relocation-ready; 79% recruiter response; last active 2026-03-19; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Dream11",
          "industry": "Gaming",
          "duration_months": 16,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Razorpay",
          "industry": "Fintech",
          "duration_months": 31,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "Aganitha",
          "industry": "AI/ML",
          "duration_months": 6,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        }
      ],
      "education": [
        {
          "institution": "SRM Chennai",
          "degree": "M.S.",
          "field_of_study": "Machine Learning",
          "start_year": 2011,
          "end_year": 2015,
          "grade": "70%",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0010257",
      "rank": 64,
      "score": 0.7398,
      "score_100": 73.98,
      "readiness": 67.1,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Ira Shetty",
      "title": "Senior Data Scientist",
      "headline": "Senior Data Scientist | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 6.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Google",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Noida, Uttar Pradesh",
      "country": "India",
      "years": 6.5,
      "current_work": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.",
      "matched_skills": [
        "Milvus",
        "OpenSearch",
        "Qdrant",
        "pgvector",
        "Recommendation Systems",
        "TensorFlow",
        "MLflow",
        "Python"
      ],
      "all_skills": [
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 72,
          "endorsements": 51
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 52
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 54
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 27
        },
        {
          "name": "Forecasting",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 12
        },
        {
          "name": "OpenSearch",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 51
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 52,
          "endorsements": 4
        },
        {
          "name": "JavaScript",
          "proficiency": "beginner",
          "duration_months": 8,
          "endorsements": 11
        },
        {
          "name": "ASR",
          "proficiency": "intermediate",
          "duration_months": 33,
          "endorsements": 7
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 53,
          "endorsements": 47
        },
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 27,
          "endorsements": 13
        },
        {
          "name": "Image Classification",
          "proficiency": "intermediate",
          "duration_months": 35,
          "endorsements": 7
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 67,
          "endorsements": 57
        },
        {
          "name": "pgvector",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 34
        },
        {
          "name": "Rust",
          "proficiency": "intermediate",
          "duration_months": 35,
          "endorsements": 1
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-13",
        "response_rate": 0.72,
        "response_time_hours": 46.2,
        "notice_days": 120,
        "github": 45.5,
        "profile_views": 269,
        "applications": 16,
        "search_appearance": 890,
        "saved": 35,
        "endorsements": 145,
        "profile_completeness": 85.1,
        "interview_completion": 0.92,
        "offer_acceptance": 0.74,
        "work_mode": "flexible",
        "relocate": true,
        "salary_min": 39.9,
        "salary_max": 46.9,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "OpenSearch",
            "score": 90.5
          },
          {
            "skill": "Milvus",
            "score": 82.2
          },
          {
            "skill": "MLflow",
            "score": 63.4
          },
          {
            "skill": "TensorFlow",
            "score": 60.8
          },
          {
            "skill": "Python",
            "score": 51.8
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 67.2,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 80.4,
        "logistics": 74.1,
        "penalty": 4.5,
        "retrieval": 82.7,
        "ranking": 71.0,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 69.7
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 72.0,
        "speed": 80.8,
        "open_to_work": 100.0,
        "completeness": 85.1,
        "saved": 81.5,
        "market_demand": 91.4,
        "applications": 93.1,
        "interview": 92.0,
        "github": 45.5,
        "assessment": 69.7,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "preferred office city",
      "reasoning": "Senior Data Scientist with 6.5 yrs at Google; career and skills show retrieval plus ranking/recommendation depth (Milvus, OpenSearch, Qdrant, pgvector). Noida, Uttar Pradesh; preferred office city; 72% recruiter response; last active 2026-05-13; 120-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Senior Data Scientist",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 37,
          "is_current": true,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Search Engineer",
          "company": "PharmEasy",
          "industry": "HealthTech",
          "duration_months": 14,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Senior Data Scientist",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 26,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        }
      ],
      "education": [
        {
          "institution": "COEP Pune",
          "degree": "Ph.D",
          "field_of_study": "Computer Science",
          "start_year": 2010,
          "end_year": 2015,
          "grade": "7.98 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0037566",
      "rank": 65,
      "score": 0.735,
      "score_100": 73.5,
      "readiness": 69.8,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Ritu Nair",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 6.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "LinkedIn",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Bangalore, Karnataka",
      "country": "India",
      "years": 6.9,
      "current_work": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.",
      "matched_skills": [
        "Pinecone",
        "LlamaIndex",
        "BM25",
        "Elasticsearch",
        "Feature Engineering",
        "MLflow",
        "TensorFlow",
        "LoRA"
      ],
      "all_skills": [
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 37
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 3
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 59,
          "endorsements": 6
        },
        {
          "name": "NLP",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 58
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 7
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 28
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 34
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 29,
          "endorsements": 45
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 47,
          "endorsements": 8
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 21
        },
        {
          "name": "Spring Boot",
          "proficiency": "beginner",
          "duration_months": 12,
          "endorsements": 4
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 16
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 40,
          "endorsements": 45
        },
        {
          "name": "YOLO",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 0
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 91,
          "endorsements": 36
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 60
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 15,
          "endorsements": 10
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-20",
        "response_rate": 0.5,
        "response_time_hours": 70.4,
        "notice_days": 15,
        "github": 73.4,
        "profile_views": 110,
        "applications": 2,
        "search_appearance": 708,
        "saved": 23,
        "endorsements": 145,
        "profile_completeness": 90.6,
        "interview_completion": 0.84,
        "offer_acceptance": 0.67,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 32.0,
        "salary_max": 42.2,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Pinecone",
            "score": 82.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 50.0,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 76.2,
        "logistics": 91.4,
        "penalty": 0.0,
        "retrieval": 83.9,
        "ranking": 12.7,
        "evaluation": 20.0,
        "production": 28.6,
        "assessment": 82.4
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 50.0,
        "speed": 70.7,
        "open_to_work": 100.0,
        "completeness": 90.6,
        "saved": 72.3,
        "market_demand": 83.3,
        "applications": 36.1,
        "interview": 84.0,
        "github": 73.4,
        "assessment": 82.4,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Machine Learning Engineer with 6.9 yrs at LinkedIn; career and skills show strong retrieval/search depth (Pinecone, LlamaIndex, BM25, Elasticsearch). Bangalore, Karnataka; tier-1 India city; 50% recruiter response; last active 2026-04-20; 15-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "LinkedIn",
          "industry": "Internet",
          "duration_months": 51,
          "is_current": true,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Paytm",
          "industry": "Fintech",
          "duration_months": 31,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "Jadavpur University",
          "degree": "B.Tech",
          "field_of_study": "Information Technology",
          "start_year": 2011,
          "end_year": 2014,
          "grade": "83%",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0030348",
      "rank": 66,
      "score": 0.7326,
      "score_100": 73.26,
      "readiness": 68.3,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Om Mishra",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 4.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "BYJU'S",
      "industry": "EdTech",
      "company_size": "10001+",
      "location": "Noida, Uttar Pradesh",
      "country": "India",
      "years": 4.5,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "LlamaIndex",
        "Embeddings",
        "Vector Search",
        "Elasticsearch",
        "pgvector",
        "Haystack",
        "Deep Learning",
        "MLOps"
      ],
      "all_skills": [
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 96,
          "endorsements": 7
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 30
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 43
        },
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 29,
          "endorsements": 3
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 65,
          "endorsements": 24
        },
        {
          "name": "Spring Boot",
          "proficiency": "beginner",
          "duration_months": 14,
          "endorsements": 0
        },
        {
          "name": "OpenCV",
          "proficiency": "intermediate",
          "duration_months": 23,
          "endorsements": 15
        },
        {
          "name": "Marketing",
          "proficiency": "beginner",
          "duration_months": 5,
          "endorsements": 7
        },
        {
          "name": "Embeddings",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 20
        },
        {
          "name": "Vector Search",
          "proficiency": "advanced",
          "duration_months": 47,
          "endorsements": 45
        },
        {
          "name": "Elasticsearch",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 11
        },
        {
          "name": "Redis",
          "proficiency": "intermediate",
          "duration_months": 14,
          "endorsements": 14
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 53
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 25
        },
        {
          "name": "GANs",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 53
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 35
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-30",
        "response_rate": 0.54,
        "response_time_hours": 30.9,
        "notice_days": 45,
        "github": -1,
        "profile_views": 259,
        "applications": 20,
        "search_appearance": 593,
        "saved": 18,
        "endorsements": 71,
        "profile_completeness": 87.3,
        "interview_completion": 0.93,
        "offer_acceptance": -1,
        "work_mode": "onsite",
        "relocate": false,
        "salary_min": 34.9,
        "salary_max": 39.0,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "LlamaIndex",
            "score": 87.0
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 54.9,
        "role": 91.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 73.8,
        "logistics": 89.0,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 19.0,
        "evaluation": 40.0,
        "production": 14.3,
        "assessment": 87.0
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 54.0,
        "speed": 87.1,
        "open_to_work": 100.0,
        "completeness": 87.3,
        "saved": 67.0,
        "market_demand": 84.4,
        "applications": 100.0,
        "interview": 93.0,
        "github": 18.0,
        "assessment": 87.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Machine Learning Engineer with 4.5 yrs at BYJU'S; career and skills show strong retrieval/search depth (LlamaIndex, Embeddings, Vector Search, Elasticsearch). Noida, Uttar Pradesh; preferred office city; 54% recruiter response; last active 2026-03-30; 45-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "BYJU'S",
          "industry": "EdTech",
          "duration_months": 28,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Senior Data Scientist",
          "company": "PolicyBazaar",
          "industry": "Insurance Tech",
          "duration_months": 25,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        }
      ],
      "education": [
        {
          "institution": "VIT Vellore",
          "degree": "M.Sc",
          "field_of_study": "Information Technology",
          "start_year": 2002,
          "end_year": 2006,
          "grade": "72%",
          "tier": "tier_2"
        },
        {
          "institution": "Jadavpur University",
          "degree": "B.E.",
          "field_of_study": "Information Technology",
          "start_year": 2015,
          "end_year": 2019,
          "grade": "9.21 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0098846",
      "rank": 67,
      "score": 0.7313,
      "score_100": 73.13,
      "readiness": 68.6,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Shreya Saxena",
      "title": "AI Engineer",
      "headline": "AI Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 7.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "upGrad",
      "industry": "EdTech",
      "company_size": "1001-5000",
      "location": "Indore, Madhya Pradesh",
      "country": "India",
      "years": 7.6,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "Qdrant",
        "Haystack",
        "LlamaIndex",
        "Recommendation Systems",
        "Kubeflow",
        "Machine Learning",
        "MLOps",
        "TensorFlow"
      ],
      "all_skills": [
        {
          "name": "YOLO",
          "proficiency": "intermediate",
          "duration_months": 20,
          "endorsements": 10
        },
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 9,
          "endorsements": 6
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 9
        },
        {
          "name": "Hadoop",
          "proficiency": "beginner",
          "duration_months": 4,
          "endorsements": 7
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 47
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 6
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 9
        },
        {
          "name": "MLOps",
          "proficiency": "intermediate",
          "duration_months": 22,
          "endorsements": 12
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 51
        },
        {
          "name": "Haystack",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 51
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 13
        },
        {
          "name": "TensorFlow",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 16
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 53
        },
        {
          "name": "Speech Recognition",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 7
        },
        {
          "name": "Photoshop",
          "proficiency": "intermediate",
          "duration_months": 12,
          "endorsements": 10
        },
        {
          "name": "Azure",
          "proficiency": "beginner",
          "duration_months": 17,
          "endorsements": 6
        },
        {
          "name": "BentoML",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 29
        },
        {
          "name": "TTS",
          "proficiency": "intermediate",
          "duration_months": 24,
          "endorsements": 2
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-23",
        "response_rate": 0.62,
        "response_time_hours": 12.0,
        "notice_days": 45,
        "github": 86.2,
        "profile_views": 102,
        "applications": 13,
        "search_appearance": 747,
        "saved": 13,
        "endorsements": 99,
        "profile_completeness": 90.0,
        "interview_completion": 0.8,
        "offer_acceptance": -1,
        "work_mode": "flexible",
        "relocate": true,
        "salary_min": 44.0,
        "salary_max": 54.7,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 54.5,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 80.9,
        "logistics": 76.0,
        "penalty": 0.0,
        "retrieval": 66.4,
        "ranking": 51.9,
        "evaluation": 40.0,
        "production": 28.6,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 62.0,
        "speed": 95.0,
        "open_to_work": 100.0,
        "completeness": 90.0,
        "saved": 60.1,
        "market_demand": 78.8,
        "applications": 86.7,
        "interview": 80.0,
        "github": 86.2,
        "assessment": 50.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "AI Engineer with 7.6 yrs at upGrad; career and skills show strong retrieval/search depth (Qdrant, Haystack, LlamaIndex, Recommendation Systems). Indore, Madhya Pradesh; India, relocation-ready; 62% recruiter response; last active 2026-04-23; 45-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "AI Engineer",
          "company": "upGrad",
          "industry": "EdTech",
          "duration_months": 25,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Meesho",
          "industry": "E-commerce",
          "duration_months": 20,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Search Engineer",
          "company": "Swiggy",
          "industry": "Food Delivery",
          "duration_months": 19,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Search Engineer",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 26,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        }
      ],
      "education": [
        {
          "institution": "IIT Kanpur",
          "degree": "Ph.D",
          "field_of_study": "Machine Learning",
          "start_year": 2009,
          "end_year": 2013,
          "grade": "7.56 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0009024",
      "rank": 68,
      "score": 0.731,
      "score_100": 73.1,
      "readiness": 67.5,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Avni Sharma",
      "title": "Search Engineer",
      "headline": "Search Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 5.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Google",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Chennai, Tamil Nadu",
      "country": "India",
      "years": 5.2,
      "current_work": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.",
      "matched_skills": [
        "Qdrant",
        "FAISS",
        "LlamaIndex",
        "OpenSearch",
        "Recommendation Systems",
        "Machine Learning",
        "Airflow",
        "PyTorch"
      ],
      "all_skills": [
        {
          "name": "YOLO",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 21
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 31,
          "endorsements": 48
        },
        {
          "name": "dbt",
          "proficiency": "beginner",
          "duration_months": 2,
          "endorsements": 5
        },
        {
          "name": "CSS",
          "proficiency": "beginner",
          "duration_months": 10,
          "endorsements": 15
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 58
        },
        {
          "name": "FAISS",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 18
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 25,
          "endorsements": 2
        },
        {
          "name": "Airflow",
          "proficiency": "beginner",
          "duration_months": 4,
          "endorsements": 14
        },
        {
          "name": "PyTorch",
          "proficiency": "advanced",
          "duration_months": 53,
          "endorsements": 12
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 46,
          "endorsements": 29
        },
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 7
        },
        {
          "name": "LlamaIndex",
          "proficiency": "advanced",
          "duration_months": 47,
          "endorsements": 37
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 33
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 31
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 58
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 72,
          "endorsements": 28
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-09",
        "response_rate": 0.46,
        "response_time_hours": 18.0,
        "notice_days": 30,
        "github": 32.7,
        "profile_views": 18,
        "applications": 4,
        "search_appearance": 514,
        "saved": 16,
        "endorsements": 171,
        "profile_completeness": 62.7,
        "interview_completion": 0.6,
        "offer_acceptance": -1,
        "work_mode": "onsite",
        "relocate": false,
        "salary_min": 35.9,
        "salary_max": 48.3,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "PEFT",
            "score": 89.8
          },
          {
            "skill": "FAISS",
            "score": 81.9
          },
          {
            "skill": "Machine Learning",
            "score": 80.7
          },
          {
            "skill": "Qdrant",
            "score": 80.2
          },
          {
            "skill": "YOLO",
            "score": 66.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 54.7,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 65.9,
        "logistics": 88.5,
        "penalty": 0.0,
        "retrieval": 82.3,
        "ranking": 51.2,
        "evaluation": 20.0,
        "production": 14.3,
        "assessment": 83.2
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 46.0,
        "speed": 92.5,
        "open_to_work": 100.0,
        "completeness": 62.7,
        "saved": 64.5,
        "market_demand": 70.2,
        "applications": 52.9,
        "interview": 60.0,
        "github": 32.7,
        "assessment": 83.2,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Search Engineer with 5.2 yrs at Google; career and skills show strong retrieval/search depth (Qdrant, FAISS, LlamaIndex, OpenSearch). Chennai, Tamil Nadu; tier-1 India city; 46% recruiter response; last active 2026-04-09; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Search Engineer",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 33,
          "is_current": true,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Aganitha",
          "industry": "AI/ML",
          "duration_months": 28,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        }
      ],
      "education": [
        {
          "institution": "Stanford University",
          "degree": "M.E.",
          "field_of_study": "Machine Learning",
          "start_year": 2010,
          "end_year": 2015,
          "grade": "73%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0068811",
      "rank": 69,
      "score": 0.7289,
      "score_100": 72.89,
      "readiness": 69.9,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Krishna Mittal",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 8.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Freshworks",
      "industry": "SaaS",
      "company_size": "5001-10000",
      "location": "Pune, Maharashtra",
      "country": "India",
      "years": 8.0,
      "current_work": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.",
      "matched_skills": [
        "Vector Search",
        "Qdrant",
        "Embeddings",
        "pgvector",
        "Pinecone",
        "Haystack",
        "OpenSearch",
        "Weaviate"
      ],
      "all_skills": [
        {
          "name": "Data Science",
          "proficiency": "intermediate",
          "duration_months": 23,
          "endorsements": 9
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 79,
          "endorsements": 16
        },
        {
          "name": "Speech Recognition",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 44
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 47
        },
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 18,
          "endorsements": 7
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 70,
          "endorsements": 41
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 52,
          "endorsements": 20
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 19
        },
        {
          "name": "Embeddings",
          "proficiency": "advanced",
          "duration_months": 30,
          "endorsements": 33
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 14
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 49
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 51,
          "endorsements": 5
        },
        {
          "name": "PEFT",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 2
        },
        {
          "name": "gRPC",
          "proficiency": "beginner",
          "duration_months": 3,
          "endorsements": 3
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 48
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 70,
          "endorsements": 42
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 54
        },
        {
          "name": "Agile",
          "proficiency": "beginner",
          "duration_months": 16,
          "endorsements": 12
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-21",
        "response_rate": 0.42,
        "response_time_hours": 26.6,
        "notice_days": 30,
        "github": 23.1,
        "profile_views": 35,
        "applications": 6,
        "search_appearance": 478,
        "saved": 4,
        "endorsements": 77,
        "profile_completeness": 71.4,
        "interview_completion": 0.77,
        "offer_acceptance": 0.73,
        "work_mode": "onsite",
        "relocate": true,
        "salary_min": 27.4,
        "salary_max": 41.5,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Vector Search",
            "score": 52.6
          }
        ],
        "verified_email": true,
        "verified_phone": false,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 56.2,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 69.4,
        "logistics": 97.1,
        "penalty": 4.0,
        "retrieval": 100.0,
        "ranking": 25.3,
        "evaluation": 40.0,
        "production": 28.6,
        "assessment": 52.6
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 42.0,
        "speed": 88.9,
        "open_to_work": 100.0,
        "completeness": 71.4,
        "saved": 36.6,
        "market_demand": 64.0,
        "applications": 63.9,
        "interview": 77.0,
        "github": 23.1,
        "assessment": 52.6,
        "verified": 66.7
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [
        "assessment scores are weaker than the listed AI/search skills"
      ],
      "location_label": "preferred office city",
      "reasoning": "Applied ML Engineer with 8.0 yrs at Freshworks; career and skills show strong retrieval/search depth (Vector Search, Qdrant, Embeddings, pgvector). Pune, Maharashtra; preferred office city; 42% recruiter response; last active 2026-05-21; 30-day notice; concern: assessment scores are weaker than the listed AI/search skills.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Freshworks",
          "industry": "SaaS",
          "duration_months": 19,
          "is_current": true,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "AI Engineer",
          "company": "Yellow.ai",
          "industry": "AI/ML",
          "duration_months": 26,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "Meesho",
          "industry": "E-commerce",
          "duration_months": 25,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Search Engineer",
          "company": "Salesforce",
          "industry": "Software",
          "duration_months": 25,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        }
      ],
      "education": [
        {
          "institution": "Thapar University",
          "degree": "Ph.D",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2013,
          "end_year": 2017,
          "grade": "9.44 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "SRM Chennai",
          "degree": "M.E.",
          "field_of_study": "Information Technology",
          "start_year": 2014,
          "end_year": 2017,
          "grade": "7.14 CGPA",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0066999",
      "rank": 70,
      "score": 0.7289,
      "score_100": 72.89,
      "readiness": 70.3,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Riya Dalal",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 5.9 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Microsoft",
      "industry": "Software",
      "company_size": "10001+",
      "location": "Delhi, Delhi",
      "country": "India",
      "years": 5.9,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "OpenSearch",
        "FAISS",
        "Pinecone",
        "BM25",
        "Information Retrieval",
        "Embeddings",
        "Machine Learning",
        "LLMs"
      ],
      "all_skills": [
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 2
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 8
        },
        {
          "name": "JavaScript",
          "proficiency": "intermediate",
          "duration_months": 9,
          "endorsements": 15
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 54,
          "endorsements": 44
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 7
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 0
        },
        {
          "name": "ASR",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 10
        },
        {
          "name": "Pinecone",
          "proficiency": "advanced",
          "duration_months": 31,
          "endorsements": 29
        },
        {
          "name": "Node.js",
          "proficiency": "intermediate",
          "duration_months": 18,
          "endorsements": 8
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 58,
          "endorsements": 53
        },
        {
          "name": "CNN",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 23
        },
        {
          "name": "Excel",
          "proficiency": "beginner",
          "duration_months": 14,
          "endorsements": 12
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 33
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 18
        },
        {
          "name": "Embeddings",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 6
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-05",
        "response_rate": 0.63,
        "response_time_hours": 11.2,
        "notice_days": 15,
        "github": 94.4,
        "profile_views": 167,
        "applications": 17,
        "search_appearance": 619,
        "saved": 29,
        "endorsements": 124,
        "profile_completeness": 73.2,
        "interview_completion": 0.61,
        "offer_acceptance": -1,
        "work_mode": "remote",
        "relocate": true,
        "salary_min": 42.3,
        "salary_max": 43.5,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "Pinecone",
            "score": 90.3
          },
          {
            "skill": "LLMs",
            "score": 74.4
          },
          {
            "skill": "FAISS",
            "score": 69.5
          },
          {
            "skill": "OpenSearch",
            "score": 63.0
          },
          {
            "skill": "Image Classification",
            "score": 50.5
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 48.7,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 78.1,
        "logistics": 83.8,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 19.0,
        "evaluation": 0.0,
        "production": 42.9,
        "assessment": 74.3
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 63.0,
        "speed": 95.3,
        "open_to_work": 100.0,
        "completeness": 73.2,
        "saved": 77.4,
        "market_demand": 86.2,
        "applications": 94.9,
        "interview": 61.0,
        "github": 94.4,
        "assessment": 74.3,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Recommendation Systems Engineer with 5.9 yrs at Microsoft; career and skills show strong retrieval/search depth (OpenSearch, FAISS, Pinecone, BM25). Delhi, Delhi; tier-1 India city; 63% recruiter response; last active 2026-04-05; 15-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Microsoft",
          "industry": "Software",
          "duration_months": 49,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Senior Data Scientist",
          "company": "Amazon",
          "industry": "Internet",
          "duration_months": 21,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        }
      ],
      "education": [
        {
          "institution": "IIIT Bangalore",
          "degree": "M.S.",
          "field_of_study": "Computer Science",
          "start_year": 2003,
          "end_year": 2007,
          "grade": "8.50 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "IIT Roorkee",
          "degree": "B.Tech",
          "field_of_study": "Data Science",
          "start_year": 2003,
          "end_year": 2007,
          "grade": "75%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0065195",
      "rank": 71,
      "score": 0.7284,
      "score_100": 72.84,
      "readiness": 70.0,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Kiara Mukherjee",
      "title": "Search Engineer",
      "headline": "Search Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 5.1 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "CRED",
      "industry": "Fintech",
      "company_size": "1001-5000",
      "location": "Kolkata, West Bengal",
      "country": "India",
      "years": 5.1,
      "current_work": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.",
      "matched_skills": [
        "Elasticsearch",
        "Qdrant",
        "pgvector",
        "LlamaIndex",
        "Learning to Rank",
        "BentoML",
        "scikit-learn",
        "MLOps"
      ],
      "all_skills": [
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 59,
          "endorsements": 34
        },
        {
          "name": "BentoML",
          "proficiency": "intermediate",
          "duration_months": 35,
          "endorsements": 2
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 24
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 19
        },
        {
          "name": "Diffusion Models",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 47
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 89,
          "endorsements": 31
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "advanced",
          "duration_months": 29,
          "endorsements": 60
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 13
        },
        {
          "name": "Django",
          "proficiency": "intermediate",
          "duration_months": 24,
          "endorsements": 15
        },
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 22
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 18
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 25
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 51
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-24",
        "response_rate": 0.8,
        "response_time_hours": 22.7,
        "notice_days": 45,
        "github": 87.3,
        "profile_views": 168,
        "applications": 2,
        "search_appearance": 1027,
        "saved": 13,
        "endorsements": 47,
        "profile_completeness": 56.4,
        "interview_completion": 0.91,
        "offer_acceptance": 0.43,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 42.4,
        "salary_max": 62.4,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "LLMs",
            "score": 60.6
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 52.9,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 83.5,
        "logistics": 68.8,
        "penalty": 0.0,
        "retrieval": 88.6,
        "ranking": 46.1,
        "evaluation": 20.0,
        "production": 14.3,
        "assessment": 60.6
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 80.0,
        "speed": 90.5,
        "open_to_work": 100.0,
        "completeness": 56.4,
        "saved": 60.1,
        "market_demand": 80.3,
        "applications": 36.1,
        "interview": 91.0,
        "github": 87.3,
        "assessment": 60.6,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Search Engineer with 5.1 yrs at CRED; career and skills show strong retrieval/search depth (Elasticsearch, Qdrant, pgvector, LlamaIndex). Kolkata, West Bengal; India, non-preferred city; 80% recruiter response; last active 2026-05-24; 45-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Search Engineer",
          "company": "CRED",
          "industry": "Fintech",
          "duration_months": 48,
          "is_current": true,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Senior Data Scientist",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 13,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        }
      ],
      "education": [
        {
          "institution": "IIT Bombay",
          "degree": "M.Sc",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2013,
          "end_year": 2016,
          "grade": "7.09 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0040117",
      "rank": 72,
      "score": 0.7266,
      "score_100": 72.66,
      "readiness": 68.1,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Aisha Sen",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 6.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "PhonePe",
      "industry": "Fintech",
      "company_size": "5001-10000",
      "location": "Vizag, Andhra Pradesh",
      "country": "India",
      "years": 6.5,
      "current_work": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.",
      "matched_skills": [
        "LlamaIndex",
        "Embeddings",
        "RAG",
        "FAISS",
        "BM25",
        "LoRA",
        "QLoRA"
      ],
      "all_skills": [
        {
          "name": "OpenCV",
          "proficiency": "intermediate",
          "duration_months": 13,
          "endorsements": 7
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 85,
          "endorsements": 60
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 63,
          "endorsements": 58
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 31
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 73,
          "endorsements": 25
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 37,
          "endorsements": 31
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 37
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 67,
          "endorsements": 20
        },
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 27,
          "endorsements": 15
        },
        {
          "name": "LangChain",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 5
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 5
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 5
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-17",
        "response_rate": 0.66,
        "response_time_hours": 7.1,
        "notice_days": 15,
        "github": -1,
        "profile_views": 129,
        "applications": 7,
        "search_appearance": 280,
        "saved": 28,
        "endorsements": 36,
        "profile_completeness": 82.8,
        "interview_completion": 0.72,
        "offer_acceptance": -1,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 41.8,
        "salary_max": 45.3,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "RAG",
            "score": 77.7
          },
          {
            "skill": "LlamaIndex",
            "score": 62.4
          },
          {
            "skill": "Embeddings",
            "score": 53.2
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 50.0,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 70.1,
        "logistics": 78.4,
        "penalty": 0.0,
        "retrieval": 96.2,
        "ranking": 25.3,
        "evaluation": 40.0,
        "production": 14.3,
        "assessment": 64.4
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 66.0,
        "speed": 97.0,
        "open_to_work": 100.0,
        "completeness": 82.8,
        "saved": 76.6,
        "market_demand": 78.8,
        "applications": 68.3,
        "interview": 72.0,
        "github": 18.0,
        "assessment": 64.4,
        "verified": 66.7
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Recommendation Systems Engineer with 6.5 yrs at PhonePe; career and skills show strong retrieval/search depth (LlamaIndex, Embeddings, RAG, FAISS). Vizag, Andhra Pradesh; India, non-preferred city; 66% recruiter response; last active 2026-03-17; 15-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "PhonePe",
          "industry": "Fintech",
          "duration_months": 51,
          "is_current": true,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Salesforce",
          "industry": "Software",
          "duration_months": 26,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "IIT Roorkee",
          "degree": "Ph.D",
          "field_of_study": "Computer Science",
          "start_year": 2001,
          "end_year": 2006,
          "grade": "83%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0062247",
      "rank": 73,
      "score": 0.7256,
      "score_100": 72.56,
      "readiness": 74.7,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Saanvi Trivedi",
      "title": "AI Engineer",
      "headline": "AI Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 7.3 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Google",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Kochi, Kerala",
      "country": "India",
      "years": 7.3,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "Pinecone",
        "Vector Search",
        "Qdrant",
        "RAG",
        "Information Retrieval",
        "BM25",
        "Learning to Rank",
        "Deep Learning"
      ],
      "all_skills": [
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 54,
          "endorsements": 12
        },
        {
          "name": "OpenCV",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 4
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 34,
          "endorsements": 15
        },
        {
          "name": "ASR",
          "proficiency": "intermediate",
          "duration_months": 18,
          "endorsements": 10
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 37,
          "endorsements": 5
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 43
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 10
        },
        {
          "name": "RAG",
          "proficiency": "advanced",
          "duration_months": 30,
          "endorsements": 50
        },
        {
          "name": "Computer Vision",
          "proficiency": "intermediate",
          "duration_months": 23,
          "endorsements": 8
        },
        {
          "name": "PEFT",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 58
        },
        {
          "name": "Speech Recognition",
          "proficiency": "intermediate",
          "duration_months": 11,
          "endorsements": 15
        },
        {
          "name": "Illustrator",
          "proficiency": "beginner",
          "duration_months": 7,
          "endorsements": 0
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 88,
          "endorsements": 57
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 53,
          "endorsements": 43
        },
        {
          "name": "Information Retrieval",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 3
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 37,
          "endorsements": 46
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 27
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-23",
        "response_rate": 0.78,
        "response_time_hours": 21.0,
        "notice_days": 30,
        "github": 52.7,
        "profile_views": 267,
        "applications": 19,
        "search_appearance": 839,
        "saved": 9,
        "endorsements": 106,
        "profile_completeness": 57.2,
        "interview_completion": 0.84,
        "offer_acceptance": 0.57,
        "work_mode": "onsite",
        "relocate": true,
        "salary_min": 29.2,
        "salary_max": 61.4,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 56.0,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 78.5,
        "logistics": 82.7,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 53.1,
        "evaluation": 20.0,
        "production": 28.6,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 78.0,
        "speed": 91.2,
        "open_to_work": 100.0,
        "completeness": 57.2,
        "saved": 52.4,
        "market_demand": 82.5,
        "applications": 98.4,
        "interview": 84.0,
        "github": 52.7,
        "assessment": 50.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "AI Engineer with 7.3 yrs at Google; career and skills show strong retrieval/search depth (Pinecone, Vector Search, Qdrant, RAG). Kochi, Kerala; India, relocation-ready; 78% recruiter response; last active 2026-04-23; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "AI Engineer",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 37,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "NLP Engineer",
          "company": "Dream11",
          "industry": "Gaming",
          "duration_months": 50,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        }
      ],
      "education": [
        {
          "institution": "IIT Bombay",
          "degree": "M.E.",
          "field_of_study": "Machine Learning",
          "start_year": 2015,
          "end_year": 2019,
          "grade": "8.59 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "COEP Pune",
          "degree": "B.Sc",
          "field_of_study": "Information Technology",
          "start_year": 2005,
          "end_year": 2009,
          "grade": "7.53 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0042506",
      "rank": 74,
      "score": 0.7246,
      "score_100": 72.46,
      "readiness": 70.6,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Zara Pandey",
      "title": "Search Engineer",
      "headline": "Search Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 4.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Verloop.io",
      "industry": "Conversational AI",
      "company_size": "51-200",
      "location": "Mumbai, Maharashtra",
      "country": "India",
      "years": 4.2,
      "current_work": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.",
      "matched_skills": [
        "Semantic Search",
        "Information Retrieval",
        "Milvus",
        "Qdrant",
        "FAISS",
        "pgvector",
        "scikit-learn",
        "BentoML"
      ],
      "all_skills": [
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 39
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 7
        },
        {
          "name": "scikit-learn",
          "proficiency": "advanced",
          "duration_months": 37,
          "endorsements": 11
        },
        {
          "name": "OpenCV",
          "proficiency": "advanced",
          "duration_months": 38,
          "endorsements": 40
        },
        {
          "name": "Semantic Search",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 19
        },
        {
          "name": "BentoML",
          "proficiency": "intermediate",
          "duration_months": 27,
          "endorsements": 9
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 11
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 7
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 88,
          "endorsements": 26
        },
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 35,
          "endorsements": 3
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 41,
          "endorsements": 30
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 87,
          "endorsements": 1
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 25
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 81,
          "endorsements": 43
        },
        {
          "name": "Airflow",
          "proficiency": "intermediate",
          "duration_months": 9,
          "endorsements": 6
        },
        {
          "name": "Object Detection",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 41
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 60
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 51
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-22",
        "response_rate": 0.48,
        "response_time_hours": 75.7,
        "notice_days": 15,
        "github": 64.0,
        "profile_views": 262,
        "applications": 22,
        "search_appearance": 41,
        "saved": 49,
        "endorsements": 167,
        "profile_completeness": 83.3,
        "interview_completion": 0.82,
        "offer_acceptance": 0.77,
        "work_mode": "remote",
        "relocate": false,
        "salary_min": 42.7,
        "salary_max": 56.3,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "OpenCV",
            "score": 83.7
          },
          {
            "skill": "TTS",
            "score": 76.0
          },
          {
            "skill": "scikit-learn",
            "score": 73.6
          },
          {
            "skill": "PEFT",
            "score": 68.9
          },
          {
            "skill": "Semantic Search",
            "score": 66.6
          }
        ],
        "verified_email": false,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 56.9,
        "role": 96.0,
        "experience": 82.0,
        "company": 74.0,
        "behavior": 78.2,
        "logistics": 83.8,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 19.0,
        "evaluation": 40.0,
        "production": 14.3,
        "assessment": 69.7
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 48.0,
        "speed": 68.5,
        "open_to_work": 100.0,
        "completeness": 83.3,
        "saved": 89.0,
        "market_demand": 82.2,
        "applications": 100.0,
        "interview": 82.0,
        "github": 64.0,
        "assessment": 69.7,
        "verified": 66.7
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Search Engineer with 4.2 yrs at Verloop.io; career and skills show strong retrieval/search depth (Semantic Search, Information Retrieval, Milvus, Qdrant). Mumbai, Maharashtra; tier-1 India city; 48% recruiter response; last active 2026-05-22; 15-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Search Engineer",
          "company": "Verloop.io",
          "industry": "Conversational AI",
          "duration_months": 18,
          "is_current": true,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Meesho",
          "industry": "E-commerce",
          "duration_months": 32,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        }
      ],
      "education": [
        {
          "institution": "Amity University",
          "degree": "B.Tech",
          "field_of_study": "Machine Learning",
          "start_year": 2008,
          "end_year": 2011,
          "grade": "9.26 CGPA",
          "tier": "tier_3"
        },
        {
          "institution": "PES University",
          "degree": "M.E.",
          "field_of_study": "Computer Science",
          "start_year": 2003,
          "end_year": 2008,
          "grade": "65%",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0039521",
      "rank": 75,
      "score": 0.7244,
      "score_100": 72.44,
      "readiness": 66.5,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Kiara Krishnan",
      "title": "Search Engineer",
      "headline": "Search Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 5.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Salesforce",
      "industry": "Software",
      "company_size": "10001+",
      "location": "Coimbatore, Tamil Nadu",
      "country": "India",
      "years": 3.0,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "Weaviate",
        "BM25",
        "Haystack",
        "Semantic Search",
        "Embeddings",
        "Sentence Transformers",
        "RAG",
        "Qdrant"
      ],
      "all_skills": [
        {
          "name": "Accounting",
          "proficiency": "intermediate",
          "duration_months": 26,
          "endorsements": 2
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 53
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 55
        },
        {
          "name": "BentoML",
          "proficiency": "intermediate",
          "duration_months": 31,
          "endorsements": 15
        },
        {
          "name": "Forecasting",
          "proficiency": "intermediate",
          "duration_months": 24,
          "endorsements": 12
        },
        {
          "name": "Marketing",
          "proficiency": "beginner",
          "duration_months": 18,
          "endorsements": 6
        },
        {
          "name": "PEFT",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 17
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 88,
          "endorsements": 7
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 49
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 58
        },
        {
          "name": "Semantic Search",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 35
        },
        {
          "name": "Object Detection",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 53
        },
        {
          "name": "Embeddings",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 41
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 39
        },
        {
          "name": "RAG",
          "proficiency": "advanced",
          "duration_months": 18,
          "endorsements": 0
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 31,
          "endorsements": 28
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 49,
          "endorsements": 60
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 52
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-11",
        "response_rate": 0.41,
        "response_time_hours": 21.5,
        "notice_days": 30,
        "github": -1,
        "profile_views": 267,
        "applications": 13,
        "search_appearance": 659,
        "saved": 43,
        "endorsements": 162,
        "profile_completeness": 67.2,
        "interview_completion": 0.81,
        "offer_acceptance": 0.72,
        "work_mode": "onsite",
        "relocate": false,
        "salary_min": 27.9,
        "salary_max": 56.7,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Time Series",
            "score": 74.3
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 67.5,
        "role": 96.0,
        "experience": 58.0,
        "company": 100.0,
        "behavior": 59.9,
        "logistics": 75.5,
        "penalty": 4.0,
        "retrieval": 100.0,
        "ranking": 31.7,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 54.9
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 41.0,
        "speed": 91.0,
        "open_to_work": 35.0,
        "completeness": 67.2,
        "saved": 86.1,
        "market_demand": 92.1,
        "applications": 86.7,
        "interview": 81.0,
        "github": 18.0,
        "assessment": 54.9,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [
        "below the preferred 5-9 year experience band"
      ],
      "location_label": "India, non-preferred city",
      "reasoning": "Search Engineer with 3.0 yrs at Salesforce; career and skills show strong retrieval/search depth (Weaviate, BM25, Haystack, Semantic Search). Coimbatore, Tamil Nadu; India, non-preferred city; 41% recruiter response; last active 2026-04-11; 30-day notice; concern: below the preferred 5-9 year experience band.",
      "career": [
        {
          "title": "Search Engineer",
          "company": "Salesforce",
          "industry": "Software",
          "duration_months": 27,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Salesforce",
          "industry": "Software",
          "duration_months": 32,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "Symbiosis International",
          "degree": "B.Sc",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2015,
          "end_year": 2020,
          "grade": "6.99 CGPA",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0036184",
      "rank": 76,
      "score": 0.7244,
      "score_100": 72.44,
      "readiness": 74.9,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Riya Chopra",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 6.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "CRED",
      "industry": "Fintech",
      "company_size": "1001-5000",
      "location": "Trivandrum, Kerala",
      "country": "India",
      "years": 6.0,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "FAISS",
        "Semantic Search",
        "Embeddings",
        "Vector Search",
        "Pinecone",
        "Sentence Transformers",
        "MLOps",
        "PyTorch"
      ],
      "all_skills": [
        {
          "name": "Image Classification",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 4
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 19
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 6
        },
        {
          "name": "GANs",
          "proficiency": "advanced",
          "duration_months": 22,
          "endorsements": 37
        },
        {
          "name": "MLOps",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 3
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 29
        },
        {
          "name": "LangChain",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 30
        },
        {
          "name": "Semantic Search",
          "proficiency": "expert",
          "duration_months": 39,
          "endorsements": 50
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 67,
          "endorsements": 7
        },
        {
          "name": "Vector Search",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 38
        },
        {
          "name": "Pinecone",
          "proficiency": "advanced",
          "duration_months": 29,
          "endorsements": 32
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 2
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 2
        },
        {
          "name": "SEO",
          "proficiency": "beginner",
          "duration_months": 9,
          "endorsements": 12
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 77,
          "endorsements": 15
        },
        {
          "name": "CSS",
          "proficiency": "beginner",
          "duration_months": 16,
          "endorsements": 15
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 12
        },
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 33,
          "endorsements": 15
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-26",
        "response_rate": 0.9,
        "response_time_hours": 52.3,
        "notice_days": 30,
        "github": 43.2,
        "profile_views": 139,
        "applications": 19,
        "search_appearance": 971,
        "saved": 30,
        "endorsements": 145,
        "profile_completeness": 88.6,
        "interview_completion": 0.62,
        "offer_acceptance": -1,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 32.5,
        "salary_max": 56.4,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "GANs",
            "score": 86.8
          },
          {
            "skill": "QLoRA",
            "score": 70.8
          },
          {
            "skill": "Hugging Face Transformers",
            "score": 67.9
          },
          {
            "skill": "LangChain",
            "score": 55.7
          },
          {
            "skill": "FAISS",
            "score": 54.8
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 48.3,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 85.1,
        "logistics": 78.4,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 12.7,
        "evaluation": 20.0,
        "production": 14.3,
        "assessment": 64.5
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 90.0,
        "speed": 78.2,
        "open_to_work": 100.0,
        "completeness": 88.6,
        "saved": 78.1,
        "market_demand": 86.7,
        "applications": 98.4,
        "interview": 62.0,
        "github": 43.2,
        "assessment": 64.5,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Recommendation Systems Engineer with 6.0 yrs at CRED; career and skills show strong retrieval/search depth (FAISS, Semantic Search, Embeddings, Vector Search). Trivandrum, Kerala; India, non-preferred city; 90% recruiter response; last active 2026-05-26; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "CRED",
          "industry": "Fintech",
          "duration_months": 52,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "AI Engineer",
          "company": "PolicyBazaar",
          "industry": "Insurance Tech",
          "duration_months": 19,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "VJTI Mumbai",
          "degree": "M.S.",
          "field_of_study": "Computer Science",
          "start_year": 2015,
          "end_year": 2018,
          "grade": "6.90 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0007412",
      "rank": 77,
      "score": 0.7207,
      "score_100": 72.07,
      "readiness": 67.1,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Pranav Shah",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 7.4 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Zoho",
      "industry": "SaaS",
      "company_size": "10001+",
      "location": "Noida, Uttar Pradesh",
      "country": "India",
      "years": 7.4,
      "current_work": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories.",
      "matched_skills": [
        "Pinecone",
        "Milvus",
        "BM25",
        "RAG",
        "Recommendation Systems",
        "scikit-learn",
        "Data Science",
        "PyTorch"
      ],
      "all_skills": [
        {
          "name": "Node.js",
          "proficiency": "beginner",
          "duration_months": 6,
          "endorsements": 10
        },
        {
          "name": "scikit-learn",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 58
        },
        {
          "name": "Data Science",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 40
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 96,
          "endorsements": 21
        },
        {
          "name": "Milvus",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 60
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 23
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 46
        },
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 26,
          "endorsements": 15
        },
        {
          "name": "RAG",
          "proficiency": "advanced",
          "duration_months": 23,
          "endorsements": 20
        },
        {
          "name": "Photoshop",
          "proficiency": "beginner",
          "duration_months": 18,
          "endorsements": 9
        },
        {
          "name": "Object Detection",
          "proficiency": "advanced",
          "duration_months": 31,
          "endorsements": 16
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 4
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-19",
        "response_rate": 0.76,
        "response_time_hours": 23.7,
        "notice_days": 120,
        "github": 36.0,
        "profile_views": 251,
        "applications": 20,
        "search_appearance": 785,
        "saved": 38,
        "endorsements": 15,
        "profile_completeness": 81.3,
        "interview_completion": 0.88,
        "offer_acceptance": 0.77,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 22.2,
        "salary_max": 46.7,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "scikit-learn",
            "score": 55.8
          },
          {
            "skill": "Data Science",
            "score": 50.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 67.2,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 76.8,
        "logistics": 75.5,
        "penalty": 8.5,
        "retrieval": 83.0,
        "ranking": 67.4,
        "evaluation": 80.0,
        "production": 42.9,
        "assessment": 52.9
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 76.0,
        "speed": 90.1,
        "open_to_work": 100.0,
        "completeness": 81.3,
        "saved": 83.4,
        "market_demand": 86.7,
        "applications": 100.0,
        "interview": 88.0,
        "github": 36.0,
        "assessment": 52.9,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [
        "long notice period",
        "assessment scores are weaker than the listed AI/search skills"
      ],
      "location_label": "preferred office city",
      "reasoning": "Applied ML Engineer with 7.4 yrs at Zoho; career and skills show retrieval plus ranking/recommendation depth (Pinecone, Milvus, BM25, RAG). Noida, Uttar Pradesh; preferred office city; 76% recruiter response; last active 2026-04-19; 120-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Zoho",
          "industry": "SaaS",
          "duration_months": 33,
          "is_current": true,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "Locobuzz",
          "industry": "AI/ML",
          "duration_months": 19,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Search Engineer",
          "company": "Swiggy",
          "industry": "Food Delivery",
          "duration_months": 14,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Glance",
          "industry": "AI/ML",
          "duration_months": 13,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        }
      ],
      "education": [
        {
          "institution": "IIT Hyderabad",
          "degree": "M.Tech",
          "field_of_study": "Computer Science",
          "start_year": 2014,
          "end_year": 2019,
          "grade": "7.97 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "IIT Delhi",
          "degree": "M.S.",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2004,
          "end_year": 2009,
          "grade": "7.58 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0056881",
      "rank": 78,
      "score": 0.7197,
      "score_100": 71.97,
      "readiness": 65.2,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Reyansh Chowdary",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 4.5 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Zomato",
      "industry": "Food Delivery",
      "company_size": "5001-10000",
      "location": "Trivandrum, Kerala",
      "country": "India",
      "years": 4.5,
      "current_work": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.",
      "matched_skills": [
        "Elasticsearch",
        "Information Retrieval",
        "Pinecone",
        "Vector Search",
        "Learning to Rank",
        "BentoML",
        "Deep Learning",
        "scikit-learn"
      ],
      "all_skills": [
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 20
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 51
        },
        {
          "name": "BentoML",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 24
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 8
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 33
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 19
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 56
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 48
        },
        {
          "name": "TTS",
          "proficiency": "intermediate",
          "duration_months": 17,
          "endorsements": 12
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 25
        },
        {
          "name": "Salesforce CRM",
          "proficiency": "beginner",
          "duration_months": 6,
          "endorsements": 12
        },
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 9,
          "endorsements": 5
        },
        {
          "name": "Excel",
          "proficiency": "intermediate",
          "duration_months": 14,
          "endorsements": 13
        },
        {
          "name": "PyTorch",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 0
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-26",
        "response_rate": 0.75,
        "response_time_hours": 28.7,
        "notice_days": 90,
        "github": -1,
        "profile_views": 267,
        "applications": 19,
        "search_appearance": 232,
        "saved": 47,
        "endorsements": 16,
        "profile_completeness": 67.6,
        "interview_completion": 0.74,
        "offer_acceptance": 0.49,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 43.8,
        "salary_max": 56.2,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "Elasticsearch",
            "score": 91.4
          },
          {
            "skill": "Hugging Face Transformers",
            "score": 83.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 67.7,
        "role": 91.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 70.9,
        "logistics": 60.6,
        "penalty": 4.5,
        "retrieval": 80.1,
        "ranking": 66.1,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 87.4
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 75.0,
        "speed": 88.0,
        "open_to_work": 35.0,
        "completeness": 67.6,
        "saved": 88.1,
        "market_demand": 83.7,
        "applications": 98.4,
        "interview": 74.0,
        "github": 18.0,
        "assessment": 87.4,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "India, non-preferred city",
      "reasoning": "Machine Learning Engineer with 4.5 yrs at Zomato; career and skills show retrieval plus ranking/recommendation depth (Elasticsearch, Information Retrieval, Pinecone, Vector Search). Trivandrum, Kerala; India, non-preferred city; 75% recruiter response; last active 2026-04-26; 90-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "Zomato",
          "industry": "Food Delivery",
          "duration_months": 36,
          "is_current": true,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Search Engineer",
          "company": "Adobe",
          "industry": "Software",
          "duration_months": 18,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "PES University",
          "degree": "M.S.",
          "field_of_study": "Information Technology",
          "start_year": 2017,
          "end_year": 2022,
          "grade": "88%",
          "tier": "tier_2"
        },
        {
          "institution": "PES University",
          "degree": "B.E.",
          "field_of_study": "Information Technology",
          "start_year": 2008,
          "end_year": 2013,
          "grade": "92%",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0061655",
      "rank": 79,
      "score": 0.7193,
      "score_100": 71.93,
      "readiness": 74.2,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Mira Banerjee",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 4.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Krutrim",
      "industry": "AI/ML",
      "company_size": "201-500",
      "location": "Jaipur, Rajasthan",
      "country": "India",
      "years": 4.6,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "Haystack",
        "Pinecone",
        "Qdrant",
        "BM25",
        "OpenSearch",
        "Elasticsearch",
        "Machine Learning",
        "PyTorch"
      ],
      "all_skills": [
        {
          "name": "Haystack",
          "proficiency": "advanced",
          "duration_months": 25,
          "endorsements": 54
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 15
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 65,
          "endorsements": 46
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 35
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 78,
          "endorsements": 41
        },
        {
          "name": "PyTorch",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 49
        },
        {
          "name": "Flask",
          "proficiency": "intermediate",
          "duration_months": 30,
          "endorsements": 7
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 46,
          "endorsements": 14
        },
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 17,
          "endorsements": 14
        },
        {
          "name": "LangChain",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 50
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 40
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 58,
          "endorsements": 34
        },
        {
          "name": "GANs",
          "proficiency": "intermediate",
          "duration_months": 33,
          "endorsements": 0
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 47,
          "endorsements": 0
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 34
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 52
        },
        {
          "name": "REST APIs",
          "proficiency": "intermediate",
          "duration_months": 15,
          "endorsements": 5
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-05-21",
        "response_rate": 0.88,
        "response_time_hours": 47.8,
        "notice_days": 15,
        "github": 56.5,
        "profile_views": 181,
        "applications": 5,
        "search_appearance": 851,
        "saved": 19,
        "endorsements": 57,
        "profile_completeness": 97.7,
        "interview_completion": 0.85,
        "offer_acceptance": 0.51,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 27.4,
        "salary_max": 46.8,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 54.5,
        "role": 91.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 77.2,
        "logistics": 77.0,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 31.7,
        "evaluation": 20.0,
        "production": 28.6,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 88.0,
        "speed": 80.1,
        "open_to_work": 35.0,
        "completeness": 97.7,
        "saved": 68.2,
        "market_demand": 83.4,
        "applications": 58.9,
        "interview": 85.0,
        "github": 56.5,
        "assessment": 50.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Machine Learning Engineer with 4.6 yrs at Krutrim; career and skills show strong retrieval/search depth (Haystack, Pinecone, Qdrant, BM25). Jaipur, Rajasthan; India, non-preferred city; 88% recruiter response; last active 2026-05-21; 15-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "Krutrim",
          "industry": "AI/ML",
          "duration_months": 43,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "Google",
          "industry": "Internet",
          "duration_months": 11,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        }
      ],
      "education": [
        {
          "institution": "NIT Warangal",
          "degree": "M.S.",
          "field_of_study": "Computer Engineering",
          "start_year": 2013,
          "end_year": 2016,
          "grade": "7.21 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0065878",
      "rank": 80,
      "score": 0.7186,
      "score_100": 71.86,
      "readiness": 66.5,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Suresh Kapoor",
      "title": "Senior Data Scientist",
      "headline": "Senior Data Scientist | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 7.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Niramai",
      "industry": "HealthTech AI",
      "company_size": "51-200",
      "location": "Trivandrum, Kerala",
      "country": "India",
      "years": 7.8,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "RAG",
        "pgvector",
        "LlamaIndex",
        "Vector Search",
        "Recommendation Systems",
        "scikit-learn",
        "MLflow",
        "TensorFlow"
      ],
      "all_skills": [
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 40
        },
        {
          "name": "RAG",
          "proficiency": "advanced",
          "duration_months": 44,
          "endorsements": 10
        },
        {
          "name": "Computer Vision",
          "proficiency": "intermediate",
          "duration_months": 16,
          "endorsements": 10
        },
        {
          "name": "pgvector",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 8
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 25
        },
        {
          "name": "LlamaIndex",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 30
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 11
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 9
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 30
        },
        {
          "name": "Vector Search",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 44
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 37,
          "endorsements": 25
        },
        {
          "name": "Photoshop",
          "proficiency": "intermediate",
          "duration_months": 31,
          "endorsements": 2
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 56
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 54,
          "endorsements": 29
        },
        {
          "name": "Diffusion Models",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 23
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-23",
        "response_rate": 0.48,
        "response_time_hours": 37.6,
        "notice_days": 15,
        "github": -1,
        "profile_views": 37,
        "applications": 17,
        "search_appearance": 432,
        "saved": 25,
        "endorsements": 71,
        "profile_completeness": 90.8,
        "interview_completion": 0.61,
        "offer_acceptance": -1,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 23.2,
        "salary_max": 55.7,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "scikit-learn",
            "score": 70.6
          },
          {
            "skill": "pgvector",
            "score": 70.0
          },
          {
            "skill": "RAG",
            "score": 51.0
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 56.3,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 67.9,
        "logistics": 77.0,
        "penalty": 0.0,
        "retrieval": 74.2,
        "ranking": 53.4,
        "evaluation": 20.0,
        "production": 42.9,
        "assessment": 63.9
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 48.0,
        "speed": 84.3,
        "open_to_work": 100.0,
        "completeness": 90.8,
        "saved": 74.1,
        "market_demand": 74.3,
        "applications": 94.9,
        "interview": 61.0,
        "github": 18.0,
        "assessment": 63.9,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Senior Data Scientist with 7.8 yrs at Niramai; career and skills show strong retrieval/search depth (RAG, pgvector, LlamaIndex, Vector Search). Trivandrum, Kerala; India, non-preferred city; 48% recruiter response; last active 2026-03-23; 15-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Data Scientist",
          "company": "Niramai",
          "industry": "HealthTech AI",
          "duration_months": 24,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "NLP Engineer",
          "company": "Uber",
          "industry": "Transportation",
          "duration_months": 20,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "Glance",
          "industry": "AI/ML",
          "duration_months": 33,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Search Engineer",
          "company": "Rephrase.ai",
          "industry": "AI/ML",
          "duration_months": 15,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        }
      ],
      "education": [
        {
          "institution": "Manipal Institute of Technology",
          "degree": "B.E.",
          "field_of_study": "Machine Learning",
          "start_year": 2008,
          "end_year": 2012,
          "grade": "7.16 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "Delhi College of Engineering",
          "degree": "B.Sc",
          "field_of_study": "Machine Learning",
          "start_year": 2006,
          "end_year": 2011,
          "grade": "8.20 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0014440",
      "rank": 81,
      "score": 0.7183,
      "score_100": 71.83,
      "readiness": 66.7,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Ananya Singh",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 6.4 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "CRED",
      "industry": "Fintech",
      "company_size": "1001-5000",
      "location": "Chennai, Tamil Nadu",
      "country": "India",
      "years": 6.4,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "Elasticsearch",
        "Milvus",
        "FAISS",
        "Qdrant",
        "Machine Learning",
        "Feature Engineering",
        "TensorFlow",
        "Fine-tuning LLMs"
      ],
      "all_skills": [
        {
          "name": "Elasticsearch",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 18
        },
        {
          "name": "Diffusion Models",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 11
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 79,
          "endorsements": 2
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 10
        },
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 9,
          "endorsements": 11
        },
        {
          "name": "Forecasting",
          "proficiency": "intermediate",
          "duration_months": 32,
          "endorsements": 13
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "advanced",
          "duration_months": 25,
          "endorsements": 0
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 38,
          "endorsements": 52
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 49,
          "endorsements": 10
        },
        {
          "name": "Weights & Biases",
          "proficiency": "intermediate",
          "duration_months": 12,
          "endorsements": 6
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "advanced",
          "duration_months": 31,
          "endorsements": 2
        },
        {
          "name": "TensorFlow",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 31
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-10",
        "response_rate": 0.64,
        "response_time_hours": 14.6,
        "notice_days": 60,
        "github": 89.5,
        "profile_views": 93,
        "applications": 4,
        "search_appearance": 735,
        "saved": 33,
        "endorsements": 123,
        "profile_completeness": 68.8,
        "interview_completion": 0.84,
        "offer_acceptance": -1,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 27.0,
        "salary_max": 59.4,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "Elasticsearch",
            "score": 58.1
          },
          {
            "skill": "Diffusion Models",
            "score": 52.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 44.3,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 79.6,
        "logistics": 81.8,
        "penalty": 0.0,
        "retrieval": 80.0,
        "ranking": 19.0,
        "evaluation": 20.0,
        "production": 28.6,
        "assessment": 58.1
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 64.0,
        "speed": 93.9,
        "open_to_work": 100.0,
        "completeness": 68.8,
        "saved": 80.2,
        "market_demand": 84.4,
        "applications": 52.9,
        "interview": 84.0,
        "github": 89.5,
        "assessment": 58.1,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Recommendation Systems Engineer with 6.4 yrs at CRED; career and skills show strong retrieval/search depth (Elasticsearch, Milvus, FAISS, Qdrant). Chennai, Tamil Nadu; tier-1 India city; 64% recruiter response; last active 2026-05-10; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "CRED",
          "industry": "Fintech",
          "duration_months": 31,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "NLP Engineer",
          "company": "Freshworks",
          "industry": "SaaS",
          "duration_months": 31,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "NLP Engineer",
          "company": "upGrad",
          "industry": "EdTech",
          "duration_months": 14,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        }
      ],
      "education": [
        {
          "institution": "VJTI Mumbai",
          "degree": "B.Tech",
          "field_of_study": "Data Science",
          "start_year": 2006,
          "end_year": 2009,
          "grade": "7.95 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "Massachusetts Institute of Technology",
          "degree": "Ph.D",
          "field_of_study": "Machine Learning",
          "start_year": 2012,
          "end_year": 2015,
          "grade": "90%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0087630",
      "rank": 82,
      "score": 0.718,
      "score_100": 71.8,
      "readiness": 67.6,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Aisha Rao",
      "title": "AI Engineer",
      "headline": "AI Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 7.2 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I shipped our first RAG-based feature this year and now own the eval framework for it. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Vedantu",
      "industry": "EdTech",
      "company_size": "1001-5000",
      "location": "Gurgaon, Haryana",
      "country": "India",
      "years": 7.2,
      "current_work": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.",
      "matched_skills": [
        "Elasticsearch",
        "pgvector",
        "BM25",
        "Embeddings",
        "Sentence Transformers",
        "OpenSearch",
        "Learning to Rank",
        "Data Science"
      ],
      "all_skills": [
        {
          "name": "Data Science",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 36
        },
        {
          "name": "GANs",
          "proficiency": "intermediate",
          "duration_months": 34,
          "endorsements": 4
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 23
        },
        {
          "name": "Elasticsearch",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 13
        },
        {
          "name": "Flask",
          "proficiency": "intermediate",
          "duration_months": 22,
          "endorsements": 2
        },
        {
          "name": "pgvector",
          "proficiency": "advanced",
          "duration_months": 46,
          "endorsements": 54
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 49,
          "endorsements": 17
        },
        {
          "name": "Learning to Rank",
          "proficiency": "advanced",
          "duration_months": 44,
          "endorsements": 16
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 47,
          "endorsements": 60
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 24
        },
        {
          "name": "Weights & Biases",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 0
        },
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 12,
          "endorsements": 4
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 22,
          "endorsements": 23
        },
        {
          "name": "Tally",
          "proficiency": "intermediate",
          "duration_months": 23,
          "endorsements": 1
        },
        {
          "name": "Embeddings",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 4
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 78,
          "endorsements": 57
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 51
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 52
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-03-16",
        "response_rate": 0.45,
        "response_time_hours": 6.9,
        "notice_days": 30,
        "github": 23.2,
        "profile_views": 275,
        "applications": 19,
        "search_appearance": 387,
        "saved": 64,
        "endorsements": 41,
        "profile_completeness": 60.1,
        "interview_completion": 1.0,
        "offer_acceptance": -1,
        "work_mode": "flexible",
        "relocate": true,
        "salary_min": 42.4,
        "salary_max": 45.4,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "pgvector",
            "score": 78.1
          },
          {
            "skill": "ASR",
            "score": 68.1
          },
          {
            "skill": "Elasticsearch",
            "score": 65.9
          },
          {
            "skill": "Data Science",
            "score": 59.3
          }
        ],
        "verified_email": true,
        "verified_phone": false,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 57.9,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 62.1,
        "logistics": 89.9,
        "penalty": 0.0,
        "retrieval": 96.2,
        "ranking": 51.9,
        "evaluation": 20.0,
        "production": 28.6,
        "assessment": 67.8
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 45.0,
        "speed": 97.1,
        "open_to_work": 35.0,
        "completeness": 60.1,
        "saved": 95.0,
        "market_demand": 89.8,
        "applications": 98.4,
        "interview": 100.0,
        "github": 23.2,
        "assessment": 67.8,
        "verified": 66.7
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "AI Engineer with 7.2 yrs at Vedantu; career and skills show strong retrieval/search depth (Elasticsearch, pgvector, BM25, Embeddings). Gurgaon, Haryana; tier-1 India city; 45% recruiter response; last active 2026-03-16; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "AI Engineer",
          "company": "Vedantu",
          "industry": "EdTech",
          "duration_months": 15,
          "is_current": true,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Haptik",
          "industry": "Conversational AI",
          "duration_months": 27,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Applied ML Engineer",
          "company": "Glance",
          "industry": "AI/ML",
          "duration_months": 43,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        }
      ],
      "education": [
        {
          "institution": "COEP Pune",
          "degree": "B.E.",
          "field_of_study": "Data Science",
          "start_year": 2016,
          "end_year": 2019,
          "grade": "9.06 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0009837",
      "rank": 83,
      "score": 0.7176,
      "score_100": 71.76,
      "readiness": 67.5,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Sneha Joshi",
      "title": "Senior Data Scientist",
      "headline": "Senior Data Scientist | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 4.3 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Rephrase.ai",
      "industry": "AI/ML",
      "company_size": "11-50",
      "location": "Noida, Uttar Pradesh",
      "country": "India",
      "years": 4.3,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "FAISS",
        "Haystack",
        "Qdrant",
        "Learning to Rank",
        "scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Python"
      ],
      "all_skills": [
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 67,
          "endorsements": 3
        },
        {
          "name": "LangChain",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 3
        },
        {
          "name": "TensorFlow",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 34
        },
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 25,
          "endorsements": 0
        },
        {
          "name": "Speech Recognition",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 2
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 28
        },
        {
          "name": "Computer Vision",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 33
        },
        {
          "name": "REST APIs",
          "proficiency": "intermediate",
          "duration_months": 9,
          "endorsements": 9
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 15
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 76,
          "endorsements": 25
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 83,
          "endorsements": 24
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 57,
          "endorsements": 60
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 73,
          "endorsements": 26
        },
        {
          "name": "Six Sigma",
          "proficiency": "beginner",
          "duration_months": 9,
          "endorsements": 3
        },
        {
          "name": "Haystack",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 58
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 50,
          "endorsements": 17
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-03-31",
        "response_rate": 0.53,
        "response_time_hours": 70.4,
        "notice_days": 60,
        "github": 54.5,
        "profile_views": 140,
        "applications": 12,
        "search_appearance": 259,
        "saved": 3,
        "endorsements": 168,
        "profile_completeness": 56.2,
        "interview_completion": 1.0,
        "offer_acceptance": 0.91,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 38.3,
        "salary_max": 53.2,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "LangChain",
            "score": 90.6
          },
          {
            "skill": "Image Classification",
            "score": 88.3
          },
          {
            "skill": "scikit-learn",
            "score": 81.6
          },
          {
            "skill": "PyTorch",
            "score": 80.1
          },
          {
            "skill": "TensorFlow",
            "score": 51.3
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 61.2,
        "role": 76.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 61.4,
        "logistics": 91.8,
        "penalty": 0.0,
        "retrieval": 55.5,
        "ranking": 69.1,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 71.0
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 53.0,
        "speed": 70.7,
        "open_to_work": 35.0,
        "completeness": 56.2,
        "saved": 31.5,
        "market_demand": 69.7,
        "applications": 84.2,
        "interview": 100.0,
        "github": 54.5,
        "assessment": 71.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Senior Data Scientist with 4.3 yrs at Rephrase.ai; career and skills show retrieval plus ranking/recommendation depth (FAISS, Haystack, Qdrant, Learning to Rank). Noida, Uttar Pradesh; preferred office city; 53% recruiter response; last active 2026-03-31; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Data Scientist",
          "company": "Rephrase.ai",
          "industry": "AI/ML",
          "duration_months": 51,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "Carnegie Mellon University",
          "degree": "Ph.D",
          "field_of_study": "Machine Learning",
          "start_year": 2017,
          "end_year": 2021,
          "grade": "8.02 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "IIT Bombay",
          "degree": "B.Sc",
          "field_of_study": "Computer Science",
          "start_year": 2007,
          "end_year": 2010,
          "grade": "8.74 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0018549",
      "rank": 84,
      "score": 0.7145,
      "score_100": 71.45,
      "readiness": 68.9,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Mira Verma",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | ML, NLP, Recommendation Systems",
      "summary": "Machine learning engineer with 6.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Uber",
      "industry": "Transportation",
      "company_size": "10001+",
      "location": "Coimbatore, Tamil Nadu",
      "country": "India",
      "years": 6.8,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "Weaviate",
        "Elasticsearch",
        "Qdrant",
        "Milvus",
        "OpenSearch",
        "Kubernetes",
        "scikit-learn",
        "Fine-tuning LLMs"
      ],
      "all_skills": [
        {
          "name": "Computer Vision",
          "proficiency": "intermediate",
          "duration_months": 27,
          "endorsements": 5
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 44,
          "endorsements": 10
        },
        {
          "name": "Kubernetes",
          "proficiency": "intermediate",
          "duration_months": 30,
          "endorsements": 9
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 73,
          "endorsements": 43
        },
        {
          "name": "BigQuery",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 8
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 81,
          "endorsements": 28
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 37
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 79,
          "endorsements": 5
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 40,
          "endorsements": 10
        },
        {
          "name": "Speech Recognition",
          "proficiency": "intermediate",
          "duration_months": 11,
          "endorsements": 6
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 78,
          "endorsements": 43
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 38
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 85,
          "endorsements": 21
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 41,
          "endorsements": 54
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-28",
        "response_rate": 0.73,
        "response_time_hours": 75.4,
        "notice_days": 60,
        "github": 56.3,
        "profile_views": 250,
        "applications": 13,
        "search_appearance": 631,
        "saved": 15,
        "endorsements": 114,
        "profile_completeness": 65.0,
        "interview_completion": 0.67,
        "offer_acceptance": 0.89,
        "work_mode": "flexible",
        "relocate": true,
        "salary_min": 33.2,
        "salary_max": 58.5,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "Elasticsearch",
            "score": 90.0
          },
          {
            "skill": "LangChain",
            "score": 64.9
          },
          {
            "skill": "Weaviate",
            "score": 61.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 52.3,
        "role": 96.0,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 78.1,
        "logistics": 76.0,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 25.3,
        "evaluation": 20.0,
        "production": 28.6,
        "assessment": 75.7
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 73.0,
        "speed": 68.6,
        "open_to_work": 100.0,
        "completeness": 65.0,
        "saved": 63.1,
        "market_demand": 84.4,
        "applications": 86.7,
        "interview": 67.0,
        "github": 56.3,
        "assessment": 75.7,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "Recommendation Systems Engineer with 6.8 yrs at Uber; career and skills show strong retrieval/search depth (Weaviate, Elasticsearch, Qdrant, Milvus). Coimbatore, Tamil Nadu; India, relocation-ready; 73% recruiter response; last active 2026-04-28; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Uber",
          "industry": "Transportation",
          "duration_months": 37,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Flipkart",
          "industry": "E-commerce",
          "duration_months": 44,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        }
      ],
      "education": [
        {
          "institution": "Stanford University",
          "degree": "M.Tech",
          "field_of_study": "Data Science",
          "start_year": 2012,
          "end_year": 2017,
          "grade": "7.81 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0069905",
      "rank": 85,
      "score": 0.7136,
      "score_100": 71.36,
      "readiness": 66.6,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Nisha Bansal",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 6.6 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Sarvam AI",
      "industry": "AI/ML",
      "company_size": "51-200",
      "location": "Bhubaneswar, Odisha",
      "country": "India",
      "years": 6.6,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "Sentence Transformers",
        "Weaviate",
        "Recommendation Systems",
        "Learning to Rank",
        "TensorFlow",
        "MLOps",
        "Python",
        "LoRA"
      ],
      "all_skills": [
        {
          "name": "Flask",
          "proficiency": "beginner",
          "duration_months": 2,
          "endorsements": 6
        },
        {
          "name": "Redux",
          "proficiency": "intermediate",
          "duration_months": 16,
          "endorsements": 13
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 46
        },
        {
          "name": "Computer Vision",
          "proficiency": "intermediate",
          "duration_months": 13,
          "endorsements": 4
        },
        {
          "name": "Speech Recognition",
          "proficiency": "advanced",
          "duration_months": 28,
          "endorsements": 11
        },
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 20,
          "endorsements": 10
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 13
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 48
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 35
        },
        {
          "name": "TensorFlow",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 47
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "advanced",
          "duration_months": 31,
          "endorsements": 21
        },
        {
          "name": "MLOps",
          "proficiency": "advanced",
          "duration_months": 59,
          "endorsements": 35
        },
        {
          "name": "Forecasting",
          "proficiency": "intermediate",
          "duration_months": 10,
          "endorsements": 1
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 55
        },
        {
          "name": "Object Detection",
          "proficiency": "intermediate",
          "duration_months": 18,
          "endorsements": 12
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 78,
          "endorsements": 20
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 41,
          "endorsements": 31
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-21",
        "response_rate": 0.78,
        "response_time_hours": 68.8,
        "notice_days": 90,
        "github": 44.8,
        "profile_views": 59,
        "applications": 18,
        "search_appearance": 315,
        "saved": 57,
        "endorsements": 108,
        "profile_completeness": 63.6,
        "interview_completion": 0.93,
        "offer_acceptance": 0.53,
        "work_mode": "onsite",
        "relocate": true,
        "salary_min": 24.8,
        "salary_max": 58.9,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "LoRA",
            "score": 71.3
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 59.4,
        "role": 91.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 80.0,
        "logistics": 66.4,
        "penalty": 4.5,
        "retrieval": 63.4,
        "ranking": 81.0,
        "evaluation": 60.0,
        "production": 14.3,
        "assessment": 71.3
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 78.0,
        "speed": 71.3,
        "open_to_work": 100.0,
        "completeness": 63.6,
        "saved": 92.4,
        "market_demand": 81.7,
        "applications": 96.7,
        "interview": 93.0,
        "github": 44.8,
        "assessment": 71.3,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "India, relocation-ready",
      "reasoning": "Applied ML Engineer with 6.6 yrs at Sarvam AI; career and skills show retrieval plus ranking/recommendation depth (Sentence Transformers, Weaviate, Recommendation Systems, Learning to Rank). Bhubaneswar, Odisha; India, relocation-ready; 78% recruiter response; last active 2026-04-21; 90-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Sarvam AI",
          "industry": "AI/ML",
          "duration_months": 26,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Nykaa",
          "industry": "E-commerce",
          "duration_months": 13,
          "is_current": false,
          "description": "Implemented a RAG-based customer support chatbot integrated with our existing ticketing system. Built the document ingestion pipeline (chunking, embedding via OpenAI embeddings, storing in Pinecone) and the answer-generation layer (initially GPT-4, then a fine-tuned smaller model for cost control). Designed the evaluation framework with both automatic metrics (BLEU, ROUGE) and human-in-the-loop quality scores. Deployment cut average ticket resolution time by 31% for the supported categories."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "Observe.AI",
          "industry": "AI/ML",
          "duration_months": 39,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "PES University",
          "degree": "M.E.",
          "field_of_study": "Computer Engineering",
          "start_year": 2003,
          "end_year": 2006,
          "grade": "7.67 CGPA",
          "tier": "tier_2"
        }
      ]
    },
    {
      "candidate_id": "CAND_0054123",
      "rank": 86,
      "score": 0.7134,
      "score_100": 71.34,
      "readiness": 70.1,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Tanvi Banerjee",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 4.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I've been the de-facto ML lead on a small team, shipping models across NLP and recsys. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Meta",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Gurgaon, Haryana",
      "country": "India",
      "years": 4.7,
      "current_work": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.",
      "matched_skills": [
        "pgvector",
        "Weaviate",
        "Qdrant",
        "Vector Search",
        "Semantic Search",
        "Python",
        "Hugging Face Transformers",
        "LLMs"
      ],
      "all_skills": [
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 42
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 21
        },
        {
          "name": "Python",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 17
        },
        {
          "name": "Weaviate",
          "proficiency": "expert",
          "duration_months": 39,
          "endorsements": 53
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 75,
          "endorsements": 33
        },
        {
          "name": "SEO",
          "proficiency": "beginner",
          "duration_months": 18,
          "endorsements": 1
        },
        {
          "name": "Vector Search",
          "proficiency": "advanced",
          "duration_months": 56,
          "endorsements": 58
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 56
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 59
        },
        {
          "name": "Tailwind",
          "proficiency": "intermediate",
          "duration_months": 15,
          "endorsements": 3
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 64,
          "endorsements": 42
        },
        {
          "name": "Semantic Search",
          "proficiency": "advanced",
          "duration_months": 44,
          "endorsements": 19
        },
        {
          "name": "Speech Recognition",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 30
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 45
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 2
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-05-08",
        "response_rate": 0.87,
        "response_time_hours": 72.8,
        "notice_days": 60,
        "github": 71.5,
        "profile_views": 242,
        "applications": 1,
        "search_appearance": 147,
        "saved": 11,
        "endorsements": 30,
        "profile_completeness": 51.2,
        "interview_completion": 0.71,
        "offer_acceptance": 0.83,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 32.8,
        "salary_max": 60.5,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "Python",
            "score": 92.0
          },
          {
            "skill": "LangChain",
            "score": 63.5
          },
          {
            "skill": "pgvector",
            "score": 60.0
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 53.1,
        "role": 91.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 69.2,
        "logistics": 81.8,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 19.0,
        "evaluation": 40.0,
        "production": 14.3,
        "assessment": 76.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 87.0,
        "speed": 69.7,
        "open_to_work": 35.0,
        "completeness": 51.2,
        "saved": 56.5,
        "market_demand": 73.9,
        "applications": 22.8,
        "interview": 71.0,
        "github": 71.5,
        "assessment": 76.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Applied ML Engineer with 4.7 yrs at Meta; career and skills show strong retrieval/search depth (pgvector, Weaviate, Qdrant, Vector Search). Gurgaon, Haryana; tier-1 India city; 87% recruiter response; last active 2026-05-08; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Meta",
          "industry": "Internet",
          "duration_months": 45,
          "is_current": true,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "AI Engineer",
          "company": "CRED",
          "industry": "Fintech",
          "duration_months": 10,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "Stanford University",
          "degree": "M.Tech",
          "field_of_study": "Data Science",
          "start_year": 2005,
          "end_year": 2010,
          "grade": "7.57 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0076831",
      "rank": 87,
      "score": 0.7134,
      "score_100": 71.34,
      "readiness": 61.9,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Myra Verma",
      "title": "Search Engineer",
      "headline": "Search Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 4.0 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Krutrim",
      "industry": "AI/ML",
      "company_size": "201-500",
      "location": "Delhi, Delhi",
      "country": "India",
      "years": 4.0,
      "current_work": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.",
      "matched_skills": [
        "Milvus",
        "BM25",
        "Weaviate",
        "LlamaIndex",
        "MLOps",
        "PyTorch",
        "LLMs",
        "Fine-tuning LLMs"
      ],
      "all_skills": [
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 91,
          "endorsements": 1
        },
        {
          "name": "MLOps",
          "proficiency": "intermediate",
          "duration_months": 32,
          "endorsements": 14
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 60
        },
        {
          "name": "SEO",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 2
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 46,
          "endorsements": 39
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 31
        },
        {
          "name": "Forecasting",
          "proficiency": "intermediate",
          "duration_months": 35,
          "endorsements": 6
        },
        {
          "name": "YOLO",
          "proficiency": "intermediate",
          "duration_months": 27,
          "endorsements": 11
        },
        {
          "name": "Kafka",
          "proficiency": "beginner",
          "duration_months": 17,
          "endorsements": 12
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 79,
          "endorsements": 37
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 34
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 13,
          "endorsements": 8
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 89,
          "endorsements": 11
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 40,
          "endorsements": 30
        },
        {
          "name": "Project Management",
          "proficiency": "beginner",
          "duration_months": 5,
          "endorsements": 13
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 3
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-14",
        "response_rate": 0.5,
        "response_time_hours": 40.1,
        "notice_days": 90,
        "github": 46.7,
        "profile_views": 34,
        "applications": 22,
        "search_appearance": 248,
        "saved": 3,
        "endorsements": 164,
        "profile_completeness": 83.5,
        "interview_completion": 0.65,
        "offer_acceptance": -1,
        "work_mode": "onsite",
        "relocate": true,
        "salary_min": 27.9,
        "salary_max": 64.2,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "BM25",
            "score": 91.3
          },
          {
            "skill": "LLMs",
            "score": 87.4
          },
          {
            "skill": "Milvus",
            "score": 67.3
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 58.7,
        "role": 96.0,
        "experience": 82.0,
        "company": 100.0,
        "behavior": 74.2,
        "logistics": 72.2,
        "penalty": 4.5,
        "retrieval": 81.0,
        "ranking": 31.7,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 82.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 50.0,
        "speed": 83.3,
        "open_to_work": 100.0,
        "completeness": 83.5,
        "saved": 31.5,
        "market_demand": 61.5,
        "applications": 100.0,
        "interview": 65.0,
        "github": 46.7,
        "assessment": 82.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "tier-1 India city",
      "reasoning": "Search Engineer with 4.0 yrs at Krutrim; career and skills show strong retrieval/search depth (Milvus, BM25, Weaviate, LlamaIndex). Delhi, Delhi; tier-1 India city; 50% recruiter response; last active 2026-05-14; 90-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Search Engineer",
          "company": "Krutrim",
          "industry": "AI/ML",
          "duration_months": 27,
          "is_current": true,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Search Engineer",
          "company": "Zomato",
          "industry": "Food Delivery",
          "duration_months": 20,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "Jadavpur University",
          "degree": "M.S.",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2005,
          "end_year": 2008,
          "grade": "8.90 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "Stanford University",
          "degree": "Ph.D",
          "field_of_study": "Data Science",
          "start_year": 2010,
          "end_year": 2013,
          "grade": "81%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0086151",
      "rank": 88,
      "score": 0.7132,
      "score_100": 71.32,
      "readiness": 56.5,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Ayaan Tiwari",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 7.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Wysa",
      "industry": "HealthTech AI",
      "company_size": "51-200",
      "location": "Vizag, Andhra Pradesh",
      "country": "India",
      "years": 7.7,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "Qdrant",
        "OpenSearch",
        "Embeddings",
        "Sentence Transformers",
        "BM25",
        "Elasticsearch",
        "Recommendation Systems",
        "BentoML"
      ],
      "all_skills": [
        {
          "name": "Figma",
          "proficiency": "intermediate",
          "duration_months": 26,
          "endorsements": 3
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 54
        },
        {
          "name": "BentoML",
          "proficiency": "intermediate",
          "duration_months": 8,
          "endorsements": 8
        },
        {
          "name": "Data Science",
          "proficiency": "intermediate",
          "duration_months": 28,
          "endorsements": 13
        },
        {
          "name": "Snowflake",
          "proficiency": "beginner",
          "duration_months": 15,
          "endorsements": 8
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 44,
          "endorsements": 20
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 73,
          "endorsements": 46
        },
        {
          "name": "OpenSearch",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 23
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 38,
          "endorsements": 22
        },
        {
          "name": "PEFT",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 0
        },
        {
          "name": "dbt",
          "proficiency": "beginner",
          "duration_months": 11,
          "endorsements": 3
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 22
        },
        {
          "name": "LoRA",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 26
        },
        {
          "name": "Computer Vision",
          "proficiency": "intermediate",
          "duration_months": 26,
          "endorsements": 8
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 29,
          "endorsements": 45
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 45
        },
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 22,
          "endorsements": 7
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "advanced",
          "duration_months": 53,
          "endorsements": 16
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-23",
        "response_rate": 0.52,
        "response_time_hours": 61.8,
        "notice_days": 120,
        "github": 51.7,
        "profile_views": 251,
        "applications": 20,
        "search_appearance": 432,
        "saved": 55,
        "endorsements": 109,
        "profile_completeness": 77.2,
        "interview_completion": 0.6,
        "offer_acceptance": 0.35,
        "work_mode": "remote",
        "relocate": true,
        "salary_min": 36.6,
        "salary_max": 42.9,
        "assessment_count": 3,
        "best_assessments": [
          {
            "skill": "Recommendation Systems",
            "score": 83.7
          },
          {
            "skill": "Qdrant",
            "score": 69.5
          },
          {
            "skill": "LangChain",
            "score": 60.4
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 62.4,
        "role": 96.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 72.3,
        "logistics": 53.6,
        "penalty": 4.5,
        "retrieval": 100.0,
        "ranking": 58.5,
        "evaluation": 40.0,
        "production": 28.6,
        "assessment": 76.6
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 52.0,
        "speed": 74.2,
        "open_to_work": 100.0,
        "completeness": 77.2,
        "saved": 91.6,
        "market_demand": 90.8,
        "applications": 100.0,
        "interview": 60.0,
        "github": 51.7,
        "assessment": 76.6,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "India, relocation-ready",
      "reasoning": "Recommendation Systems Engineer with 7.7 yrs at Wysa; career and skills show retrieval plus ranking/recommendation depth (Qdrant, OpenSearch, Embeddings, Sentence Transformers). Vizag, Andhra Pradesh; India, relocation-ready; 52% recruiter response; last active 2026-03-23; 120-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Wysa",
          "industry": "HealthTech AI",
          "duration_months": 26,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Search Engineer",
          "company": "Glance",
          "industry": "AI/ML",
          "duration_months": 28,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "AI Engineer",
          "company": "Meta",
          "industry": "Internet",
          "duration_months": 37,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "Symbiosis International",
          "degree": "Ph.D",
          "field_of_study": "Data Science",
          "start_year": 2012,
          "end_year": 2015,
          "grade": "75%",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0054394",
      "rank": 89,
      "score": 0.7093,
      "score_100": 70.93,
      "readiness": 72.7,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Ela Iyengar",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 4.1 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. Along the way I've gotten comfortable with the operational side - A/B testing, drift monitoring, retraining schedules. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "PharmEasy",
      "industry": "HealthTech",
      "company_size": "5001-10000",
      "location": "Pune, Maharashtra",
      "country": "India",
      "years": 4.1,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "Embeddings",
        "Haystack",
        "Pinecone",
        "MLflow",
        "Data Science",
        "scikit-learn",
        "Machine Learning",
        "Fine-tuning LLMs"
      ],
      "all_skills": [
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 59,
          "endorsements": 57
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 8
        },
        {
          "name": "Time Series",
          "proficiency": "advanced",
          "duration_months": 30,
          "endorsements": 29
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 52
        },
        {
          "name": "Node.js",
          "proficiency": "intermediate",
          "duration_months": 31,
          "endorsements": 6
        },
        {
          "name": "Data Science",
          "proficiency": "intermediate",
          "duration_months": 33,
          "endorsements": 7
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 71,
          "endorsements": 15
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 49,
          "endorsements": 55
        },
        {
          "name": "Pinecone",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 22
        },
        {
          "name": "Java",
          "proficiency": "intermediate",
          "duration_months": 8,
          "endorsements": 15
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 19
        },
        {
          "name": "Forecasting",
          "proficiency": "intermediate",
          "duration_months": 12,
          "endorsements": 14
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "advanced",
          "duration_months": 44,
          "endorsements": 27
        },
        {
          "name": "Next.js",
          "proficiency": "beginner",
          "duration_months": 15,
          "endorsements": 6
        },
        {
          "name": "Machine Learning",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 6
        },
        {
          "name": "ASR",
          "proficiency": "intermediate",
          "duration_months": 15,
          "endorsements": 10
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-04",
        "response_rate": 0.64,
        "response_time_hours": 79.4,
        "notice_days": 30,
        "github": 31.5,
        "profile_views": 9,
        "applications": 14,
        "search_appearance": 199,
        "saved": 46,
        "endorsements": 134,
        "profile_completeness": 60.7,
        "interview_completion": 0.99,
        "offer_acceptance": 0.83,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 29.9,
        "salary_max": 48.9,
        "assessment_count": 0,
        "best_assessments": [],
        "verified_email": true,
        "verified_phone": false,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 51.3,
        "role": 96.0,
        "experience": 82.0,
        "company": 58.0,
        "behavior": 72.0,
        "logistics": 98.6,
        "penalty": 0.0,
        "retrieval": 77.3,
        "ranking": 25.3,
        "evaluation": 40.0,
        "production": 28.6,
        "assessment": 50.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 64.0,
        "speed": 66.9,
        "open_to_work": 100.0,
        "completeness": 60.7,
        "saved": 87.6,
        "market_demand": 68.9,
        "applications": 88.9,
        "interview": 99.0,
        "github": 31.5,
        "assessment": 50.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Recommendation Systems Engineer with 4.1 yrs at PharmEasy; career and skills show strong retrieval/search depth (Embeddings, Haystack, Pinecone, MLflow). Pune, Maharashtra; preferred office city; 64% recruiter response; last active 2026-05-04; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "PharmEasy",
          "industry": "HealthTech",
          "duration_months": 14,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "NLP Engineer",
          "company": "Netflix",
          "industry": "Media",
          "duration_months": 34,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        }
      ],
      "education": [
        {
          "institution": "NIT Surathkal",
          "degree": "M.Tech",
          "field_of_study": "Computer Engineering",
          "start_year": 2018,
          "end_year": 2022,
          "grade": "8.24 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0041611",
      "rank": 90,
      "score": 0.7089,
      "score_100": 70.89,
      "readiness": 56.6,
      "risk_level": "high",
      "recruiter_ready": false,
      "name": "Aarohi Chowdary",
      "title": "Staff Machine Learning Engineer",
      "headline": "Staff Machine Learning Engineer | Building AI-native search & ranking systems",
      "summary": "Senior AI engineer with 6.4 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I owned the offline-online evaluation harness - NDCG/MRR/recall calibrated to live A/B metrics, serving 50M+ queries per month. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Locobuzz",
      "industry": "AI/ML",
      "company_size": "51-200",
      "location": "Austin",
      "country": "USA",
      "years": 6.4,
      "current_work": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases.",
      "matched_skills": [
        "LlamaIndex",
        "Qdrant",
        "Weaviate",
        "BM25",
        "OpenSearch",
        "Sentence Transformers",
        "pgvector",
        "PyTorch"
      ],
      "all_skills": [
        {
          "name": "LlamaIndex",
          "proficiency": "advanced",
          "duration_months": 25,
          "endorsements": 21
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 86,
          "endorsements": 27
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 41
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 70,
          "endorsements": 35
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 82,
          "endorsements": 6
        },
        {
          "name": "Weaviate",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 44
        },
        {
          "name": "GANs",
          "proficiency": "intermediate",
          "duration_months": 34,
          "endorsements": 14
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 63,
          "endorsements": 14
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "advanced",
          "duration_months": 57,
          "endorsements": 11
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 55
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 39,
          "endorsements": 3
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 35
        },
        {
          "name": "MLOps",
          "proficiency": "intermediate",
          "duration_months": 20,
          "endorsements": 0
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 62,
          "endorsements": 25
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 55
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 2
        },
        {
          "name": "Diffusion Models",
          "proficiency": "advanced",
          "duration_months": 53,
          "endorsements": 0
        },
        {
          "name": "Weights & Biases",
          "proficiency": "intermediate",
          "duration_months": 32,
          "endorsements": 1
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2025-12-03",
        "response_rate": 0.07,
        "response_time_hours": 171.5,
        "notice_days": 30,
        "github": -1,
        "profile_views": 46,
        "applications": 11,
        "search_appearance": 1004,
        "saved": 0,
        "endorsements": 185,
        "profile_completeness": 65.3,
        "interview_completion": 0.68,
        "offer_acceptance": 0.8,
        "work_mode": "onsite",
        "relocate": true,
        "salary_min": 33.1,
        "salary_max": 73.9,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "LlamaIndex",
            "score": 93.9
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 80.3,
        "role": 98.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 39.5,
        "logistics": 57.8,
        "penalty": 10.0,
        "retrieval": 100.0,
        "ranking": 19.0,
        "evaluation": 100.0,
        "production": 100.0,
        "assessment": 93.9
      },
      "behavior_parts": {
        "recency": 10.0,
        "response": 7.0,
        "speed": 28.5,
        "open_to_work": 35.0,
        "completeness": 65.3,
        "saved": 0.0,
        "market_demand": 59.2,
        "applications": 81.6,
        "interview": 68.0,
        "github": 18.0,
        "assessment": 93.9,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation",
        "production shipping"
      ],
      "concerns": [
        "outside India despite India-first logistics",
        "weak availability signals"
      ],
      "location_label": "outside India, relocation-ready",
      "reasoning": "Staff Machine Learning Engineer with 6.4 yrs at Locobuzz; career and skills show strong retrieval/search depth (LlamaIndex, Qdrant, Weaviate, BM25). Austin; outside India, relocation-ready; 7% recruiter response; last active 2025-12-03; 30-day notice; concern: outside India despite India-first logistics.",
      "career": [
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Locobuzz",
          "industry": "AI/ML",
          "duration_months": 21,
          "is_current": true,
          "description": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
        },
        {
          "title": "Senior Applied Scientist",
          "company": "Genpact AI",
          "industry": "AI Services",
          "duration_months": 40,
          "is_current": false,
          "description": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout."
        },
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Wysa",
          "industry": "HealthTech AI",
          "duration_months": 14,
          "is_current": false,
          "description": "Led the migration from keyword-based to embedding-based search across a 30M+ candidate corpus over 8 months. Designed three successive ranker variants and ran them in A/B testing alongside the legacy keyword system. The final embedding ranker improved recruiter engagement metrics by 24% and reduced the average time-to-shortlist by 38%. Most of the engineering effort went into the boring infrastructure: index versioning, embedding versioning, rollback paths, and the dashboards that let recruiters trust the new system. Mentored two junior engineers through this rollout."
        }
      ],
      "education": [
        {
          "institution": "Amity University",
          "degree": "M.Tech",
          "field_of_study": "Computer Engineering",
          "start_year": 2008,
          "end_year": 2011,
          "grade": "7.29 CGPA",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0083879",
      "rank": 91,
      "score": 0.7069,
      "score_100": 70.69,
      "readiness": 69.2,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Mira Reddy",
      "title": "Machine Learning Engineer",
      "headline": "Machine Learning Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 7.1 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Ola",
      "industry": "Transportation",
      "company_size": "5001-10000",
      "location": "Noida, Uttar Pradesh",
      "country": "India",
      "years": 7.1,
      "current_work": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year.",
      "matched_skills": [
        "Milvus",
        "Sentence Transformers",
        "MLOps",
        "Data Science",
        "scikit-learn",
        "Machine Learning",
        "Fine-tuning LLMs",
        "Hugging Face Transformers"
      ],
      "all_skills": [
        {
          "name": "MLOps",
          "proficiency": "intermediate",
          "duration_months": 13,
          "endorsements": 3
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 90,
          "endorsements": 41
        },
        {
          "name": "Milvus",
          "proficiency": "advanced",
          "duration_months": 47,
          "endorsements": 32
        },
        {
          "name": "Image Classification",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 14
        },
        {
          "name": "Data Science",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 11
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 39,
          "endorsements": 19
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 38,
          "endorsements": 51
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 50,
          "endorsements": 48
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 6
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 7
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-17",
        "response_rate": 0.47,
        "response_time_hours": 24.4,
        "notice_days": 30,
        "github": -1,
        "profile_views": 274,
        "applications": 14,
        "search_appearance": 574,
        "saved": 64,
        "endorsements": 140,
        "profile_completeness": 59.6,
        "interview_completion": 0.83,
        "offer_acceptance": 0.85,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 44.7,
        "salary_max": 62.0,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Fine-tuning LLMs",
            "score": 63.1
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 49.7,
        "role": 91.0,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 69.1,
        "logistics": 100.0,
        "penalty": 0.0,
        "retrieval": 44.8,
        "ranking": 31.7,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 63.1
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 47.0,
        "speed": 89.8,
        "open_to_work": 100.0,
        "completeness": 59.6,
        "saved": 95.0,
        "market_demand": 93.9,
        "applications": 88.9,
        "interview": 83.0,
        "github": 18.0,
        "assessment": 63.1,
        "verified": 100.0
      },
      "evidence": [
        "evaluation"
      ],
      "concerns": [],
      "location_label": "preferred office city",
      "reasoning": "Machine Learning Engineer with 7.1 yrs at Ola; career text includes ranking evaluation signals (Milvus, Sentence Transformers, MLOps, Data Science). Noida, Uttar Pradesh; preferred office city; 47% recruiter response; last active 2026-04-17; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Machine Learning Engineer",
          "company": "Ola",
          "industry": "Transportation",
          "duration_months": 19,
          "is_current": true,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "Search Engineer",
          "company": "PhonePe",
          "industry": "Fintech",
          "duration_months": 46,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        },
        {
          "title": "Senior Data Scientist",
          "company": "Swiggy",
          "industry": "Food Delivery",
          "duration_months": 19,
          "is_current": false,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "NIT Surathkal",
          "degree": "B.Sc",
          "field_of_study": "Information Technology",
          "start_year": 2008,
          "end_year": 2012,
          "grade": "84%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0049538",
      "rank": 92,
      "score": 0.7064,
      "score_100": 70.64,
      "readiness": 71.0,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Sanjay Bose",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 5.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Saarthi.ai",
      "industry": "Voice AI",
      "company_size": "11-50",
      "location": "Jaipur, Rajasthan",
      "country": "India",
      "years": 5.8,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "LlamaIndex",
        "OpenSearch",
        "Vector Search",
        "Milvus",
        "Embeddings",
        "Elasticsearch",
        "Learning to Rank",
        "Recommendation Systems"
      ],
      "all_skills": [
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 41,
          "endorsements": 26
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 6
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 19
        },
        {
          "name": "Computer Vision",
          "proficiency": "intermediate",
          "duration_months": 19,
          "endorsements": 12
        },
        {
          "name": "TTS",
          "proficiency": "advanced",
          "duration_months": 44,
          "endorsements": 54
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 47,
          "endorsements": 17
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 64,
          "endorsements": 24
        },
        {
          "name": "Vector Search",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 51
        },
        {
          "name": "Milvus",
          "proficiency": "expert",
          "duration_months": 91,
          "endorsements": 55
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 12
        },
        {
          "name": "Embeddings",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 6
        },
        {
          "name": "CNN",
          "proficiency": "intermediate",
          "duration_months": 32,
          "endorsements": 8
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 38,
          "endorsements": 27
        },
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 60,
          "endorsements": 10
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 59,
          "endorsements": 41
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 56
        },
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 54,
          "endorsements": 21
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-05-27",
        "response_rate": 0.72,
        "response_time_hours": 27.2,
        "notice_days": 30,
        "github": 90.8,
        "profile_views": 5,
        "applications": 0,
        "search_appearance": 996,
        "saved": 60,
        "endorsements": 79,
        "profile_completeness": 52.9,
        "interview_completion": 0.67,
        "offer_acceptance": 0.59,
        "work_mode": "remote",
        "relocate": false,
        "salary_min": 40.0,
        "salary_max": 64.9,
        "assessment_count": 5,
        "best_assessments": [
          {
            "skill": "MLflow",
            "score": 86.7
          },
          {
            "skill": "TTS",
            "score": 76.9
          },
          {
            "skill": "Feature Engineering",
            "score": 71.4
          },
          {
            "skill": "Learning to Rank",
            "score": 60.6
          },
          {
            "skill": "LlamaIndex",
            "score": 57.2
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 61.5,
        "role": 91.0,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 70.3,
        "logistics": 70.8,
        "penalty": 0.0,
        "retrieval": 92.5,
        "ranking": 84.3,
        "evaluation": 0.0,
        "production": 28.6,
        "assessment": 69.0
      },
      "behavior_parts": {
        "recency": 100.0,
        "response": 72.0,
        "speed": 88.7,
        "open_to_work": 35.0,
        "completeness": 52.9,
        "saved": 93.5,
        "market_demand": 71.9,
        "applications": 0.0,
        "interview": 67.0,
        "github": 90.8,
        "assessment": 69.0,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Applied ML Engineer with 5.8 yrs at Saarthi.ai; career and skills show retrieval plus ranking/recommendation depth (LlamaIndex, OpenSearch, Vector Search, Milvus). Jaipur, Rajasthan; India, non-preferred city; 72% recruiter response; last active 2026-05-27; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Saarthi.ai",
          "industry": "Voice AI",
          "duration_months": 40,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Recommendation Systems Engineer",
          "company": "PolicyBazaar",
          "industry": "Insurance Tech",
          "duration_months": 19,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        },
        {
          "title": "AI Engineer",
          "company": "Zoho",
          "industry": "SaaS",
          "duration_months": 9,
          "is_current": false,
          "description": "Built and operated production ML pipelines using MLflow for experiment tracking, Kubeflow for orchestration, and our internal feature store. My main project was a churn prediction model that's now used by the customer success team to prioritize outreach. Designed the model monitoring stack: data drift detection, prediction distribution checks, and alerting. Mentored a junior engineer through their first end-to-end ML project last year."
        }
      ],
      "education": [
        {
          "institution": "NIT Warangal",
          "degree": "B.E.",
          "field_of_study": "Data Science",
          "start_year": 2004,
          "end_year": 2009,
          "grade": "7.07 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0050454",
      "rank": 93,
      "score": 0.7053,
      "score_100": 70.53,
      "readiness": 73.0,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Saanvi Bansal",
      "title": "AI Engineer",
      "headline": "AI Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 6.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I led the team that migrated our keyword-search-based product to embedding-based retrieval. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Rephrase.ai",
      "industry": "AI/ML",
      "company_size": "11-50",
      "location": "Delhi, Delhi",
      "country": "India",
      "years": 6.8,
      "current_work": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments.",
      "matched_skills": [
        "FAISS",
        "Qdrant",
        "BM25",
        "PyTorch",
        "scikit-learn",
        "Feature Engineering",
        "Kubeflow",
        "QLoRA"
      ],
      "all_skills": [
        {
          "name": "PyTorch",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 44
        },
        {
          "name": "LangChain",
          "proficiency": "expert",
          "duration_months": 36,
          "endorsements": 7
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 87,
          "endorsements": 39
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 74,
          "endorsements": 41
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 62,
          "endorsements": 33
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 51,
          "endorsements": 59
        },
        {
          "name": "Image Classification",
          "proficiency": "advanced",
          "duration_months": 43,
          "endorsements": 2
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 88,
          "endorsements": 36
        },
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 30,
          "endorsements": 9
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 73,
          "endorsements": 2
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 51
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 50,
          "endorsements": 29
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 40
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 29
        },
        {
          "name": "Kubeflow",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 17
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-27",
        "response_rate": 0.77,
        "response_time_hours": 32.2,
        "notice_days": 30,
        "github": -1,
        "profile_views": 85,
        "applications": 17,
        "search_appearance": 248,
        "saved": 30,
        "endorsements": 16,
        "profile_completeness": 77.7,
        "interview_completion": 0.72,
        "offer_acceptance": -1,
        "work_mode": "onsite",
        "relocate": true,
        "salary_min": 44.2,
        "salary_max": 50.1,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "PyTorch",
            "score": 59.0
          }
        ],
        "verified_email": false,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 49.5,
        "role": 76.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 75.4,
        "logistics": 88.5,
        "penalty": 0.0,
        "retrieval": 78.4,
        "ranking": 19.0,
        "evaluation": 20.0,
        "production": 28.6,
        "assessment": 59.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 77.0,
        "speed": 86.6,
        "open_to_work": 100.0,
        "completeness": 77.7,
        "saved": 78.1,
        "market_demand": 74.8,
        "applications": 94.9,
        "interview": 72.0,
        "github": 18.0,
        "assessment": 59.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "AI Engineer with 6.8 yrs at Rephrase.ai; career and skills show strong retrieval/search depth (FAISS, Qdrant, BM25, PyTorch). Delhi, Delhi; tier-1 India city; 77% recruiter response; last active 2026-04-27; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "AI Engineer",
          "company": "Rephrase.ai",
          "industry": "AI/ML",
          "duration_months": 30,
          "is_current": true,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Uber",
          "industry": "Transportation",
          "duration_months": 20,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Adobe",
          "industry": "Software",
          "duration_months": 31,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "Bharati Vidyapeeth",
          "degree": "M.S.",
          "field_of_study": "Machine Learning",
          "start_year": 2003,
          "end_year": 2007,
          "grade": "87%",
          "tier": "tier_3"
        },
        {
          "institution": "IIT Kanpur",
          "degree": "Ph.D",
          "field_of_study": "Data Science",
          "start_year": 2005,
          "end_year": 2008,
          "grade": "7.11 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0057563",
      "rank": 94,
      "score": 0.7027,
      "score_100": 70.27,
      "readiness": 68.4,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Om Trivedi",
      "title": "NLP Engineer",
      "headline": "NLP Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 6.8 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. I've learned that most retrieval problems are actually evaluation problems in disguise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Locobuzz",
      "industry": "AI/ML",
      "company_size": "51-200",
      "location": "Indore, Madhya Pradesh",
      "country": "India",
      "years": 6.8,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "RAG",
        "Elasticsearch",
        "OpenSearch",
        "Deep Learning",
        "Feature Engineering",
        "Machine Learning",
        "QLoRA",
        "Hugging Face Transformers"
      ],
      "all_skills": [
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 45,
          "endorsements": 24
        },
        {
          "name": "Speech Recognition",
          "proficiency": "intermediate",
          "duration_months": 14,
          "endorsements": 11
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 68,
          "endorsements": 27
        },
        {
          "name": "Rust",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 6
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 61,
          "endorsements": 11
        },
        {
          "name": "Feature Engineering",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 50
        },
        {
          "name": "OpenSearch",
          "proficiency": "expert",
          "duration_months": 94,
          "endorsements": 3
        },
        {
          "name": "SQL",
          "proficiency": "beginner",
          "duration_months": 9,
          "endorsements": 7
        },
        {
          "name": "QLoRA",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 24
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 54,
          "endorsements": 42
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 54,
          "endorsements": 32
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 39,
          "endorsements": 35
        },
        {
          "name": "Time Series",
          "proficiency": "intermediate",
          "duration_months": 11,
          "endorsements": 0
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 11
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-04-21",
        "response_rate": 0.83,
        "response_time_hours": 63.7,
        "notice_days": 60,
        "github": 22.8,
        "profile_views": 65,
        "applications": 0,
        "search_appearance": 680,
        "saved": 33,
        "endorsements": 30,
        "profile_completeness": 85.3,
        "interview_completion": 0.81,
        "offer_acceptance": 0.47,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 35.5,
        "salary_max": 52.1,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Deep Learning",
            "score": 80.6
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 53.5,
        "role": 69.1,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 67.6,
        "logistics": 77.4,
        "penalty": 0.0,
        "retrieval": 77.6,
        "ranking": 25.3,
        "evaluation": 40.0,
        "production": 28.6,
        "assessment": 80.6
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 83.0,
        "speed": 73.5,
        "open_to_work": 35.0,
        "completeness": 85.3,
        "saved": 80.2,
        "market_demand": 79.1,
        "applications": 0.0,
        "interview": 81.0,
        "github": 22.8,
        "assessment": 80.6,
        "verified": 100.0
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "NLP Engineer with 6.8 yrs at Locobuzz; career and skills show strong retrieval/search depth (RAG, Elasticsearch, OpenSearch, Deep Learning). Indore, Madhya Pradesh; India, relocation-ready; 83% recruiter response; last active 2026-04-21; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "NLP Engineer",
          "company": "Locobuzz",
          "industry": "AI/ML",
          "duration_months": 20,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Machine Learning Engineer",
          "company": "Yellow.ai",
          "industry": "AI/ML",
          "duration_months": 34,
          "is_current": false,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Senior Data Scientist",
          "company": "Zoho",
          "industry": "SaaS",
          "duration_months": 26,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "BITS Pilani",
          "degree": "M.E.",
          "field_of_study": "Computer Science",
          "start_year": 2014,
          "end_year": 2018,
          "grade": "7.89 CGPA",
          "tier": "tier_1"
        },
        {
          "institution": "Amity University",
          "degree": "B.E.",
          "field_of_study": "Information Technology",
          "start_year": 2019,
          "end_year": 2022,
          "grade": "7.31 CGPA",
          "tier": "tier_3"
        }
      ]
    },
    {
      "candidate_id": "CAND_0066376",
      "rank": 95,
      "score": 0.7027,
      "score_100": 70.27,
      "readiness": 63.9,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Amit Goyal",
      "title": "Applied ML Engineer",
      "headline": "Applied ML Engineer | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 5.7 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I care a lot about evaluation rigor - too many teams ship models without offline benchmarks they trust. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Dream11",
      "industry": "Gaming",
      "company_size": "1001-5000",
      "location": "Mumbai, Maharashtra",
      "country": "India",
      "years": 5.7,
      "current_work": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%.",
      "matched_skills": [
        "Information Retrieval",
        "BM25",
        "FAISS",
        "LlamaIndex",
        "Semantic Search",
        "Recommendation Systems",
        "Learning to Rank",
        "Deep Learning"
      ],
      "all_skills": [
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 35,
          "endorsements": 41
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 42,
          "endorsements": 55
        },
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 91,
          "endorsements": 21
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 59,
          "endorsements": 22
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 17
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 8
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 1
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 22,
          "endorsements": 6
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 50,
          "endorsements": 25
        },
        {
          "name": "Object Detection",
          "proficiency": "advanced",
          "duration_months": 32,
          "endorsements": 36
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 59,
          "endorsements": 39
        },
        {
          "name": "PowerPoint",
          "proficiency": "intermediate",
          "duration_months": 32,
          "endorsements": 7
        },
        {
          "name": "Time Series",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 7
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 38
        },
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 44
        },
        {
          "name": "CNN",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 9
        },
        {
          "name": "Semantic Search",
          "proficiency": "expert",
          "duration_months": 84,
          "endorsements": 3
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-05-03",
        "response_rate": 0.51,
        "response_time_hours": 62.7,
        "notice_days": 90,
        "github": -1,
        "profile_views": 109,
        "applications": 15,
        "search_appearance": 61,
        "saved": 59,
        "endorsements": 37,
        "profile_completeness": 62.8,
        "interview_completion": 0.77,
        "offer_acceptance": -1,
        "work_mode": "hybrid",
        "relocate": false,
        "salary_min": 44.0,
        "salary_max": 42.4,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "LoRA",
            "score": 81.8
          },
          {
            "skill": "Recommendation Systems",
            "score": 68.2
          }
        ],
        "verified_email": false,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 66.5,
        "role": 91.0,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 70.1,
        "logistics": 75.0,
        "penalty": 4.5,
        "retrieval": 100.0,
        "ranking": 90.9,
        "evaluation": 40.0,
        "production": 14.3,
        "assessment": 75.0
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 51.0,
        "speed": 73.9,
        "open_to_work": 100.0,
        "completeness": 62.8,
        "saved": 93.2,
        "market_demand": 76.7,
        "applications": 91.1,
        "interview": 77.0,
        "github": 18.0,
        "assessment": 75.0,
        "verified": 66.7
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "tier-1 India city",
      "reasoning": "Applied ML Engineer with 5.7 yrs at Dream11; career and skills show retrieval plus ranking/recommendation depth (Information Retrieval, BM25, FAISS, LlamaIndex). Mumbai, Maharashtra; tier-1 India city; 51% recruiter response; last active 2026-05-03; 90-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Applied ML Engineer",
          "company": "Dream11",
          "industry": "Gaming",
          "duration_months": 45,
          "is_current": true,
          "description": "Built a content recommendation system serving 10M+ users that combined collaborative filtering with content-based ranking. The system uses item-item similarity (via sentence-transformer embeddings) for cold starts and a gradient-boosted model trained on engagement signals for warm users. Most of my time went into the feature pipeline (~200 features) and the A/B testing infrastructure. The launch improved 7-day retention by 6% and time spent per session by 14%."
        },
        {
          "title": "Senior Data Scientist",
          "company": "Salesforce",
          "industry": "Software",
          "duration_months": 22,
          "is_current": false,
          "description": "Developed a semantic search feature for an internal knowledge base of ~500K documents. Used sentence-transformers (all-MiniLM-L6-v2 initially, later upgraded to bge-base) with FAISS for fast nearest-neighbor retrieval. Designed the query expansion module that handles vocabulary mismatch between user queries and document terms. Reported search-relevance improvement of 35% over the prior Elasticsearch BM25 setup, validated through human relevance judgments."
        }
      ],
      "education": [
        {
          "institution": "IIT Kharagpur",
          "degree": "M.Sc",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2008,
          "end_year": 2011,
          "grade": "7.64 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0005260",
      "rank": 96,
      "score": 0.7027,
      "score_100": 70.27,
      "readiness": 77.6,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Mira Ghosh",
      "title": "Senior NLP Engineer",
      "headline": "Senior NLP Engineer | LLMs, RAG, Vector Search | ex-Top Tech",
      "summary": "Senior AI engineer with 5.2 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I drove the platform's RAG strategy from prototype to production, including the eval framework, operating at single-digit-millisecond p95 retrieval latency. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I believe most ranking problems are solved by careful feature engineering and rigorous eval, not by bigger models. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Netflix",
      "industry": "Media",
      "company_size": "10001+",
      "location": "Chennai, Tamil Nadu",
      "country": "India",
      "years": 5.2,
      "current_work": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001.",
      "matched_skills": [
        "Information Retrieval",
        "Semantic Search",
        "RAG",
        "pgvector",
        "Haystack",
        "Embeddings",
        "MLOps",
        "Deep Learning"
      ],
      "all_skills": [
        {
          "name": "Statistical Modeling",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 13
        },
        {
          "name": "MLOps",
          "proficiency": "intermediate",
          "duration_months": 17,
          "endorsements": 5
        },
        {
          "name": "Snowflake",
          "proficiency": "beginner",
          "duration_months": 16,
          "endorsements": 6
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "advanced",
          "duration_months": 56,
          "endorsements": 11
        },
        {
          "name": "Information Retrieval",
          "proficiency": "advanced",
          "duration_months": 45,
          "endorsements": 15
        },
        {
          "name": "Speech Recognition",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 24
        },
        {
          "name": "Semantic Search",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 49
        },
        {
          "name": "Deep Learning",
          "proficiency": "expert",
          "duration_months": 53,
          "endorsements": 19
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 46
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 60,
          "endorsements": 52
        },
        {
          "name": "MLflow",
          "proficiency": "advanced",
          "duration_months": 34,
          "endorsements": 18
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 22
        },
        {
          "name": "RAG",
          "proficiency": "advanced",
          "duration_months": 50,
          "endorsements": 35
        },
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 21,
          "endorsements": 4
        },
        {
          "name": "pgvector",
          "proficiency": "advanced",
          "duration_months": 21,
          "endorsements": 26
        },
        {
          "name": "Haystack",
          "proficiency": "advanced",
          "duration_months": 25,
          "endorsements": 26
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "advanced",
          "duration_months": 39,
          "endorsements": 19
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 11
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-05-10",
        "response_rate": 0.86,
        "response_time_hours": 46.8,
        "notice_days": 60,
        "github": -1,
        "profile_views": 331,
        "applications": 6,
        "search_appearance": 1154,
        "saved": 11,
        "endorsements": 153,
        "profile_completeness": 94.8,
        "interview_completion": 0.73,
        "offer_acceptance": 0.93,
        "work_mode": "onsite",
        "relocate": true,
        "salary_min": 39.6,
        "salary_max": 64.9,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Prompt Engineering",
            "score": 80.9
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 78.1,
        "role": 11.4,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 70.8,
        "logistics": 80.3,
        "penalty": 0.0,
        "retrieval": 100.0,
        "ranking": 19.0,
        "evaluation": 100.0,
        "production": 85.7,
        "assessment": 56.2
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 86.0,
        "speed": 80.5,
        "open_to_work": 35.0,
        "completeness": 94.8,
        "saved": 56.5,
        "market_demand": 85.7,
        "applications": 63.9,
        "interview": 73.0,
        "github": 18.0,
        "assessment": 56.2,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation",
        "production shipping"
      ],
      "concerns": [],
      "location_label": "tier-1 India city",
      "reasoning": "Senior NLP Engineer with 5.2 yrs at Netflix; career and skills show strong retrieval/search depth (Information Retrieval, Semantic Search, RAG, pgvector). Chennai, Tamil Nadu; tier-1 India city; 86% recruiter response; last active 2026-05-10; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior NLP Engineer",
          "company": "Netflix",
          "industry": "Media",
          "duration_months": 34,
          "is_current": true,
          "description": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
        },
        {
          "title": "Senior NLP Engineer",
          "company": "Yellow.ai",
          "industry": "AI/ML",
          "duration_months": 27,
          "is_current": false,
          "description": "Built a RAG-based ranking pipeline serving 50M+ queries per month for an internal recruiter-facing search product. The architecture combined BM25 + dense retrieval (BGE embeddings, FAISS HNSW) with an LLM-based re-ranker on the top-50, falling back to a learning-to-rank model when latency budget was tight. Designed the offline evaluation framework from scratch - NDCG, MRR, recall@K calibrated against online A/B engagement metrics. Drove the migration over 4 months including the recruiter-feedback loop that surfaced reranking edge cases."
        }
      ],
      "education": [
        {
          "institution": "IIIT Bangalore",
          "degree": "B.Tech",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2002,
          "end_year": 2006,
          "grade": "6.65 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0078492",
      "rank": 97,
      "score": 0.7018,
      "score_100": 70.18,
      "readiness": 71.4,
      "risk_level": "clear",
      "recruiter_ready": true,
      "name": "Aadhya Vora",
      "title": "Recommendation Systems Engineer",
      "headline": "Recommendation Systems Engineer | Applied ML | Building intelligent products",
      "summary": "Machine learning engineer with 5.1 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, I built our semantic search infrastructure from scratch - sentence-transformers, FAISS, the works. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Verloop.io",
      "industry": "Conversational AI",
      "company_size": "51-200",
      "location": "Kochi, Kerala",
      "country": "India",
      "years": 5.1,
      "current_work": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%.",
      "matched_skills": [
        "Haystack",
        "FAISS",
        "BM25",
        "Qdrant",
        "Elasticsearch",
        "Recommendation Systems",
        "Machine Learning",
        "Kubeflow"
      ],
      "all_skills": [
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 43,
          "endorsements": 19
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 79,
          "endorsements": 33
        },
        {
          "name": "FAISS",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 55
        },
        {
          "name": "Kubeflow",
          "proficiency": "intermediate",
          "duration_months": 18,
          "endorsements": 14
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 28
        },
        {
          "name": "Computer Vision",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 16
        },
        {
          "name": "BM25",
          "proficiency": "advanced",
          "duration_months": 48,
          "endorsements": 35
        },
        {
          "name": "GANs",
          "proficiency": "intermediate",
          "duration_months": 17,
          "endorsements": 10
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 66,
          "endorsements": 43
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 0
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 54,
          "endorsements": 5
        },
        {
          "name": "Diffusion Models",
          "proficiency": "intermediate",
          "duration_months": 29,
          "endorsements": 13
        },
        {
          "name": "LLMs",
          "proficiency": "expert",
          "duration_months": 46,
          "endorsements": 33
        },
        {
          "name": "Excel",
          "proficiency": "beginner",
          "duration_months": 7,
          "endorsements": 10
        },
        {
          "name": "PEFT",
          "proficiency": "expert",
          "duration_months": 65,
          "endorsements": 58
        },
        {
          "name": "scikit-learn",
          "proficiency": "expert",
          "duration_months": 58,
          "endorsements": 60
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 51,
          "endorsements": 24
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-01",
        "response_rate": 0.7,
        "response_time_hours": 70.4,
        "notice_days": 30,
        "github": 35.4,
        "profile_views": 299,
        "applications": 16,
        "search_appearance": 1014,
        "saved": 9,
        "endorsements": 69,
        "profile_completeness": 58.5,
        "interview_completion": 0.89,
        "offer_acceptance": -1,
        "work_mode": "hybrid",
        "relocate": true,
        "salary_min": 34.0,
        "salary_max": 46.9,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "Machine Learning",
            "score": 66.4
          },
          {
            "skill": "Haystack",
            "score": 51.3
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": false
      },
      "breakdown": {
        "technical": 53.2,
        "role": 96.0,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 71.1,
        "logistics": 85.6,
        "penalty": 0.0,
        "retrieval": 92.5,
        "ranking": 46.2,
        "evaluation": 0.0,
        "production": 28.6,
        "assessment": 58.9
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 70.0,
        "speed": 70.7,
        "open_to_work": 100.0,
        "completeness": 58.5,
        "saved": 52.4,
        "market_demand": 82.3,
        "applications": 93.1,
        "interview": 89.0,
        "github": 35.4,
        "assessment": 58.9,
        "verified": 66.7
      },
      "evidence": [
        "retrieval"
      ],
      "concerns": [],
      "location_label": "India, relocation-ready",
      "reasoning": "Recommendation Systems Engineer with 5.1 yrs at Verloop.io; career and skills show strong retrieval/search depth (Haystack, FAISS, BM25, Qdrant). Kochi, Kerala; India, relocation-ready; 70% recruiter response; last active 2026-04-01; 30-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Recommendation Systems Engineer",
          "company": "Verloop.io",
          "industry": "Conversational AI",
          "duration_months": 12,
          "is_current": true,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        },
        {
          "title": "Senior Data Scientist",
          "company": "Adobe",
          "industry": "Software",
          "duration_months": 49,
          "is_current": false,
          "description": "Owned the ranking layer for an e-commerce search product, evolving it from a hand-tuned scoring function to a learning-to-rank model over 9 months. Designed the relevance labeling pipeline (mix of click-through data and explicit human judgments), the feature pipeline, and the training/eval workflow. Most of the work was infrastructure and data quality - the modeling part was almost the easy bit. Final model improved revenue-per-search by 12%."
        }
      ],
      "education": [
        {
          "institution": "IIT Delhi",
          "degree": "B.E.",
          "field_of_study": "Computer Engineering",
          "start_year": 2004,
          "end_year": 2009,
          "grade": "67%",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0060072",
      "rank": 98,
      "score": 0.696,
      "score_100": 69.6,
      "readiness": 52.6,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Anil Mishra",
      "title": "Staff Machine Learning Engineer",
      "headline": "Staff Machine Learning Engineer | LLMs, RAG, Vector Search | ex-Top Tech",
      "summary": "Senior AI engineer with 5.7 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I led the migration from keyword-based ranking to a learning-to-rank model with embedded behavioral signals, handling peak QPS of 8K with sub-200ms p95. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I care more about shipping a working system in 6 weeks than a theoretically perfect one in 6 months. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Amazon",
      "industry": "Internet",
      "company_size": "10001+",
      "location": "Indore, Madhya Pradesh",
      "country": "India",
      "years": 5.7,
      "current_work": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month.",
      "matched_skills": [
        "Sentence Transformers",
        "Milvus",
        "BM25",
        "Qdrant",
        "Embeddings",
        "Pinecone",
        "RAG",
        "Recommendation Systems"
      ],
      "all_skills": [
        {
          "name": "Deep Learning",
          "proficiency": "advanced",
          "duration_months": 49,
          "endorsements": 34
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 60,
          "endorsements": 34
        },
        {
          "name": "PyTorch",
          "proficiency": "advanced",
          "duration_months": 51,
          "endorsements": 1
        },
        {
          "name": "Feature Engineering",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 5
        },
        {
          "name": "Milvus",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 8
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "expert",
          "duration_months": 40,
          "endorsements": 6
        },
        {
          "name": "Next.js",
          "proficiency": "beginner",
          "duration_months": 15,
          "endorsements": 14
        },
        {
          "name": "BM25",
          "proficiency": "expert",
          "duration_months": 70,
          "endorsements": 19
        },
        {
          "name": "Redux",
          "proficiency": "beginner",
          "duration_months": 17,
          "endorsements": 12
        },
        {
          "name": "Qdrant",
          "proficiency": "advanced",
          "duration_months": 46,
          "endorsements": 19
        },
        {
          "name": "ASR",
          "proficiency": "advanced",
          "duration_months": 18,
          "endorsements": 29
        },
        {
          "name": "Reinforcement Learning",
          "proficiency": "intermediate",
          "duration_months": 16,
          "endorsements": 12
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "expert",
          "duration_months": 87,
          "endorsements": 34
        },
        {
          "name": "Embeddings",
          "proficiency": "expert",
          "duration_months": 54,
          "endorsements": 39
        },
        {
          "name": "Machine Learning",
          "proficiency": "expert",
          "duration_months": 48,
          "endorsements": 43
        },
        {
          "name": "Pinecone",
          "proficiency": "expert",
          "duration_months": 65,
          "endorsements": 32
        },
        {
          "name": "RAG",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 48
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "advanced",
          "duration_months": 52,
          "endorsements": 42
        }
      ],
      "signals": {
        "open_to_work": false,
        "last_active": "2026-01-24",
        "response_rate": 0.1,
        "response_time_hours": 143.0,
        "notice_days": 90,
        "github": 82.4,
        "profile_views": 179,
        "applications": 22,
        "search_appearance": 1155,
        "saved": 3,
        "endorsements": 123,
        "profile_completeness": 45.8,
        "interview_completion": 0.99,
        "offer_acceptance": 0.46,
        "work_mode": "flexible",
        "relocate": true,
        "salary_min": 32.4,
        "salary_max": 69.2,
        "assessment_count": 2,
        "best_assessments": [
          {
            "skill": "Deep Learning",
            "score": 80.8
          },
          {
            "skill": "Sentence Transformers",
            "score": 61.7
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 69.4,
        "role": 98.0,
        "experience": 100.0,
        "company": 100.0,
        "behavior": 51.7,
        "logistics": 67.8,
        "penalty": 9.5,
        "retrieval": 100.0,
        "ranking": 59.4,
        "evaluation": 20.0,
        "production": 71.4,
        "assessment": 71.2
      },
      "behavior_parts": {
        "recency": 34.0,
        "response": 10.0,
        "speed": 40.4,
        "open_to_work": 35.0,
        "completeness": 45.8,
        "saved": 31.5,
        "market_demand": 74.8,
        "applications": 100.0,
        "interview": 99.0,
        "github": 82.4,
        "assessment": 71.2,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "production shipping"
      ],
      "concerns": [
        "long notice period",
        "weak availability signals"
      ],
      "location_label": "India, relocation-ready",
      "reasoning": "Staff Machine Learning Engineer with 5.7 yrs at Amazon; career and skills show retrieval plus ranking/recommendation depth (Sentence Transformers, Milvus, BM25, Qdrant). Indore, Madhya Pradesh; India, relocation-ready; 10% recruiter response; last active 2026-01-24; 90-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Staff Machine Learning Engineer",
          "company": "Amazon",
          "industry": "Internet",
          "duration_months": 37,
          "is_current": true,
          "description": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month."
        },
        {
          "title": "Senior Applied Scientist",
          "company": "Wysa",
          "industry": "HealthTech AI",
          "duration_months": 31,
          "is_current": false,
          "description": "Built and shipped a production recommendation system at a marketplace product, going from offline experimentation to live A/B test in 5 months. The system combined collaborative filtering (matrix factorization), content-based features (TF-IDF + sentence-transformer embeddings), and a behavioral re-ranking layer. The most interesting technical challenge was the cold-start problem for new users; I designed an exploration-exploitation policy using Thompson sampling that improved new-user retention by 11% in the first month."
        }
      ],
      "education": [
        {
          "institution": "SRM University",
          "degree": "B.E.",
          "field_of_study": "Artificial Intelligence",
          "start_year": 2009,
          "end_year": 2012,
          "grade": "7.13 CGPA",
          "tier": "tier_2"
        },
        {
          "institution": "UC Berkeley",
          "degree": "M.S.",
          "field_of_study": "Computer Science",
          "start_year": 2002,
          "end_year": 2006,
          "grade": "9.33 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0008425",
      "rank": 99,
      "score": 0.6957,
      "score_100": 69.57,
      "readiness": 70.4,
      "risk_level": "watch",
      "recruiter_ready": false,
      "name": "Myra Krishnan",
      "title": "Senior NLP Engineer",
      "headline": "Senior NLP Engineer | Production ML at scale | 7.8+ yrs",
      "summary": "Senior AI engineer with 7.8 years of hands-on experience building production ML systems, with a focus on search, retrieval, and ranking. Most recently, I rebuilt the candidate-JD matching pipeline from scratch, taking it from 0.72 to 0.91 NDCG@10, operating at single-digit-millisecond p95 retrieval latency. My day-to-day work spans embedding model selection and fine-tuning, hybrid retrieval architecture, learning-to-rank, behavioral-signal integration, and the offline/online evaluation that ties it all together. I've shipped systems in both early-stage product companies and at larger scale, and I've spent enough time on both that I know which tradeoffs apply where. I've made all the standard mistakes - embedding everything before defining the metric, over-investing in fine-tuning, optimizing offline metrics that don't move online - so I notice them faster now. Currently exploring my next move - looking for senior IC or tech-lead roles where I can own the intelligence layer end-to-end.",
      "company": "Ola",
      "industry": "Transportation",
      "company_size": "5001-10000",
      "location": "Kolkata, West Bengal",
      "country": "India",
      "years": 7.8,
      "current_work": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout.",
      "matched_skills": [
        "Qdrant",
        "pgvector",
        "Sentence Transformers",
        "Haystack",
        "Semantic Search",
        "Information Retrieval",
        "Learning to Rank",
        "Recommendation Systems"
      ],
      "all_skills": [
        {
          "name": "Learning to Rank",
          "proficiency": "expert",
          "duration_months": 87,
          "endorsements": 19
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 92,
          "endorsements": 4
        },
        {
          "name": "Weights & Biases",
          "proficiency": "advanced",
          "duration_months": 19,
          "endorsements": 6
        },
        {
          "name": "pgvector",
          "proficiency": "expert",
          "duration_months": 58,
          "endorsements": 47
        },
        {
          "name": "Sentence Transformers",
          "proficiency": "expert",
          "duration_months": 96,
          "endorsements": 56
        },
        {
          "name": "NLP",
          "proficiency": "expert",
          "duration_months": 41,
          "endorsements": 1
        },
        {
          "name": "Haystack",
          "proficiency": "expert",
          "duration_months": 93,
          "endorsements": 8
        },
        {
          "name": "TensorFlow",
          "proficiency": "advanced",
          "duration_months": 40,
          "endorsements": 58
        },
        {
          "name": "Python",
          "proficiency": "expert",
          "duration_months": 55,
          "endorsements": 38
        },
        {
          "name": "Prompt Engineering",
          "proficiency": "advanced",
          "duration_months": 46,
          "endorsements": 26
        },
        {
          "name": "Image Classification",
          "proficiency": "intermediate",
          "duration_months": 36,
          "endorsements": 1
        },
        {
          "name": "Object Detection",
          "proficiency": "advanced",
          "duration_months": 36,
          "endorsements": 13
        },
        {
          "name": "Semantic Search",
          "proficiency": "advanced",
          "duration_months": 26,
          "endorsements": 30
        },
        {
          "name": "LoRA",
          "proficiency": "expert",
          "duration_months": 57,
          "endorsements": 49
        },
        {
          "name": "Recommendation Systems",
          "proficiency": "expert",
          "duration_months": 87,
          "endorsements": 52
        },
        {
          "name": "Information Retrieval",
          "proficiency": "expert",
          "duration_months": 45,
          "endorsements": 57
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 65,
          "endorsements": 40
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-04-25",
        "response_rate": 0.66,
        "response_time_hours": 10.8,
        "notice_days": 90,
        "github": 53.3,
        "profile_views": 260,
        "applications": 10,
        "search_appearance": 1136,
        "saved": 55,
        "endorsements": 97,
        "profile_completeness": 57.2,
        "interview_completion": 0.77,
        "offer_acceptance": 0.41,
        "work_mode": "remote",
        "relocate": false,
        "salary_min": 37.7,
        "salary_max": 74.5,
        "assessment_count": 1,
        "best_assessments": [
          {
            "skill": "Learning to Rank",
            "score": 77.8
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 86.7,
        "role": 26.0,
        "experience": 100.0,
        "company": 74.0,
        "behavior": 79.3,
        "logistics": 54.5,
        "penalty": 4.5,
        "retrieval": 100.0,
        "ranking": 100.0,
        "evaluation": 60.0,
        "production": 100.0,
        "assessment": 77.8
      },
      "behavior_parts": {
        "recency": 82.0,
        "response": 66.0,
        "speed": 95.5,
        "open_to_work": 100.0,
        "completeness": 57.2,
        "saved": 91.6,
        "market_demand": 93.2,
        "applications": 78.8,
        "interview": 77.0,
        "github": 53.3,
        "assessment": 77.8,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "ranking/recommendations",
        "evaluation",
        "production shipping"
      ],
      "concerns": [
        "long notice period"
      ],
      "location_label": "India, non-preferred city",
      "reasoning": "Senior NLP Engineer with 7.8 yrs at Ola; career and skills show retrieval plus ranking/recommendation depth (Qdrant, pgvector, Sentence Transformers, Haystack). Kolkata, West Bengal; India, non-preferred city; 66% recruiter response; last active 2026-04-25; 90-day notice; concern: long notice period.",
      "career": [
        {
          "title": "Senior NLP Engineer",
          "company": "Ola",
          "industry": "Transportation",
          "duration_months": 25,
          "is_current": true,
          "description": "Owned the design and rollout of a large-scale semantic search system serving an internal corpus of 35M+ items. Migrated the existing BM25-only retrieval to a hybrid setup combining sparse and dense vectors (sentence-transformers, MPNet-base initially, later fine-tuned BGE-large for our domain). The new system reduced p95 retrieval latency by 60% while improving NDCG@10 by 18% on our held-out eval set. Spent substantial time on the boring-but-critical parts: incremental index refresh, embedding drift monitoring, online/offline metric correlation. Led a team of 4 engineers across the rollout."
        },
        {
          "title": "Senior ML Engineer - Search & Ranking",
          "company": "Zomato",
          "industry": "Food Delivery",
          "duration_months": 46,
          "is_current": false,
          "description": "Fine-tuned LLaMA-2-7B and Mistral-7B variants using LoRA and QLoRA for domain-specific candidate-JD matching. Built the data curation pipeline that generated 200K high-quality preference pairs from recruiter labels, plus the eval harness using both ranking metrics and human-quality scores. Deployed the model via BentoML on Kubernetes with sub-200ms p95 latency by quantizing to INT8 and batching at the request level. Cost per inference dropped from $0.04 with GPT-3.5-fallback to under $0.001."
        },
        {
          "title": "Lead AI Engineer",
          "company": "Amazon",
          "industry": "Internet",
          "duration_months": 21,
          "is_current": false,
          "description": "Owned the end-to-end ranking pipeline at a recommendations-heavy consumer product: candidate sourcing -> embedding generation (using a fine-tuned BGE-large) -> Pinecone retrieval -> learning-to-rank re-scoring (XGBoost) -> behavioral-signal integration. The hardest part wasn't the ML - it was the evaluation: building offline metrics that actually predicted what the recommendation would do to live engagement. After three iterations we landed on a calibration approach using simulated A/B tests that has held up over the last 18 months."
        }
      ],
      "education": [
        {
          "institution": "BITS Pilani",
          "degree": "M.S.",
          "field_of_study": "Computer Engineering",
          "start_year": 2005,
          "end_year": 2009,
          "grade": "6.54 CGPA",
          "tier": "tier_1"
        }
      ]
    },
    {
      "candidate_id": "CAND_0092245",
      "rank": 100,
      "score": 0.6957,
      "score_100": 69.57,
      "readiness": 63.7,
      "risk_level": "clear",
      "recruiter_ready": false,
      "name": "Krishna Dutta",
      "title": "Senior Data Scientist",
      "headline": "Senior Data Scientist | Search, Ranking & Retrieval",
      "summary": "Machine learning engineer with 4.1 years of experience building ML-powered features in production. Strong background in NLP, recommendation systems, and applied AI; comfortable across the ML stack from feature engineering through deployment. Recently, my main project for the last 18 months has been the recommendation system that powers our discovery feed. I've spent enough time debugging production ranking issues to know which signals matter and which are noise. My academic background is in CS/ML but my main learning has come from shipping real systems and seeing what holds up under production load. Open to senior IC roles in applied ML or AI engineering, ideally at product companies where I'd own a meaningful piece of the ML stack.",
      "company": "Ola",
      "industry": "Transportation",
      "company_size": "5001-10000",
      "location": "Coimbatore, Tamil Nadu",
      "country": "India",
      "years": 4.1,
      "current_work": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself.",
      "matched_skills": [
        "LlamaIndex",
        "Embeddings",
        "RAG",
        "FAISS",
        "Qdrant",
        "Elasticsearch",
        "Vector Search",
        "Airflow"
      ],
      "all_skills": [
        {
          "name": "LlamaIndex",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 32
        },
        {
          "name": "Forecasting",
          "proficiency": "advanced",
          "duration_months": 33,
          "endorsements": 60
        },
        {
          "name": "Embeddings",
          "proficiency": "advanced",
          "duration_months": 55,
          "endorsements": 43
        },
        {
          "name": "Statistical Modeling",
          "proficiency": "advanced",
          "duration_months": 42,
          "endorsements": 18
        },
        {
          "name": "Kafka",
          "proficiency": "intermediate",
          "duration_months": 15,
          "endorsements": 10
        },
        {
          "name": "RAG",
          "proficiency": "expert",
          "duration_months": 50,
          "endorsements": 25
        },
        {
          "name": "Hugging Face Transformers",
          "proficiency": "expert",
          "duration_months": 59,
          "endorsements": 56
        },
        {
          "name": "GANs",
          "proficiency": "advanced",
          "duration_months": 54,
          "endorsements": 44
        },
        {
          "name": "Content Writing",
          "proficiency": "intermediate",
          "duration_months": 30,
          "endorsements": 2
        },
        {
          "name": "Airflow",
          "proficiency": "intermediate",
          "duration_months": 32,
          "endorsements": 9
        },
        {
          "name": "FAISS",
          "proficiency": "advanced",
          "duration_months": 41,
          "endorsements": 38
        },
        {
          "name": "Data Science",
          "proficiency": "intermediate",
          "duration_months": 25,
          "endorsements": 0
        },
        {
          "name": "Qdrant",
          "proficiency": "expert",
          "duration_months": 56,
          "endorsements": 26
        },
        {
          "name": "Elasticsearch",
          "proficiency": "expert",
          "duration_months": 95,
          "endorsements": 12
        },
        {
          "name": "Fine-tuning LLMs",
          "proficiency": "advanced",
          "duration_months": 27,
          "endorsements": 7
        },
        {
          "name": "Vector Search",
          "proficiency": "expert",
          "duration_months": 40,
          "endorsements": 28
        },
        {
          "name": "NLP",
          "proficiency": "advanced",
          "duration_months": 30,
          "endorsements": 15
        }
      ],
      "signals": {
        "open_to_work": true,
        "last_active": "2026-03-28",
        "response_rate": 0.5,
        "response_time_hours": 30.7,
        "notice_days": 60,
        "github": -1,
        "profile_views": 11,
        "applications": 14,
        "search_appearance": 333,
        "saved": 9,
        "endorsements": 161,
        "profile_completeness": 91.7,
        "interview_completion": 0.58,
        "offer_acceptance": -1,
        "work_mode": "flexible",
        "relocate": false,
        "salary_min": 28.7,
        "salary_max": 40.5,
        "assessment_count": 4,
        "best_assessments": [
          {
            "skill": "Forecasting",
            "score": 73.5
          },
          {
            "skill": "Embeddings",
            "score": 68.2
          },
          {
            "skill": "LlamaIndex",
            "score": 60.2
          },
          {
            "skill": "Statistical Modeling",
            "score": 51.8
          }
        ],
        "verified_email": true,
        "verified_phone": true,
        "linkedin_connected": true
      },
      "breakdown": {
        "technical": 60.9,
        "role": 76.0,
        "experience": 82.0,
        "company": 58.0,
        "behavior": 66.8,
        "logistics": 68.8,
        "penalty": 0.0,
        "retrieval": 96.2,
        "ranking": 31.7,
        "evaluation": 60.0,
        "production": 42.9,
        "assessment": 64.2
      },
      "behavior_parts": {
        "recency": 58.0,
        "response": 50.0,
        "speed": 87.2,
        "open_to_work": 100.0,
        "completeness": 91.7,
        "saved": 52.4,
        "market_demand": 62.4,
        "applications": 88.9,
        "interview": 58.0,
        "github": 18.0,
        "assessment": 64.2,
        "verified": 100.0
      },
      "evidence": [
        "retrieval",
        "evaluation"
      ],
      "concerns": [],
      "location_label": "India, non-preferred city",
      "reasoning": "Senior Data Scientist with 4.1 yrs at Ola; career and skills show strong retrieval/search depth (LlamaIndex, Embeddings, RAG, FAISS). Coimbatore, Tamil Nadu; India, non-preferred city; 50% recruiter response; last active 2026-03-28; 60-day notice; behavior/logistics are broadly workable.",
      "career": [
        {
          "title": "Senior Data Scientist",
          "company": "Ola",
          "industry": "Transportation",
          "duration_months": 49,
          "is_current": true,
          "description": "Trained and shipped multiple ranking models for our product's discovery feed using XGBoost and LightGBM. Designed features across three families: content metadata, user behavior signals, and item engagement history. Owned the offline-online correlation analysis that determined which offline metrics actually predicted A/B test outcomes. Worked closely with PMs to define the optimization target (click-through vs. dwell time vs. downstream conversion) - that work was as important as the modeling itself."
        }
      ],
      "education": [
        {
          "institution": "IIT Delhi",
          "degree": "B.Sc",
          "field_of_study": "Information Technology",
          "start_year": 2019,
          "end_year": 2022,
          "grade": "8.89 CGPA",
          "tier": "tier_1"
        }
      ]
    }
  ]
};
