import React, { useRef, useEffect } from "react";

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let hasMoved = false;

    const handlePointerMove = (e) => {
      if (!hasMoved) {
        hasMoved = true;
        cursor.style.display = "block";
      }
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const handlePointerLeave = () => {
      cursor.style.display = "none";
    };

    const handlePointerEnter = () => {
      if (hasMoved) {
        cursor.style.display = "block";
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave, { passive: true });
    document.addEventListener("mouseenter", handlePointerEnter, { passive: true });
    window.addEventListener("blur", handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("mouseenter", handlePointerEnter);
      window.removeEventListener("blur", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <div className="custom-cursor-ring" />
      <div className="custom-cursor-dot" />
    </div>
  );
}

export default Cursor;
