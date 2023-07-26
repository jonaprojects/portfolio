import React, { useState, useCallback } from "react";
import Image from "next/image";
import Modal, { ModalLink } from "../UI/Modal.js";

const onGithubHandler = () => {
  openURL("https://www.github.com/jonaprojects");
};

const onLinkedinHandler = () => {
  openURL("https://www.linkedin.com/in/jonathan-shavit-615bb0215/");
};

const openURL = (url) => {
  window.location.href = url;
};



const Contact = (props) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setContactModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setContactModalOpen(false);
  }, []);

  const onGmailHandler = useCallback(() => {
    console.log("Clicked the gmail button!");
    openModal();
  }, []);

  return (
    <>
      <section className="mt-11 flex justify-center">
        <div name="content" className="mt-5">
          <h2 className="text-bold text-4xl md:text-6xl font-bold ">
            I'm available at...
          </h2>
          <div
            name="contacts"
            className="flex flex-row gap-6 justify-center  mt-7"
          >
            <div className="hover:cursor-pointer">
              <Image
                src="/githubLogoDark.svg"
                alt="Github Logo"
                width={50}
                height={50}
                priority
                onClick={onGithubHandler}
              />
            </div>

            <div onClick={onGmailHandler} className="hover:cursor-pointer">
              <Image
                src="/gmail.svg"
                alt="Gmail Logo"
                width={60}
                height={60}
                priority
              />
            </div>

            <div onClick={onLinkedinHandler} className="hover:cursor-pointer">
              <Image
                src="/linkedinLogo.svg"
                alt="Linkedin Logo"
                width={50}
                height={50}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={contactModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <h1 className="text-3xl md:text-5xl font-bold">Reach me via E-mail</h1>
        <p className="md:text-xl text-slate-400 mt-4">
          You can reach me via Gmail in the address
          <ModalLink href="gmail.com">merkava234@gmail.com</ModalLink>. However,
          If you need a quick response you should write to me in Linkedin, as I
          visit there more often
        </p>
      </Modal>
    </>
  );
};

export default Contact;
