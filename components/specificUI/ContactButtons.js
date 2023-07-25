import React, { useState, useCallback } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import Image from "next/image";
import Modal, { ModalLink } from "../UI/Modal";

const onGithubHandler = () => {
  document.location.href = "https://www.github.com/jonaprojects";
};

export const ContactButton = (props) => {
  return (
    <PrimaryButton onClick={props.onClick}>
      <div className="flex flex-row gap-1 items-center">
        <Image
          src="/phoneLogo.svg"
          alt="Contact Logo"
          width={22}
          height={22}
          priority
        />
        <span>Contact Me</span>
      </div>
    </PrimaryButton>
  );
};

export const GithubButton = (props) => {
  return (
    <SecondaryButton onClick={onGithubHandler}>
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
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setContactModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setContactModalOpen(false);
  }, []);

  return (
    <>
      <div className="flex flex-row gap-3">
        <ContactButton onClick={openModal} />
        <GithubButton />
      </div>
      <Modal
        isOpen={contactModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <h1 className="text-3xl md:text-5xl font-bold">Contact Me</h1>
        <p className="md:text-xl text-slate-400 mt-4">
          First of all, thanks for visiting my website. You can contact me on
          <ModalLink href="https://www.linkedin.com/in/jonathan-shavit-615bb0215/">
            Linkedin
          </ModalLink>
          And also via Gmail at
          <ModalLink href="gmail.com">merkava234@gmail.com</ModalLink>
          Here's also a link to my
          <ModalLink href="https://www.github.com/jonaprojects">
            GitHub Profile
          </ModalLink>
          if you want to see some of my recent projects.
        </p>
        <p className="md:text-xl text-slate-400 mt-4">
          However, If you need a quick response you should reach out to me via
          Linkedin, as I visit there more often.
        </p>
      </Modal>
    </>
  );
};

export default ContactButtons;
