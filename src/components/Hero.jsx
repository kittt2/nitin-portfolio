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

const RippleEffect = () => {
  const [ripples, setRipples] = React.useState([]);

  React.useEffect(() => {
    const createRipple = () => {
      const newRipple = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 4000);
    };

    const interval = setInterval(createRipple, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute border-2 border-white rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ 
            width: 200, 
            height: 200, 
            opacity: 0,
            scale: [1, 1.5, 2]
          }}
          transition={{ 
            duration: 4,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export const Hero = ({ y, scale, blurAmount }) => {
  const name = "Nitin Saini";
  const jobTitle = "I am a Full Stack developer";
  const location = "based in Noida, India";

  return (
    <motion.div
      style={{ y, scale, filter: blurAmount }}
      className="w-screen h-[90vh] xs:h-screen rounded-b-[14rem] bg-black flex flex-col items-center justify-center relative"
    >
      <RippleEffect />
      <div className="px-2 w-full text-center flex flex-col justify-center items-center relative z-10">
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