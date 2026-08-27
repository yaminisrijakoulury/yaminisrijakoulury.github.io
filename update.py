import sys

with open('index.html', 'r') as f:
    content = f.read()

# 1. Replace resume link
content = content.replace(
    '<a href="Resume_YaminiSrija_Koulury.pdf" download class="btn btn-resume">⬇ Download Resume</a>',
    '<a href="srija_resume.pdf" download class="btn btn-resume">⬇ Download Resume</a>'
)

# 2. Insert new experience
exp_target = '        <div class="timeline" data-animate>\n'
exp_insert = """
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content glass-card">
              <div class="timeline-header">
                <div>
                  <h3>Heartland Community Network</h3>
                  <p class="timeline-role">Senior Consultant (Data)</p>
                </div>
                <div class="timeline-meta">
                  <span class="timeline-date">Jun 2026 – Present</span>
                  <span class="timeline-location">Bloomington, Indiana · Remote</span>
                </div>
              </div>
              <ul class="timeline-bullets">
                <li>Improved downstream reporting accuracy by 30% by standardizing data definitions and automating SQL validation checks to surface previously undetected anomalies.</li>
                <li>Transitioned executive reporting from reactive to real-time capabilities by designing and deploying Power BI dashboards utilizing custom DAX measures and Power Query transformations.</li>
              </ul>
            </div>
          </div>
"""
if exp_target in content:
    content = content.replace(exp_target, exp_target + exp_insert)
else:
    print("Could not find experience target")

# 3. Insert new project
proj_target = '        <div class="projects-grid" data-animate>\n'
proj_insert = """
          <a href="#" class="project-card glass-card" data-num="00">
            <div class="project-number">00</div>
            <h3>CourSelect (Course Advising Platform)</h3>
            <p>Engineered a full-stack AI academic advising platform, achieving sub-3-second semantic search responses across an 8,983-course catalog, by implementing a two-level caching system and vector embeddings on CockroachDB.</p>
            <p style="margin-top: 10px;">Guaranteed zero-downtime AI query resolution and 100% response reliability during external API outages by designing a 4-tier LLM fallback architecture, dynamically routing requests from Google Gemini to local Ollama models and Mistral Cloud.</p>
            <div class="project-tags">
              <span>Python</span><span>AWS</span><span>CockroachDB</span><span>Agentic workflows</span>
            </div>
          </a>
"""
if proj_target in content:
    content = content.replace(proj_target, proj_target + proj_insert)
else:
    print("Could not find projects target")

with open('index.html', 'w') as f:
    f.write(content)
