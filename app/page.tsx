"use client";

import { useAppContext } from "./providers";

const copy = {
  sw: {
    eyebrow: "Mifumo imara. Mawasiliano bila mipaka.",
    titleA: "Teknolojia inayounganisha",
    titleB: "viwanda na biashara.",
    intro:
      "Fiplex Company Limited huunganisha teknolojia za mawasiliano ya viwandani na programu za kisasa ili kujenga shughuli salama, zenye ufanisi na tayari kukua.",
    primary: "Chunguza suluhisho",
    secondary: "Zungumza nasi",
    signal: "Mfumo hai",
    nodeA: "Kiwanda",
    nodeB: "Cloud",
    nodeC: "Biashara",
    strip: ["Mawasiliano ya Viwandani", "Ujumuishaji wa Mifumo", "Programu Maalum", "Miundombinu ya Kidijitali"],
    solutionsEyebrow: "Uwezo wetu",
    solutionsTitle: "Daraja moja kati ya mashine, data na watu.",
    cards: [
      ["Mawasiliano ya viwandani", "Mitandao na mifumo inayowezesha vifaa, mashine na vituo vya udhibiti kuwasiliana kwa uhakika."],
      ["Programu za biashara", "Web, mobile na mifumo ya ndani inayotengenezwa kulingana na mchakato halisi wa biashara yako."],
      ["Ujumuishaji na cloud", "Tunaunganisha mifumo, API na data ili timu zipate taarifa sahihi na kufanya maamuzi kwa wakati."],
    ],
    learn: "Jifunze zaidi",
  },
  en: {
    eyebrow: "Resilient systems. Limitless communication.",
    titleA: "Technology connecting",
    titleB: "industry and enterprise.",
    intro:
      "Fiplex Company Limited brings industrial communication technology and modern software together to build secure, efficient operations ready to scale.",
    primary: "Explore solutions",
    secondary: "Talk to us",
    signal: "System online",
    nodeA: "Industry",
    nodeB: "Cloud",
    nodeC: "Enterprise",
    strip: ["Industrial Communications", "Systems Integration", "Custom Software", "Digital Infrastructure"],
    solutionsEyebrow: "What we do",
    solutionsTitle: "One bridge between machines, data and people.",
    cards: [
      ["Industrial communications", "Networks and systems that enable equipment, machines and control centres to communicate reliably."],
      ["Enterprise software", "Web, mobile and internal platforms designed around the real operating flow of your business."],
      ["Integration and cloud", "We connect systems, APIs and data so teams get the right information and act at the right time."],
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

      <div className="capability-strip" aria-label="Capabilities">
        {t.strip.map((item) => <span key={item}><i />{item}</span>)}
      </div>

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
