import { useEffect } from "react";

export default function useCursorPhysics({
  dotRef,
  ringRef,
  ringInnerRef,
  velocityRef,
}) {
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const ringInner = ringInnerRef.current;

    if (!dot || !ring || !ringInner) return;

    // Direct mouse coordinates (updated only on passive mousemove)
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Dot is instant
    let dotX = mouseX;
    let dotY = mouseY;

    // Ring follows smoothly with 0.15 lerp
    let ringX = mouseX;
    let ringY = mouseY;

    // Click pulse (uniform scale only, perfect circle)
    let pulse = 1;

    // Physics Constants
    const FOLLOW_LERP = 0.15;

    // Mousemove only saves mouse position with passive listener
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let frameId;

    const animate = () => {
      // Instant dot update
      dotX = mouseX;
      dotY = mouseY;

      // Smooth following ring (lerp 0.15)
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      ringX += dx * FOLLOW_LERP;
      ringY += dy * FOLLOW_LERP;

      const speed = Math.hypot(dx, dy);

      if (velocityRef?.current) {
        velocityRef.current.x = dx;
        velocityRef.current.y = dy;
        velocityRef.current.speed = speed;
      }

      // Position update exclusively via translate3d
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      // Click pulse: uniform scale only to maintain a perfect circle at all times
      const isPressed = ringInner.classList.contains("cursor-click");
      const targetPulse = isPressed ? 0.9 : 1;
      pulse += (targetPulse - pulse) * 0.18;

      ringInner.style.transform = `scale(${pulse.toFixed(4)})`;

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dotRef, ringRef, ringInnerRef, velocityRef]);
}
