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
      copy={{
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
