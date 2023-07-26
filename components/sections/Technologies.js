import React from "react";
import Image from "next/image";
import Section from "../UI/Section";
import Logo from "../UI/Logo/Logo";

const Technologies = (props) => {
  return (
    <section className="flex flex-col justify-center align-center md:mt-11">
      <h2 className="text-4xl font-bold mt-6 mb-2 text-center md:text-6xl ">
        Technologies
      </h2>
      <p className="text-slate-500 mb-4 text-lg md:text-xl text-center ">
        My lethal arsenal of development tools
      </p>
      <div className="grid grid-cols-4 gap-x-2 md:grid-cols-6 gap-4 items-center justify-items-center">
        <Logo
          src="/htmlLogo.svg"
          alt="HTML Logo"
          width={60}
          height={60}

        />
        <Logo
          src="/cssLogo.svg"
          alt="CSS Logo"
          width={60}
          height={60}
        />
        <Logo
          src="/jsLogo.svg"
          alt="JS Logo"
          width={60}
          height={60}
        />
        <Logo
          src="/reactLogo.svg"
          alt="React Logo"
          width={60}
          height={60}
        />
        <Logo
          src="/pythonLogo.svg"
          alt="Python Logo"
          width={60}
          height={60}
        />
        <Logo
          src="/expoLogoDark.svg"
          alt="Expo Logo"
          width={60}
          height={60}
        />

        <Logo
          src="/figmaLogo.svg"
          alt="Figma Logo"
          width={50}
          height={50}
        />
        <Logo
          src="/tailwindLogo.svg"
          alt="TailwindCSS Logo"
          width={60}
          height={60}
        />
        <Logo
          src="/gitLogo.svg"
          alt="Git Logo"
          width={60}
          height={60}
        />
        <Logo
          src="/githubLogoDark.svg"
          alt="Github Logo"
          width={60}
          height={60}
        />
        <Logo
          src="/bootstrapLogo.svg"
          alt="Bootstrap Logo"
          width={60}
          height={60}
        />
        <Logo
          src="/csharpLogo.svg"
          alt="Csharp Logo"
          width={60}
          height={60}
        />
      </div>
    </section>
  );
};

export default Technologies;
