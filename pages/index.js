// React resources
import React, { useEffect, useLayoutEffect, useRef } from "react";

// Google fonts
import { Inter } from "next/font/google";

// Custom Components
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero.js";
import Technologies from "../components/sections/Technologies.js";
import Projects from "../components/sections/Projects.js";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

// GSAP - animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const home = useRef();
  const aboutRef = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.from(
        "#aboutContent",
        {
          scrollTrigger: {
            trigger: "#aboutContent",
            start: "top 50%",
            end: "top 100px",
            markers: false,
            toggleActions: "resume resume resume resume",
          },
          duration: 3,
          ease: "power2",
          opacity: 0,
          y: -50,
          x: -50,
        },
        home
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-center px-3">
        <div className={`${inter.className} w-11/12`}>
          <Hero />
          <Technologies />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
