import Bio from "@/components/Bio";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Recommendations from "@/components/Recommendations";
import FloatingCTA from "@/components/FloatingCTA";

import { generateMetadata } from "@/components/Metadata";
import { metadataConfig } from "@/constants/metadata";

export const metadata = generateMetadata(metadataConfig);

export default function HomePage() {
  return (
    <div className="relative h-full antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <FloatingCTA />
        <Hero />
        <Navbar />
        <Bio />
        <Skills />
        <WorkExperience />
        <Projects />
        <Recommendations />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}