import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Magnetic from "../ui/Magnetic";
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';

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
  const nudgedRef = useRef(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Update dots via throttled/passive scroll listener on mobile
  useEffect(() => {
    const bento = bentoRef.current;
    if (!bento) return;

    let ticking = false;
    const handleScroll = () => {
      if (!hasSwiped) setHasSwiped(true);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollLeft = bento.scrollLeft;
          const card = bento.querySelector(".service");
          if (card) {
            const cardWidth = card.offsetWidth + 14; // card width + gap
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(Math.max(0, Math.min(services.length - 1, index)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    bento.addEventListener("scroll", handleScroll, { passive: true });
    return () => bento.removeEventListener("scroll", handleScroll);
  }, [services.length, hasSwiped]);

  // One-time nudge effect when section first enters screen
  useEffect(() => {
    const section = sectionRef.current;
    const bento = bentoRef.current;
    if (!section || !bento || window.innerWidth >= 768) return;

    // Skip if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !nudgedRef.current) {
            nudgedRef.current = true;
            bento.classList.add("bento-nudge");
            setTimeout(() => {
              bento.classList.remove("bento-nudge");
            }, 850);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section"
      id="services"
      ref={sectionRef}
    >
      <div className="section-inner">
        <Reveal className="section-head">
          <span className="kicker">OUR SERVICES</span>
          <h2>Everything your business needs to grow.</h2>
          <p>
            From attracting customers to building your online presence,
            we create marketing systems that help local businesses
            generate more leads, more sales, and long-term growth.
          </p>
        </Reveal>

        {/* Mobile Swipe Hint */}
        <div className={`services-swipe-hint ${hasSwiped ? "hint-hidden" : ""}`}>
          <span>Swipe</span>
          <FiArrowRight className="swipe-arrow" />
        </div>

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

          {/* Mobile Pagination Dots */}
          <div className="services-dots-container" aria-label="Services carousel navigation">
            {services.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`service-dot ${i === activeIndex ? "active" : ""}`}
                aria-label={`Go to service ${i + 1}`}
                onClick={() => {
                  const bento = bentoRef.current;
                  if (bento) {
                    const card = bento.querySelectorAll(".service")[i];
                    if (card) {
                      card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
                    }
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
