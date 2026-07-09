import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

function CTA({ Reveal }) {
  return (
    <section className="cta" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Animated background glow */}
      <motion.div
        className="cta-glow-blob"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="cta-glow-blob cta-glow-blob-2"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Reveal className="cta-content">
        <span className="kicker">
          Your next chapter
        </span>

        <h2>
          Let's make your brand
          <br />
          <em>impossible to ignore.</em>
        </h2>

        <motion.a
          className="pill light cta-email-btn"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=admosphere.digital@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
          initial="rest"
        >
          admosphere.digital@gmail.com
          <motion.span
            className="cta-arrow"
            variants={{
              rest: { x: 0, rotate: 0 },
              hover: { x: 5, rotate: 45 },
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <FiArrowUpRight />
          </motion.span>
        </motion.a>
      </Reveal>
    </section>
  );
}

export default CTA;