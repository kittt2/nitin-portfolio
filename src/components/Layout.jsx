import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import SplashScreen from "./Splashpage";
import { Hero } from "./Hero";
import { FloatingDockDemo } from "./nav";
import About from "./About";
import MobileNavBar from "./Mobilenav";
import { Project } from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Fotter";
import TimelineDemo from "./Timeline";

const Layout = () => {
  const [showSplash, setShowSplash] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);

  const skillScale = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const skillrotate = useTransform(scrollYProgress, [0.1, 0.3], [-20, 0]);
  
  const expScale = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const exprotate = useTransform(scrollYProgress, [0.3, 0.4], [-30, 0]);
  const heroBlur = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    ["blur(0px)", "blur(10px)"]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence wait>
      {showSplash ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, y: -400, transition: { duration: 1 } }}
        >
          <SplashScreen />
        </motion.div>
      ) : (
        <motion.div
          key="layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div ref={containerRef} className="w-screen ">
            <MobileNavBar />
            <Hero scale={heroScale} blurAmount={heroBlur} />
            <FloatingDockDemo />
            
            <About />
            <Skills scale={skillScale} rotate={skillrotate} />

            <TimelineDemo scale={expScale} rotate={exprotate} />
            <Project />
            <Contact />
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Layout;
