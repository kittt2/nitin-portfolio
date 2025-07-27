import React from "react";
import {
  IconBrandTailwind,
  IconHtml,
  IconBrandReact,
  IconBrandGithub,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandGit,
  IconBrandFigma,
} from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";

function Skills({ y, scale, rotate }) {
  

  return (
    <motion.div
      style={{
        y,
        transition: { type: "spring", stiffness: 100 },

        scale,
        
        rotate,
      }}
      transition={{ duration: 0.6, delay: 1, ease: "linear" }}
      className="h-full  w-screen text-center bg-[rgb(226,226,226)] p-8 pb-16 lg:pb-28 "
    >
      <h1 className="text-black pb-4 pt-20 text-4xl sm:text-6xl md:text-8xl lg:text-10xl capitalize font-bold">
        Skills
      </h1>
      <p className="text-gray-400 text-xl sm:text-xl md:text-2xl lg:text-lg pb-5 font-medium ">
        Code, coffee, repeat – sleep is optional.🫠
      </p>
      <div className="grid grid-cols-1 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-60 w-full gap-5">
        <div className="col-span-1 text-center md:text-left ">
          <h3 className="text-gray-500 font-bold font-mono text-2xl md:text-5xl py-5 capitalize">
            Development
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          <h4 className="text-black text-xl md:text-2xl font-bold mb-4 md:mb-0">
            Technology & Database
          </h4>
          <div className="flex flex-wrap justify-center space-x-4 items-center text-gray-600">
            <div className="flex items-center space-x-2">
              <IconHtml />
              <span className="font-bold">HTML</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconBrandCss3 />
              <span className="font-bold">CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconBrandNodejs />
              <span className="font-bold">Node.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconBrandMongodb />
              <span className="font-bold">MongoDB</span>
            </div>
          </div>
        </div>
        <hr className="w-full border-t-2 border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          <h4 className="text-black text-xl md:text-2xl   font-bold mb-4 md:mb-0">
            Frameworks & Libraries
          </h4>
          <div className="flex flex-wrap justify-center space-x-4 items-center text-gray-600">
            <div className="flex items-center space-x-2">
              <IconBrandReact />
              <span className="font-bold">React.js</span>
            </div>
            <div className="flex items-center  space-x-2">
              <IconBrandTailwind />
              <span className="font-bold">Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconBrandBootstrap />
              <span className="font-bold">Bootstrap</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold">Express.js</span>
            </div>
          </div>
        </div>
        <hr className="w-full border-t-2 border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          <h4 className="text-black text-xl md:text-2xl font-bold mb-4 md:mb-0">
            Language
          </h4>
          <div className="flex flex-wrap justify-center space-x-4 items-center text-gray-600">
            <IconBrandJavascript />
            <span className="font-bold">JavaScript</span>
          </div>
        </div>
        <hr className="w-full border-t-2 border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          <h4 className="text-black text-xl md:text-2xl font-bold mb-4 md:mb-0">
            Others
          </h4>
          <div className="flex flex-wrap justify-center space-x-4 items-center text-gray-600">
            <div className="flex items-center space-x-2">
              <IconBrandGithub />
              <span className="font-bold">GitHub</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconBrandGit />
              <span className="font-bold">Git</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconBrandFigma />
              <span className="font-bold">Figma</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold">ShadcnUI</span>
            </div>
          </div>
        </div>
        <hr className="w-full border-t-2 border-gray-300" />
      </div>
    </motion.div>
  );
}

export default Skills;
