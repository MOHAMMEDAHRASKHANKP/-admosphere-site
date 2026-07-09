import React from "react";
import { motion } from "framer-motion";
import "../../styles/Why-admosphere.css";
import GrowthEngine from "../ui/GrowthEngine";
const principles = [
  {
    number: "01",
    title: "Move Faster.",
    description:
      "We work efficiently without sacrificing quality, helping your business launch sooner and adapt quickly.",
  },
  {
    number: "02",
    title: "Think Before Building.",
    description:
      "Every project starts by understanding your business, customers, and goals before we create anything.",
  },
  {
    number: "03",
    title: "Designed for Every Screen.",
    description:
      "Every website and campaign is crafted to perform beautifully across mobile, tablet, laptop, and desktop.",
  },
  {
    number: "04",
    title: "Built Together.",
    description:
      "From the first conversation to launch, you'll work directly with our team every step of the way.",
  },
];

export default function WhyAdmosphere() {
  return (
    <section className="section why-admosphere">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">OUR PRINCIPLES</span>

          <h2 className="section-title">
            Growth Doesn't Happen
            <br />
            By Chance.
          </h2>

          <p className="section-description">
            Every decision we make—from strategy to launch—is designed to help
            your business grow with confidence.
          </p>
        </div>

        <div className="why-layout">
          <div className="why-left">
            <GrowthEngine />
          </div>

          <div className="why-right">
            {principles.map((item, index) => (
              <motion.div
                key={item.number}
                className="principle"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <span className="principle-number">{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
