const learningPaths = [
  {
    title: "Academic Excellence",
    description:
      "Structured learning for IGCSE, WAEC, A Level and university preparation.",
    icon: "01",
  },
  {
    title: "Professional Skills",
    description:
      "Develop practical skills in leadership, business, technology and communication.",
    icon: "02",
  },
  {
    title: "Creative Learning",
    description:
      "Explore art, design, photography, writing, music and digital creativity.",
    icon: "03",
  },
];

const statistics = [
  { value: "12K+", label: "Active learners" },
  { value: "800+", label: "Expert educators" },
  { value: "150+", label: "Premium courses" },
  { value: "96%", label: "Learner satisfaction" },
];

function CognitiaLogo() {
  return (
    <div className="brand">
      <svg
        className="brand-mark"
        viewBox="0 0 120 120"
        role="img"
        aria-label="Cognitia logo"
      >
        <defs>
          <linearGradient id="cognitia-purple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8c6aff" />
            <stop offset="48%" stopColor="#5e3bee" />
            <stop offset="100%" stopColor="#22164d" />
          </linearGradient>

          <linearGradient id="cognitia-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffc857" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        <path
          d="M91 24C80 14 65 9 50 12C27 16 11 35 11 59C11 85 31 106 57 108C72 109 86 104 96 94L80 78C74 84 66 87 58 87C42 87 31 75 31 59C31 44 42 32 57 32C65 32 73 35 79 41L91 24Z"
          fill="url(#cognitia-purple)"
        />

        <path
          d="M43 79C50 74 57 72 64 74V91C57 86 50 84 43 86V79Z"
          fill="white"
        />
        <path
          d="M65 74C72 72 79 74 86 79V86C79 84 72 86 65 91V74Z"
          fill="#efeaff"
        />

        <path
          d="M64 75V57"
          stroke="url(#cognitia-gold)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M64 62C55 60 51 54 52 47C60 47 65 52 64 62Z"
          fill="url(#cognitia-gold)"
        />
        <path
          d="M65 58C68 49 74 45 82 47C81 55 75 60 65 58Z"
          fill="url(#cognitia-gold)"
        />

        <path
          d="M37 31C48 22 61 20 75 25"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity=".88"
        />
        <circle cx="40" cy="30" r="4" fill="white" />
        <circle cx="57" cy="24" r="4" fill="white" />
        <circle cx="75" cy="27" r="4" fill="white" />
      </svg>

      <div>
        <span className="brand-name">Cognitia</span>
        <span className="brand-tagline">Learn Beyond Limits.</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-inner">
          <a className="logo-link" href="#" aria-label="Cognitia home">
            <CognitiaLogo />
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#learning">Learn</a>
            <a href="#educators">Educators</a>
            <a href="#schools">Schools</a>
            <a href="#about">About</a>
          </nav>

          <div className="nav-actions">
            <a className="text-link" href="#">
              Sign in
            </a>
            <a className="button button-small" href="#">
              Get started
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Intelligent learning for everyone
            </div>

            <h1>
              Learn with purpose.
              <span>Grow beyond limits.</span>
            </h1>

            <p className="hero-description">
              Cognitia connects learners, educators, schools and organisations
              through premium courses, expert tutoring and intelligent learning
              technology.
            </p>

            <div className="hero-actions">
              <a className="button" href="#learning">
                Start learning
                <span aria-hidden="true">→</span>
              </a>

              <a className="button button-secondary" href="#educators">
                Become an educator
              </a>
            </div>

            <div className="hero-note">
              <div className="avatar-stack" aria-hidden="true">
                <span>FK</span>
                <span>AO</span>
                <span>TM</span>
              </div>
              <p>
                Join an ambitious community of learners and trusted educators.
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Cognitia learning dashboard">
            <div className="dashboard-preview">
              <div className="preview-topbar">
                <div>
                  <span className="preview-label">Good evening, Femi</span>
                  <h2>Continue your learning journey</h2>
                </div>
                <div className="preview-avatar">FK</div>
              </div>

              <div className="progress-card">
                <div>
                  <span className="preview-label">Weekly progress</span>
                  <strong>78%</strong>
                </div>

                <div className="progress-ring">
                  <span>5/7</span>
                </div>
              </div>

              <div className="course-preview">
                <div className="course-art">
                  <span>C</span>
                </div>
                <div className="course-info">
                  <span className="preview-label">Continue learning</span>
                  <h3>Data Science Fundamentals</h3>
                  <div className="progress-track">
                    <span />
                  </div>
                </div>
              </div>

              <div className="ai-card">
                <div className="ai-icon">✦</div>
                <div>
                  <span className="preview-label">Cognitia AI</span>
                  <h3>Ready when you need help</h3>
                  <p>Ask questions, generate a quiz or create a study plan.</p>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-one">
              <span>Learning streak</span>
              <strong>12 days 🔥</strong>
            </div>

            <div className="floating-card floating-card-two">
              <span>Next session</span>
              <strong>Creative Thinking</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {statistics.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="learning">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">Learning designed around you</span>
              <h2>A clearer path from curiosity to achievement.</h2>
            </div>

            <p>
              Discover carefully structured learning experiences that help you
              build knowledge, practise skills and make measurable progress.
            </p>
          </div>

          <div className="path-grid">
            {learningPaths.map((path) => (
              <article className="path-card" key={path.title}>
                <div className="path-number">{path.icon}</div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <a href="#">
                  Explore pathway <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section" id="educators">
        <div className="container ai-layout">
          <div className="ai-copy">
            <span className="section-label light-label">
              Learning intelligence
            </span>

            <h2>Your intelligent companion for learning and teaching.</h2>

            <p>
              Cognitia AI helps learners understand difficult concepts and
              supports educators with lesson planning, assessment and
              personalised feedback.
            </p>

            <a className="button button-light" href="#">
              Discover Cognitia AI
            </a>
          </div>

          <div className="ai-demo">
            <div className="ai-demo-header">
              <span className="ai-icon">✦</span>
              <div>
                <strong>Cognitia AI</strong>
                <span>Learning assistant</span>
              </div>
            </div>

            <div className="chat-message user-message">
              Explain photosynthesis in a way a Year 7 learner can understand.
            </div>

            <div className="chat-message assistant-message">
              Think of a plant as a tiny solar-powered kitchen. It uses sunlight,
              water and carbon dioxide to prepare its own food and releases
              oxygen in the process.
            </div>

            <div className="prompt-box">
              <span>Ask Cognitia anything…</span>
              <button type="button" aria-label="Send message">
                ↑
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="schools">
        <div className="container callout">
          <div>
            <span className="section-label">Begin your journey</span>
            <h2>Exceptional learning starts here.</h2>
            <p>
              Join Cognitia and experience a calmer, smarter and more connected
              way to learn.
            </p>
          </div>

          <a className="button" href="#">
            Create your account
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="site-footer" id="about">
        <div className="container footer-grid">
          <CognitiaLogo />

          <p>
            An intelligent learning ecosystem for learners, educators, schools
            and organisations.
          </p>

          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="container footer-bottom">
          © 2026 Cognitia Technologies. Built with purpose.
        </div>
      </footer>
    </main>
  );
}