import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const githubUrl = "https://github.com/Stp155906";
const linkedinUrl = "https://www.linkedin.com/in/shantalia-perez/";
const nasaRepoUrl = "https://github.com/sea-surface-teleconnections";
const castellaPrototypeUrl = "https://castella-space.vercel.app/";
const castellaAppetizeUrl = "https://appetize.io/app/b_pktzuibmq6dv263m5ap7hoxywi?device=iphone14pro&osVersion=26.0&toolbar=true";
const email = "shantalia.IOSDEV@gmail.com";

const projects = [
  {
    title: "Castella",
    year: "2026",
    status: "iOS MVP",
    tone: "castella",
    summary:
      "A SwiftUI mobile product prototype for personalized astronomy and ephemeris-based insights, built around a market gap I noticed in tools that have rich celestial data but weaker onboarding, interaction design, and product structure.",
    tags: ["SwiftUI", "Firebase Auth", "Subscriptions", "Push Alerts", "Ephemeris Data"],
    link: castellaPrototypeUrl,
    linkLabel: "Open Castella web prototype",
    secondaryLink: castellaAppetizeUrl,
    secondaryLinkLabel: "Open interactive iOS demo",
    steps: [
      "I started from a market gap: many celestial-data products expose complex information, but do not always make the mobile experience clear, polished, or easy to personalize.",
      "I created an Appetize iOS demo so people can try the prototype in a browser without installing it.",
      "I mapped onboarding, account, birthday, premium, alert, and data-discovery flows before building the SwiftUI app structure.",
      "I connected Firebase auth/profile data, Qonversion subscriptions, push-alert preferences, and ephemeris-based timing data so the MVP can grow into a more complete product system.",
    ],
  },
  {
    title: "SignalMap AI",
    year: "2026",
    status: "AI Geospatial Dashboard",
    tone: "signalmap",
    summary:
      "An AI geospatial intelligence dashboard that turns NASA, USGS, and NOAA public data into regional hazard briefings for logistics, safety, insurance, local government, and humanitarian response use cases.",
    tags: ["React", "Leaflet", "NASA EONET", "NOAA", "USGS"],
    link: "https://signalmap-ai.vercel.app/",
    linkLabel: "Open live demo",
    steps: [
      "I started with the decision problem: people need regional hazard information that is easier to scan, compare, and act on.",
      "I built a live map layer with public event feeds, risk scoring, source-aware cards, and role-specific decision lenses.",
      "I integrated NASA EONET, USGS earthquake feeds, and NOAA/NWS alerts using React, Vite, Leaflet, and Vercel.",
      "I used AI-assisted development workflows to speed up architecture planning, implementation, and iteration.",
    ],
  },
  {
    title: "SafeApply",
    year: "2026",
    status: "Chrome Extension",
    tone: "safeapply",
    summary:
      "A free Chrome extension that scans visible job posting pages and creates a trust scorecard for suspicious or potentially fraudulent listings.",
    tags: ["Chrome Extension", "AI Safety", "JavaScript", "Vercel"],
    link: "https://safeapply-ai.vercel.app/",
    linkLabel: "Open live demo",
    secondaryLink: "https://github.com/Stp155906/safeapply",
    secondaryLinkLabel: "View GitHub repo",
    steps: [
      "I focused on a real safety problem: students and early-career applicants need help spotting risky job posts before sharing personal documents.",
      "I designed warnings around suspicious recruiter behavior, bank-detail requests, unpaid labor, resumes, and personal-document red flags.",
      "I built the front-end and extension workflow with modern web tools, then deployed the live project with Vercel.",
    ],
  },
  {
    title: "NASA JPL Data Visualization",
    year: "2022",
    status: "Software Engineering Internship",
    tone: "data",
    summary:
      "A NASA Jet Propulsion Laboratory internship with the Science Data Visualization Group, focused on sea surface teleconnections, coastal wind, cloud, climate, land, ocean, and anomaly data.",
    tags: ["Python", "xarray", "geopandas", "AWS", "Climate Data"],
    link: "https://github.com/sea-surface-teleconnections/jupyter-examples",
    linkLabel: "View NASA notebook repo",
    steps: [
      "I supported research on sea surface teleconnections and climate patterns as a NASA Fellowship software engineering intern.",
      "I developed Python notebook tutorials for accessing Earth science data through AWS and preprocessing large climate datasets.",
      "I built visualizations and animated representations to make complex environmental data clearer for research communication.",
      "I explored an iOS application concept for interactive climate data visualizations and software-tool guidance.",
    ],
  },
  {
    title: "ARCS Research Foundation",
    year: "2021",
    status: "Undergraduate Research",
    tone: "arcs",
    summary:
      "An Academic Autonomy Research Center for STEAHM research role in the NASA ARCS program, where I worked with judicial case data and machine-learning preparation before moving into NASA JPL climate data visualization.",
    tags: ["Python", "Pandas", "TensorFlow", "NER", "Research"],
    steps: [
      "I began with research data preparation: dynamically filtering more than 40,000 California judicial cases for Named Entity Recognition workflows.",
      "I used Python, Pandas, TensorFlow, and Google Colab to improve clarity in uneven entity distribution and case-data processing.",
      "That research foundation helped lead into my NASA JPL internship, where I shifted from legal data preparation into climate and Earth science visualization.",
    ],
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
    <section className="hero" aria-labelledby="hero-title">
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
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Build timeline</p>
        <h2 id="work-title">A timeline of shipped prototypes, AI tools, and research work.</h2>
        <p>
          This section follows the way I build: define the problem, prototype the interaction, connect the data or system,
          and make the result easy for someone else to understand or try.
        </p>
      </div>

      <div className="project-timeline">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="project-card timeline-card" data-reveal>
      <div className="timeline-marker" aria-hidden="true">{project.year}</div>
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
        <button
          className="build-toggle"
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span>{isOpen ? "Hide process" : "How I built it"}</span>
          <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
        </button>
        {isOpen && (
          <div className="build-caption">
            <ul className="build-steps">
              {project.steps.map((step, index) => (
                <li key={step}>
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{step}</p>
                    {index === 0 && project.link && (
                      <a className="step-link" href={project.link}>
                        {project.linkLabel} <span aria-hidden="true">→</span>
                      </a>
                    )}
                    {index === 1 && project.secondaryLink && (
                      <a className="step-link" href={project.secondaryLink}>
                        {project.secondaryLinkLabel} <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
          <span className="castella-orbit castella-orbit-one" />
          <span className="castella-orbit castella-orbit-two" />
          <img className="castella-app-icon" src="/assets/castella-app-icon.png" alt="Castella app icon" />
          <span className="castella-star castella-star-one" />
          <span className="castella-star castella-star-two" />
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
