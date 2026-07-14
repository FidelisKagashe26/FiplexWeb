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
      sw={{
        label: "Kuhusu Fiplex", 
        title: "Wataalamu wa kutengeneza mifumo.", 
        intro: "Fiplex Company Limited ni kampuni ya teknolojia iliyojikita asilimia 100 kwenye kutengeneza programu, websites, na applications mbalimbali kwa kutumia teknolojia za kisasa.",
        points: [
          { title: "Tunatumia Teknolojia Sahihi", text: "Kutoka Node, Django, Golang, hadi React na Flutter, tunachagua teknolojia kulingana na mahitaji ya mradi wako." },
          { title: "Tunajenga kwa Viwango", text: "Usalama, utendaji wa haraka, na uwezo wa kukua (scalability) ni mambo tunayozingatia kwenye kila mstari wa code." },
          { title: "Tunafanya Kazi kwa Karibu", text: "Mawasiliano ya wazi na ushirikishwaji hufanya mteja aweze kuona hatua zote za ujenzi wa programu yake." },
          { title: "Tunaangalia Mbele", text: "Programu tunazotengeneza leo zimeandaliwa kuweza kubeba mabadiliko na ukuaji wa biashara yako kesho." }
        ],
        processTitle: "Kanuni zinazoongoza kazi yetu.", 
        process: [
          "Ubunifu unaomlenga mtumiaji (User-Centric Design)",
          "Uandishi wa Code safi na yenye viwango",
          "Majaribio ya kina kabla ya kukabidhi mradi",
          "Ushirikiano wa muda mrefu (Long-term Support)"
        ], 
        ctaTitle: "Tujenge hatua inayofuata pamoja.", 
        ctaText: "Fiplex inalenga kutoa suluhisho za kiteknolojia zenye thamani kwa biashara yako."
      }} 
      en={{
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
        ctaTitle: "Let’s build what comes next.", 
        ctaText: "Fiplex is dedicated to delivering valuable software solutions for your enterprise."
      }} 
    />
  ); 
}
