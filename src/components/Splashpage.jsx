import React from "react";
import { motion } from "framer-motion";

const gradientText = {
  background: 'linear-gradient(90deg, #7586cc, #d569a7)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const AnimatedText = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.h1
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <span style={gradientText}>Hello!</span>
        <span>👋😄</span>
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
