"use client";

import { useState } from "react";

const projects = [
  { title: "Openhouse", type: "Brand identity · Digital", detail: "A new point of view for a better kind of property developer.", category: "Identity", className: "project-openhouse", shape: "openhouse-shape" },
  { title: "Morrow", type: "Campaign · Art direction", detail: "Making the everyday ritual of skincare feel worth showing up for.", category: "Campaigns", className: "project-morrow", shape: "morrow-shape" },
  { title: "Kindred", type: "Packaging · Strategy", detail: "A shelf-ready identity for food made closer to home.", category: "Identity", className: "project-kindred", shape: "kindred-shape" },
  { title: "Offcut", type: "Digital experience · E-commerce", detail: "An online store with less browsing and more finding.", category: "Digital", className: "project-offcut", shape: "offcut-shape" },
];

export function Portfolio() {
  const [filter, setFilter] = useState("All work");
  const filters = ["All work", "Identity", "Digital", "Campaigns"];
  const visibleProjects = filter === "All work" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="section work-section" id="work">
      <div className="shell">
        <div className="work-header"><div><p className="eyebrow"><span className="eyebrow-line" /> Selected work</p><h2>A few things<br /><span>we&apos;ve made.</span></h2></div><p className="work-note">Small team. Big ambition.<br />Always a little unexpected.</p></div>
        <div className="portfolio-toolbar" aria-label="Filter projects">
          <span className="toolbar-label">Browse by</span>
          <div className="filter-list">{filters.map((item) => <button className={filter === item ? "active" : ""} key={item} type="button" onClick={() => setFilter(item)}>{item}</button>)}</div>
        </div>
        <div className="portfolio-grid">
          {visibleProjects.map((project, index) => <a className={`project-card ${project.className}`} href="#contact" key={project.title}><div className={`project-art ${project.shape}`}><span className="project-index">0{index + 1}</span><span className="project-art-mark">✳</span><span className="project-view">Start a conversation ↗</span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p><p className="project-detail">{project.detail}</p></div><span className="project-arrow" aria-hidden="true">↗</span></div></a>)}
        </div>
        <a className="button button-outline" href="#contact">See all projects <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
