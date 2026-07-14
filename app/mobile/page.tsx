import type { Metadata } from "next";
import DetailPage from "../components/DetailPage";

export const metadata: Metadata = { 
  title: "Mobile App Development", 
  description: "High-performance Android and iOS mobile applications built with React Native and Flutter." 
};

export default function MobilePage() { 
  return (
    <DetailPage 
      code="mobile" 
      sw={{
        label: "Mobile Apps", 
        title: "Apps za Android na iOS.", 
        intro: "Tunatengeneza mobile applications zinazofanya kazi kwenye simu za Android na iPhone kwa ubora na kasi ileile tukitumia React Native na Flutter.",
        points: [
          { title: "React Native", text: "Tunajenga apps zinazotumia asili ya simu (native feel) kwa kutumia mfumo huu unaoaminika na makampuni makubwa duniani." },
          { title: "Flutter", text: "Kwa muonekano wa kuvutia na uhuishaji (animations) mzuri, tunatumia Flutter kuhakikisha app yako inaonekana vizuri kwenye kila kioo." },
          { title: "Muunganisho (API Integration)", text: "Mobile apps zetu zinaunganishwa kwa urahisi na mifumo yako mingine kupitia APIs imara na salama." },
          { title: "Kasi na Ubora", text: "Tunahakikisha app inafunguka haraka, haili chaji sana, na inatoa uzoefu mzuri kwa mtumiaji." }
        ],
        processTitle: "Hatua zetu za kujenga Mobile App.", 
        process: [
          "Mchoro wa muonekano (Wireframes & Prototypes)",
          "Uandishi wa code (Development)",
          "Majaribio kwenye simu tofauti (Beta Testing)",
          "Kuweka app kwenye Play Store na App Store"
        ], 
        ctaTitle: "Je, una wazo la Mobile App?", 
        ctaText: "Wasiliana nasi leo tukusaidie kujenga app itakayowafikia wateja wako popote walipo."
      }} 
      en={{
        label: "Mobile Apps", 
        title: "Android & iOS Apps.", 
        intro: "We build high-performance mobile applications that work seamlessly on both Android and iPhones using React Native and Flutter.",
        points: [
          { title: "React Native", text: "We build apps with a true native feel using this trusted framework powering some of the world's biggest apps." },
          { title: "Flutter", text: "For stunning visuals and smooth animations, we use Flutter to ensure your app looks great on every screen." },
          { title: "API Integration", text: "Our mobile apps easily connect with your backend systems and third-party services through robust APIs." },
          { title: "Performance & Quality", text: "We ensure fast load times, optimized battery usage, and a premium user experience." }
        ],
        processTitle: "Our Mobile App process.", 
        process: [
          "UI/UX Design and Prototyping",
          "App Development",
          "Comprehensive Beta Testing on real devices",
          "Publishing to Google Play Store and Apple App Store"
        ], 
        ctaTitle: "Have a Mobile App idea?", 
        ctaText: "Get in touch today and let's build an app that reaches your customers wherever they are."
      }} 
    />
  ); 
}
