import React from "react";
import { TypeAnimation } from "react-type-animation";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import Image from "next/image";
import ContactButtons from "../specificUI/ContactButtons";
import Cube from "../3D/Cube";
import Dodecahedron from "../3D/Dodecahedron";
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
      <div className="md:flex md:flex-row md:justify-between">
        <div name="content" className="md:max-w-2xl">
          <div>
            <h1 className="font-bold text-5xl md:text-7xl mb-2 ">
              Hello 👋 <br />
              I'm Jonathan and I'm a 
              <br className="md:hidden" />
              <span className="text-indigo-600" style={{}}>
                {" "}
                <TypedAnimation />{" "}
              </span>
            </h1>
          </div>
          <p className="text-slate-400 text-lg md:text-xl mb-5">
            I am not like everyone else. I will make sure to take your
            expectations and exceed them by a mile.
          </p>
          <ContactButtons />
        </div>
        <div className="lg:basis-1/3 md:flex-none md:max-lg:ml-5 xs:max-md:justify-center">
          <Dodecahedron />
        </div>
      </div>
    </section>
  );
};

export default Hero;
