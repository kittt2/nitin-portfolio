import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AnimatedTestimonials } from "./ui/AnimatedAbout"; // Adjust the path as needed

const About = () => {
  
  const testimonials = [
    {
      quote:
        "I'm a frontend developer  based in Noida, India. I love development and enjoy creating websites. My passion lies in continuous learning and improving my craft.",
      name: "Hello! I'm Nitin Saini",
      designation: "Frontend Developer",
      src: "photo.jpg",
    },
    {
      quote:
        "I earned my BCA (Bachelor of Computer Applications)  from S.G.T.B.I.M.I.T, affiliated with Guru Gobind Singh Indraprastha University.",
      name: "Education",
      designation: "From Books to Bugs: The Journey of a Code Warrior 🪖",
      src: "4.jpg",
      time: "2021-july 2024",
    },
    {
      quote: "Full Stack Intern at Allsoft Solutions, New Delhi",
      name: "Experince",
      designation: "Code, coffee, repeat – sleep is optional.🫠",
      src: "front.jpg",
      time: "Aug 2023- Sep 2023",
    },
    {
      quote:
        "I have a keen interest in development, tech trends, design, open-source projects, reading, and discovering new hobbies. I'm currently diving into the world of Figma to enhance my design skills.",
      name: "Interests & Learning",
      designation:
        "Coding by day, debugging dreams by night – awesome, right?😁",
      src: "c3.jpg",
    },
    {
      quote:
        "When I'm not diving into code, I love getting lost in anime and exploring the great outdoors. As a recent graduate eager to start my career, I'm on the lookout for new opportunities. Feel free to reach out!",
      name: "Want to know More?🤔",
      designation: "Techie Tales & Adventures 🫨",
      src: "green.jpg",
    },
  ];

  return (
    <>
      <motion.div

        id="about"
        className=" h-screen  w-screen mb-40 sm:mb-60 md:mb-20 "
      >
        <div className="text-center pt-6 xs:pt-20">
          <h1
            style={{ fontFamily: "Montserrat, sans-serif", lineHeight: 1.2 }}
            className="text-4xl font-semibold  text-white md:text-9xl  capitalize py-6 "
          >
            about me
          </h1>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </motion.div>
    </>
  );
};
export default About;
