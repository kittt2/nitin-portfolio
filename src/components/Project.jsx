import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FocusCards } from "./ui/Projectparallex";

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

export function Project() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]);
  const cards = [
      {
      title: "MockAI",
      src: "ai.png",
      description:"MockAI is an AI-driven platform that lets users practice interviews in real time and get instant, personalized feedback. It’s perfect for sharpening technical skills and building confidence through realistic mock sessions.
,
      technologies: [
        "HTML",
        "Tailwind css",
        "React",
        "FIREBASE",
        "vapi Api",
        "Gen AI",
        "shadCn",
      ],
      link: "https://interview-e5d3a.web.app/",
    },
    {
      title: "Stream platform",
      src: "streamcover.png",
      description:
        "This is a trailer or video streaming platform I created using the YouTube API and TMDB API. It features robust functionalities such as search, adding movies to a watchlist, and authentication via email and Google. Additionally, it offers much more to enhance user experience.",
      technologies: [
        "HTML",
        "Tailwind css",
        "React",
        "FIREBASE",
        "Youtube Api",
        "Redux toolkit",
        "shadCn ui",
      ],
      link: "https://stream-5a835.web.app/",
    },
    {
      title: "Ecommerce(mern)",
      src: "emart.png",
      description:
        "This is a fully functional e-commerce site equipped with features like search, categories, an admin panel, CRUD operations on products, order status tracking, and more. Additionally, it includes database login and registration functionality to enhance user security and experience.",
      technologies: [
        "HTML",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "bootstrap",
      ],
      link:"https://eccomerce-platfom.onrender.com/",
      note:"If you find delay in loading page on first time its due to render platform where my project is host. i am using free plan"
    },
    {
      title: "ecommerce(Vanilla JS)",
      src: "project3.png",
      description:
        "This is a basic e-commerce site featuring product listings, a cart system, and login/sign-in functionality (implemented without React). This project connects to a MongoDB database and represents my initial venture into web development. Please note, as the backend is deployed on Render, it may take a moment to initialize the connection on the first attempt.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Node.js",
        "express",
      ],
      link: "https://kostyle-rnaf.vercel.app/",
    },
    
    {
      title: "Portfolio(current)",
      src: "project5.png",
      description:
        "This portfolio project highlights my skills and achievements using ShadCN UI, Accentery UI, Tailwind CSS, and React. The design is both sleek and responsive, ensuring a seamless user experience. Animations created with Framer Motion add a dynamic and engaging touch to the interface.",
      technologies: [
        "React",
        "HTML",
        "Tailwind css",
        "ShadCn Ui",
        "Framer motion",
      ],
      link: "https://nitin-saini.vercel.app/",
    },
    {
      title: "Portfolio(old)",
      src: "project4.png",
      description:
        "This is a React-based portfolio project featuring both dark and light themes. The project includes a form that connects to a database for seamless data handling. Additionally, animations are implemented using Framer Motion to enhance the visual appeal and interactivity of the portfolio.",
      technologies: ["React", "HTML", " CSS", "Node.js", "express"],
      link: "https://nitinsaini.vercel.app/",
    },
  ];
  const heading="project"
  const line ="Every project is a mix of learning, growth, and 'oops' moments. 📈😁"
  return (
    <motion.div
      id="project"
      className=" h-full  w-screen  bg-black rounded-t-[16rem]  pt-10 md:pt-2  "
    >
      <div className="py-20 md:py-20 ">
        <h1
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-white text-center capitalize text-4xl font-semibold md:text-9xl "
        >
          project
        </h1>
        <motion.p
          className="text-gray-500 text-center  text-sm sm:text-lg  w-screen text-center capitalize font-medium pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={typingEffect}
        >
          {line.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letterAnimation}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>

      <div className="w-screen  pb-20 px-6 md:h-screen ">
        <FocusCards cards={cards} />
      </div>
    </motion.div>
  );
}
