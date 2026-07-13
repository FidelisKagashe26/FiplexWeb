"use client";

import { useAppContext } from "../providers";

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

const copy = {
  sw: {
    title: "Mshirika wa teknolojia kwa hatua inayofuata",
    text: "Kuanzia wazo na usanifu hadi utekelezaji na maboresho endelevu, tunaleta teknolojia inayofanya kazi katika mazingira halisi.",
    contactBtn: "Anzisha mazungumzo",
    email: "info@fiplex.co.tz",
    location: "Dodoma, Tanzania",
  },
  en: {
    title: "Your technology partner for what comes next",
    text: "From discovery and architecture to delivery and continuous improvement, we build technology that works in real operating environments.",
    contactBtn: "Start a conversation",
    email: "info@fiplex.co.tz",
    location: "Dodoma, Tanzania",
  },
};

export default function ContactPage() {
  const { language } = useAppContext();
  const t = copy[language];

  return (
    <main className="site-shell">
      <section className="partner-section" id="contact" style={{ minHeight: '60vh', paddingTop: '10rem' }}>
        <div>
          <span className="section-index">02</span>
          <h2>{t.title}</h2>
        </div>
        <div>
          <p>{t.text}</p>
          <p style={{ margin: '2rem 0', opacity: 0.8 }}>
            <strong>Email:</strong> <a href={`mailto:${t.email}`}>{t.email}</a><br/>
            <strong>Location:</strong> {t.location}
          </p>
          <a className="button primary" href={`mailto:${t.email}`}>
            {t.contactBtn}<ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
