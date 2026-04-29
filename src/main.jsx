import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const githubUrl = "https://github.com/Stp155906";
const linkedinUrl = "https://www.linkedin.com/in/shantalia-perez/";
const nasaRepoUrl = "https://github.com/sea-surface-teleconnections";
const email = "shantalia.IOSDEV@gmail.com";

const projects = [
  {
    title: "Castella",
    status: "iOS MVP",
    tone: "castella",
    summary:
      "A SwiftUI astrology app with Apple Sign-In, Firebase-backed profiles, premium subscriptions, onboarding, push alert preferences, ephemeris data, retrograde forecasts, numerology, and astrocartography tools.",
    tags: ["SwiftUI", "Firebase", "StoreKit"],
  },
  {
    title: "Veilbound: Sacred Trials",
    status: "Playable prototype",
    tone: "veilbound",
    summary:
      "A mythic game prototype built around sacred trials, realm shifting, candlelight, spirit pressure, and an underworld canoe passage.",
    tags: ["Game Design", "JavaScript", "Prototype"],
  },
  {
    title: "iOS Project Suite",
    status: "In development",
    tone: "ios",
    summary:
      "A growing set of SwiftUI app ideas focused on clean flows, restrained interfaces, and mobile-first product thinking.",
    tags: ["SwiftUI", "iOS", "UX"],
  },
  {
    title: "NASA Data Internship",
    status: "Experience",
    tone: "data",
    summary:
      "Data-focused internship experience in a research environment where accuracy, structure, and communication matter.",
    tags: ["Data", "Research", "NASA"],
    link: nasaRepoUrl,
    linkLabel: "View internship repo",
  },
];

function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--scroll", String(window.scrollY));
    };

    const handlePointer = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll("[data-reveal]").forEach((item) => observer.observe(item));
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointer, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <Header />
      <main id="top">
        <Hero />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="site-header" data-reveal>
      <a className="wordmark" href="#top" aria-label="Go to homepage">SP</a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-grid" aria-labelledby="hero-title">
      <div className="parallax-shape orb-one" aria-hidden="true" />
      <div className="parallax-shape orb-two" aria-hidden="true" />
      <div className="grid-plane" aria-hidden="true" />

      <div className="hero-copy" data-reveal>
        <div className="progress-badge" aria-label="Site status">
          <span aria-hidden="true" />
          Site in progress
        </div>
        <p className="eyebrow">Full Stack Developer · iOS · AI · Data</p>
        <h1 id="hero-title">Welcome to my portfolio.</h1>
        <p className="hero-text">
          I am a full stack developer building across iOS, AI systems, and data-driven applications. I bring together
          product design, front-end development, backend workflows, and real-world data to create intelligent, visually
          refined software.
        </p>
        <div className="actions">
          <a className="button primary" href={linkedinUrl}>LinkedIn</a>
          <a className="button ghost" href={githubUrl}>GitHub: Stp155906</a>
        </div>
      </div>

      <aside className="identity-card drift-card" data-reveal aria-label="Profile focus">
        <div className="portrait-placeholder" aria-hidden="true">
          <span />
        </div>
        <p className="card-kicker">Current focus</p>
        <ul className="focus-list">
          <li>Swift and SwiftUI iOS apps</li>
          <li>OpenClaw and AI workflow systems</li>
          <li>JSON data pipelines and automation</li>
        </ul>
      </aside>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Selected work</p>
        <h2 id="work-title">Projects with room to grow.</h2>
        <p>
          Unfinished projects can still communicate direction. These visual placeholders describe the intended features
          now, then can become screenshots, trailers, App Store links, or GitHub repos later.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`} data-reveal>
      <ProjectVisual tone={project.tone} />
      <div className="project-copy">
        <p className={`status ${project.tone}`}>{project.status}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tags" aria-label={`${project.title} tags`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.link && (
          <a className="project-link" href={project.link}>
            {project.linkLabel}
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectVisual({ tone }) {
  return (
    <div className={`project-visual ${tone}-visual`} aria-hidden="true">
      {tone === "castella" && (
        <>
          <span className="castella-phone" />
          <span className="castella-orbit castella-orbit-one" />
          <span className="castella-orbit castella-orbit-two" />
          <span className="castella-star castella-star-one" />
          <span className="castella-star castella-star-two" />
          <span className="castella-alert" />
        </>
      )}
      {tone === "veilbound" && (
        <>
          <span className="moon" />
          <span className="canoe" />
          <span className="wake" />
          <span className="glyph glyph-a" />
          <span className="glyph glyph-b" />
        </>
      )}
      {tone === "ios" && (
        <>
          <span className="phone-shell" />
          <span className="app-row row-one" />
          <span className="app-row row-two" />
          <span className="app-pill" />
        </>
      )}
      {tone === "data" && (
        <>
          <span className="planet" />
          <span className="orbit orbit-a" />
          <span className="orbit orbit-b" />
          <span className="data-line" />
        </>
      )}
    </div>
  );
}

function Experience() {
  const items = [
    ["01", "Full Stack Development", "Building across SwiftUI, front-end interfaces, backend workflows, automation, and structured JSON data systems."],
    ["02", "Design & Product", "Designing in Figma, shaping user flows, creating reusable UI patterns, and translating polished mockups into SwiftUI."],
    ["03", "NASA JPL Internship", "Former intern with Earth System Teleconnections experience focused on data visualization and communicating real-world data."],
  ];

  return (
    <section id="experience" className="split-section" aria-labelledby="experience-title">
      <div data-reveal>
        <p className="eyebrow">Experience</p>
        <h2 id="experience-title">Design-minded engineering across apps, AI, and data.</h2>
      </div>
      <div className="timeline" data-reveal>
        {items.map(([number, title, text]) => (
          <article key={title}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-section section-grid" aria-labelledby="about-title">
      <div className="about-panel" data-reveal>
        <p className="eyebrow">About</p>
        <h2 id="about-title">Design-forward systems, built end to end.</h2>
        <p>
          I approach development from both a design and engineering perspective: wireframing and prototyping in Figma,
          building reusable UI systems, and bringing interfaces to life with responsive layouts, animation, and production
          SwiftUI implementation.
        </p>
      </div>
      <div className="principles" data-reveal>
        <p>Presentation captions for work still in progress:</p>
        <ul>
          <li>I can ship prototypes and keep improving them.</li>
          <li>I think in systems, storytelling, and user journeys.</li>
          <li>I connect design decisions to real implementation.</li>
          <li>I care about how software feels in someone's hands.</li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title" data-reveal>
      <p className="eyebrow">Next</p>
      <h2 id="contact-title">Let us build something intelligent and useful.</h2>
      <p>
        I am especially interested in iOS products, AI-assisted workflows, data-driven applications, and thoughtful
        design systems.
      </p>
      <div className="actions contact-actions">
        <a className="button primary" href={githubUrl}>GitHub: Stp155906</a>
        <a className="button ghost" href={`mailto:${email}`}>{email}</a>
      </div>
    </section>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
