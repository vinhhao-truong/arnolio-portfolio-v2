"use client";

import About from "@/components/pages/home/About";
import Hero from "@/components/pages/home/Hero";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="mb-16 bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg')]">
        <Hero />
        <About />
      </div>
    </ParallaxProvider>
  );
}
