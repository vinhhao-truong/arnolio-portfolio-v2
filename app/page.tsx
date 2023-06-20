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
    <div className="mb-16 ">
      <div
        style={{
          resize: "both",
        }}
        className="bg-[url('https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg')] bg-no-repeat bg-cover"
      >
        <Hero />
        <About />
      </div>
      <Projects projects={projectsRes.data} />
      <Contact />
    </div>
  );
}
