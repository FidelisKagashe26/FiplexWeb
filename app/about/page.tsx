import type { Metadata } from "next";
import DetailPage from "../components/DetailPage";
export const metadata: Metadata = { 
  title: "About Us", 
  description: "Learn how Fiplex Company Limited delivers top-tier software, web, mobile, and desktop applications." 
};
export default function AboutPage() { 
  return (
    <DetailPage 
      code="about" 
      copy={{
        label: "About Fiplex", 
        title: "Software Engineering Experts.", 
        intro: "Fiplex Company Limited is a technology company 100% focused on software development, building modern websites, mobile apps, and desktop applications.",
        points: [
          { title: "We Use the Right Tech", text: "From Node, Django, and Golang to React and Flutter, we choose the best stack for your specific project needs." },
          { title: "We Build to Standards", text: "Security, high performance, and scalability are built into every line of code we write." },
          { title: "We Work Closely", text: "Clear communication and regular reviews make our clients a core part of the development process." },
          { title: "We Look Ahead", text: "The software we build today is designed to handle the changes and growth of your business tomorrow." }
        ],
        processTitle: "Principles that guide our work.", 
        process: [
          "User-Centric Design",
          "Clean, standard-compliant coding",
          "Rigorous testing before delivery",
          "Long-term support and collaboration"
        ], 
        ctaTitle: "Let's build what comes next.", 
        ctaText: "Fiplex is dedicated to delivering valuable software solutions for your enterprise."
      }} 
    />
  ); 
}
