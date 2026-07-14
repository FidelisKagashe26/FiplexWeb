import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fiplex.co.tz"),
  title: { default: "Fiplex Company Limited | Software & Website Development Agency", template: "%s | Fiplex Company Limited" },
  description: "We build modern websites, mobile apps, and desktop software using Node, Express, Django, React, Next.js, Golang, Gin, Spring Boot, Angular, Vue, React Native, Electron, and Flutter.",
  keywords: ["website development", "software development", "React", "Next.js", "Django", "Golang", "Flutter", "React Native", "Fiplex Company Limited", "Tanzania"],
  openGraph: { title: "Fiplex Company Limited", description: "Top-tier website, mobile, and desktop software development.", type: "website", locale: "en_TZ" },
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
};

import { AppProvider } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sw">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Fiplex" />
        <link rel="manifest" href="/manifest.json" />
      </head>
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
