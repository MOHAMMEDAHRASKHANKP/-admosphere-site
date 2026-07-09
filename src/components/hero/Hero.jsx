import React from "react";
import { motion } from "framer-motion";
import Magnetic from "../ui/Magnetic";

import HeroBackground from "./HeroBackground";
import HeroScroll from "./HeroScroll";
import { FiArrowUpRight } from "react-icons/fi";

/* ── shared easing ── */
const ease = [0.22, 1, 0.36, 1];

/* ── individual element variants ── */
const item = (delay = 0) => ({
  initial: { opacity: 0, y: 36, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.9, ease, delay },
});

/* ── "Presence." letter-by-letter reveal ── */
const letters = "Presence.".split("");

function Hero() {
  return (
    <section className="hero" id="home">
      <HeroBackground />

      <div className="hero-container">
        <div className="hero-copy">

          {/* Eyebrow */}
          <motion.span className="eyebrow" {...item(0.1)}>
            <b />
            ADMOSPHERE
          </motion.span>

          {/* Heading */}
          <motion.h1 {...item(0.22)}>
            Where Brand
            <br />
            Becomes
            <br />
            <em className="hero-em">
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  className="hero-em-letter"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.55 + i * 0.045,
                    ease,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </em>
          </motion.h1>

          {/* Paragraph */}
          <motion.p {...item(0.42)}>
            We build high-converting websites, performance marketing,
            social media strategies, and digital experiences that help
            businesses grow faster.
          </motion.p>

          {/* Buttons */}
          <motion.div className="actions" {...item(0.58)}>
            <Magnetic>
              <a
                className="pill"
                href="#contact"
                data-cursor="button"
              >
                Get a Quote
                <span><FiArrowUpRight /></span>
              </a>
            </Magnetic>

            <a
              className="pill pill-outline"
              href="#work"
              data-cursor="work"
            >
              See Our Work
              <span className="pill-arrow">→</span>
            </a>
          </motion.div>

        </div>
      </div>

      <HeroScroll />
    </section>
  );
}

export default Hero;