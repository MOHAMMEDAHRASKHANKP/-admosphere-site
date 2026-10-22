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

    // Velocity & morph
    let stretch = 1;
    let angle = 0;
    let pulse = 1;
    let breathe = 1;
    let lastMove = performance.now();

    // Physics Constants
    const FOLLOW_LERP = 0.15;
    const STRETCH_SPEED = 0.14;
    const ROTATE_SPEED = 0.16;
    const MAX_STRETCH = 1.22;

    // Mousemove only saves mouse position with passive listener
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMove = performance.now();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let frameId;

    const animate = () => {
      const now = performance.now();

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

      // Velocity morph (concave/convex stretch)
      const targetStretch = Math.min(1 + speed * 0.01, MAX_STRETCH);
      stretch += (targetStretch - stretch) * STRETCH_SPEED;

      const targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
      angle += (targetAngle - angle) * ROTATE_SPEED;

      // Idle breathing (no DOM reads)
      const idle = now - lastMove > 600;
      const targetBreathe = idle ? 1 + Math.sin(now * 0.0018) * 0.025 : 1;
      breathe += (targetBreathe - breathe) * 0.05;

      // Click pulse
      const isPressed = ringInner.classList.contains("cursor-click");
      const targetPulse = isPressed ? 0.88 : 1;
      pulse += (targetPulse - pulse) * 0.16;

      // Ring inner transform exclusively via rotate and scale
      const scaleX = (stretch * pulse * breathe).toFixed(4);
      const scaleY = (((1 / stretch) * pulse * breathe)).toFixed(4);
      ringInner.style.transform = `rotate(${angle.toFixed(2)}deg) scale(${scaleX}, ${scaleY})`;

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dotRef, ringRef, ringInnerRef, velocityRef]);
}
