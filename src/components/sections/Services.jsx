import React from "react";
import { motion } from "framer-motion";

import Magnetic from "../ui/Magnetic";

import { FiArrowUpRight } from 'react-icons/fi';

function ServiceCard({
  service,
  index,
  Reveal,
}) {
  const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=admosphere.digital@gmail.com&su=${encodeURIComponent(`Inquiry about ${service.title} (${service.tags.join(', ')})`)}`;

  return (
    <Reveal className={`service s${index + 1}`}>
      <Magnetic
        strength={0}
        tilt={2}
        scale={1.003}
      >
        <a
          href={mailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="service-card-link"
          aria-label={`Get a quote for ${service.title}`}
        >
          <motion.div
            className="service-glass"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="service-top"
              style={{
                transform: "translateZ(42px)",
              }}
            >
              <span className="number">
                {service.n} / CAPABILITY
              </span>

              <motion.span
                className="symbol"
                whileHover={{
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
                transform: "translateZ(60px)",
              }}
            >
              <h3>{service.title}</h3>

              <p>{service.copy}</p>
            </div>

            <div
              className="service-tags"
              style={{
                transform: "translateZ(52px)",
              }}
            >
              {service.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{
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
                transform: "translateZ(68px)",
              }}
            >
              <strong>{service.result}</strong>

              <span className="service-quote-pill">
                Get a quote <FiArrowUpRight className="service-pill-arrow" />
              </span>
            </div>
          </motion.div>
        </a>
      </Magnetic>
    </Reveal>
  );
}

function Services({
  services,
  Reveal,
}) {
  return (
    <section
      className="section"
      id="services"
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
