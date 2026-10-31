import HUD from "@/components/HUD";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Floating bottom HUD bar — always visible */}
      <HUD />

      <main>
        {/* 00 — Hero */}
        <Hero />

        {/* 01 — Selected Work / Experience (projects) */}
        <Projects />

        {/* 02 — Skill Arsenal + Certifications */}
        <Skills />

        {/* 03 — Education */}
        <Education />

        {/* 04 — Initialization (contact CTA) */}
        <Contact />

        <Footer />
      </main>
    </>
  );
}
