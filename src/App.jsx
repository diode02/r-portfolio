import React, { useEffect, useState } from "react";
import {
  HashRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { projects, experience, degrees, settings } from "./portfolio";
import portrait from "./assests/images/profile_photo.jpeg";
import "./redesign.css";

const email = "mwaqasilyas01@gmail.com";
const featuredNames = ["Alt Vault", "Due Dilly", "Newzjacker"];
const slug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-$/, "");
const summaries = {
  "Alt Vault":
    "Luxury commerce, live auctions, and the systems that bring them together.",
  "Due Dilly":
    "From sports cards to a connected marketplace, with AI at its core.",
  Newzjacker: "Connecting the news cycle with the people who tell its stories.",
};
const categories = (name) =>
  /vault|dilly|store/i.test(name)
    ? "Commerce"
    : /api|backend|printio|routines/i.test(name)
      ? "Backend"
      : "Platforms";
const projectDescriptions = {
  "Due Dilly Marketplace":
    "A marketplace for buying and selling sports cards, with seller stores and integrated Stripe payments. I worked across the frontend and backend to connect the buying and selling experience.",
  "Seller Dashboard Due Dilly":
    "A seller workspace for managing sports card listings, marketplace stores, and orders. Built to bring the operational side of the marketplace into one place.",
  "Backend of DueDilly":
    "Backend services for the Due Dilly ecosystem, covering authentication, authorization, validation, background jobs, Stripe transfers, and email delivery.",
  Newzjacker:
    "A platform for discovering trending news and finding journalist contact information. I worked across the frontend and backend, including the interface and Stripe webhooks.",
  Workzat:
    "A social platform focused on company culture. I worked with the team as a full stack developer to build the product across its frontend and backend.",
  "Pippa API Server":
    "An API service that retrieves users’ bank transaction details for auditing workflows, with authenticated access and backend integration.",
  "Store Backend":
    "A backend for a marketplace store, covering user flows, product and category management, and manager roles, with MySQL as the database.",
  Printio:
    "A web service that receives instructions through an API, processes them, and controls a local printer to produce labels in the required format.",
  "User Routines API":
    "A backend for managing user accounts and daily routines, supporting both public and private routines.",
  Foodlabs:
    "An integration built with serverless functions to retrieve job listings, process the data, and publish it to Webflow collections through its API.",
};
const work = projects.data.map((p) => ({
  ...p,
  description: projectDescriptions[p.name] || p.description,
  slug: slug(p.name),
  category: categories(p.name),
}));
function Arrow({ diagonal = false, ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      {diagonal ? (
        <path d="M5 19 19 5M5 5h14v14" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo?.({ top: 0, behavior: "instant" });
    document.title = `${pathname === "/" || pathname === "/home" ? "Muhammad Waqas — Software Engineer" : pathname.startsWith("/projects") ? "Selected Work — Muhammad Waqas" : `${pathname === "/education" ? "About" : pathname.slice(1)[0]?.toUpperCase() + pathname.slice(2)} — Muhammad Waqas`}`;
    if (typeof window.gtag === "function" && settings.googleTrackingID)
      window.gtag("config", settings.googleTrackingID, {
        page_path: pathname,
        page_location: window.location.href,
      });
  }, [pathname]);
  return null;
}
function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="site-header">
      <Link to="/home" className="wordmark" aria-label="Muhammad Waqas home">
        mw<span>.</span>
      </Link>
      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="main-nav"
        className={open ? "navigation open" : "navigation"}
        aria-label="Main navigation"
      >
        <NavLink to="/projects">Work</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/education">About</NavLink>
        <button
          className="theme-toggle"
          aria-label="Toggle color theme"
          onClick={toggleTheme}
        >
          {theme === "light" ? "◐" : "◑"}
        </button>
        <Link to="/contact" className="nav-contact">
          Let’s talk <Arrow diagonal />
        </Link>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer className="site-footer">
      <Link className="wordmark" to="/home">
        mw<span>.</span>
      </Link>
      <p>Thoughtfully built. Always evolving.</p>
      <div>
        <a href="https://github.com/diode02/" target="_blank" rel="noreferrer">
          GitHub <Arrow diagonal />
        </a>
        <a
          href="https://www.linkedin.com/in/diode02/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <Arrow diagonal />
        </a>
        <span>© {new Date().getFullYear()} Muhammad Waqas</span>
      </div>
    </footer>
  );
}
function Label({ children }) {
  return (
    <p className="eyebrow">
      <span className="tiny-cross">+</span> {children}
    </p>
  );
}
function SystemArtwork() {
  return (
    <div
      className="system-art"
      aria-label="An abstract illustration of connected software systems"
      role="img"
    >
      <div className="art-topline">
        <span>IDEA → SYSTEM → EXPERIENCE</span>
        <span>01—07</span>
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="system-module module-back">
        <span className="module-number">03 / EXPERIENCE</span>
        <div className="module-lines">
          <i />
          <i />
          <i />
        </div>
        <span className="module-bottom">
          Made for people <Arrow diagonal />
        </span>
      </div>
      <div className="system-module module-middle">
        <span className="module-number">02 / SYSTEMS</span>
        <div className="node-network">
          <b />
          <b />
          <b />
          <b />
          <b />
        </div>
        <span className="module-bottom">
          Built to connect <Arrow diagonal />
        </span>
      </div>
      <div className="system-module module-front">
        <span className="module-number">01 / FOUNDATION</span>
        <span className="code-symbol">&#123; / &#125;</span>
        <span className="module-bottom">
          Engineered with intent <Arrow diagonal />
        </span>
      </div>
      <div className="art-bottomline">
        <span className="art-status">
          <i /> FULL STACK. FULL PICTURE.
        </span>
        <span>MW / ENGINEERING</span>
      </div>
    </div>
  );
}
function ProjectArt({ name }) {
  if (!featuredNames.includes(name))
    return (
      <div className="project-art systems" aria-hidden="true">
        <div className="project-art-label">
          {categories(name).toUpperCase()} / PRODUCT ENGINEERING
        </div>
        <div className="system-preview">
          <span>{name}</span>
          <div className="system-flow">
            <i>INTERFACE</i>
            <b>→</b>
            <i>API</i>
            <b>→</b>
            <i>DATA</i>
          </div>
          <div className="preview-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="art-tag">
          CONNECTED BY DESIGN <Arrow diagonal />
        </div>
      </div>
    );
  const variant =
    name === "Alt Vault" ? "vault" : name === "Due Dilly" ? "dilly" : "news";
  return (
    <div className={`project-art ${variant}`} aria-hidden="true">
      <div className="project-art-label">
        {variant === "vault"
          ? "LIVE COMMERCE / CONNECTED SYSTEMS"
          : variant === "dilly"
            ? "COLLECTIBLES / COMPUTER VISION"
            : "DISCOVERY / MEDIA INTELLIGENCE"}
      </div>
      {variant === "vault" ? (
        <>
          <div className="watch-band" />
          <div className="watch">
            <div className="watch-face">
              <span>AV</span>
              <i />
              <b />
            </div>
          </div>
          <div className="art-tag">
            ALT VAULT <Arrow diagonal />
          </div>
          <span className="orbit-caption">COMMERCE IN MOTION</span>
        </>
      ) : variant === "dilly" ? (
        <>
          <div className="collectible card-back" />
          <div className="collectible card-front">
            <span>DUE DILLY</span>
            <div className="card-ball">✳</div>
            <small>THE NEXT CHAPTER OF COLLECTING</small>
          </div>
          <div className="vision-corner corner-a" />
          <div className="vision-corner corner-b" />
          <div className="art-tag">
            VISION → VALUE <Arrow diagonal />
          </div>
        </>
      ) : (
        <>
          <div className="news-sheet">
            <span>
              newzjacker<span className="orange">.</span>
            </span>
            <hr />
            <div className="news-headline">
              Find the story.
              <br />
              Make the connection.
            </div>
            <div className="news-columns">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="art-tag">
            DISCOVER. CONNECT. <Arrow diagonal />
          </div>
        </>
      )}
    </div>
  );
}
function WorkCard({ project, index }) {
  return (
    <Link to={`/projects/${project.slug}`} className="work-card">
      <ProjectArt name={project.name} />
      <div className="work-card-meta">
        <span className="mono">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </span>
        <Arrow diagonal />
      </div>
      <h3>{project.name}</h3>
      <p>{summaries[project.name] || project.description}</p>
      <div className="tags">
        {project.languages.slice(0, 3).map((t) => (
          <span key={t.name === "Ant Desgin" ? "Ant Design" : t.name}>
            {t.name === "Ant Desgin" ? "Ant Design" : t.name}
          </span>
        ))}
      </div>
    </Link>
  );
}
function ContactBanner() {
  return (
    <section className="contact-banner">
      <div>
        <Label>THE NEXT CHAPTER</Label>
        <h2>
          Something in mind?
          <br />
          Let’s build it right.
        </h2>
        <p>
          A senior engineer for your team. A technical partner for your next
          product.
        </p>
      </div>
      <Link className="circle-link" to="/contact" aria-label="Get in touch">
        <Arrow diagonal width="38" height="38" />
      </Link>
    </section>
  );
}
function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Label>MUHAMMAD WAQAS / SOFTWARE ENGINEER</Label>
          <h1>
            Good ideas.
            <br />
            Built to <span className="serif-word">last.</span>
          </h1>
          <p className="hero-description">
            I turn complex ideas into considered software.
            <br className="desktop-break" /> Seven years of building products,
            connecting systems,
            <br className="desktop-break" /> and taking ownership from the first
            line to production.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="button primary">
              Explore my work <Arrow diagonal />
            </Link>
            <Link to="/contact" className="text-link">
              Let’s talk <Arrow />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="small-portrait">
              <img src={portrait} alt="" />
            </span>
            <span>
              Software Engineer at RB Global.
              <br />
              <strong>Checkout, payments & integrations.</strong>
            </span>
          </div>
        </div>
        <SystemArtwork />
      </section>
      <section className="credentials" aria-label="At a glance">
        <div>
          <strong>
            7<span> years</span>
          </strong>
          <p>Hands-on engineering experience</p>
        </div>
        <div>
          <strong>
            End <span>to</span> end
          </strong>
          <p>From product thinking to production</p>
        </div>
        <div>
          <strong>
            MSc<span> / IT</span>
          </strong>
          <p>University of Eastern Finland</p>
        </div>
      </section>
      <section className="selected-work section-space">
        <div className="section-heading">
          <div>
            <Label>A FEW THINGS I’VE HELPED BUILD</Label>
            <h2>
              Selected work<span className="orange">.</span>
            </h2>
          </div>
          <Link className="text-link" to="/projects">
            All projects <Arrow />
          </Link>
        </div>
        <div className="featured-grid">
          {featuredNames.map((name, index) => (
            <WorkCard
              key={name}
              project={work.find((p) => p.name === name)}
              index={index}
            />
          ))}
        </div>
      </section>
      <section className="approach section-space">
        <div>
          <Label>MORE THAN A TECH STACK</Label>
          <h2>
            The whole picture.
            <br />
            <span className="muted">From idea to delivery.</span>
          </h2>
          <Link to="/experience" className="text-link">
            My experience <Arrow />
          </Link>
        </div>
        <div className="approach-list">
          {[
            [
              "01",
              "Product-minded engineering",
              "Translate a business problem into a product that people can actually use. Keep the decisions clear, the scope honest, and the experience considered.",
            ],
            [
              "02",
              "Systems that work together",
              "Frontend, APIs, payments, real-time services, and cloud infrastructure. I connect the pieces and take responsibility for how they work as a whole.",
            ],
            [
              "03",
              "Ownership beyond delivery",
              "From planning and deployment to collaboration and mentoring. Good engineering continues after the first release.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span className="mono">{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="about-preview section-space">
        <div className="portrait-frame">
          <img src={portrait} alt="Muhammad Waqas" loading="lazy" />
          <span>THE PERSON BEHIND THE SYSTEMS</span>
        </div>
        <div>
          <Label>A LITTLE CONTEXT</Label>
          <h2>
            Curious by nature.
            <br />
            Practical by experience.
          </h2>
          <p>
            I’m Muhammad Waqas, a software engineer at RB Global / Ritchie Bros.
            My work includes auction checkout, digital payment collection, and
            shipping integrations, alongside experience in marketplaces and
            applied AI.
          </p>
          <p>
            Alongside product engineering, I completed my master’s in
            Information Technology in Finland, researching wildfire prediction
            with deep learning.
          </p>
          <Link to="/education" className="text-link">
            More about me <Arrow />
          </Link>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = work.filter((p) => filter === "All" || p.category === filter);
  return (
    <>
      <section className="page-intro">
        <Label>WORK / SELECTED PROJECTS</Label>
        <h1>
          Ideas into
          <br />
          <span className="serif-word">working things.</span>
        </h1>
        <p>
          Commerce, platforms, and the systems underneath.
          <br />A selection of products I’ve helped take from concept to
          production.
        </p>
      </section>
      <section className="work-section">
        <div className="filter-bar" aria-label="Filter projects">
          {["All", "Commerce", "Platforms", "Backend"].map((f) => (
            <button
              key={f}
              aria-pressed={filter === f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
              {f === "All" && <span>{work.length}</span>}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {visible.map((p, i) => (
            <WorkCard project={p} index={i} key={p.id} />
          ))}
        </div>
        <p className="project-note">
          Project illustrations are editorial interpretations, not product
          screenshots.
        </p>
      </section>
      <ContactBanner />
    </>
  );
}
function ProjectDetail() {
  const { projectSlug } = useParams();
  const p = work.find((p) => p.slug === projectSlug);
  if (!p)
    return (
      <section className="page-intro">
        <h1>Project not found.</h1>
        <Link to="/projects" className="text-link">
          Back to work <Arrow />
        </Link>
      </section>
    );
  return (
    <>
      <section className="page-intro detail-intro">
        <Link to="/projects" className="text-link back-link">
          ← All projects
        </Link>
        <Label>{p.category.toUpperCase()} / PROJECT OVERVIEW</Label>
        <h1>
          {p.name}
          <span className="orange">.</span>
        </h1>
        <p>
          {summaries[p.name] ||
            "A closer look at the product and the engineering behind it."}
        </p>
      </section>
      <div className="detail-art">
        <ProjectArt name={p.name} />
      </div>
      <section className="detail-body section-space">
        <div>
          <Label>THE PROJECT</Label>
          <h2>What went into it.</h2>
        </div>
        <div>
          <p className="detail-description">{p.description}</p>
          <h3>Tools & technologies</h3>
          <div className="tags">
            {p.languages.map((t) => (
              <span key={t.name === "Ant Desgin" ? "Ant Design" : t.name}>
                {t.name === "Ant Desgin" ? "Ant Design" : t.name}
              </span>
            ))}
          </div>
          {p.url && (
            <a
              className="text-link external-project"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              Visit project <Arrow diagonal />
            </a>
          )}
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
function Experience() {
  return (
    <>
      <section className="page-intro">
        <Label>EXPERIENCE / 7 YEARS OF BUILDING</Label>
        <h1>
          Hands-on craft.
          <br />
          <span className="serif-word">Bigger-picture thinking.</span>
        </h1>
        <p>
          Building across the stack. Growing with the product.
          <br />
          Taking responsibility for what comes next.
        </p>
      </section>
      <section className="career-list">
        {experience.sections[0].experiences.map((job, i) => (
          <article className="career-row" key={job.company}>
            <span className="mono">0{i + 1}</span>
            <div>
              <h2>{job.company.trim()}</h2>
              <p className="career-location">{job.location}</p>
              {job.duration && <p className="career-tenure">{job.duration}</p>}
            </div>
            <div>
              <h3>{job.title.replace("Assosiate", "Associate")}</h3>
              <p>{job.description}</p>
              {job.highlights && (
                <ul className="career-highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>
      <section className="recognition" aria-label="Professional recognition">
        <div>
          <Label>RECOGNITION / JANUARY 2026</Label>
          <h2>Power of Performance.</h2>
        </div>
        <div>
          <p className="recognition-company">RB Global / Ritchie Bros.</p>
          <p>
            Recognized by senior leadership for contributions to business impact
            and customer satisfaction.
          </p>
        </div>
      </section>
      <section className="expertise section-space">
        <Label>WHERE I DO MY BEST WORK</Label>
        <h2>
          Across the stack.
          <br />
          Close to the product.
        </h2>
        <div className="expertise-grid">
          {[
            ["Product interfaces", "React · Next.js · TypeScript"],
            ["Backend & integrations", "Node.js · NestJS · APIs · Payments"],
            [
              "Connected experiences",
              "WebSockets · LiveKit · Real-time systems",
            ],
            ["Data & infrastructure", "PostgreSQL · MongoDB · AWS · Docker"],
          ].map(([t, d]) => (
            <article key={t}>
              <Arrow diagonal />
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
function About() {
  return (
    <>
      <section className="about-page page-intro">
        <div>
          <Label>ABOUT / MUHAMMAD WAQAS</Label>
          <h1>
            An engineer.
            <br />A builder.
            <br />
            <span className="serif-word">Always curious.</span>
          </h1>
          <p>
            Seven years of turning ideas into software, with a belief that the
            best technical work starts by understanding the people and the
            problem.
          </p>
        </div>
        <div className="portrait-frame">
          <img src={portrait} alt="Muhammad Waqas" />
          <span>SOFTWARE ENGINEER / PRODUCT THINKER</span>
        </div>
      </section>
      <section className="detail-body section-space">
        <div>
          <Label>MY APPROACH</Label>
          <h2>
            Depth in the craft.
            <br />
            Breadth in the work.
          </h2>
        </div>
        <div>
          <p className="detail-description">
            I’m a software engineer with seven years of experience across
            technical design, full stack development, integrations, and
            production support. At RB Global / Ritchie Bros., my work has
            included checkout, digital payment collection for RB Auctions, and
            shipping services.
          </p>
          <p>
            Alongside hands-on delivery, I’ve taken on assigned technical lead
            responsibilities: contributing to architecture decisions,
            coordinating technical work, mentoring engineers, and improving
            testing and code-review practices. Earlier, I built marketplace
            applications and integrated computer vision for sports card grading
            at Due Dilly and Beckett Collectibles.
          </p>
          <p>
            Outside commercial products, my master’s research explored wildfire
            prediction with deep learning—bringing my interest in AI together
            with environmental challenges.
          </p>
        </div>
      </section>
      <section className="detail-body ai-practice section-space">
        <div>
          <Label>AI IN PRACTICE</Label>
          <h2>
            Useful tools.
            <br />
            Considered engineering.
          </h2>
        </div>
        <div>
          <h3>Applied experience</h3>
          <p>
            My AI work includes integrating computer vision into production
            products and researching wildfire prediction with deep learning. I
            also use AI-assisted development tools, including GitHub Copilot CLI
            and Kiro CLI, alongside technical design, automated testing, and
            code review.
          </p>
          <h3>Exploring next</h3>
          <p>
            I’m interested in AI agents and Model Context Protocol (MCP),
            especially how they can connect relevant context and tools to
            practical engineering workflows.
          </p>
        </div>
      </section>
      <section className="education-section section-space">
        <Label>EDUCATION</Label>
        <h2>Grounded in learning.</h2>
        {degrees.degrees.map((d) => (
          <article className="degree-row" key={d.title}>
            <span className="mono">{d.duration}</span>
            <div>
              <h3>{d.title}</h3>
              <p>{d.subtitle}</p>
              {d.title.includes("Eastern") && (
                <p className="muted">
                  Master’s thesis: wildfire prediction using deep learning.
                </p>
              )}
            </div>
            <a
              href={d.website_link}
              aria-label={`Visit ${d.title}`}
              target="_blank"
              rel="noreferrer"
            >
              <Arrow diagonal />
            </a>
          </article>
        ))}
      </section>
      <ContactBanner />
    </>
  );
}
function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(timer);
  }, [copied]);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <>
      <section className="contact-page page-intro">
        <Label>CONTACT / START A CONVERSATION</Label>
        <h1>
          The next good idea
          <br />
          starts with a<br />
          <span className="serif-word">conversation.</span>
        </h1>
        <p>
          Building a team? Bringing a product to life?
          <br />
          Let’s talk about the problem and what we could build together.
        </p>
        <div className="email-block">
          <a href={`mailto:${email}`}>
            {email} <Arrow diagonal />
          </a>
          <button onClick={copy} aria-label="Copy email address">
            {copied ? "Copied ✓" : "Copy email"}
          </button>
        </div>
        <p className="copy-status" role="status">
          {copied
            ? "Email address copied."
            : copyError
              ? "Please select the email address above to copy it."
              : ""}
        </p>
      </section>
      <section className="contact-options">
        <article>
          <span className="mono">01 / FOR TEAMS</span>
          <h2>
            A senior engineer.
            <br />A thoughtful teammate.
          </h2>
          <p>
            For roles that value technical depth, product thinking, and
            ownership across the stack.
          </p>
        </article>
        <article>
          <span className="mono">02 / FOR CLIENTS</span>
          <h2>
            A technical partner.
            <br />
            From idea to delivery.
          </h2>
          <p>
            For products that need clear engineering decisions, connected
            systems, and hands-on execution.
          </p>
        </article>
      </section>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/diode02/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <Arrow diagonal />
        </a>
        <a href="https://github.com/diode02/" target="_blank" rel="noreferrer">
          GitHub <Arrow diagonal />
        </a>
        <a href="https://medium.com/@diode02/" target="_blank" rel="noreferrer">
          Writing <Arrow diagonal />
        </a>
      </div>
    </>
  );
}
export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });
  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }
  return (
    <div className="portfolio" data-theme={theme}>
      <HashRouter>
        <RouteEffects />
        <a
          className="skip-link"
          href="#main-content"
          onClick={(event) => {
            event.preventDefault();
            const main = document.getElementById("main-content");
            main?.focus();
            main?.scrollIntoView?.();
          }}
        >
          Skip to content
        </a>
        <div className="site-shell">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <main id="main-content" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/projects/:projectSlug"
                element={<ProjectDetail />}
              />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="*"
                element={
                  <section className="page-intro">
                    <Label>404 / A SMALL DETOUR</Label>
                    <h1>
                      Nothing here.
                      <br />
                      Plenty ahead.
                    </h1>
                    <Link className="button primary" to="/home">
                      Back home <Arrow />
                    </Link>
                  </section>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}
