import BackgroundWrapper from "@/components/common/BackgroundWrapper";
import About from "@/components/pages/home/About";
import Contact from "@/components/pages/home/Contact";
import Hero from "@/components/pages/home/Hero";
import Projects from "@/components/pages/home/Projects";
import axios from "axios";

export default async function Home() {
  const projectsRes = await axios.get(
    "https://arnolio-default-rtdb.asia-southeast1.firebasedatabase.app/project.json"
  );

  return (
    <div className="mb-16">
      <BackgroundWrapper
        darkBg="https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg"
        lightBg="https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1920&h=2881&dpr=1"
      >
        <Hero />
      </BackgroundWrapper>
      <About />
      <Projects projects={projectsRes.data} />
      <BackgroundWrapper
        lightBg="https://images.pexels.com/photos/14130837/pexels-photo-14130837.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
        darkBg="https://images.pexels.com/photos/14130837/pexels-photo-14130837.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
      ></BackgroundWrapper>
      <Contact />
    </div>
  );
}
