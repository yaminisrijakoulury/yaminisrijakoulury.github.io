const projects = {
  returnminder: {
    category: '01 / AI APPLICATION', title: 'ReturnMinder', intro: 'A return deadline tracker that turns receipts into organized purchases and timely reminders.',
    metric: '7 days + 1 day', metricLabel: 'Reminder intervals before a return deadline',
    goal: 'Make purchase and return tracking easier, without manually copying every detail from a receipt.',
    work: ['Connected Gmail receipt events through Google Cloud Pub/Sub to a Node.js backend, with Gemini extracting products, return policies, and deadlines.', 'Built receipt-photo extraction with editable results in a Next.js dashboard and purchase storage in Firestore.', 'Scheduled background checks and automated email reminders with links back to the purchase dashboard.'],
    stack: ['Next.js', 'Node.js', 'Gemini', 'Firestore', 'Google Cloud Pub/Sub']
  },
  courselect: {
    category: '02 / AGENTIC AI', title: 'CourSelect', intro: 'An AI academic advising platform that connects semantic course search with persistent agent memory.',
    metric: '8,983', metricLabel: 'Courses searchable with responses under 3 seconds',
    goal: 'Help students navigate a large course catalog while respecting major-specific enrollment requirements.',
    work: ['Implemented vector embeddings and two-level caching on CockroachDB for semantic course search.', 'Designed a four-tier LLM fallback architecture across Gemini, local Ollama models, and Mistral Cloud.', 'Built a five-tier agentic memory system supporting enrollment logic across 242 departments.', 'Deployed the Flask backend on AWS EC2 and stored structured session reports in S3 for auditing and reliable recommendation history.'],
    stack: ['Python', 'Flask', 'AWS', 'CockroachDB', 'Vector embeddings', 'Agentic workflows']
  },
  hra: {
    category: '03 / DATA ENGINEERING', title: 'Human Reference Atlas', intro: 'Analyzing and visualizing HRA interface usage to understand how people explore scientific resources.',
    metric: '120K+', metricLabel: 'Log records processed across 665 MB of data',
    goal: 'Uncover dominant user workflows and underused components to inform documentation improvements.',
    work: ['Architected an AWS EC2 analytics pipeline to parse CloudFront logs with Pandas and NumPy.', 'Built an ETL workflow to clean raw logs and produce structured outputs for dashboard reporting.', 'Visualized sessions and high-demand Knowledge Graph resources through interactive dashboards and Matplotlib / Seaborn analysis.'],
    stack: ['Python', 'Pandas', 'NumPy', 'Plotly', 'AWS EC2'],
    url: 'https://github.iu.edu/ykoulury/ykoulury-Analyzing-and-Visualizing-Human-Reference-Atlas-HRA-UI-Usage'
  },
  ipl: {
    category: '04 / ML & VISUALIZATION', title: 'The Untold Stories of IPL', intro: 'Exploring cricket performance, player consistency, and brand value beyond championship counts.',
    metric: 'Beyond title counts', metricLabel: 'A closer look at performance and brand value',
    goal: 'Turn aggregate cricket statistics into understandable stories and investigate the drivers of team and player performance.',
    work: ['Modeled relationships between competitive win percentages and brand value using predictive modeling, SVM, and Random Forest.', 'Used SHAP for model explainability and NLP for textual analysis.', 'Created advanced visualizations, including rose charts, in Power BI and Tableau to communicate player consistency and performance narratives.'],
    stack: ['Python', 'Scikit-learn', 'SHAP', 'Power BI', 'Tableau'],
    url: 'https://github.iu.edu/ykoulury/Advance-ML-and-Visualizations'
  }
};
const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#project-content');
let trigger;
for (const button of document.querySelectorAll('[data-project]')) {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    trigger = button;
    content.innerHTML = `<p class="eyebrow">${project.category}</p><h2 id="project-title">${project.title}</h2><p>${project.intro}</p><div class="project-stat"><strong>${project.metric}</strong><span>${project.metricLabel}</span></div><h3>The goal</h3><p>${project.goal}</p><h3>What I built</h3><ul>${project.work.map(item => `<li>${item}</li>`).join('')}</ul><div class="tags">${project.stack.map(item => `<span>${item}</span>`).join('')}</div><div class="project-links">${project.url ? `<a class="pill-button dark" href="${project.url}" target="_blank" rel="noopener noreferrer">Explore repository ↗</a>` : ''}<a class="pill-button dark" href="mailto:yaminisrija16@gmail.com?subject=${encodeURIComponent(`Tell me more about ${project.title}`)}">Let’s talk about this project ↗</a></div>${project.url ? '<p class="access-note">Hosted on Indiana University GitHub; university access may be required.</p>' : ''}`;
    dialog.showModal();
    document.body.classList.add('modal-open');
  });
}
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  trigger?.focus({preventScroll: true});
});
