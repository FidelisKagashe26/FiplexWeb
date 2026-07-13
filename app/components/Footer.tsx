"use client";

import { useAppContext } from "../providers";

export default function Footer() {
  const { language, mounted } = useAppContext();
  
  if (!mounted) {
    return (
      <footer>
        <a className="brand footer-brand" href="/">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>FIPLEX</span>
        </a>
        <p>© 2026 Fiplex Company Limited · Dodoma, Tanzania</p>
      </footer>
    );
  }

  const text = language === "sw" ? "Haki zote zimehifadhiwa" : "All rights reserved";

  return (
    <footer>
      <a className="brand footer-brand" href="/">
        <span className="brand-mark"><i /><i /><i /></span>
        <span>FIPLEX</span>
      </a>
      <p>© {new Date().getFullYear()} Fiplex Company Limited · Dodoma, Tanzania. {text}</p>
    </footer>
  );
}
