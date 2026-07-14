"use client";

import TechGrid from "./components/TechGrid";

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-copy">
          <div className="eyebrow"><span />Web &amp; App Experts.</div>
          <h1>We build software<br /><em>that drives results.</em></h1>
          <p>Fiplex Company Limited is a premier software development agency creating modern websites, mobile apps, and desktop applications using world-class technologies.</p>
          <div className="hero-actions">
            <a className="button primary" href="#solutions">Explore services<ArrowIcon /></a>
            <a className="button secondary" href="/contact">Talk to us</a>
          </div>
        </div>

        <div className="network-visual" aria-label="Connected network illustration">
          <div className="status-pill"><span />Code running</div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core-node"><img src="/Logo.svg" alt="Fiplex Logo" style={{ height: '110px', width: 'auto', marginBottom: '2px' }} /><small>CONNECTED CORE</small></div>
          <div className="satellite satellite-a"><span>01</span><b>Web</b></div>
          <div className="satellite satellite-b"><span>02</span><b>Mobile</b></div>
          <div className="satellite satellite-c"><span>03</span><b>Desktop</b></div>
          <div className="data-line line-a" /><div className="data-line line-b" /><div className="data-line line-c" />
        </div>
      </section>

      <TechGrid />

      <section className="solutions" id="solutions">
        <div className="section-heading">
          <div><span className="section-index">01</span><p>What we do</p></div>
          <h2>Modern engineering on every device.</h2>
        </div>
        <div className="solution-grid">
          <article className="solution-card">
            <div className="card-icon icon-1"><span>⌁</span></div>
            <span className="card-number">01</span>
            <h3>Web Development</h3>
            <p>We build fast, secure websites and web applications using React, Next.js, Django, Node, Golang, and Vue.</p>
            <a href="/web">Learn more<ArrowIcon /></a>
          </article>
          <article className="solution-card">
            <div className="card-icon icon-2"><span>⌘</span></div>
            <span className="card-number">02</span>
            <h3>Mobile Apps</h3>
            <p>We create high-performance Android and iOS mobile applications using React Native and Flutter.</p>
            <a href="/mobile">Learn more<ArrowIcon /></a>
          </article>
          <article className="solution-card">
            <div className="card-icon icon-3"><span>◇</span></div>
            <span className="card-number">03</span>
            <h3>Desktop Software</h3>
            <p>We engineer cross-platform desktop applications for Windows, Mac, and Linux using Electron and more.</p>
            <a href="/desktop">Learn more<ArrowIcon /></a>
          </article>
        </div>
      </section>
    </main>
  );
}
