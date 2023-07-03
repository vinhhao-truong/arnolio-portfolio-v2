import About from "@/components/pages/home/About";
import Contact from "@/components/pages/home/Contact";
import Hero from "@/components/pages/home/Hero";
import Projects from "@/components/pages/home/Projects";
import axios from "axios";

async function getProjects() {
  const projectsRes = await axios.get(
    "https://arnolio-default-rtdb.asia-southeast1.firebasedatabase.app/project.json"
  );
  return projectsRes.data;
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="mb-16">
      <div className="bg-no-repeat bg-cover relative dark:bg-[url(https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg)] bg-[url(https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1920&h=2881&dpr=1)]">
        <Hero />
      </div>

      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
