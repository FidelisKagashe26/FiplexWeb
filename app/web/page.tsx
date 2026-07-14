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
      sw={{
        label: "Web Development", 
        title: "Websites na Web Apps za Kisasa.", 
        intro: "Tunatengeneza mifumo ya mtandao (web applications) inayofanya kazi kwa kasi, usalama, na ufanisi mkubwa kwa kutumia teknolojia zinazoongoza duniani kama React, Next.js, Django, na Node.",
        points: [
          { title: "React & Next.js", text: "Tunajenga user interfaces zenye mvuto na zinazofanya kazi haraka bila kuchelewa." },
          { title: "Django & Node", text: "Mifumo yetu ya nyuma (backend) inatengenezwa kuwa imara na salama kwa kutumia Python (Django) na JavaScript (Node/Express)." },
          { title: "Golang & Gin", text: "Kwa mifumo inayohitaji kuchakata data nyingi kwa wakati mmoja, tunatumia Golang kwa spidi ya hali ya juu." },
          { title: "Vue & Angular", text: "Tuna uwezo mpana wa kutumia frameworks mbalimbali kulingana na mahitaji ya mradi wako." }
        ],
        processTitle: "Jinsi tunavyotengeneza Web Apps.", 
        process: [
          "Kuelewa mahitaji na kuchora muundo (UI/UX)",
          "Kutengeneza Frontend & Backend",
          "Kufanya majaribio (Testing) ya usalama na kasi",
          "Kupandisha hewani (Deployment) na matengenezo"
        ], 
        ctaTitle: "Je, unahitaji Website au System?", 
        ctaText: "Wasiliana nasi leo tujadili jinsi tunavyoweza kubadilisha wazo lako kuwa mfumo kamili unaofanya kazi."
      }} 
      en={{
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
