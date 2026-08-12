import React, { useState, useEffect } from 'react';
import './App.css';
import profileImage from './images/raja-profile-2026.jpg';
import oracleHrBadge from './images/oracle-hr-2025.jpg';
import oracleAiBadge from './images/oracle-ai-2026.jpg';
import oraclePayrollBadge from './images/oracle-payroll-2026.jpg';
import CVModal from './components/CVManager/CVModal';
import RAGChatbot from './components/Chatbot/RAGChatbot';

const Arrow = () => <span aria-hidden="true">↗</span>;

const certifications = [
  { image: oracleHrBadge, title: 'Oracle Global Human Resources Cloud', detail: '2025 Certified Implementation Professional', year: '2025' },
  { image: oracleAiBadge, title: 'Oracle Cloud Infrastructure', detail: 'Certified Enterprise AI Professional', year: '2026' },
  { image: oraclePayrollBadge, title: 'Oracle Payroll Cloud', detail: '2026 Certified Implementation Professional', year: '2026' },
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className="app-root">
      {/* Navigation Header */}
      <header className="nav-header">
        <div className="shell nav-inner">
          <a className="brand" href="#top">
            RAJA<span>·</span>CHATTERJEE
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#work">Selected Work</a>
            <a href="#about">Intelligence & AI</a>
            <a href="#certifications">Certifications</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-controls">
            <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle Dark/Light Mode">
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button className="cv-cta-btn" onClick={() => setIsCVModalOpen(true)}>
              <span>📄</span> Download CV
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero shell" id="top">
        <div className="eyebrow">
          <span className="eyebrow-pulse"></span> Available for strategic collaborations
        </div>

        <div className="hero-grid">
          <div>
            <p className="intro-tag">Technical Delivery Leader & Digital Builder</p>
            <h1>
              Making complex<br />
              <em>work beautifully</em><br />
              clear.
            </h1>
            <p className="hero-description">
              I lead global teams through ambitious technology programs—combining 18+ years of delivery discipline, cloud architecture depth, and a practical curiosity for what’s next.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => setIsCVModalOpen(true)}>
                <span>📄</span> Download CV (PDF)
              </button>
              <a href="#work" className="btn-secondary">
                View Selected Work ↓
              </a>
              <a href="https://www.linkedin.com/in/rajachatterjee84/" target="_blank" rel="noreferrer" className="btn-secondary">
                Connect on LinkedIn <Arrow />
              </a>
            </div>
          </div>

          <aside className="portrait-card">
            <div className="portrait-glow"></div>
            <img src={profileImage} alt="Raja Chatterjee" />
            <div className="portrait-label">
              <span>Raja Chatterjee</span>
              <span>India · Global</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="ticker-bar" aria-label="Core Capabilities">
        <div className="ticker-track">
          <div className="ticker-item">PROGRAM DELIVERY <b>✦</b></div>
          <div className="ticker-item">PRODUCT THINKING <b>✦</b></div>
          <div className="ticker-item">AI-ENABLED WORKFLOWS <b>✦</b></div>
          <div className="ticker-item">GLOBAL TEAMS <b>✦</b></div>
          <div className="ticker-item">ENTERPRISE CLOUD ARCHITECTURE <b>✦</b></div>
          <div className="ticker-item">PROGRAM DELIVERY <b>✦</b></div>
          <div className="ticker-item">PRODUCT THINKING <b>✦</b></div>
          <div className="ticker-item">AI-ENABLED WORKFLOWS <b>✦</b></div>
          <div className="ticker-item">GLOBAL TEAMS <b>✦</b></div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="shell work-section" id="work">
        <div className="section-kicker"><span>01</span> Selected work</div>
        <div className="work-heading">
          <h2>Building momentum<br />where it matters.</h2>
          <p>From technical strategy to dependable delivery, I turn moving parts into progress.</p>
        </div>

        <div className="projects-grid">
          <a className="project-card" href="https://github.com/InquisitiveAboutReact/SSR-NextJS-Heroku" target="_blank" rel="noreferrer">
            <div className="project-type">01 / Engineering</div>
            <div className="project-visual">
              &lt;/&gt; SSR Next.js
            </div>
            <div className="project-footer">
              <h3>Server-Side Rendering</h3>
              <Arrow />
            </div>
            <p>Faster, resilient web experiences with Next.js, Express & React.</p>
          </a>

          <a className="project-card" href="https://github.com/InquisitiveAboutReact/SSR-CSR-Express-Webpack-React" target="_blank" rel="noreferrer">
            <div className="project-type">02 / Architecture</div>
            <div className="project-visual">
              [ Client ➔ Server ➔ Build ]
            </div>
            <div className="project-footer">
              <h3>React, CSR & SSR</h3>
              <Arrow />
            </div>
            <p>A flexible rendering setup built from first principles with Webpack.</p>
          </a>
        </div>
      </section>

      {/* Intelligence & AI Copilot Section */}
      <section className="ai-section" id="about">
        <div className="shell ai-grid">
          <div>
            <div className="section-kicker"><span>02</span> Intelligence, applied</div>
            <h2>Human judgement,<br /><em>AI momentum.</em></h2>
            <p className="ai-copy">
              I’m exploring thoughtful ways to make delivery teams sharper: clearer signals, less manual overhead, and more time for the decisions that need humans.
            </p>
            <a className="btn-secondary" href="https://www.salesforce.com/trailblazer/rajachatterjee2024" target="_blank" rel="noreferrer">
              Explore my AI learning path <Arrow />
            </a>
          </div>

          <div className="ai-window">
            <div className="window-top">
              <span></span><span></span><span></span>
              <label style={{ marginLeft: 'auto' }}>RAJA / AI DELIVERY COPILOT</label>
            </div>
            <div className="prompt-box">
              <b>Ask the delivery copilot</b>
              <p style={{ color: 'var(--text-muted)' }}>“Summarise this week’s program risks and suggest next actions.”</p>
            </div>
            <div className="response-box">
              <div className="spark-icon">✦</div>
              <div>
                <b style={{ color: 'var(--text-main)' }}>Signal, not noise.</b>
                <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>Three dependencies need attention. The team has a clear path to unblock each one before Friday.</p>
                <div className="metrics-row">
                  <span><strong>03</strong> priority signals</span>
                  <span><strong>86%</strong> delivery confidence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="shell certifications" id="certifications">
        <div className="section-kicker"><span>03</span> Verified learning</div>
        <div className="work-heading">
          <h2>Credentials that<br /><em>keep evolving.</em></h2>
          <p>Recent Oracle certifications that complement a foundation in enterprise delivery and cloud architecture.</p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <article className="cert-card" key={cert.title}>
              <div className="cert-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <span className="cert-year">{cert.year}</span>
              <h3>{cert.title}</h3>
              <p>{cert.detail}</p>
            </article>
          ))}
        </div>

        <div className="legacy-certs">
          <span>Also certified in:</span>
          <div className="legacy-list">
            <p><b>AZ-300</b> Azure Architect Technologies <em>2020</em></p>
            <p><b>ITIL</b> Foundation — Service Management <em>2015</em></p>
            <p><b>LOT-959</b> IBM WebSphere Portal 6.1 <em>2011</em></p>
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="shell experience" id="experience">
        <div className="section-kicker"><span>04</span> The detail</div>
        <div className="cred-grid">
          <div>
            <h2>Experience that<br />travels well.</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>
              18+ years across technical delivery, program management, and full-stack development. I help distributed teams create the conditions for excellent work.
            </p>
            <div className="tags-cloud">
              <span className="tag-pill">Salesforce</span>
              <span className="tag-pill">React / Node</span>
              <span className="tag-pill">Cloud & CI/CD</span>
              <span className="tag-pill">Agile delivery</span>
              <span className="tag-pill">Guidewire</span>
              <span className="tag-pill">Azure</span>
            </div>
          </div>

          <div className="numbers-col">
            <div className="number-item">
              <strong>18+</strong>
              <small>years in technology</small>
            </div>
            <div className="number-item">
              <strong>360°</strong>
              <small>delivery ownership</small>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="shell footer-inner">
          <div>
            <div className="section-kicker"><span>05</span> Start a conversation</div>
            <h2>Have an idea<br />worth <em>moving?</em></h2>
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)' }}>Let’s make the complicated parts feel simple.</p>
            <a href="mailto:rajachatterjee84@gmail.com" className="email-link">
              Say hello <Arrow />
            </a>
            <div className="socials-row">
              <a href="https://www.linkedin.com/in/rajachatterjee84/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/InquisitiveAboutReact" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="shell footer-bottom">
          <span>© 2026 Raja Chatterjee</span>
          <span>Designed for clarity & impact.</span>
        </div>
      </footer>

      {/* Modals & Floating RAG Copilot */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      <RAGChatbot />
    </main>
  );
}

export default App;
