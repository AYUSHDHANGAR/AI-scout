const data = window.RANKING_DATA;

const state = {
  query: "",
  minScore: 0.7,
  view: "all",
  selectedId: data.candidates[0]?.candidate_id,
  openOnly: false,
  fastNotice: false,
  indiaOnly: false,
};

const elements = {
  roleTitle: document.querySelector("#roleTitle"),
  roleMeta: document.querySelector("#roleMeta"),
  mustHaveList: document.querySelector("#mustHaveList"),
  weightList: document.querySelector("#weightList"),
  metricGrid: document.querySelector("#metricGrid"),
  keywordDock: document.querySelector("#keywordDock"),
  spotlight: document.querySelector("#spotlight"),
  candidateList: document.querySelector("#candidateList"),
  detailPane: document.querySelector("#detailPane"),
  resultCount: document.querySelector("#resultCount"),
  searchInput: document.querySelector("#searchInput"),
  scoreRange: document.querySelector("#scoreRange"),
  scoreRangeValue: document.querySelector("#scoreRangeValue"),
  openOnly: document.querySelector("#openOnly"),
  fastNotice: document.querySelector("#fastNotice"),
  indiaOnly: document.querySelector("#indiaOnly"),
  resetFilters: document.querySelector("#resetFilters"),
  downloadCsv: document.querySelector("#downloadCsv"),
};

function pct(value) {
  return `${Math.round(Number(value || 0) * 100)}%`;
}

function score(value) {
  return Number(value || 0).toFixed(3);
}

function compactNumber(value) {
  return Intl.NumberFormat("en", { notation: "compact" }).format(value || 0);
}

