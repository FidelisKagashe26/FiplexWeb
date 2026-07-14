export default function Footer() {
  return (
    <footer>
      <a className="brand footer-brand" href="/">
        <span className="brand-mark"><i /><i /><i /></span>
        <span>FIPLEX</span>
      </a>
      <p>© {new Date().getFullYear()} Fiplex Company Limited · Dodoma, Tanzania. All rights reserved</p>
    </footer>
  );
}
