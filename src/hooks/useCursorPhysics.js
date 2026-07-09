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

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let dotX = mouseX;
    let dotY = mouseY;

    let ringX = mouseX;
    let ringY = mouseY;

    let stretch = 1;
    let angle = 0;

    let pulse = 1;
    let breathe = 1;
    let lastMove = performance.now();

    // Physics Constants
    const FOLLOW_SPEED = 0.16;
    const DOT_SPEED = 0.38;
    const STRETCH_SPEED = 0.14;
    const ROTATE_SPEED = 0.16;
    const MAX_STRETCH = 1.22;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMove = performance.now();
    };

    window.addEventListener("mousemove", handleMouseMove);

    let frame;

    const animate = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;

      const speed = Math.sqrt(dx * dx + dy * dy);

      velocityRef.current.x = dx;
      velocityRef.current.y = dy;
      velocityRef.current.speed = speed;

      // Smooth Follow
      dotX += (mouseX - dotX) * DOT_SPEED;
      dotY += (mouseY - dotY) * DOT_SPEED;

      ringX += dx * FOLLOW_SPEED;
      ringY += dy * FOLLOW_SPEED;

      // Position
      dot.style.transform = `
        translate3d(${dotX}px, ${dotY}px, 0)
        translate(-50%, -50%)
      `;

      ring.style.transform = `
        translate3d(${ringX}px, ${ringY}px, 0)
        translate(-50%, -50%)
      `;

      // Velocity Morph
      const targetStretch = Math.min(
        1 + speed * 0.010,
        MAX_STRETCH
      );

      stretch += (targetStretch - stretch) * STRETCH_SPEED;

      const targetAngle =
        (Math.atan2(dy, dx) * 180) / Math.PI;

      angle += (targetAngle - angle) * ROTATE_SPEED;

      // Idle Breathing
      const idle = performance.now() - lastMove > 600;

      const targetBreathe = idle
        ? 1 + Math.sin(performance.now() * 0.0018) * 0.025
        : 1;

      breathe += (targetBreathe - breathe) * 0.05;

      // Click Pulse
      const isPressed =
        ringInner.classList.contains("cursor-click");

      const targetPulse = isPressed ? 0.88 : 1;

      pulse += (targetPulse - pulse) * 0.16;

      // Final Transform
      ringInner.style.transform = `
        rotate(${angle}deg)
        scale(
          ${stretch * pulse * breathe},
          ${(1 / stretch) * pulse * breathe}
        )
      `;

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [dotRef, ringRef, ringInnerRef, velocityRef]);
}