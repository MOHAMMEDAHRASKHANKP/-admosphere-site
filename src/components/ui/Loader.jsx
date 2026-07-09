import React from 'react';
import { motion } from 'framer-motion';

import logoMark from '../../../1000202446-red.png';

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loader-content"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.img
          src={logoMark}
          alt="Admosphere"
          className="loader-logo"
          initial={{
            scale: 0.55,
            opacity: 0,
            rotate: -8,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: [0, 2, -2, 0],
            y: [0, -5, 0],
          }}
          transition={{
            scale: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: {
              duration: 0.6,
            },
            rotate: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />

        <motion.h1
          className="loader-title"
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="loader-ad"
            variants={{
              hidden: {
                opacity: 0,
                y: 18,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.45,
              delay: 0.25,
            }}
          >
            AD
          </motion.span>

          <motion.span
            className="loader-mosphere"
            variants={{
              hidden: {
                opacity: 0,
                x: 50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.75,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            MOSPHERE
          </motion.span>

          <span className="loader-shine"></span>
        </motion.h1>

        <motion.p
          className="loader-tagline"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 0.7,
            y: 0,
          }}
          transition={{
            delay: 0.9,
            duration: 0.5,
          }}
        >
          Designing Digital Presence
        </motion.p>

        <div className="loader-bar">
          <motion.div
            className="loader-bar-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: 'left center',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Loader;