import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./FloatingWhatsApp.css";

/* Official WhatsApp White Phone Vector Glyph */
function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 32 32" className="wa-glyph" fill="none">
      <path
        d="M16 2.5C8.5 2.5 2.5 8.5 2.5 16C2.5 18.6 3.2 21.1 4.5 23.2L3 29L9 27.5C11.1 28.7 13.5 29.5 16 29.5C23.5 29.5 29.5 23.5 29.5 16C29.5 8.5 23.5 2.5 16 2.5ZM23.2 21.4C22.8 22.4 21.5 23.2 20.4 23.5C19.7 23.7 18.7 23.8 15.6 22.5C11.6 20.8 9 16.7 8.8 16.4C8.6 16.1 7.2 14.3 7.2 12.3C7.2 10.3 8.2 9.3 8.6 8.9C9 8.5 9.5 8.4 9.9 8.4C10.1 8.4 10.2 8.4 10.4 8.4C10.8 8.4 11 8.5 11.2 9.1C11.6 9.9 12.4 12 12.5 12.2C12.6 12.5 12.7 12.8 12.5 13.1C12.3 13.4 12.2 13.5 12 13.8C11.8 14.1 11.5 14.3 11.3 14.5C11.1 14.8 10.9 15 11.2 15.5C11.5 15.9 12.3 17.3 13.7 18.5C15.4 20 16.8 20.5 17.3 20.7C17.7 20.9 18 20.8 18.2 20.5C18.6 20.1 19.6 18.9 19.9 18.4C20.2 18 20.5 18.1 20.8 18.2C21.2 18.3 23.2 19.3 23.5 19.5C23.9 19.7 24.1 19.8 24.2 20C24.3 20.2 24.3 21 23.2 21.4Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const progress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);

      setVisible(progress > 0.2);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Admosphere 👋\n\nI'd like to discuss my project."
    );

    window.open(
      `https://wa.me/919778792144?text=${message}`,
      "_blank"
    );
  };

  return (
    <motion.button
      className={`floating-whatsapp ${visible ? "show" : ""}`}
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="wa-icon-box">
        <WhatsAppGlyph />
      </div>

      <span className="wa-label">Chat with Admosphere</span>
    </motion.button>
  );
}
