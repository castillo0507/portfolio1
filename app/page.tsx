import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import LearningSection from "@/components/LearningSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <LearningSection />
      <ContactSection />
    </main>
  );
}
