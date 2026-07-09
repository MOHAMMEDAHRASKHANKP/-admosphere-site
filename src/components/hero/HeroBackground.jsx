import React from 'react';

export default function HeroBackground() {
  return (
    <>
      {/* Warm amber orb — fills right side of desktop hero */}
      <div className="hero-glow-a" />

      {/* Smaller coral accent orb */}
      <div className="hero-glow-b" />

      {/* Subtle grid overlay */}
      <div className="hero-grid" />

      {/* Edge vignette */}
      <div className="vignette" />
    </>
  );
}