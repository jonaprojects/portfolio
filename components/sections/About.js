import React from "react";
import ContactButtons from "../specificUI/ContactButtons";

const About = (props) => {
  return (
    <section className="flex flex-col md:flex-row">
      <div name="content" className="max-w-3xl">
        <h2 className="text-4xl md:text-7xl font-bold mb-3">About Me</h2>
        <p className="text-slate-500 text-xl mb-6">
          My name is Jonathan Shavit, and I am a CS Student who loves developing
          websites, mobile apps and python applications . I am totally
          infatuated with the world of Computer Science. I love seeing
          sophisticated mathematical proofs unfold, but nothing can match
          designing software. I love playing chess and I'm a big fan of dogs.
        </p>
        <ContactButtons />
      </div>
    </section>
  );
};

export default About;
