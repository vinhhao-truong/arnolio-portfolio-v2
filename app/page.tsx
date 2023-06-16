"use client";

import About from "@/components/pages/home/About";
import Contact from "@/components/pages/home/Contact";
import Hero from "@/components/pages/home/Hero";
import Projects from "@/components/pages/home/Projects";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="mb-16 bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg')]">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </ParallaxProvider>
  );
}
