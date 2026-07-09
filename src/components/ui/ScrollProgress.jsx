import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX,
        transformOrigin: "0% 50%",
      }}
    />
  );
}

export default ScrollProgress;