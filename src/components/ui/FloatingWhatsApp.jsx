import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsApp.css";

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
      <FaWhatsapp className="wa-icon" />

      <span>Chat with Admosphere</span>
    </motion.button>
  );
}