function escapeCsv(value) {
  const stringValue = String(value ?? "");
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initials(name) {
  return String(name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function searchTerms(query) {
  return String(query || "")
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);
}

function profileSearchBlob(candidate) {
  if (candidate._profileSearchBlob) return candidate._profileSearchBlob;
  const careerText = (candidate.career || [])
    .map((job) => [job.title, job.company, job.industry, job.description].join(" "))
    .join(" ");
  const skillText = (candidate.all_skills || [])
    .map((skill) => `${skill.name} ${skill.proficiency} ${skill.duration_months} months`)
    .join(" ");
  const signalText = [
    candidate.signals.open_to_work ? "open to work available" : "not open to work",
    `${candidate.signals.notice_days} day notice`,
    candidate.signals.work_mode,
    candidate.signals.relocate ? "willing to relocate" : "not willing to relocate",
    candidate.location_label,
  ].join(" ");
  candidate._profileSearchBlob = [
    candidate.candidate_id,
    candidate.name,
    candidate.title,
    candidate.company,
    candidate.industry,
    candidate.company_size,
    candidate.location,
    candidate.country,
    candidate.headline,
    candidate.summary,
    candidate.current_work,
    candidate.reasoning,
    careerText,
    skillText,
    signalText,
    ...candidate.matched_skills,
    ...candidate.evidence,
    ...candidate.concerns,
  ]
    .join(" ")
    .toLowerCase();
  return candidate._profileSearchBlob;
}

function includesText(candidate, query) {
  if (!query) return true;
  const haystack = profileSearchBlob(candidate);
  return searchTerms(query).every((term) => haystack.includes(term));
}

function isRecruiterReady(candidate) {
  return (
    candidate.signals.open_to_work &&
    candidate.signals.notice_days <= 60 &&
    candidate.signals.response_rate >= 0.6 &&
    candidate.breakdown.behavior >= 60
  );
}

function filteredCandidates() {
  return data.candidates.filter((candidate) => {
    if (!includesText(candidate, state.query)) return false;
    if (candidate.score < state.minScore) return false;
    if (state.openOnly && !candidate.signals.open_to_work) return false;
    if (state.fastNotice && candidate.signals.notice_days > 60) return false;
    if (state.indiaOnly && candidate.country !== "India") return false;
    if (state.view === "top10" && candidate.rank > 10) return false;
    if (state.view === "ready" && !isRecruiterReady(candidate)) return false;
    if (state.view === "concerns" && candidate.concerns.length === 0) return false;
    return true;
  });
}

function bar(label, value) {
  const safeValue = Math.max(0, Math.min(100, Number(value || 0)));
  return `
    <div class="bar-line">
      <span>${label}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${safeValue}%"></div></div>
      <strong>${Math.round(safeValue)}</strong>
    </div>
  `;
}

function chip(label, variant = "") {
  return `<span class="status-chip ${variant}">${label}</span>`;
}

function skillChips(skills) {
  return skills.map((skill) => `<span class="skill-chip">${skill}</span>`).join("");
}

function profileMatchChip(candidate) {
  if (!state.query) return "";
  const terms = searchTerms(state.query).filter((term) => profileSearchBlob(candidate).includes(term));
  if (!terms.length) return "";
  return `<span class="match-chip">Profile match: ${terms.map(escapeHtml).join(", ")}</span>`;
}

function renderKeywordDock() {
  const keywords = ["embeddings", "ranking", "NDCG", "Pinecone", "Noida", "marketplace", "open to work"];
  elements.keywordDock.innerHTML = `
    <span class="keyword-label">Quick profile search</span>
    ${keywords
      .map(
        (keyword) => `
          <button class="keyword-chip" type="button" data-keyword="${keyword}">
            ${keyword}
          </button>
        `,
      )
      .join("")}
  `;
}

function renderRole() {
  elements.roleTitle.textContent = data.job.title;
  elements.roleMeta.textContent = `${data.job.company} - ${data.job.location}`;
  elements.mustHaveList.innerHTML = data.job.must_have
    .map(
      (need) => `
        <div class="need-item">
          <span class="need-label"><span class="need-dot"></span>${need}</span>
        </div>
      `,
    )
    .join("");

  elements.weightList.innerHTML = data.weights
    .map(
      (item) => `
        <div class="weight-item">
          <span>${item.label}</span>
          <strong class="weight-pill">${item.weight}${Number.isFinite(item.weight) ? "%" : ""}</strong>
        </div>
      `,
    )
    .join("");
}

function renderMetrics() {
  const summary = data.summary;
  const metrics = [
    ["Candidate pool", compactNumber(summary.total_candidates_scanned), "Profiles scanned offline"],
    ["Shortlist", summary.shortlist_size, "Valid top-ranked rows"],
    ["Top score", score(summary.top_score), "Best-fit composite"],
    ["Cutoff score", score(summary.cutoff_score), "Rank 100 threshold"],
  ];

  elements.metricGrid.innerHTML = metrics
    .map(
      ([label, value, helper]) => `
        <article class="metric">
          <span>${label}</span>
          <strong>${value}</strong>
          <span>${helper}</span>
        </article>
      `,
    )
    .join("");
}

function renderSpotlight() {
  const candidate = data.candidates[0];
  if (!candidate) return;
  elements.spotlight.innerHTML = `
    <div>
      <div class="spotlight-title">
        <div>
          <span class="eyebrow">Best overall fit</span>
          <h2>${candidate.name} - ${candidate.title}</h2>
          <div class="candidate-meta">
            <span>${candidate.company}</span>
            <span>${candidate.location}</span>
            <span>${candidate.years} yrs experience</span>
          </div>
        </div>
        <span class="rank-badge">#${candidate.rank}</span>
      </div>
      <p>${candidate.reasoning}</p>
      <div class="chip-row">${skillChips(candidate.matched_skills.slice(0, 6))}</div>
    </div>
    <div>
      <span class="eyebrow">Composite score</span>
      <div class="score-big">${score(candidate.score)}</div>
      <div class="bar-stack">
        ${bar("technical", candidate.breakdown.technical)}
        ${bar("retrieval", candidate.breakdown.retrieval)}
        ${bar("ranking", candidate.breakdown.ranking)}
        ${bar("behavior", candidate.breakdown.behavior)}
      </div>
    </div>
  `;
}

function candidateStatus(candidate) {
  const statuses = [];
  statuses.push(candidate.signals.open_to_work ? chip("open to work") : chip("not open", "warn"));
  statuses.push(
    candidate.signals.notice_days <= 30
      ? chip(`${candidate.signals.notice_days}d notice`)
      : candidate.signals.notice_days <= 60
        ? chip(`${candidate.signals.notice_days}d notice`, "warn")
        : chip(`${candidate.signals.notice_days}d notice`, "bad"),
  );
  statuses.push(
    candidate.concerns.length ? chip(`${candidate.concerns.length} concern`, "warn") : chip("clean signals"),
  );
  return statuses.join("");
}

function renderCandidateCard(candidate) {
  const active = candidate.candidate_id === state.selectedId ? "active" : "";
  return `
    <article class="candidate-card ${active}" data-candidate="${candidate.candidate_id}" tabindex="0" role="button" aria-label="View ${candidate.name}">
      <div class="rank-avatar">
        <span class="rank-badge">#${candidate.rank}</span>
        <span class="avatar">${initials(candidate.name)}</span>
      </div>
      <div>
        <h3>${candidate.name} - ${candidate.title}</h3>
        <div class="candidate-meta">
          <span>${candidate.company}</span>
          <span>${candidate.location}</span>
          <span>${candidate.years} yrs</span>
        </div>
        <p class="reason">${candidate.reasoning}</p>
        <div class="chip-row">${skillChips(candidate.matched_skills.slice(0, 5))}</div>
        <div class="chip-row">${profileMatchChip(candidate)}${candidateStatus(candidate)}</div>
      </div>
      <div class="score-column">
        <span class="eyebrow">Score</span>
        <strong>${score(candidate.score)}</strong>
        <div class="bar-stack">
          ${bar("tech", candidate.breakdown.technical)}
          ${bar("logistics", candidate.breakdown.logistics)}
        </div>
      </div>
    </article>
  `;
}

function renderList() {
  const candidates = filteredCandidates();
  elements.resultCount.textContent = `${candidates.length} candidates`;
  if (!candidates.length) {
    elements.candidateList.innerHTML = `
      <div class="empty-state">
        No candidates match these filters. Loosen the score threshold or reset filters.
      </div>
    `;
    renderDetail(null);
    return;
  }

  if (!candidates.some((candidate) => candidate.candidate_id === state.selectedId)) {
    state.selectedId = candidates[0].candidate_id;
  }
  elements.candidateList.innerHTML = candidates.map(renderCandidateCard).join("");
  renderDetail(data.candidates.find((candidate) => candidate.candidate_id === state.selectedId));
}

function signalRows(candidate) {
  const signals = [
    ["Open to work", candidate.signals.open_to_work ? "Yes" : "No"],
    ["Last active", candidate.signals.last_active],
    ["Response rate", pct(candidate.signals.response_rate)],
    ["Avg response", `${Math.round(candidate.signals.response_time_hours)}h`],
    ["Notice", `${candidate.signals.notice_days} days`],
    ["GitHub", candidate.signals.github < 0 ? "Not linked" : Math.round(candidate.signals.github)],
    ["Saved by recruiters", candidate.signals.saved],
    ["Work mode", candidate.signals.work_mode],
    ["Relocation", candidate.signals.relocate ? "Yes" : "No"],
  ];
  return signals
    .map(
      ([label, value]) => `
        <div class="signal-row">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");
}

function renderDetail(candidate) {
  if (!candidate) {
    elements.detailPane.innerHTML = `
      <div class="empty-state">Select a candidate to inspect the fit breakdown.</div>
    `;
    return;
  }

  const concernHtml = candidate.concerns.length
    ? `<div class="chip-row">${candidate.concerns.map((item) => chip(item, "warn")).join("")}</div>`
    : `<div class="chip-row">${chip("No major anti-signal triggered")}</div>`;

  elements.detailPane.innerHTML = `
    <div class="detail-header">
      <div>
        <span class="eyebrow">Candidate detail</span>
        <h2>${candidate.name}</h2>
        <div class="candidate-meta">
          <span>${candidate.candidate_id}</span>
          <span>Rank #${candidate.rank}</span>
        </div>
      </div>
      <div class="score-column">
        <span class="eyebrow">Score</span>
        <strong>${score(candidate.score)}</strong>
      </div>
    </div>

    <h3>${candidate.title}</h3>
    <p class="reason">${candidate.headline}</p>
    <p class="profile-summary">${candidate.summary}</p>

    <div class="detail-grid">
      <div class="detail-stat"><span>Company</span><strong>${candidate.company}</strong></div>
      <div class="detail-stat"><span>Location</span><strong>${candidate.location}</strong></div>
      <div class="detail-stat"><span>Experience</span><strong>${candidate.years} yrs</strong></div>
      <div class="detail-stat"><span>Salary</span><strong>${candidate.signals.salary_min}-${candidate.signals.salary_max} LPA</strong></div>
    </div>

    <div class="detail-section">
      <h3>Fit Breakdown</h3>
      <div class="bar-stack">
        ${bar("technical", candidate.breakdown.technical)}
        ${bar("role", candidate.breakdown.role)}
        ${bar("experience", candidate.breakdown.experience)}
        ${bar("company", candidate.breakdown.company)}
        ${bar("behavior", candidate.breakdown.behavior)}
        ${bar("logistics", candidate.breakdown.logistics)}
        ${bar("retrieval", candidate.breakdown.retrieval)}
        ${bar("evaluation", candidate.breakdown.evaluation)}
      </div>
    </div>

    <div class="detail-section">
      <h3>Why this rank</h3>
      <p>${candidate.reasoning}</p>
      ${concernHtml}
    </div>

    <div class="detail-section">
      <h3>Matched Skills</h3>
      <div class="chip-row">${skillChips(candidate.matched_skills)}</div>
    </div>

    <div class="detail-section">
      <h3>Behavior Signals</h3>
      ${signalRows(candidate)}
    </div>

    <div class="detail-section">
      <h3>Career Evidence</h3>
      <div class="timeline">
        ${candidate.career
          .map(
            (job) => `
              <div class="timeline-item">
                <strong>${job.title} - ${job.company}</strong>
                <div class="timeline-meta">${job.industry} - ${job.duration_months} months</div>
                <p>${job.description}</p>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderAll() {
  renderRole();
  renderKeywordDock();
  renderMetrics();
  renderSpotlight();
  renderList();
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  renderList();
}

function downloadCsv() {
  const header = ["candidate_id", "rank", "score", "reasoning"];
  const rows = data.candidates.map((candidate) => [
    candidate.candidate_id,
    candidate.rank,
    candidate.score.toFixed(6),
    candidate.reasoning,
  ]);
  const csv = [header, ...rows].map((row) => row.map(escapeCsv).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "redrob_scout_submission.csv";
  link.click();
  URL.revokeObjectURL(url);
}

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderList();
});

elements.scoreRange.addEventListener("input", (event) => {
  state.minScore = Number(event.target.value);
  elements.scoreRangeValue.textContent = state.minScore.toFixed(2);
  renderList();
});

elements.openOnly.addEventListener("change", (event) => {
  state.openOnly = event.target.checked;
  renderList();
});

elements.fastNotice.addEventListener("change", (event) => {
  state.fastNotice = event.target.checked;
  renderList();
});

elements.indiaOnly.addEventListener("change", (event) => {
  state.indiaOnly = event.target.checked;
  renderList();
});

elements.resetFilters.addEventListener("click", () => {
  state.query = "";
  state.minScore = 0.7;
  state.view = "all";
  state.openOnly = false;
  state.fastNotice = false;
  state.indiaOnly = false;
  elements.searchInput.value = "";
  elements.scoreRange.value = "0.70";
  elements.scoreRangeValue.textContent = "0.70";
  elements.openOnly.checked = false;
  elements.fastNotice.checked = false;
  elements.indiaOnly.checked = false;
  setView("all");
});

elements.downloadCsv.addEventListener("click", downloadCsv);

elements.keywordDock.addEventListener("click", (event) => {
  const button = event.target.closest("[data-keyword]");
  if (!button) return;
  state.query = button.dataset.keyword;
  elements.searchInput.value = state.query;
  renderList();
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

elements.candidateList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-candidate]");
  if (!card) return;
  state.selectedId = card.dataset.candidate;
  renderList();
});

elements.candidateList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-candidate]");
  if (!card) return;
  event.preventDefault();
  state.selectedId = card.dataset.candidate;
  renderList();
});

renderAll();
