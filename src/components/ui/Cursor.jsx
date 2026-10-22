import React, { useRef, useState, useEffect } from "react";
import { CURSOR_MODES } from "./cursorConfig";
import useCursorPhysics from "../../hooks/useCursorPhysics";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ringInnerRef = useRef(null);

  const velocityRef = useRef({
    x: 0,
    y: 0,
    speed: 0,
  });

  const [mode, setMode] = useState("default");
  const [visible, setVisible] = useState(true);

  const currentMode = CURSOR_MODES[mode] || CURSOR_MODES.default;

  useCursorPhysics({
    dotRef,
    ringRef,
    ringInnerRef,
    velocityRef,
  });

  // Cursor Modes
  useEffect(() => {
    const handlePointerOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      setMode(target ? target.dataset.cursor : "default");
    };

    window.addEventListener("pointerover", handlePointerOver, { passive: true });

    return () =>
      window.removeEventListener("pointerover", handlePointerOver);
  }, []);

  // Click Pulse
  useEffect(() => {
    const down = () => {
      ringInnerRef.current?.classList.add("cursor-click");
      dotRef.current?.classList.add("cursor-dot-click");
    };

    const up = () => {
      ringInnerRef.current?.classList.remove("cursor-click");
      dotRef.current?.classList.remove("cursor-dot-click");
    };

    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  // Accessibility
  useEffect(() => {
    const mouse = () => setVisible(true);

    const keyboard = (e) => {
      if (e.key === "Tab") setVisible(false);
    };

    window.addEventListener("mousemove", mouse, { passive: true });
    window.addEventListener("keydown", keyboard, { passive: true });

    return () => {
      window.removeEventListener("mousemove", mouse);
      window.removeEventListener("keydown", keyboard);
    };
  }, []);

  const hasLabel = Boolean(currentMode.label);

  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: currentMode.size,
          height: currentMode.size,
          opacity: visible ? 1 : 0,
          transition: "opacity .2s ease",
        }}
      >
        <div
          ref={ringInnerRef}
          className="cursor-ring-inner"
          style={{
            border: `2px solid ${currentMode.borderColor}`,
          }}
        >
          <span
            className="cursor-label"
            style={{
              opacity: hasLabel ? 1 : 0,
              transform: hasLabel
                ? "translateY(0) scale(1)"
                : "translateY(4px) scale(.92)",
            }}
          >
            {currentMode.label}
          </span>
        </div>
      </div>

      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          width: currentMode.dotSize,
          height: currentMode.dotSize,
          background: "#d12121",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}

export default Cursor;
