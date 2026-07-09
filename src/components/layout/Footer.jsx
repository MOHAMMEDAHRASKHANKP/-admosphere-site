import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

function Footer({ Reveal }) {
  const footerWords = [
    'Brand Presence',
    'Digital Experiences',
    'Performance Growth',
    'Creative Direction',
    'Strategy Systems',
  ];

  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  const FooterMarquee = () => (
    <div className="cinema-marquee-track">
      {[...footerWords, ...footerWords, ...footerWords].map(
        (word, i) => (
          <React.Fragment key={`${word}-${i}`}>
            <span>{word}</span>
            <b>✦</b>
          </React.Fragment>
        )
      )}
    </div>
  );

  const MagneticLink = ({
    children,
    className = '',
    ...props
  }) => (
    <motion.a
      className={`cinema-pill ${className}`}
      whileHover={{ y: -6, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 18,
      }}
      {...props}
    >
      {children}
    </motion.a>
  );

  return (
    <section className="cinema-footer" id="footer">
      <div className="cinema-grid" />
      <div className="cinema-aurora" />
      <div className="cinema-bg-word">
        ADMOSPHERE
      </div>

      <div className="cinema-marquee">
        <FooterMarquee />
      </div>

      <div className="cinema-center">
        <Reveal>
          <span className="kicker">
            Ready when you are
          </span>

          <h2>
            Ready to build
            <br />
            your presence?
          </h2>
        </Reveal>

        <div className="cinema-actions">
          <MagneticLink
            href="https://mail.google.com/mail/?view=cm&fs=1&to=admosphere.digital@gmail.com"
            className="primary"
          >
            Start a project <FiArrowUpRight style={{ marginLeft: '6px' }} />
          </MagneticLink>

          <MagneticLink href="#services">
            Services
          </MagneticLink>

          <MagneticLink href="#work">
            Selected work
          </MagneticLink>

          <MagneticLink href="https://instagram.com/admosphere.inn">
            Instagram
          </MagneticLink>
        </div>
      </div>

      <div className="cinema-bottom">

        <small>
          © 2026 Admosphere. All rights reserved.
        </small>
        
        <motion.button
          className="top-button"
          onClick={scrollTop}
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      </div>
    </section>
  );
}

export default Footer;