"use client";

import { useMemo, useState } from "react";

type Profile = {
  id: string;
  name: string;
  initials: string;
  experience: string;
  role: string;
  fit: string;
  avatarClass: string;
  meta: string;
  detail: string;
  skills: string[];
  dependencies: string;
  summary: string;
  portfolio?: string;
};

const profiles: Profile[] = [
  {
    id: "amit",
    name: "Amit Kumar",
    initials: "AK",
    experience: "5.5+",
    role: "Team Lead · Full Stack",
    fit: "Lead / full-stack delivery",
    avatarClass: "avatar-amit",
    meta: "5.5+ years · React, Node.js, React Native",
    detail: "Web · Mobile · Desktop · Cloud",
    skills: ["React", "Node.js", "Next.js", "PostgreSQL", "SQL", "Vercel", "Neon", "Supabase", "AWS S3", "AWS Knowledge", "CI/CD Pipeline Creation", "RESTful APIs", "Git", "GitHub", "HTML", "CSS", "JavaScript", "TypeScript", "React Native", "Electron.js", "Angular", "JavaScript / TypeScript Frameworks & Libraries", "System Design", "End-to-End Frontend & Backend Delivery", "Application Deployment"],
    dependencies: "Frontend, backend, databases, AWS hosting, Vercel, Supabase, CI/CD, APIs, GitHub, React Native, Electron.js, Angular, and system design connect into one full-stack delivery profile.",
    summary: "Solution leadership, end-to-end frontend and backend delivery, React Native mobile apps for iOS and Android, cloud deployment, web-to-desktop applications with Electron.js, and production readiness.",
    portfolio: "https://www.theamitkumar.co.in/",
  },
  {
    id: "salman",
    name: "MD Salman",
    initials: "MS",
    experience: "5+",
    role: "Frontend Developer",
    fit: "Frontend systems / web applications",
    avatarClass: "avatar-salman",
    meta: "5+ years · React.js",
    detail: "UI systems · Responsive web",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Responsive UI Development", "Frontend System Architecture", "Git", "GitHub", "Web Application Development"],
    dependencies: "React.js is supported by JavaScript, TypeScript, HTML, CSS, responsive UI architecture, GitHub, and reusable frontend system practices.",
    summary: "Frontend system development with React.js, responsive interfaces, reusable UI foundations, and production-ready web application delivery.",
  },
  {
    id: "kajal",
    name: "Kajal Mahapatra",
    initials: "KM",
    experience: "7.2+",
    role: "Backend Expert",
    fit: "Backend / API platforms",
    avatarClass: "avatar-kajal",
    meta: "7.2+ years · Node.js, APIs",
    detail: "Microservices · Architecture",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Microservices Architecture", "MongoDB", "PostgreSQL", "MySQL", "Redis", "Sequelize", "AWS S3", "Grafana", "Kibana", "3scale API Management", "System Architecture", "System Scalability", "Technical Debt Management", "Laravel Filament", "Agile Delivery", "Product Discovery", "PRD & API Contract Writing", "Workflow Orchestration", "Sprint Planning", "Backlog Grooming", "Stakeholder Management", "Team Mentoring", "Technical Documentation", "GitHub", "HTML", "CSS", "JavaScript", "TypeScript"],
    dependencies: "Backend engineering is supported by API contracts, data stores, monitoring, cloud storage, architecture, technical documentation, and stakeholder planning.",
    summary: "Scalable backend services, API design, technical planning, stakeholder translation, monitoring, and Agile delivery.",
  },
  {
    id: "subham",
    name: "Subham Sahoo",
    initials: "SS",
    experience: "5.5+",
    role: "Full Stack Developer",
    fit: "Full-stack product builds",
    avatarClass: "avatar-subham",
    meta: "5.5+ years · React, React Native, Python",
    detail: "Next.js · Mobile apps · AI / LLM APIs",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Python", "FastAPI", "JavaScript", "TypeScript", "PostgreSQL", "MongoDB", "RESTful APIs", "AI / LLM APIs", "React Native", "Git", "GitHub", "HTML", "CSS", "System Design"],
    dependencies: "React and Node.js are complemented by Next.js, Python, FastAPI, databases, REST APIs, React Native, GitHub, and AI / LLM integration for end-to-end builds.",
    summary: "End-to-end product development across modern web interfaces, APIs, Python services, React Native mobile apps for iOS and Android, and intelligent workflows.",
  },
  {
    id: "gautam",
    name: "Gautam Kumar",
    initials: "GK",
    experience: "4+",
    role: "Full Stack Developer",
    fit: "Web products / automation",
    avatarClass: "avatar-gautam",
    meta: "4+ years · React, Next.js",
    detail: "Node.js · AI web scraping",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "JavaScript", "TypeScript", "MongoDB", "PostgreSQL", "AI Web Scraping", "Web Scraping", "RESTful APIs", "Git", "GitHub", "HTML", "CSS"],
    dependencies: "React and Next.js delivery connects with Node.js APIs, databases, TypeScript, GitHub, and web-scraping automation.",
    summary: "Full-stack web applications with strong fit for data extraction, automation, and AI-assisted workflows.",
  },
  {
    id: "rajat",
    name: "Rajat Mahapatra",
    initials: "RM",
    experience: "2+",
    role: "Full Stack Next.js",
    fit: "Focused product modules",
    avatarClass: "avatar-rajat",
    meta: "2+ years · Next.js, React, React Native",
    detail: "Mobile apps · Node.js · Vercel",
    skills: ["Next.js", "React.js", "Node.js", "Express.js", "JavaScript", "TypeScript", "PostgreSQL", "MongoDB", "RESTful APIs", "React Native", "Vercel", "Git", "GitHub", "HTML", "CSS"],
    dependencies: "Next.js delivery is supported by React, Node.js APIs, TypeScript, databases, React Native, GitHub, REST integration, and Vercel deployment.",
    summary: "Focused Next.js delivery for product interfaces, API-connected features, React Native mobile apps for iOS and Android, and Vercel deployments.",
  },
  {
    id: "sohail",
    name: "Sohail Amjad",
    initials: "SA",
    experience: "6+",
    role: "Full Stack Software Developer",
    fit: "Angular / enterprise frontend",
    avatarClass: "avatar-sohail",
    meta: "6+ years · Angular, Node.js",
    detail: "RxJS · Micro frontends",
    skills: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS / SCSS", "RxJS", "NgRx", "Angular Material", "PrimeNG", "Micro Frontend", "Module Federation", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "GitHub", "HTML", "CSS"],
    dependencies: "Angular delivery is supported by TypeScript, RxJS, NgRx, design systems, micro frontends, Module Federation, Node.js APIs, and GitHub.",
    summary: "Enterprise frontend delivery, Angular architecture, micro frontends, API integration, and growing backend capability.",
  },
  {
    id: "suraj",
    name: "Suraj Sharma",
    initials: "SS",
    experience: "6+",
    role: "ServiceNow ITAM Consultant",
    fit: "SAM / ITAM consulting",
    avatarClass: "avatar-suraj",
    meta: "6+ years · SAM Pro, ITAM",
    detail: "Licensing · Compliance · Discovery",
    skills: ["SAM Pro (Expert)", "AICT (Working -> Advanced)", "Asset Lifecycle Management (Advanced)", "Implementation & Migration (Advanced)", "License Management (Expert)", "License Optimization (Advanced)", "Software Compliance (Expert)", "Microsoft Licensing (Expert)", "Adobe Licensing (Expert)", "Atlassian / Oracle Licensing (Advanced)", "SaaS / FOSS Assessment (Advanced)", "SCCM / Intune (Advanced)", "Jamf / Defender / InfraSecure (Advanced)", "Administration & Configuration (Advanced)", "Stakeholder Management (Advanced)", "UAT / Process / Go-Live (Advanced)", "Dashboards & Reporting (Advanced)"],
    dependencies: "ServiceNow ITAM connects SAM Pro, licensing, discovery sources, asset lifecycle, compliance, migration, UAT, go-live, stakeholder consulting, and reporting.",
    summary: "ServiceNow ITAM and SAM delivery covering implementation, license management, compliance, discovery, asset lifecycle, stakeholder consulting, UAT, go-live, and reporting.",
  },
  {
    id: "swhetha",
    name: "Swhetha Talreja",
    initials: "ST",
    experience: "4+",
    role: "Project Management & Marketing",
    fit: "Planning / marketing support",
    avatarClass: "avatar-swhetha",
    meta: "4+ years · Planning, SEO",
    detail: "Stakeholders · Content · Social",
    skills: ["Project Planning", "Sprint Planning", "Backlog Grooming", "Risk Management", "Stakeholder Management", "Team Coordination", "Agile Delivery", "Digital Marketing", "Content Strategy", "SEO", "Social Media Marketing", "Marketing Analytics", "Presentation Skills"],
    dependencies: "Project management is supported by planning, risk management, stakeholder coordination, Agile ceremonies, communication, SEO, content, and marketing analytics.",
    summary: "Project coordination, communication, stakeholder alignment, and digital marketing support around delivery teams.",
  },
];

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>;
}

function DownloadIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 11l5 5 5-5M4 20h16" /></svg>;
}

function AppIcon({ type }: { type: "web" | "app" | "large" | "mobile" }) {
  if (type === "mobile") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M10 6h4M11 18h2" /></svg>;
  if (type === "large") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 7v5c0 4.5 3.1 7.5 8 9 4.9-1.5 8-4.5 8-9V7l-8-4Z" /><path d="m9 12 2 2 4-4" /></svg>;
  if (type === "app") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h4M7 16h7" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5V5.8a2 2 0 0 1 2-2h14v15.7H6a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h14" /><path d="M8 8h8M8 12h6" /></svg>;
}

export default function Home() {
  const [selected, setSelected] = useState<Profile | null>(null);
  const [query, setQuery] = useState("");
  const filteredProfiles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return profiles;
    return profiles.filter((profile) => `${profile.name} ${profile.role} ${profile.skills.join(" ")}`.toLowerCase().includes(normalizedQuery));
  }, [query]);

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="breadcrumb"><span>Workspace</span><b>/</b><strong>Organisation structure</strong></div>
        <div className="topbar-status"><span>Client-ready team profile</span><span className="topbar-avatar">A</span></div>
      </header>

      <section className="toolbar" id="top">
        <div><div className="eyebrow">People &amp; delivery</div><h1>Organisation structure</h1></div>
        <div className="directory-note"><span className="directory-dot" /> Team directory <b>9 people</b></div>
        <a className="download-button" href="/team_skill_matrix.xlsx" download="team_skill_matrix.xlsx" aria-label="Download workbook" title="Download workbook"><DownloadIcon /><span>Download workbook</span></a>
      </section>

      <section className="workspace" aria-label="Organisation chart">
        <aside className="sidebar">
          <label htmlFor="employee-search">Search by employee name</label>
          <div className="search-field"><SearchIcon /><input id="employee-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search team" /></div>
          {!query && <div className="roster"><strong>Team Lead</strong><button onClick={() => setSelected(profiles[0])}>Amit Kumar</button><strong>Engineering</strong>{profiles.slice(1, 6).map((profile) => <button key={profile.id} onClick={() => setSelected(profile)}>{profile.name}</button>)}<strong>Consulting &amp; Operations</strong>{profiles.slice(6).map((profile) => <button key={profile.id} onClick={() => setSelected(profile)}>{profile.name}</button>)}</div>}
        </aside>

        <div className="canvas">
          <div className="canvas-label">Employees <span>{filteredProfiles.length} shown</span></div>
          <div className="chart">
            {filteredProfiles.find((profile) => profile.id === "amit") && <button className="person-card person-lead" onClick={() => setSelected(profiles[0])}><div className="person-avatar avatar-amit">AK</div><div className="person-info"><div className="person-name">Amit Kumar</div><div className="person-role">Team Lead · Full Stack</div><div className="person-meta">5.5+ years · React, Node.js, React Native</div></div><span className="person-badge">Lead</span><span className="profile-hint">View profile -&gt;</span></button>}
            <div className="trunk" />
            <div className="branch" />
            <div className="person-grid">{filteredProfiles.filter((profile) => profile.id !== "amit").map((profile) => <button className="person-card" key={profile.id} onClick={() => setSelected(profile)}><div className={`person-avatar ${profile.avatarClass}`}>{profile.initials}</div><div className="person-info"><div className="person-name">{profile.name}</div><div className="person-role">{profile.role}</div><div className="person-meta">{profile.meta}</div></div><span className="person-detail">{profile.detail}</span><span className="profile-hint">View profile -&gt;</span></button>)}</div>
          </div>
        </div>
      </section>

      <section className="client-brief" aria-labelledby="client-brief-title">
        <div className="client-brief-heading"><div className="eyebrow">Our deliverables</div><h2 id="client-brief-title">Websites, web applications, and mobile apps.</h2><p>Explore our delivery capabilities and indicative planning ranges.</p></div>
        <div className="client-answers">
          <article><div className="answer-icon"><AppIcon type="web" /></div><h3>Small landing page</h3><strong>Approximately 1-2 weeks</strong><b className="price-range">₹25,000-₹60,000</b><p>Indicative draft estimate for responsive UI, forms, analytics, content integration, testing, and deployment.</p></article>
          <article><div className="answer-icon"><AppIcon type="app" /></div><h3>Small application</h3><strong>Approximately 4-5 weeks</strong><b className="price-range">₹1,50,000-₹3,50,000</b><p>Indicative draft estimate for a focused MVP with defined screens, API, database, testing, and deployment.</p></article>
          <article><div className="answer-icon"><AppIcon type="app" /></div><h3>Mid-sized application</h3><strong>Approximately 4-5 weeks</strong><b className="price-range">₹2,00,000-₹10,00,000</b><p>Indicative draft estimate for a focused application with defined screens, API, database, testing, and deployment.</p></article>
          <article><div className="answer-icon"><AppIcon type="large" /></div><h3>Large application</h3><strong>Based on requirements</strong><b className="price-range">Requirement-based estimate</b><p>Timeline and price depend on modules, integrations, security, migration, scale, dependencies, and milestones.</p></article>
            <div className="drawer-top"><div className={`person-avatar ${selected.avatarClass}`}>{selected.initials}</div><div><div className="eyebrow">{selected.id === "amit" ? "Team lead profile" : "Team member profile"}</div><h2 id="profile-name">{selected.name}</h2><p>{selected.role}</p>{selected.portfolio && <a className="profile-portfolio" href={selected.portfolio} target="_blank" rel="noreferrer">View portfolio -&gt;</a>}{selected.id === "amit" && <a className="profile-contact" href="https://wa.me/918550000499" target="_blank" rel="noreferrer">WhatsApp: +91 85500 00499 -&gt;</a>}</div></div><div className="drawer-stats"><span><b>{selected.experience}</b> experience</span><span>{selected.fit}</span></div><div className="drawer-section"><h3>Primary and dependent skills</h3><div className="profile-skills">{selected.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="drawer-section"><h3>How the skillset connects</h3><p>{selected.dependencies}</p></div><div className="drawer-section"><h3>Best fit for</h3><p>{selected.summary}</p></div></div></aside>}
          <article><div className="answer-icon"><AppIcon type="mobile" /></div><h3>Mobile application</h3><strong>iOS and Android delivery</strong><b className="price-range">₹2,00,000-₹5,00,000</b><p>Indicative draft estimate for a focused React Native app with shared product and API foundations.</p></article>
        </div>
      </section>

      <footer className="footer"><span>People &amp; delivery workspace</span><span>Updated 2026</span></footer>

      {selected && <aside className="profile-drawer is-open" aria-hidden="false"><button className="drawer-backdrop" aria-label="Close profile" onClick={() => setSelected(null)} /><div className="drawer-panel" role="dialog" aria-modal="true" aria-labelledby="profile-name"><button className="drawer-close" onClick={() => setSelected(null)} aria-label="Close profile">&times;</button><div className="drawer-top"><div className={`person-avatar ${selected.avatarClass}`}>{selected.initials}</div><div><div className="eyebrow">{selected.id === "amit" ? "Team lead profile" : "Team member profile"}</div><h2 id="profile-name">{selected.name}</h2><p>{selected.role}</p>{selected.portfolio && <a className="profile-portfolio" href={selected.portfolio} target="_blank" rel="noreferrer">View portfolio -&gt;</a>}</div></div><div className="drawer-stats"><span><b>{selected.experience}</b> experience</span><span>{selected.fit}</span></div><div className="drawer-section"><h3>Primary and dependent skills</h3><div className="profile-skills">{selected.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="drawer-section"><h3>How the skillset connects</h3><p>{selected.dependencies}</p></div><div className="drawer-section"><h3>Best fit for</h3><p>{selected.summary}</p></div></div></aside>}
    </main>
  );
}
