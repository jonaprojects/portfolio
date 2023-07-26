import React, { forwardRef } from "react";
import ContactButtons from "../specificUI/ContactButtons";
import Image from "next/image";

const About = (props, ref) => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row md:justify-between md:items-center mt-11"
    >
      <div name="content" id="aboutContent" className="max-w-3xl flex-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-3">About Me</h2>
        <p id="aboutParagraph" className="text-slate-500 text-xl mb-6">
          My name is Jonathan Shavit, and I am a CS Student who loves developing
          websites, mobile apps and python applications . I am totally
          infatuated with the world of Computer Science. I love seeing
          sophisticated mathematical proofs unfold, but nothing can match
          designing software. I love playing chess and I'm a big fan of dogs.
        </p>
        <ContactButtons />
      </div>
      <div className="h-48 w-48 md:max-lg:ml-6 md:w-64 md:h-64 lg:h-96 lg:w-96 mt-9 relative flex-none">
        <Image
          src={"/portfolioImage.png"}
          alt="Cool animation of mine"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded-full" // just an example
          priority
        />
      </div>
    </section>
  );
};

export default About;
