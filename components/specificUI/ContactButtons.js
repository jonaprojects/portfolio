import React from "react";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import Image from "next/image";

const onContactHandler = () => {
  //TODO: implement this!
  console.log("Clicked the contact button!");
};

const onGithubHandler = () => {
  document.location.href = "https://stackoverflow.com/";
};

export const ContactButton = () => {
  return (
    <PrimaryButton onClick={onGithubHandler}>
      <div className="flex flex-row gap-1 items-center">
        <Image
          src="/phoneLogo.svg"
          alt="Github Logo"
          width={22}
          height={22}
          priority
        />
        <span>Contact Me</span>
      </div>
    </PrimaryButton>
  );
};

export const GithubButton = () => {
  return (
    <SecondaryButton onClick={onContactHandler}>
      <div className="flex flex-row gap-1 items-center">
        <span>GitHub</span>
        <Image
          src="/githubLogoDark.svg"
          alt="Github Logo"
          width={30}
          height={30}
          priority
        />
      </div>
    </SecondaryButton>
  );
};
const ContactButtons = (props) => {
  return (
    <div className="flex flex-row gap-3">
      <ContactButton />
      <GithubButton />
    </div>
  );
};

export default ContactButtons;
