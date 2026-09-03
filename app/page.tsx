const featured = [
  {
    index: '01',
    title: 'Westlake Tissue Segmentation',
    kind: 'Applied ML · public companion',
    href: 'https://github.com/JerryDengdmr/westlake-tissue-segmentation',
    description:
      'A production-constrained pathology pipeline where failed ablations led to the real bottleneck: annotation policy.',
    tags: ['PyTorch', 'Segmentation', 'Data quality', 'Ablations'],
    metric: '0.9711',
    metricLabel: 'internal non-empty Dice',
  },
  {
    index: '02',
    title: 'PPTAgent',
    kind: 'AI agent · public code',
    href: 'https://github.com/JerryDengdmr/ppt-agent',
    description:
      'A natural-language PowerPoint editor with typed plans, dry-run previews, explicit confirmation, verification, and rollback.',
    tags: ['Python', 'python-pptx', 'Pydantic', 'Agent evals'],
    metric: '28/28',
    metricLabel: 'scripted behavior evals',
  },
  {
    index: '03',
    title: 'StockRadar',
    kind: 'Backend system · case study',
    href: 'https://github.com/JerryDengdmr/stock-radar-case-study',
    description:
      'An always-on asynchronous monitoring system that turns 390+ live data streams into ranked, explainable alerts.',
    tags: ['Python 3.14', 'asyncio', 'SQLite', 'LLM APIs'],
    metric: '20m → 4m',
    metricLabel: 'pipeline latency',
  },
];

