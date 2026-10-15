const sections = [
  {
    eyebrow: '01 / TRACK',
    title: 'Income & expenses',
    description: 'Keep business transactions organized and easy to review.',
  },
  {
    eyebrow: '02 / PLAN',
    title: 'Pricing calculator',
    description: 'Understand the costs behind your next price.',
  },
];

export default function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Ledger home">
          <span className="brand-mark" aria-hidden="true">
            L
          </span>
          <span>ledger</span>
        </a>
        <span className="topbar-note">A clearer view of your business</span>
      </header>

      <section className="welcome" aria-labelledby="welcome-title">
        <p className="eyebrow">YOUR BUSINESS, AT A GLANCE</p>
        <h1 id="welcome-title">
          Make room for
          <br />
          <span>the work you love.</span>
        </h1>
        <p className="welcome-copy">
          A simple home for the numbers behind your small business.
        </p>
      </section>

      <section className="section-grid" aria-label="Ledger features">
        {sections.map((section) => (
          <article className="feature-card" key={section.title}>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <span className="card-arrow" aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </section>

      <footer className="footer">
        <span>Built for the people behind the business.</span>
        <span className="footer-status">
          <span className="status-dot" aria-hidden="true" />
          Early preview
        </span>
      </footer>
    </main>
  );
}
