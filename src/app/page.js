import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Skills from "./components/Skills";
import Career from "./components/Career";
require('dotenv').config({ path: '.env.local' });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-10">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <Skills />
        <Career />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
