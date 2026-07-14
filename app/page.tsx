"use client";

import { useAppContext } from "./providers";
import TechGrid from "./components/TechGrid";

const copy = {
  sw: {
    eyebrow: "Wataalamu wa Web na Apps.",
    titleA: "Tunajenga Programu",
    titleB: "zinazoleta matokeo.",
    intro:
      "Fiplex Company Limited ni kampuni inayoongoza kwa kutengeneza websites, mobile apps, na desktop software za kisasa tukitumia teknolojia zinazoaminika duniani.",
    primary: "Chunguza huduma",
    secondary: "Zungumza nasi",
    signal: "Code ina-run",
    nodeA: "Web",
    nodeB: "Mobile",
    nodeC: "Desktop",
    strip: ["Node & Express", "Django", "React & Next.js", "Golang & Gin", "Spring Boot", "Angular & Vue", "React Native", "Flutter", "Electron"],
    solutionsEyebrow: "Tunachofanya",
    solutionsTitle: "Ubunifu wa kisasa kwenye kila kifaa.",
    cards: [
      ["Web Development", "Tunatengeneza websites na web applications zenye kasi na usalama kwa kutumia React, Next.js, Django, Node, Golang, na Vue."],
      ["Mobile Apps", "Tunajenga mobile apps za Android na iOS zinazofanya kazi vizuri na kwa haraka kwa kutumia React Native na Flutter."],
      ["Desktop Software", "Tunaandaa programu za Windows, Mac na Linux (Desktop Apps) zinazojitegemea kwa kutumia Electron na teknolojia nyinginezo."],
    ],
    learn: "Jifunze zaidi",
  },
  en: {
    eyebrow: "Web & App Experts.",
    titleA: "We build software",
    titleB: "that drives results.",
    intro:
      "Fiplex Company Limited is a premier software development agency creating modern websites, mobile apps, and desktop applications using world-class technologies.",
    primary: "Explore services",
    secondary: "Talk to us",
    signal: "Code running",
    nodeA: "Web",
    nodeB: "Mobile",
    nodeC: "Desktop",
    strip: ["Node & Express", "Django", "React & Next.js", "Golang & Gin", "Spring Boot", "Angular & Vue", "React Native", "Flutter", "Electron"],
    solutionsEyebrow: "What we do",
    solutionsTitle: "Modern engineering on every device.",
    cards: [
      ["Web Development", "We build fast, secure websites and web applications using React, Next.js, Django, Node, Golang, and Vue."],
      ["Mobile Apps", "We create high-performance Android and iOS mobile applications using React Native and Flutter."],
      ["Desktop Software", "We engineer cross-platform desktop applications for Windows, Mac, and Linux using Electron and more."],
    ],
    learn: "Learn more",
  },
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const { language } = useAppContext();
  const t = copy[language];

  return (
    <main className="site-shell">
      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-copy">
          <div className="eyebrow"><span />{t.eyebrow}</div>
          <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
          <p>{t.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#solutions">{t.primary}<ArrowIcon /></a>
            <a className="button secondary" href="/contact">{t.secondary}</a>
          </div>
        </div>

        <div className="network-visual" aria-label="Connected industrial network illustration">
          <div className="status-pill"><span />{t.signal}</div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core-node"><span className="brand-mark mini"><i /><i /><i /></span><b>FIPLEX</b><small>CONNECTED CORE</small></div>
          <div className="satellite satellite-a"><span>01</span><b>{t.nodeA}</b></div>
          <div className="satellite satellite-b"><span>02</span><b>{t.nodeB}</b></div>
          <div className="satellite satellite-c"><span>03</span><b>{t.nodeC}</b></div>
          <div className="data-line line-a" /><div className="data-line line-b" /><div className="data-line line-c" />
        </div>
      </section>

      <TechGrid />

      <section className="solutions" id="solutions">
        <div className="section-heading">
          <div><span className="section-index">01</span><p>{t.solutionsEyebrow}</p></div>
          <h2>{t.solutionsTitle}</h2>
        </div>
        <div className="solution-grid">
          {t.cards.map((card, index) => (
            <article className="solution-card" key={card[0]}>
              <div className={`card-icon icon-${index + 1}`}><span>{index === 0 ? "⌁" : index === 1 ? "⌘" : "◇"}</span></div>
              <span className="card-number">0{index + 1}</span>
              <h3>{card[0]}</h3><p>{card[1]}</p>
              <a href={index === 0 ? "/technology" : index === 1 ? "/software" : "/technology"}>{t.learn}<ArrowIcon /></a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
