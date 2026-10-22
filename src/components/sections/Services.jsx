import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Magnetic from "../ui/Magnetic";
import { FiArrowUpRight } from 'react-icons/fi';

function ServiceCard({
  service,
  index,
  Reveal,
  isMobile,
}) {
  const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=admosphere.digital@gmail.com&su=${encodeURIComponent(`Inquiry about ${service.title} (${service.tags.join(', ')})`)}`;

  const content = (
    <div className={`service s${index + 1}`}>
      <Magnetic
        strength={0}
        tilt={isMobile ? 0 : 2}
        scale={isMobile ? 1 : 1.003}
      >
        <a
          href={mailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="service-card-link"
          aria-label={`Get a quote for ${service.title}`}
        >
          <div
            className="service-glass"
            style={{
              transformStyle: isMobile ? "flat" : "preserve-3d",
            }}
          >
            <div
              className="service-top"
              style={{
                transform: isMobile ? "none" : "translateZ(42px)",
              }}
            >
              <span className="number">
                {service.n} / CAPABILITY
              </span>

              <motion.span
                className="symbol"
                whileHover={isMobile ? undefined : {
                  rotate: 12,
                  scale: 1.12,
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
              >
                {service.icon}
              </motion.span>
            </div>

            <div
              className="service-copy"
              style={{
                transform: isMobile ? "none" : "translateZ(60px)",
              }}
            >
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </div>

            <div
              className="service-tags"
              style={{
                transform: isMobile ? "none" : "translateZ(52px)",
              }}
            >
              {service.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={isMobile ? undefined : {
                    y: -3,
                    scale: 1.05,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div
              className="service-foot"
              style={{
                transform: isMobile ? "none" : "translateZ(68px)",
              }}
            >
              <strong>{service.result}</strong>

              <span className="service-quote-pill">
                Get a quote <FiArrowUpRight className="service-pill-arrow" />
              </span>
            </div>
          </div>
        </a>
      </Magnetic>
    </div>
  );

  // On mobile: render plain div with no scroll-retriggering opacity/transform animations to eliminate blink/flicker
  if (isMobile) {
    return content;
  }

  return (
    <Reveal className={`service-reveal-wrapper`}>
      {content}
    </Reveal>
  );
}

function Services({
  services,
  Reveal,
}) {
  const bentoRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSwiped, setHasSwiped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Update dots via passive scroll listener on mobile
  useEffect(() => {
    const bento = bentoRef.current;
    if (!bento) return;

    let ticking = false;
    const handleScroll = () => {
      if (!hasSwiped) {
        setHasSwiped(true);
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollLeft = bento.scrollLeft;
          const cards = bento.querySelectorAll(".service");
          if (cards.length > 0) {
            let closestIndex = 0;
            let minDiff = Infinity;
            cards.forEach((card, idx) => {
              const diff = Math.abs(card.offsetLeft - 20 - scrollLeft);
              if (diff < minDiff) {
                minDiff = diff;
                closestIndex = idx;
              }
            });
            setActiveIndex(closestIndex);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    bento.addEventListener("scroll", handleScroll, { passive: true });
    return () => bento.removeEventListener("scroll", handleScroll);
  }, [hasSwiped]);

  // Handle dot click navigation
  const handleDotClick = (i) => {
    const bento = bentoRef.current;
    if (!bento) return;
    const cards = bento.querySelectorAll(".service");
    const targetCard = cards[i];
    if (targetCard) {
      const scrollPos = targetCard.offsetLeft - 20;
      bento.scrollTo({ left: scrollPos, behavior: "smooth" });
      setActiveIndex(i);
    }
  };

  return (
    <section
      className="section"
      id="services"
      ref={sectionRef}
    >
      <div className="section-inner">
        <Reveal className="section-head">
          <span className="section-num-watermark" aria-hidden="true">01</span>
          <span className="kicker">OUR SERVICES</span>
          <h2>Everything your business needs to grow.</h2>
          <p>
            From attracting customers to building your online presence,
            we create marketing systems that help local businesses
            generate more leads, more sales, and long-term growth.
          </p>
        </Reveal>

        <div className="service-atmosphere">
          <div className="service-glow glow-a" />
          <div className="service-glow glow-b" />

          <div className="bento" ref={bentoRef}>
            {services.map((service, index) => (
              <ServiceCard
                key={service.n}
                service={service}
                index={index}
                Reveal={Reveal}
                isMobile={isMobile}
              />
            ))}
          </div>

          {/* Mobile Dots and Swipe Text on the same row below cards */}
          <div className="services-mobile-nav" aria-label="Services carousel navigation">
            <div className="services-dots-container">
              {services.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`service-dot ${i === activeIndex ? "active" : ""}`}
                  aria-label={`Go to service ${i + 1}`}
                  onClick={() => handleDotClick(i)}
                />
              ))}
            </div>

            <div
              className={`services-swipe-hint ${hasSwiped ? "hint-hidden" : ""}`}
              aria-hidden={hasSwiped ? "true" : "false"}
            >
              <span>Swipe</span>
              <span className="swipe-arrow" aria-hidden="true">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
