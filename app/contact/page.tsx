import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Fiplex Company Limited to discuss your software project.",
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

const copy = {
  title: "Your technology partner for what comes next",
  text: "From discovery and architecture to delivery and continuous improvement, we build technology that works in real operating environments.",
  contactBtn: "Start a conversation",
  email: "info@fiplex.co.tz",
  location: "Dodoma, Tanzania",
};

export default function ContactPage() {
  return (
    <main className="site-shell">
      <section className="partner-section" id="contact" style={{ minHeight: '60vh', paddingTop: '10rem' }}>
        <div>
          <span className="section-index">02</span>
          <h2>{copy.title}</h2>
        </div>
        <div>
          <p>{copy.text}</p>
          <p style={{ margin: '2rem 0', opacity: 0.8 }}>
            <strong>Email:</strong> <a href={`mailto:${copy.email}`}>{copy.email}</a><br/>
            <strong>Location:</strong> {copy.location}
          </p>
          <a className="button primary" href={`mailto:${copy.email}`}>
            {copy.contactBtn}<ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
