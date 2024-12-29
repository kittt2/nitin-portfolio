import React from "react";
import { motion } from "framer-motion";

const typingEffect = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Hero = ({ y, scale, blurAmount }) => {
  const name = "I'M Nitin Saini";
  const jobTitle = "I am a frontend developer";
  const location = "based in Noida, India";

  return (
    <motion.div
      style={{ y, scale, filter: blurAmount }}
      className="w-screen h-screen rounded-b-[14rem] bg-black flex flex-col items-center justify-center"
    >
      <div className="px-2 w-full text-center flex flex-col justify-center items-center">
        <motion.h1
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold mb-6"
          style={{ fontFamily: "Montserrat, sans-serif", lineHeight: 1.2 }}
          variants={typingEffect}
          initial="hidden"
          animate="visible"
        >
          {name.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letterAnimation}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal my-2"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          variants={typingEffect}
          initial="hidden"
          animate="visible"
        >
          {jobTitle.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letterAnimation}>
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          variants={typingEffect}
          initial="hidden"
          animate="visible"
        >
          {location.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letterAnimation}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
