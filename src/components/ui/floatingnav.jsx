import React, { memo, useCallback, useRef } from "react";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export const FloatingDock = memo(
  ({ items, desktopClassName }) => {
    return (
      <FloatingDockDesktop items={items} className={desktopClassName} />
    );
  }
);

const FloatingDockDesktop = memo(({ items, className }) => {
  const mouseX = useMotionValue(Infinity);

  const handleMouseMove = useCallback((e) => mouseX.set(e.pageX), [mouseX]);

  const handleMouseLeave = useCallback(() => mouseX.set(Infinity), [mouseX]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`border-gray-900 border-[0.06rem]  mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-opacity-60 bg-neutral-900 backdrop-filter backdrop-blur-lg px-4 pb-3 ${className}`}
    >
      {items.map((item) => (
        <MemoizedIconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
});

const MemoizedIconContainer = memo(({ mouseX, title, icon, href }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="aspect-square text-white rounded-full bg-neutral-800 bg-opacity-60 backdrop-filter backdrop-blur-lg flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md font-bold text-gray-400 border-gray-100 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
});

export { FloatingDockDesktop, MemoizedIconContainer };
