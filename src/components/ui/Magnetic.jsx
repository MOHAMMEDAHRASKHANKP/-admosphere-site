import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

function Magnetic({
  children,
  className = "",
  strength = 0.08,
  tilt = 4,
  scale = 1.01,
}) {
  const frame = useRef(null);
  const rectRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const hoverScale = useMotionValue(1);

 const spring = {
  stiffness: 120,
  damping: 24,
  mass: 1,
};

  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const rx = useSpring(rotateX, spring);
  const ry = useSpring(rotateY, spring);

  const sc = useSpring(hoverScale, {
    stiffness: 170,
    damping: 18,
  });

  const gx = useSpring(glareX, {
    stiffness: 80,
    damping: 18,
  });

  const gy = useSpring(glareY, {
    stiffness: 80,
    damping: 18,
  });

  const glare = useMotionTemplate`
    radial-gradient(
      circle at ${gx}% ${gy}%,
      rgba(255,255,255,.28),
      rgba(255,255,255,.12) 22%,
      transparent 65%
    )
  `;

  const handleEnter = (e) => {
    rectRef.current = e.currentTarget.getBoundingClientRect();
    hoverScale.set(scale);
  };

  const handleMove = (e) => {
    if (frame.current) return;

    frame.current = requestAnimationFrame(() => {
      const rect = rectRef.current;

      if (!rect) {
        frame.current = null;
        return;
      }

      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

// Keep the card fixed
x.set(0);
y.set(0);

// Very subtle premium tilt
rotateY.set((px - 0.5) * 2);
rotateX.set(-(py - 0.5) * 2);

      glareX.set(px * 100);
      glareY.set(py * 100);

      frame.current = null;
    });
  };

  const handleLeave = () => {
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }

    x.set(0);
    y.set(0);

    rotateX.set(0);
    rotateY.set(0);

    glareX.set(50);
    glareY.set(50);

    hoverScale.set(1);

    rectRef.current = null;
  };

  return (
    <div
      style={{ perspective: 2500}}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className={className}
        style={{
          position: "relative",
          overflow: "hidden",

          x: sx,
          y: sy,

          rotateX: rx,
          rotateY: ry,

          scale: sc,

          transformStyle: "preserve-3d",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        {children}

        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            borderRadius: "inherit",
            background: glare,
            mixBlendMode: "screen",
            opacity: 0.3,
          }}
        />
      </motion.div>
    </div>
  );
}

export default Magnetic;