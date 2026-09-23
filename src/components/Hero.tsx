"use client";

import { useState } from "react";

const ArrowUpRight = () => <span aria-hidden="true">↗</span>;

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <section className="hero" id="top">
      <nav className={`nav shell ${menuOpen ? "menu-open" : ""}`} aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Northstar home">
          <span className="brand-mark">✳</span>
          <span>northstar<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links" id="main-navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight /></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /><b>{menuOpen ? "Close" : "Menu"}</b></button>
      </nav>

      <div className="hero-grid shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Brand and digital studio · New York / Remote</p>
          <h1>Good work<br /><em>deserves</em><br />attention.</h1>
          <p className="hero-intro">Northstar helps ambitious teams say what they mean, look the part, and move with intent.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore our work <ArrowUpRight /></a>
            <a className="text-link" href="#services">What we do <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract orange and pink geometric artwork" role="img">
          <div className="art-sun" />
          <div className="art-ring art-ring-one" />
          <div className="art-ring art-ring-two" />
          <div className="art-slash" />
          <div className="art-label">ideas<br />in orbit</div>
          <span className="art-star star-one">✳</span>
          <span className="art-star star-two">✳</span>
        </div>
      </div>
      <div className="hero-footer shell"><span>Scroll to explore</span><span className="scroll-line" /><span>01 / 04</span></div>
    </section>
  );
}
