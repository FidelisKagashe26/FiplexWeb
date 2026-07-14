import type { Metadata } from "next";
import DetailPage from "../components/DetailPage";

export const metadata: Metadata = { 
  title: "Web Development", 
  description: "Custom websites and web applications built with React, Next.js, Django, Node, Vue, and Golang." 
};

export default function WebPage() { 
  return (
    <DetailPage 
      code="web" 
      copy={{
        label: "Web Development", 
        title: "Modern Websites & Web Apps.", 
        intro: "We build fast, secure, and highly efficient web applications using world-leading technologies like React, Next.js, Django, Node, and Golang.",
        points: [
          { title: "React & Next.js", text: "We build engaging user interfaces that are fast and highly responsive." },
          { title: "Django & Node", text: "Our backend systems are robust and secure, built with Python (Django) and JavaScript (Node/Express)." },
          { title: "Golang & Gin", text: "For highly concurrent and data-intensive applications, we leverage the raw speed of Golang." },
          { title: "Vue & Angular", text: "We have broad expertise across various frontend frameworks to match your project needs." }
        ],
        processTitle: "How we build Web Apps.", 
        process: [
          "Understanding requirements & UI/UX design",
          "Frontend & Backend development",
          "Testing for security, speed, and reliability",
          "Deployment and ongoing maintenance"
        ], 
        ctaTitle: "Need a Website or Web System?", 
        ctaText: "Contact us today to discuss how we can turn your idea into a fully functional web application."
      }} 
    />
  ); 
}
