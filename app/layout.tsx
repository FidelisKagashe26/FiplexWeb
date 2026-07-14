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
