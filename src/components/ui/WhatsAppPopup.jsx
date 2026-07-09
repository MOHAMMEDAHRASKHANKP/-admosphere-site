import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WhatsAppPopup.css";

export default function WhatsAppPopup() {
  const [show, setShow] = useState(false);
  const [goodbye, setGoodbye] = useState(false);

  // Show popup after 15 seconds (once per session)
  useEffect(() => {
    if (sessionStorage.getItem("admosphere-popup")) return;

    const timer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem("admosphere-popup", "shown");
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  // Close with ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  // Open WhatsApp
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Admosphere 👋\n\nI'm interested in your services. Can we discuss my project?"
    );

    window.open(
      `https://wa.me/919778792144?text=${message}`,
      "_blank"
    );

    setShow(false);
  };

  // Maybe later
  const handleLater = () => {
    setGoodbye(true);

    setTimeout(() => {
      setShow(false);
      setGoodbye(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShow(false)}
        >
          <motion.div
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              className="popup-close-btn"
              onClick={() => setShow(false)}
              aria-label="Close"
            >
              &times;
            </button>
            {!goodbye ? (
              <>
                <div className="popup-icon">💬</div>

              <h2>Before You Go 👋</h2>

<p>
  Looking to grow your business with better marketing,
  websites, or branding?
  <br />
  Let's have a quick conversation on WhatsApp.
</p>

                <div className="popup-buttons">
                  <motion.button
                    className="chat-btn"
                    onClick={openWhatsApp}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Chat on WhatsApp
                  </motion.button>

                  <motion.button
                    className="later-btn"
                    onClick={handleLater}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Maybe Later
                  </motion.button>
                </div>
              </>
            ) : (
              <>
                <motion.div
                  className="popup-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  }}
                >
                  🥺
                </motion.div>

                <h2>Thanks for visiting ❤️</h2>

              <p>
  Whenever you're ready to grow your business,
  Admosphere is just one WhatsApp message away.
</p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}