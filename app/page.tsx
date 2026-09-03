const featured = [
  {
    index: '01',
    title: 'StockRadar',
    kind: 'Production system · case study',
    href: '#stockradar',
    description:
      'An always-on asynchronous monitoring system that turns 390+ live data streams into ranked, explainable alerts.',
    tags: ['Python 3.14', 'asyncio', 'SQLite', 'LLM APIs'],
    metric: '20m → 4m',
    metricLabel: 'pipeline latency',
  },
  {
    index: '02',
    title: 'Degree Path Planner',
    kind: 'Planning engine · public code',
    href: 'https://github.com/JerryDengdmr/umich-degree-path-planner',
    description:
      'A constraint-based engine that maps transcripts and real course availability into actionable degree plans.',
    tags: ['Python', 'Constraint solving', 'Privacy by design', 'REST API'],
    metric: '7',
    metricLabel: 'edge-case fixtures',
  },
  {
    index: '03',
    title: 'Agent Reliability Lab',
    kind: 'Agent engineering · public code',
    href: 'https://github.com/JerryDengdmr/agent-reliability-lab',
    description:
      'Runnable experiments on deterministic gates, evaluator loops, context budgets, and regression testing for agents.',
    tags: ['Python', 'Evals', 'Guardrails', 'MCP'],
    metric: '14/14',
    metricLabel: 'regression checks',
  },
];

const additionalWork = [
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
              <div><dt>0.967</dt><dd>held-out segmentation Dice</dd></div>
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

      <section className="case-study" id="stockradar">
        <div className="shell case-grid">
          <div className="case-copy">
            <p className="eyebrow light"><span /> Case study 01</p>
            <h2>Make the expensive step earn its place.</h2>
            <p className="case-lead">
              StockRadar began as a system that sent every candidate to an LLM.
              It was slow, costly, and noisy. I redesigned it around a staged
              funnel: deterministic signals first, sector-rotation scoring next,
              and model analysis only for the highest-value slice.
            </p>
            <ul className="case-points">
              <li><b>Always on</b><span>asyncio service with scheduled jobs, state reconciliation, and launchd deployment</span></li>
              <li><b>Designed to fail well</b><span>bounded retries, stale-state fallbacks, and manual-record overwrite guards</span></li>
              <li><b>Measured, not assumed</b><span>1/3/5/10-day forward tracking to evaluate alert quality out of sample</span></li>
            </ul>
          </div>
          <div className="system-map" aria-label="StockRadar processing architecture">
            <div className="map-label">SYSTEM / 01</div>
            <div className="map-node"><span>01</span><b>Live feeds</b><small>market · brokerage · filings</small></div>
            <div className="map-arrow">↓</div>
            <div className="map-node active"><span>02</span><b>Cheap filter</b><small>rules · ranking · rotation</small></div>
            <div className="map-arrow">↓</div>
            <div className="map-node"><span>03</span><b>Model analysis</b><small>top-ranked candidates only</small></div>
            <div className="map-arrow">↓</div>
            <div className="map-node"><span>04</span><b>Feedback loop</b><small>alerts · tracking · daily recap</small></div>
          </div>
        </div>
        <div className="shell stats-row">
          <div><strong>390+</strong><span>streams monitored</span></div>
          <div><strong>77</strong><span>categories modeled</span></div>
          <div><strong>~80%</strong><span>pipeline time reduced</span></div>
          <div><strong>14</strong><span>bot commands</span></div>
        </div>
      </section>

      <section className="fieldwork shell">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow"><span /> Field-tested engineering</p>
            <h2>The real problem is<br />often upstream.</h2>
          </div>
          <p>
            Across pathology and enterprise automation, the biggest gains came
            from correcting data and system boundaries—not adding model complexity.
          </p>
        </div>
        <div className="field-grid">
          <article className="field-card blue-card">
            <span className="field-number">A</span>
            <p className="field-role">Computational pathology · Westlake University</p>
            <h3>Found the dataset failure hidden behind the model score.</h3>
            <p>
              Built a training and audit pipeline across four sources, identified
              conflicting annotation conventions, and ranked suspicious labels by
              model–label disagreement for targeted review.
            </p>
            <div className="mini-stats">
              <div><strong>~70k</strong><span>image tiles</span></div>
              <div><strong>8</strong><span>controlled ablations</span></div>
              <div><strong>0.967</strong><span>held-out Dice</span></div>
            </div>
          </article>
          <article className="field-card paper-card">
            <span className="field-number">B</span>
            <p className="field-role">Workflow automation · Universal Beijing Resort</p>
            <h3>Stopped editing the picture and reached the real document.</h3>
            <p>
              After DOM edits were silently rolled back by PowerPoint Online,
              traced the save path and used browser-level input to drive the
              application’s own edit pipeline, with post-write verification.
            </p>
            <div className="mini-stats">
              <div><strong>3×</strong><span>faster updates</span></div>
              <div><strong>18</strong><span>property tests</span></div>
              <div><strong>2,600+</strong><span>routes modeled</span></div>
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
