const APP_URL = 'https://github.whenisdone.com';

/** The product views, mirrored from the app's own feature set. */
const FEATURES = [
  {
    title: 'Design grid',
    body: 'An editable grid for estimates, predecessors, assignees, priority, and dates. Computed dates recompute live as you type — click a title to light up its whole dependency chain.',
  },
  {
    title: 'Dependencies',
    body: 'A layered dependency graph. Click any node to edit its predecessors and assignees, or set a global start and end for the plan.',
  },
  {
    title: 'Gantt timeline',
    body: 'Estimate-vs-actual bars with dependency arrows. Drag dates inline, switch between Estimates, Actuals, and Combined, and click any bar to edit.',
  },
  {
    title: 'Critical path',
    body: 'Every item with its float; anything at or below zero is critical. Resource-aware — one person, one task at a time — not just dependency math.',
  },
  {
    title: 'Resource planning',
    body: "Each person's queue as a list or a horizontal Gantt. Drag to reprioritize, with a confirm prompt when a move would break a dependency.",
  },
  {
    title: 'Earned value',
    body: 'A planned-vs-actual S-curve plus BAC, SPI, CPI, EAC, and VAC — filterable by assignee. Click any metric for a plain-language explanation.',
  },
];

const STEPS = [
  {
    n: '1',
    title: 'Connect GitHub',
    body: 'Sign in with your GitHub account. WhenIsDone reads and writes through the GitHub API straight from your browser.',
  },
  {
    n: '2',
    title: 'Pick a Project',
    body: 'Choose any Projects v2 board. Missing planning fields are auto-provisioned on first use — one click to initialize.',
  },
  {
    n: '3',
    title: 'Design & schedule',
    body: 'Estimate, set dependencies, rebalance for resources, and watch the schedule, critical path, and earned value recompute live.',
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <img className="brand__logo" src="/icon.png" alt="" />
        <span className="brand__name">WhenIsDone</span>
      </a>
      <nav className="site-nav">
        <a href="#features">Features</a>
        <a href="#how">How it works</a>
        <a href="#engine">Engine</a>
        <a className="btn btn-primary" href={APP_URL}>
          Open the app
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <img className="hero__logo" src="/icon.png" alt="WhenIsDone" />
        <p className="eyebrow">Project design on GitHub Projects v2</p>
        <h1>Know when it&rsquo;s actually done.</h1>
        <p className="hero__lead">
          WhenIsDone turns a GitHub Projects board into a real schedule: dependency-aware dates, a
          Gantt timeline, critical path with float, resource leveling, and earned value &mdash; all
          computed live in your browser.
        </p>
        <div className="hero__actions">
          <a className="btn btn-primary btn-lg" href={APP_URL}>
            Connect with GitHub
          </a>
          <a className="btn btn-lg" href="#features">
            See what it does
          </a>
        </div>
        <p className="hero__note">
          GitHub is the source of truth. No project data is stored anywhere but your own Projects.
        </p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section" id="features">
      <div className="section__head">
        <h2>Six views, one source of truth</h2>
        <p className="section__sub">
          Every view reads and writes the same Projects v2 fields. Edit anywhere; everything
          recomputes everywhere.
        </p>
      </div>
      <div className="feature-grid">
        {FEATURES.map((f) => (
          <article className="feature-card" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section section--soft" id="how">
      <div className="section__head">
        <h2>From board to plan in three steps</h2>
      </div>
      <div className="steps">
        {STEPS.map((s) => (
          <div className="step" key={s.n}>
            <div className="step__num">{s.n}</div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Engine() {
  return (
    <section className="section" id="engine">
      <div className="engine">
        <div className="engine__copy">
          <p className="eyebrow">The engine</p>
          <h2>A pure scheduling engine that runs in the browser</h2>
          <p>
            No server crunches your plan. WhenIsDone ships a unit-tested TypeScript engine that takes
            a snapshot of your board and produces the schedule, critical path, and earned-value
            curve &mdash; instantly, as you edit.
          </p>
          <ul className="checklist">
            <li>CPM forward/backward pass for computed dates, float, and the critical path</li>
            <li>Resource leveling so one person isn&rsquo;t scheduled on two tasks at once</li>
            <li>Time-phased PV / EV / AC with SPI, CPI, EAC, and VAC</li>
            <li>Cycle detection and topological ordering of your dependencies</li>
          </ul>
        </div>
        <div className="engine__panel">
          <div className="metric-grid">
            <div className="metric">
              <span className="metric__label">SPI</span>
              <span className="metric__value">0.94</span>
            </div>
            <div className="metric">
              <span className="metric__label">CPI</span>
              <span className="metric__value">1.08</span>
            </div>
            <div className="metric">
              <span className="metric__label">Float</span>
              <span className="metric__value metric__value--crit">0d</span>
            </div>
            <div className="metric">
              <span className="metric__label">EAC</span>
              <span className="metric__value">142d</span>
            </div>
          </div>
          <p className="metric-grid__note">Earned-value metrics, recomputed on every edit.</p>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta__inner">
        <h2>Bring your GitHub board to life.</h2>
        <p>Connect a project and see the schedule, critical path, and earned value in seconds.</p>
        <a className="btn btn-primary btn-lg" href={APP_URL}>
          Connect with GitHub
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="brand">
          <img className="brand__logo" src="/icon.png" alt="" />
          <span className="brand__name">WhenIsDone</span>
        </div>
        <nav className="footer-nav">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href={APP_URL}>Open the app</a>
        </nav>
        <p className="footer-fine">
          &copy; {new Date().getFullYear()} WhenIsDone. Your project data lives in GitHub &mdash; not
          here.
        </p>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Engine />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
