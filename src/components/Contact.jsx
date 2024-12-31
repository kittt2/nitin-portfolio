import React from "react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const headingAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

function Contact() {
  return (
    <motion.div
      id="contact"
      className="h-screen w-screen flex flex-col items-center justify-start bg-black p-8"
    >
      <motion.h1
        className="text-white text-center text-4xl sm:text-6xl md:text-8xl lg:text-9xl capitalize font-bold mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={headingAnimation}
      >
        Contact
      </motion.h1>
      <p className="text-gray-400 text-center font-semibold text-lg md:text-xl py-4 mt-4">
        Feel free to reach out for collaborations, job opportunities, or just to say hi!👋
      </p>

      <div className="mt-8 flex text-center justify-center">
        <a
          href="mailto:nitinofficialacc1@example.com"
          className="flex justify-center items-center space-x-2 text-gray-400 hover:text-white"
          aria-label="Email"
        >
          <IconMail className="w-8 h-8" />
          <span className="text-center text-lg font-medium text-gray-300 ">
            nitinofficialacc1@gmail.com
          </span>
        </a>
      </div>

      <div className="mt-8">
        <a
          href="https://drive.google.com/file/d/1E5KO8_F8YcKqyv4M3QXQMgJDTq-O9Pnv/view?usp=sharing"
          download
          className="inline-block rounded-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200 hover:bg-opacity-20 text-white font-bold py-2 px-4"
        >
          Download My Resume
        </a>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <a
          href="https://www.linkedin.com/in/nitin-saini-7451b02b4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex flex-col items-center"
        >
          <IconBrandLinkedin className="w-8 h-8 text-gray-400 hover:text-blue-300" />
          <span className="text-gray-400 text-sm mt-2">LinkedIn</span>
        </a>
        <a
          href="https://github.com/kittt2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex flex-col items-center"
        >
          <IconBrandGithub className="w-8 h-8 text-gray-400 hover:text-white" />
          <span className="text-gray-400 text-sm mt-2">GitHub</span>
        </a>
      </div>
      <div className="text-center">
        <p className="text-gray-600 font-semibold text-md mt-2 text-center">
          Based in Noida, India
        </p>
      </div>
    </motion.div>
  );
}

export default Contact;
