import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import HeroSection from "../component/HeroSection";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  // Load particles engine
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative bg-[#0a0f1c]">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0a0f1c" },
          fullScreen: { enable: false }, // important: so it stays inside parent div
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#00ffcc" },
            links: { enable: true, color: "#00ffcc", distance: 150, opacity: 0.5 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.4 },
            size: { value: 3 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Your Sections */}
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}
