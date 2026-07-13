import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fiplex.co.tz"),
  title: { default: "Fiplex Company Limited | Industrial Technology & Software", template: "%s | Fiplex Company Limited" },
  description: "Industrial communication technology, systems integration and custom software development for modern enterprises in Tanzania and beyond.",
  keywords: ["industrial communication Tanzania", "software development Tanzania", "systems integration", "enterprise technology", "Fiplex Company Limited"],
  openGraph: { title: "Fiplex Company Limited", description: "Connecting industry and enterprise through resilient communication technology and modern software.", type: "website", locale: "en_TZ" },
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

import { AppProvider } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sw" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
