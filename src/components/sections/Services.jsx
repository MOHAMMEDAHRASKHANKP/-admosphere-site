import React, { useState, useEffect } from "react";
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

  return (
    <Reveal className="service-reveal-wrapper" delay={index * 0.08}>
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
    </Reveal>
  );
}

function Services({ services, Reveal }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 700);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

          <div className="bento">
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
        </div>
      </div>
    </section>
  );
}

export default Services;
