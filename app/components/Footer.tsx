export default function Footer() {
  return (
    <footer>
      <a className="brand footer-brand" href="/">
        <img src="/Logo.svg" alt="Fiplex Logo" className="logo-img" />
      </a>
      <p>© {new Date().getFullYear()} Fiplex Company Limited · Dodoma, Tanzania. All rights reserved</p>
    </footer>
  );
}
