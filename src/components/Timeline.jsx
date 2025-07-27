import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { Timeline } from "./ui/Timeline";

const AnimatedTimelineItem = ({ children, delay = 0, importance = "medium" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  const animationConfigs = {
    high: {
      scale: { from: 0.9, to: 1 },
      duration: 0.8,
      stagger: 0.2,
    },
    medium: {
      scale: { from: 0.95, to: 1 },
      duration: 0.6,
      stagger: 0.15,
    },
    low: {
      scale: { from: 0.97, to: 1 },
      duration: 0.5,
      stagger: 0.1,
    },
  };

  const config = animationConfigs[importance];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: config.scale.from }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: config.scale.to }
          : { opacity: 0, y: 30, scale: config.scale.from }
      }
      transition={{
        duration: config.duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

const AnimatedText = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -20 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: -20 }
      }
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

const StatusBadge = ({ status, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const badgeStyles = {
    current: "bg-green-500 text-white animate-pulse",
    completed: "bg-gray-400 text-white",
  };

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0 }
      }
      transition={{
        duration: 0.4,
        delay: delay,
        ease: "backOut",
      }}
      className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${badgeStyles[status]} ml-2`}
    >
      {status === 'current' ? 'Current' : 'Completed'}
    </motion.span>
  );
};

export function TimelineDemo({rotate,scale}) {
  const data = [
    {
      title: "2025",
      content: (
        <AnimatedTimelineItem importance="high">
          <div className="p-4 sm:p-6 md:p-8">
            <AnimatedText 
              className="mb-4 sm:mb-6"
              delay={0.1}
            >
              <h3 className="text-black font-bold  text-2xl  md:text-2xl lg:text-5xl xl:text-6xl capitalize flex flex-wrap items-center ">
                Scholar Trainee
                <StatusBadge status="current" delay={0.3} />
              </h3>
            </AnimatedText>
            
            <AnimatedText 
              className="mb-2 sm:mb-3"
              delay={0.2}
            >
              <h4 className="text-black text-2xl sm:text-xl md:text-2xl xl:text-4xl font-bold">
                <span className="text-black font-semibold">Wipro</span> | Full-time
              </h4>
            </AnimatedText>
            
            <AnimatedText 
              className="mb-2 sm:mb-3"
              delay={0.3}
            >
              <p className="text-gray-600  text-lg sm:text-lg md:text-xl font-medium">
              Jul 2025 - Present | On-site
              </p>
            </AnimatedText>
            
            <AnimatedText 
              className="mt-3 sm:mt-4"
              delay={0.4}
            >
              <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium italic border-l-4 border-black pl-3 sm:pl-4">
                Learning enterprise magic and surviving corporate meetings. 🌟
              </p>
            </AnimatedText>
            
            <hr className="w-full border-t-2 border-gray-200 mt-4 sm:mt-6" />
          </div>
        </AnimatedTimelineItem>
      ),
    },
    {
      title: "2023",
      content: (
        <AnimatedTimelineItem importance="medium" delay={0.1}>
          <div className="p-4 sm:p-6 md:p-8">
            <AnimatedText 
              className="mb-4 sm:mb-6"
              delay={0.2}
            >
              <h3 className="text-black font-bold gap-2 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl capitalize flex flex-wrap items-center">
                Full Stack Intern 
                <StatusBadge status="completed" delay={0.4} />
              </h3>
            </AnimatedText>
            
            <AnimatedText 
              className="mb-2 sm:mb-3"
              delay={0.3}
            >
              <h4 className="text-black text-xl sm:text-xl md:text-xl lg:text-2xl font-bold">
                <span className="text-black font-semibold ">Allsoft Solutions</span> | Internship
              </h4>
            </AnimatedText>
            
            <AnimatedText 
              className="mb-2 sm:mb-3"
              delay={0.4}
            >
              <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium">
                Aug 2023 - Sep 2023 · 2 mon | Remote
              </p>
            </AnimatedText>
            
            <AnimatedText 
              className="mt-3 sm:mt-4"
              delay={0.5}
            >
              <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium italic border-l-4 border-black pl-3 sm:pl-4">
              ⚡Mastered the art of debugging and late-night deployments.
              </p>
            </AnimatedText>
            
            <hr className="w-full border-t-2 border-gray-200 mt-4 sm:mt-6" />
          </div>
        </AnimatedTimelineItem>
      ),
    },
    {
      title: "2021",
      content: (
        <AnimatedTimelineItem importance="low" delay={0.2}>
          <div className="p-4 sm:p-6 md:p-8">
            <AnimatedText 
              className="mb-4 sm:mb-6"
              delay={0.3}
            >
              <h3 className="text-black font-bold  text-xl sm:text-2xl md:text-2xl lg:text-4xl  capitalize gap-2 flex flex-wrap items-center">
                Bachelor of Computer Applications 🎓
                <StatusBadge status="completed" delay={0.5} />
              </h3>
            </AnimatedText>
            
            <AnimatedText 
              className="mb-2 sm:mb-3"
              delay={0.4}
            >
              <h4 className="text-black capitalize text-lg sm:text-xl md:text-sm lg:text-2xl font-bold">
                <span className="text-black  font-semibold ">SGTBIMIT Institute</span> | Guru Gobind Singh Indraprastha University
              </h4>
            </AnimatedText>
            
            <AnimatedText 
              className="mb-2 sm:mb-3"
              delay={0.5}
            >
              <p className="text-gray-600  text-base sm:text-lg md:text-sm lg:text-xl font-medium">
              2021 - 2024 | 3 years
              </p>
            </AnimatedText>
            
            <AnimatedText 
              className="mt-3 sm:mt-4"
              delay={0.6}
            >
              <p className="text-gray-400 text-sm sm:text-base md:text-sm lg:text-lg font-medium italic border-l-4 border-black pl-3 sm:pl-4">
              Where I discovered my love for breaking code before fixing it.
              </p>
            </AnimatedText>
            
            <hr className="w-full border-t-2 border-gray-200 mt-4 sm:mt-6" />
          </div>
        </AnimatedTimelineItem>
      ),
    },
  ];

  return (
    <motion.div  style={{
        transition: { type: "spring", stiffness: 100 },
        scale,rotate,
      }} className="h-full w-screen  bg-[rgb(226,226,226)]  overflow-clip md:overflow-visible xl:overflow-clip">
   
        <Timeline data={data} />
 
    </motion.div>
  );
}

export default TimelineDemo;