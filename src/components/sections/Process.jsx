import React from 'react';
import { motion } from 'framer-motion';
import PlatformsVisual from '../ui/PlatformsVisual';

function Process({ Reveal }) {
  const steps = [
    ['Discover', 'Find the real opportunity.'],
    ['Define', 'Build the strategic system.'],
    ['Create', 'Make the work impossible to ignore.'],
    ['Scale', 'Measure, learn, and compound.'],
  ];

  return (
    <section className="section process" id="process">
      <div className="section-inner">
        <Reveal className="section-head">
          <span className="kicker">The process</span>
          <h2>Clear thinking. Fast movement.</h2>
        </Reveal>

        <div className="process-showcase">
          {/* ── real platforms grid ── */}
          <PlatformsVisual />

          {/* ── step cards ── */}
          <div className="steps">
            {steps.map((step, i) => (
              <Reveal
                className="step"
                key={step[0]}
                delay={i * 0.09}
                whileHover={{ y: -10, scale: 1.018 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <motion.span
                  className="step-num"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 18,
                    delay: 0.1 + i * 0.09,
                  }}
                >
                  0{i + 1}
                </motion.span>
                <h3>{step[0]}</h3>
                <p>{step[1]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
