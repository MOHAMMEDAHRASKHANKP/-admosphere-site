import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Magnetic from "../ui/Magnetic";
import { FiArrowUpRight } from 'react-icons/fi';

function ServiceCard({
  service,
  index,
  Reveal,
  isMobile,
  isActive,
}) {
  const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=admosphere.digital@gmail.com&su=${encodeURIComponent(`Inquiry about ${service.title} (${service.tags.join(', ')})`)}`;

  const cardInner = (
    <div className={`service s${index + 1} ${isMobile && isActive ? "is-active" : ""}`}>
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

  if (isMobile) {
    return (
      <motion.div
        className="service-reveal-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.48,
          delay: Math.min(index * 0.06, 0.25),
        }}
      >
        {cardInner}
      </motion.div>
    );
  }

  return (
    <Reveal className="service-reveal-wrapper" delay={index * 0.08}>
      {cardInner}
    </Reveal>
  );
}

function Services({ services, Reveal }) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 700;
    }
    return false;
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSwiped, setHasSwiped] = useState(false);
  const bentoRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 700);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const el = bentoRef.current;
    if (!el) return;

    const onScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (!el) return;
        if (!hasSwiped && el.scrollLeft > 15) {
          setHasSwiped(true);
        }

        const cards = el.querySelectorAll(".service-reveal-wrapper");
        if (!cards.length) return;

        const containerCenter = el.scrollLeft + el.clientWidth / 2;
        let closestIdx = 0;
        let minDistance = Infinity;

        cards.forEach((card, i) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const distance = Math.abs(containerCenter - cardCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIdx = i;
          }
        });

        setActiveIndex(closestIdx);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isMobile, hasSwiped]);

  const scrollToCard = (index) => {
    if (!bentoRef.current) return;
    const el = bentoRef.current;
    const cards = el.querySelectorAll(".service-reveal-wrapper");
    if (cards[index]) {
      const card = cards[index];
      const targetScroll = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
      el.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
      setActiveIndex(index);
      setHasSwiped(true);
    }
  };

  return (
    <section className="section" id="services">
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
                isActive={activeIndex === index}
              />
            ))}
          </div>

          {isMobile && (
            <div className="services-carousel-controls">
              <div className="services-dots">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`services-dot ${activeIndex === idx ? "is-active" : ""}`}
                    onClick={() => scrollToCard(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className={`services-swipe-hint ${hasSwiped ? "is-hidden" : ""}`}>
                <span>SWIPE</span>
                <span className="swipe-arrow" aria-hidden="true">→</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;
