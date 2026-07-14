"use client";

import { useState } from "react";

const nav = ["Home", "Web", "Mobile", "Desktop", "About", "Contact"];
const hrefs = ["/", "/web", "/mobile", "/desktop", "/about", "/contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Fiplex Company Limited home">
        <span className="brand-mark"><i /><i /><i /></span>
        <span>FIPLEX</span>
      </a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {nav.map((item, index) => (
          <a key={item} href={hrefs[index]} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
        >
          {menuOpen ? "×" : "≡"}
        </button>
      </div>
    </header>
  );
}
