import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero.js";
import Technologies from "../components/sections/Technologies.js";
import Projects from "../components/sections/Projects.js";
import ContactButtons from "@/components/specificUI/ContactButtons";
import About from "../components/sections/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center px-3">
        <div className={`${inter.className} w-11/12`}>
          <Hero />
          <Technologies />
          <Projects />
         <About />
        </div>
      </div>
    </>
  );
}
