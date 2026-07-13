"use client";

import { useState } from "react";
import { useAppContext } from "../providers";

const copy = {
  sw: {
    nav: ["Mwanzo", "Teknolojia", "Programu", "Kuhusu", "Mawasiliano"],
  },
  en: {
    nav: ["Home", "Technology", "Software", "About", "Contact"],
  },
};

export default function Header() {
  const { language, setLanguage, dark, setDark, mounted } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  // If not mounted yet, render a default skeleton or basic header to prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="site-header">
        <a className="brand" href="/" aria-label="Fiplex Company Limited home">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>FIPLEX</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation"></nav>
        <div className="header-actions"></div>
      </header>
    );
  }

  const t = copy[language];
  const hrefs = ["/", "/technology", "/software", "/about", "/contact"];

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Fiplex Company Limited home">
        <span className="brand-mark"><i /><i /><i /></span>
        <span>FIPLEX</span>
      </a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {t.nav.map((item, index) => (
          <a key={item} href={hrefs[index]} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="language-switch"
          onClick={() => setLanguage(language === "sw" ? "en" : "sw")}
          aria-label="Change language"
        >
          <span className={language === "sw" ? "active" : ""}>SW</span>
          <b>/</b>
          <span className={language === "en" ? "active" : ""}>EN</span>
        </button>
        <button
          className="theme-switch"
          onClick={() => setDark(!dark)}
          aria-label={dark ? "Use light mode" : "Use dark mode"}
        >
          <span>{dark ? "☀" : "☾"}</span>
        </button>
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
