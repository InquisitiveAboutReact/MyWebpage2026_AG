import './App.css';
import profileImage from './images/raja-profile-2026.jpg';
import oracleHrBadge from './images/oracle-hr-2025.jpg';
import oracleAiBadge from './images/oracle-ai-2026.jpg';
import oraclePayrollBadge from './images/oracle-payroll-2026.jpg';

const Arrow = () => <span aria-hidden="true">↗</span>;

const certifications = [
  { image: oracleHrBadge, title: 'Oracle Global Human Resources Cloud', detail: '2025 Certified Implementation Professional', year: '2025' },
  { image: oracleAiBadge, title: 'Oracle Cloud Infrastructure', detail: 'Certified Enterprise AI Professional', year: '2026' },
  { image: oraclePayrollBadge, title: 'Oracle Payroll Cloud', detail: '2026 Certified Implementation Professional', year: '2026' },
];

function App() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top">RAJA<span>·</span>CHATTERJEE</a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="https://www.linkedin.com/in/rajachatterjee84/" target="_blank" rel="noreferrer">Let's connect <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><i></i> Available for strategic collaborations</div>
        <div className="hero-grid">
          <div>
            <p className="intro">Technical delivery leader<br />&amp; digital builder.</p>
            <h1>Making complex<br /><em>work beautifully</em><br />clear.</h1>
            <div className="hero-bottom">
              <p>I lead global teams through ambitious technology programs—combining delivery discipline, technical depth, and a practical curiosity for what’s next.</p>
              <a href="#work" className="round-link" aria-label="View selected work">↓</a>
            </div>
          </div>
          <aside className="portrait-card">
            <div className="portrait-glow"></div>
            <img src={profileImage} alt="Raja Chatterjee" />
            <div className="portrait-label"><span>Raja Chatterjee</span><span>India · Global</span></div>
          </aside>
        </div>
      </section>

      <section className="ticker" aria-label="Capabilities">
        <div>PROGRAM DELIVERY <b>✦</b> PRODUCT THINKING <b>✦</b> AI-ENABLED WORKFLOWS <b>✦</b> GLOBAL TEAMS <b>✦</b> PROGRAM DELIVERY <b>✦</b> PRODUCT THINKING <b>✦</b></div>
      </section>

      <section className="shell work-section" id="work">
        <div className="section-kicker"><span>01</span> Selected work</div>
        <div className="work-heading"><h2>Building momentum<br />where it matters.</h2><p>From technical strategy to dependable delivery, I turn moving parts into progress.</p></div>
        <div className="projects">
          <a className="project project-dark" href="https://github.com/InquisitiveAboutReact/SSR-NextJS-Heroku" target="_blank" rel="noreferrer">
            <div className="project-type">01 / Engineering</div>
            <div className="browser-art"><span></span><span></span><span></span><div>&lt;/&gt;<small>SSR</small></div></div>
            <div className="project-footer"><h3>Server-side rendering</h3><Arrow /></div>
            <p>Faster, resilient web experiences with Next.js, Express &amp; React.</p>
          </a>
          <a className="project project-lime" href="https://github.com/InquisitiveAboutReact/SSR-CSR-Express-Webpack-React" target="_blank" rel="noreferrer">
            <div className="project-type">02 / Architecture</div>
            <div className="system-art"><div className="node n1">Client</div><div className="node n2">Server</div><div className="node n3">Build</div><svg viewBox="0 0 350 160" preserveAspectRatio="none"><path d="M65 45 C120 45,110 80,170 80 S230 45,280 45 M170 80 L170 125" /></svg></div>
            <div className="project-footer"><h3>React, CSR &amp; SSR</h3><Arrow /></div>
            <p>A flexible rendering setup built from first principles with Webpack.</p>
          </a>
        </div>
      </section>

      <section className="ai-section" id="about">
        <div className="shell ai-grid">
          <div><div className="section-kicker light"><span>02</span> Intelligence, applied</div><h2>Human judgement,<br /><em>AI momentum.</em></h2><p className="ai-copy">I’m exploring thoughtful ways to make delivery teams sharper: clearer signals, less manual overhead, and more time for the decisions that need humans.</p><a className="text-link" href="https://www.salesforce.com/trailblazer/rajachatterjee2024" target="_blank" rel="noreferrer">Explore my learning path <Arrow /></a></div>
          <div className="ai-window">
            <div className="window-top"><span></span><span></span><span></span><label>RAJA / AI DELIVERY COPILOT</label></div>
            <div className="prompt"><b>Ask the delivery copilot</b><p>“Summarise this week’s program risks and suggest next actions.”</p><a className="generate-link" href="https://www.salesforce.com/trailblazer/rajachatterjee2024" target="_blank" rel="noreferrer">Explore my AI learning <Arrow /></a></div>
            <div className="response"><div className="spark">✦</div><div><b>Signal, not noise.</b><p>Three dependencies need attention. The team has a clear path to unblock each one before Friday.</p><div className="metrics"><span><strong>03</strong> priority signals</span><span><strong>86%</strong> delivery confidence</span></div></div></div>
          </div>
        </div>
      </section>

      <section className="shell certifications" id="certifications">
        <div className="section-kicker"><span>03</span> Verified learning</div>
        <div className="cert-heading"><h2>Credentials that<br /><em>keep evolving.</em></h2><p>Recent Oracle certifications that complement a foundation in enterprise delivery and cloud architecture.</p></div>
        <div className="cert-grid">
          {certifications.map((cert) => <article className="cert-card" key={cert.title}><div className="cert-image"><img src={cert.image} alt={cert.title} /></div><p className="cert-year">{cert.year}</p><h3>{cert.title}</h3><p>{cert.detail}</p></article>)}
        </div>
        <div className="legacy-certs"><span>Also certified in</span><div><p><b>AZ-300</b> Azure Architect Technologies <em>2020</em></p><p><b>ITIL</b> Foundation — IT Service Management <em>2015</em></p><p><b>LOT-959</b> IBM WebSphere Portal 6.1 Application Development <em>2011</em></p></div></div>
      </section>

      <section className="shell credentials">
        <div className="section-kicker"><span>04</span> The detail</div>
        <div className="cred-grid"><h2>Experience that<br />travels well.</h2><div className="cred-copy"><p>18+ years across technical delivery, program management, and full-stack development. I help distributed teams create the conditions for excellent work.</p><div className="tags"><span>Salesforce</span><span>React / Node</span><span>Cloud &amp; CI/CD</span><span>Agile delivery</span><span>Guidewire</span><span>Azure</span></div></div><div className="numbers"><div><strong>18+</strong><small>years in technology</small></div><div><strong>360°</strong><small>delivery ownership</small></div></div></div>
      </section>

      <footer id="contact">
        <div className="shell footer-inner"><div><div className="section-kicker light"><span>05</span> Start a conversation</div><h2>Have an idea<br />worth <em>moving?</em></h2></div><div className="footer-action"><p>Let’s make the complicated parts feel simple.</p><a href="mailto:rajachatterjee84@gmail.com" className="email">Say hello <Arrow /></a><div className="socials"><a href="https://www.linkedin.com/in/rajachatterjee84/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/InquisitiveAboutReact" target="_blank" rel="noreferrer">GitHub</a></div></div></div>
        <div className="shell footer-bottom"><span>© 2026 Raja Chatterjee</span><span>Designed for clarity.</span></div>
      </footer>
    </main>
  );
}

export default App;
