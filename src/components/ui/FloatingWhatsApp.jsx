import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./FloatingWhatsApp.css";

/* Official WhatsApp vector icon */
function OfficialWhatsAppIcon() {
  return (
    <svg viewBox="0 0 48 48" className="wa-icon" fill="none">
      <circle cx="24" cy="24" r="23" fill="#25D366" />
      <path
        d="M24.1 8.5C15.5 8.5 8.5 15.5 8.5 24.1C8.5 26.9 9.2 29.5 10.6 31.8L8.8 38.3L15.6 36.5C18.1 38 21 38.8 24.1 38.8C32.7 38.8 39.7 31.8 39.7 23.2C39.7 14.6 32.7 8.5 24.1 8.5ZM32.4 29.7C32 30.8 30.5 31.7 29.3 32C28.5 32.2 27.4 32.3 23.9 30.9C19.4 29 16.5 24.4 16.3 24.1C16.1 23.8 14.5 21.7 14.5 19.5C14.5 17.3 15.6 16.2 16.1 15.7C16.5 15.3 17 15.2 17.5 15.2C17.7 15.2 17.8 15.2 18 15.2C18.5 15.2 18.7 15.3 19 16C19.4 16.9 20.3 19.2 20.4 19.5C20.5 19.8 20.6 20.1 20.4 20.4C20.2 20.8 20.1 20.9 19.8 21.2C19.6 21.5 19.3 21.8 19.1 22C18.8 22.3 18.6 22.6 18.9 23.1C19.2 23.6 20.2 25.2 21.7 26.5C23.6 28.2 25.2 28.7 25.7 28.9C26.2 29.1 26.5 29.1 26.8 28.7C27.2 28.3 28.4 26.9 28.7 26.4C29 25.9 29.3 26 29.7 26.1C30.1 26.2 32.3 27.3 32.7 27.5C33.1 27.7 33.4 27.9 33.5 28C33.6 28.3 33.6 29.2 32.4 29.7Z"
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
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <OfficialWhatsAppIcon />

      <span>Chat with Admosphere</span>
    </motion.button>
  );
}
