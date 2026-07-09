import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

import logoMark from '../../../1000202446-red.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScroll = useRef(0);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 40);

      if (!menuOpen) {
        if (
          currentScroll > lastScroll.current &&
          currentScroll > 120
        ) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, [menuOpen]);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            className={`navbar ${
              scrolled ? 'navbar-scrolled' : ''
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{
              duration: 0.35,
              ease: 'easeInOut',
            }}
          >
            <a className="brand" href="#top">
              <img
                className="brand-logo"
                src={logoMark}
                alt="Admosphere"
              />
              <span className="brand-text"><span style={{ color: '#a60304' }}>AD</span>MOSPHERE</span>
            </a>

            <div className="navlinks">
  <a href="#services">Services</a>

  <a href="#work">Work</a>

  <a href="#process">Process</a>
</div>

<a
  href="#contact"
  className="pill small"
>
  Start a project <FiArrowUpRight />
</a>

<button
              className="menu-toggle"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              aria-label="Menu"
            >
              {menuOpen ? (
                <HiX />
              ) : (
                <HiOutlineMenuAlt3 />
              )}
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#work" onClick={closeMenu}>
              Work
            </a>

            <a href="#process" onClick={closeMenu}>
              Process
            </a>

            <a
              href="#contact"
              className="pill"
              onClick={closeMenu}
            >
              Start a project <FiArrowUpRight />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;