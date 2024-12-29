import React, { memo, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import { Button } from "./button";
import { motion } from "framer-motion";
import { IconBrandBootstrap, IconBrandCss3, IconBrandJavascript, IconBrandRedux, IconHtml, IconX } from "@tabler/icons-react";
import {

  IconBrandReact,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandTailwind,
} from "@tabler/icons-react";

const techIcons = {
  React: <IconBrandReact />,
  "Node.js": <IconBrandNodejs />,
  Express: "ex",
  MongoDB: <IconBrandMongodb />,
  "Tailwind css": <IconBrandTailwind />,
  HTML: <IconHtml/>,
  CSS: <IconBrandCss3 />,
  JavaScript: <IconBrandJavascript />,
  bootstrap: <IconBrandBootstrap/>,
  "Redux toolkit":<IconBrandRedux/>,
  
};

const Card = memo(({ card, index, hovered, setHovered }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={`rounded-lg relative bg-neutral-900 overflow-hidden h-60 md:h-86 w-full transition-all duration-300 ease-out ${
        hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : ""
      }`}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-fill absolute inset-0 w-full h-full"
      />
      <div
        className={`absolute inset-0 bg-black/50 flex items-end justify-between py-8 px-4 transition-opacity duration-300 ${
          hovered === index ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className=" text-sm md:text-lg lg:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mb-2">
          {card.title}
        </div>
        <div className="flex">
          <Drawer className="flex justify-center">
            <DrawerTrigger
              as={Button}
              onClick={() => setIsDrawerOpen(true)}
              variant="secondary"
              className="bg-gray-700 hover:bg-gray-600 capitalize rounded-lg text-white px-2  md:px-6 text-center py-1 mb-1"
            >
              details
            </DrawerTrigger>
            <DrawerContent  inert={!isDrawerOpen ? "true" : undefined}  className="p-3 xs:px-20  sm:px-14  md:h-[80vh] bg-black/30 backdrop-blur-md backdrop-filter shadow-lg">
              <div>
                <DrawerHeader className="flex justify-between xs:px-8 md:px-8 md:pb-8">
                  <DrawerTitle className="text-2xl md:text-5xl text-white font-semibold capitalize">
                    {card.title}
                  </DrawerTitle>
                  <DrawerClose as={Button} variant="outline">
                    <IconX className="text-white hover:scale-90" />
                  </DrawerClose>
                </DrawerHeader>
                <div className="flex flex-col px-2 sm:px-8 gap-2  md:gap-6 md:flex-row  md:space-y-0 md:space-x-4">
                  <div className="h-40 sm:h-60   md:h-80 w-full md:w-1/2 lg:w-1/2 xl:w-1/3 ">
                    <img
                      src={card.src}
                      className="w-full h-full rounded-xl object-fill"
                      alt="project images"
                    />
                  </div>
                  <div className="w-full md:w-1/2 ">
                    <h2 className="text-sm xs:text-xs md:text-sm lg:text-[1rem] whitespace-pre-line text-justify font-medium   text-gray-400 mb-4">
                      {card.description}
                    </h2>
                    <h3 className="text-sm md:text-xl text-white mb-2 font-semibold ">
                      Technologies Used:
                    </h3>
                    <ul className="list-disc flex list-inside text-gray-400 flex-wrap " >
                      {card.technologies?.map((tech) => (
                        <li key={tech} className="flex text-xs items-center pr-2 md:mr-2 mb-2 md:font-semibold">
                         
                          {techIcons[tech]} <span className="ml-2">{tech}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-slate-900 font-semibold text-white  md:text-sm px-4 py-2 md:mt-4 inline-block rounded-md border border-black text-center"
                    >
                      Project Live link
                    </a>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
});

Card.displayName = "Card";

export const FocusCards = ({ cards }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};
