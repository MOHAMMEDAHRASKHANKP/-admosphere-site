import React, { useRef, useEffect } from "react";

function Cursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    // Only run on desktop devices with a mouse / fine pointer
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    if (!dot) return;

    let isVisible = false;

    const handleMouseMove = (e) => {
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
      }
      // Instant 1:1 real-time positioning with zero lag
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const handleMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      isVisible = true;
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="custom-cursor-dot"
      aria-hidden="true"
    />
  );
}

export default Cursor;
