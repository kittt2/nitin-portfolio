import React from "react";
import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden relative">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold flex items-center relative"
          initial={{ scale: 0.5, rotateX: -90 }}
          animate={{ scale: 1, rotateX: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.div
            className="absolute inset-0 blur-3xl opacity-30"
            animate={{
              background: [
                'linear-gradient(90deg, #7586cc, #d569a7)',
                'linear-gradient(90deg, #d569a7, #7586cc)',
                'linear-gradient(90deg, #7586cc, #d569a7)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.span
            style={{
              background: 'linear-gradient(90deg, #7586cc, #d569a7, #7586cc)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Hello!
          </motion.span>
          
          <motion.span
            className="ml-4"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            😄
          </motion.span>
        </motion.h1>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.5, 1], 
            opacity: [0.3, 0.1, 0.3] 
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="w-96 h-96 border-2 border-purple-500 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1.2, 1.8, 1.2], 
            opacity: [0.2, 0.05, 0.2] 
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="w-96 h-96 border border-pink-500 rounded-full" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full opacity-40"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-3 h-3 bg-pink-400 rounded-full opacity-30"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-2 h-2 bg-blue-400 rounded-full opacity-50"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default AnimatedText;