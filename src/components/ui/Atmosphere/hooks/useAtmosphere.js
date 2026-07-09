import { useEffect, useRef } from "react";

export default function useAtmosphere(layerRefs) {
  const mouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return {
    mouse,
    smoothMouse,
    animationFrame,
    layerRefs,
  };
}