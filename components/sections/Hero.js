import React from "react";
import { TypeAnimation } from "react-type-animation";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import Image from "next/image";
import ContactButtons from "../specificUI/ContactButtons";

const TypedAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "CS Student",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Developer",
        1000,
        "Chess Player",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "1em",
        display: "inline-block",
      }}
      repeat={Infinity}
    />
  );
};

const Hero = (props) => {
  return (
    <section>
      <h1 className="font-bold text-5xl md:text-7xl mb-2 ">
        Hello 👋 <br />
        I'm Jonathan and I'm a
        <span className="text-indigo-600">
          {" "}
          <TypedAnimation />{" "}
        </span>
      </h1>
      <p className="text-slate-500 text-lg md:text-xl mb-5">
        I am not like everyone else. I will make sure to take your expectations
        and exceed them by a mile.
      </p>
      <ContactButtons />
    </section>
  );
};

export default Hero;
