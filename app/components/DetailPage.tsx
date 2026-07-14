"use client";

type DetailCopy = { label: string; title: string; intro: string; points: { title: string; text: string }[]; processTitle: string; process: string[]; ctaTitle: string; ctaText: string };
type Props = { copy: DetailCopy; code: string };

export default function DetailPage({ copy: t, code }: Props) {
  return (
    <main className="site-shell detail-shell">
      <section className="detail-hero">
        <div className="detail-code">{code.toUpperCase()} — {t.label}</div>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
        <a className="button primary" href="#capabilities">
          View capabilities<span>↓</span>
        </a>
        <div className="detail-grid-art" aria-hidden="true">
          <i /><i /><i /><i />
          <span>{code === "web" ? "01—WEB" : code === "mobile" ? "02—MOBILE" : code === "desktop" ? "03—DESKTOP" : "04—FIPLEX"}</span>
        </div>
      </section>
      
      <section className="detail-capabilities" id="capabilities">
        <div className="detail-section-label">
          <span>01</span><p>{t.label}</p>
        </div>
        <div className="detail-card-grid">
          {t.points.map((point, index) => (
            <article key={point.title}>
              <span>0{index + 1}</span>
              <h2>{point.title}</h2>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>
      
      <section className="process-section">
        <div>
          <span className="section-index">02</span>
          <h2>{t.processTitle}</h2>
        </div>
        <ol>
          {t.process.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>
      
      <section className="detail-cta">
        <span className="section-index">03</span>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>
        <a className="button primary" href="/contact">
          Talk to Fiplex<span>↗</span>
        </a>
      </section>
    </main>
  );
}