const additionalWork = [
  {
    title: 'Degree Path Planner',
    description: 'A privacy-first engine for transcript parsing, requirement auditing, course scoring, and availability-aware planning.',
    tech: 'Python · constraints · TypeScript contracts',
    status: 'Public code',
  },
  {
    title: 'A-Share Strategy Toolkit',
    description: 'Iterative multi-factor trading strategies built for the JoinQuant research platform.',
    tech: 'Python · pandas · technical indicators',
    status: 'Independent research archive',
  },
  {
    title: 'NBA Shot Analysis',
    description: 'Regression, GLMs, bootstrap inference, and permutation tests on 2024–25 NBA data.',
    tech: 'Python · statsmodels · NBA API',
    status: 'Statistical analysis',
  },
  {
    title: 'Isle Royale Dynamics',
    description: 'An end-to-end study of predator–prey population dynamics using ecological time series.',
    tech: 'Python · statistical modeling · visualization',
    status: 'Ecological modeling',
  },
  {
    title: 'Ann Arbor Restaurant Study',
    description: 'Statistical analysis of ratings, reviews, and categorical attributes across 200 restaurants.',
    tech: 'Python · scipy · hypothesis testing',
    status: 'Exploratory analysis',
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Jerry Deng home">
          JD<span className="brand-dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="mailto:jerrydmr@umich.edu">Contact</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> University of Michigan · Computer Science</p>
          <h1>
            I build systems that turn
            <em> messy data </em>
            into decisions.
          </h1>
          <p className="hero-intro">
            I’m Jerry Deng, a software engineer working across backend systems,
            AI agents, and applied machine learning.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↘</span></a>
            <a className="button button-quiet" href="https://github.com/JerryDengdmr">GitHub <span>↗</span></a>
          </div>
        </div>

        <aside className="terminal" aria-label="Engineering profile summary">
          <div className="terminal-bar">
            <span /><span /><span />
            <code>jerry@umich ~ %</code>
          </div>
          <div className="terminal-body">
            <p><b>$</b> whoami</p>
            <p className="output">backend / agents / applied ML</p>
            <p><b>$</b> current_focus</p>
            <p className="output accent">reliable systems in the real world_</p>
            <div className="terminal-rule" />
            <dl>
              <div><dt>390+</dt><dd>live data streams</dd></div>
              <div><dt>3×</dt><dd>workflow acceleration</dd></div>
              <div><dt>0.9711</dt><dd>internal segmentation Dice</dd></div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Selected systems</p>
            <h2>Work that runs,<br />not just demos.</h2>
          </div>
          <p>
            Built around measurable constraints: latency, data quality,
            failure recovery, and verifiable outcomes.
          </p>
        </div>

        <div className="project-grid">
          {featured.map((project) => (
            <a className="project-card" href={project.href} key={project.title}>
              <div className="project-topline">
                <span className="project-index">{project.index}</span>
                <span className="project-kind">{project.kind}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-metric">
                <strong>{project.metric}</strong>
                <span>{project.metricLabel}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="case-study" id="westlake">
        <div className="shell case-grid">
          <div className="case-copy">
            <p className="eyebrow light"><span /> Case study 01</p>
            <h2>The model wasn’t the bottleneck. The labels were.</h2>
            <p className="case-lead">
              Seven model-side interventions failed to fix a persistent
              empty-tile false-positive problem. Instead of adding another model
              trick, I traced the failure backward through the data pipeline and
              found a concentrated annotation-policy conflict.
            </p>
            <ul className="case-points">
              <li><b>Constrained system</b><span>four data sources, multi-scale tiling, and a two-second deployment target</span></li>
              <li><b>Failure-specific metrics</b><span>separated non-empty Dice from empty-tile false positives instead of hiding both in one average</span></li>
              <li><b>Audit upstream</b><span>scanned 12,807 annotations and validated the diagnosis with a controlled retraining run</span></li>
            </ul>
          </div>
          <div className="system-map" aria-label="Westlake tissue segmentation iteration loop">
            <div className="map-label">SYSTEM / 01</div>
            <div className="map-node"><span>01</span><b>Four data sources</b><small>H&amp;E · IHC · heterogeneous labels</small></div>
            <div className="map-arrow">↓</div>
            <div className="map-node"><span>02</span><b>Source-aware pipeline</b><small>tiling · valid masks · grouped evaluation</small></div>
            <div className="map-arrow">↓</div>
            <div className="map-node"><span>03</span><b>Controlled ablations</b><small>loss · sampling · resolution · capacity</small></div>
            <div className="map-arrow">↓</div>
            <div className="map-node active"><span>04</span><b>Annotation audit</b><small>failure clusters · human review · retrain</small></div>
          </div>
        </div>
        <div className="shell stats-row">
          <div><strong>~74k</strong><span>training tiles</span></div>
          <div><strong>9</strong><span>controlled iterations</span></div>
          <div><strong>0.9711</strong><span>internal non-empty Dice</span></div>
          <div><strong>0.931s</strong><span>end-to-end inference</span></div>
        </div>
      </section>

      <section className="fieldwork shell">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow"><span /> Field-tested engineering</p>
            <h2>The real problem is<br />often upstream.</h2>
          </div>
          <p>
            Across agent workflows and always-on monitoring, reliability came
            from explicit system boundaries—not from trusting a model to do everything.
          </p>
        </div>
        <div className="field-grid">
          <article className="field-card blue-card">
            <span className="field-number">A</span>
            <p className="field-role">PPT workflow automation · Universal Beijing Resort</p>
            <h3>Let the model propose. Make software decide.</h3>
            <p>
              Built a natural-language PPT editing agent around typed plans,
              default dry-runs, confirmation gates, read-back verification,
              non-target checks, rollback, and structured traces.
            </p>
            <div className="mini-stats">
              <div><strong>28</strong><span>behavior cases</span></div>
              <div><strong>33→3</strong><span>schema repairs</span></div>
              <div><strong>7</strong><span>typed tools</span></div>
            </div>
          </article>
          <article className="field-card paper-card">
            <span className="field-number">B</span>
            <p className="field-role">Backend monitoring · Independent project</p>
            <h3>Only spend model tokens where they change the decision.</h3>
            <p>
              Redesigned an always-on market monitoring service as a staged
              decision funnel: deterministic signals first, sector ranking next,
              and model analysis only for the highest-value candidates.
            </p>
            <div className="mini-stats">
              <div><strong>390+</strong><span>live streams</span></div>
              <div><strong>77</strong><span>categories</span></div>
              <div><strong>~80%</strong><span>time reduced</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="shell">
          <div className="experience-heading">
            <p className="eyebrow light"><span /> Experience</p>
            <h2>Different domains.<br />The same systems mindset.</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item"><span>2026</span><div><h3>Westlake University</h3><p>Summer Research Intern · Computational pathology and ML systems</p></div></div>
            <div className="timeline-item"><span>2026</span><div><h3>Universal Beijing Resort</h3><p>Data Intelligence Solutions Intern · Browser agents and reporting automation</p></div></div>
            <div className="timeline-item"><span>2026</span><div><h3>Panjing Investment Management</h3><p>AI Technology Research Intern · Data pipelines and technical research systems</p></div></div>
            <div className="timeline-item"><span>2025</span><div><h3>True Talent Connect</h3><p>AI Software Engineering Intern · PostgreSQL, Qdrant, and retrieval architecture</p></div></div>
            <div className="timeline-item"><span>2024</span><div><h3>Aerie Intelligent-Technology</h3><p>Software Engineering Intern · ECG data fusion and LightGBM modeling</p></div></div>
          </div>
        </div>
      </section>

      <section className="more-work shell">
        <div className="more-heading">
          <div>
            <p className="eyebrow"><span /> Additional analysis</p>
            <h2>Analysis, models,<br />and fundamentals.</h2>
          </div>
          <a href="https://github.com/JerryDengdmr">View public repositories ↗</a>
        </div>
        <div className="more-grid">
          {additionalWork.map((project, index) => (
            <article className="more-card" key={project.title}>
              <span>0{index + 4}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech}</small>
              <b>{project.status}</b>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <div>
          <p className="eyebrow"><span /> About</p>
          <h2>Models are rarely<br />the hardest part.</h2>
        </div>
        <div className="about-copy">
          <p>
            I’m a Computer Science student at the University of Michigan. The
            problems I like live where software meets imperfect reality: data
            that disagrees, APIs that fail, workflows that were never designed
            for automation, and models that need hard boundaries.
          </p>
          <p>
            I’m currently focused on backend engineering, AI agent reliability,
            and applied ML systems that can be measured, debugged, and trusted.
          </p>
          <div className="skill-list">
            <span>Python</span><span>C++</span><span>TypeScript</span><span>SQL</span>
            <span>PyTorch</span><span>asyncio</span><span>PostgreSQL</span><span>SQLite</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div>
            <p className="eyebrow light"><span /> Let’s build something useful</p>
            <h2>Have a hard systems problem?</h2>
          </div>
          <div className="footer-links">
            <a href="mailto:jerrydmr@umich.edu">jerrydmr@umich.edu ↗</a>
            <a href="https://www.linkedin.com/in/jerry-deng-b52245290">LinkedIn ↗</a>
            <a href="https://github.com/JerryDengdmr">GitHub ↗</a>
          </div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Jerry Deng</span><span>Built with care in Ann Arbor.</span></div>
      </footer>
    </main>
  );
}
