import type { Metadata } from "next";
import DetailPage from "../components/DetailPage";

export const metadata: Metadata = { 
  title: "Desktop Software", 
  description: "Cross-platform desktop applications for Windows, Mac, and Linux built with Electron." 
};

export default function DesktopPage() { 
  return (
    <DetailPage 
      code="desktop" 
      sw={{
        label: "Desktop Software", 
        title: "Programu za Windows, Mac na Linux.", 
        intro: "Tunatengeneza programu za kompyuta (Desktop Apps) zenye nguvu zinazofanya kazi vizuri kwenye mifumo yote mikuu (cross-platform) kwa kutumia Electron.",
        points: [
          { title: "Electron", text: "Teknolojia inayoendesha programu kubwa kama VS Code na Slack, tunaitumia kujenga desktop apps za kisasa kwako." },
          { title: "Nje ya Mtandao (Offline Support)", text: "Programu zetu zinaweza kufanya kazi hata bila mtandao wa intaneti (offline) na kusawazisha data mtandao ukirudi." },
          { title: "Utendaji Mkubwa", text: "Tunaboresha programu zetu ili ziweze kutumia vizuri rasilimali za kompyuta yako bila kuifanya iwe nzito." },
          { title: "Mfumo Mmoja, Popote", text: "Badala ya kujenga programu tatu tofauti, tunajenga mfumo mmoja unaofanya kazi kwenye Windows, macOS, na Linux." }
        ],
        processTitle: "Mchakato wa Kujenga Desktop App.", 
        process: [
          "Kuchanganua mahitaji na usanifu wa mfumo",
          "Kutengeneza programu (Development)",
          "Majaribio ya kiusalama na kiutendaji kwenye kila OS",
          "Kusambaza kwa watumiaji (Packaging & Distribution)"
        ], 
        ctaTitle: "Unahitaji Desktop Software?", 
        ctaText: "Tupo tayari kujenga programu itakayorahisisha shughuli za ofisi au biashara yako."
      }} 
      en={{
        label: "Desktop Software", 
        title: "Windows, Mac & Linux Apps.", 
        intro: "We engineer powerful, cross-platform desktop applications that run flawlessly on all major operating systems using Electron.",
        points: [
          { title: "Electron", text: "The technology powering major apps like VS Code and Slack is what we use to build your modern desktop software." },
          { title: "Offline Capabilities", text: "Our applications can run entirely offline and seamlessly sync data when a connection is restored." },
          { title: "High Performance", text: "We optimize our desktop apps to efficiently use system resources without slowing down your computer." },
          { title: "One Codebase, Everywhere", text: "Instead of building three separate apps, we build one robust application that works on Windows, macOS, and Linux." }
        ],
        processTitle: "Desktop App Development Process.", 
        process: [
          "Requirements analysis and architecture design",
          "Software Development",
          "Performance and security testing across all OS",
          "Packaging and distribution to users"
        ], 
        ctaTitle: "Need Custom Desktop Software?", 
        ctaText: "We are ready to build the software that streamlines your office or business operations."
      }} 
    />
  ); 
}
