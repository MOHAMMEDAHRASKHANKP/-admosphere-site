import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '+184%',
    label: 'Avg. Conversion Lift',
    icon: '📈',
    delay: 0,
  },
  {
    value: '12M+',
    label: 'Impressions Generated',
    icon: '👁️',
    delay: 0.15,
  },
  {
    value: '3.4×',
    label: 'Organic Growth',
    icon: '🌱',
    delay: 0.28,
  },
];

export default function GrowthEngine() {
  return (
    <div className="stats-visual">
      {/* Ambient radial glow behind cards */}
      <div className="stats-bg-glow" />

      {/* Floating metric cards */}
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className={`stat-card stat-card-${i + 1}`}
          initial={{ opacity: 0, scale: 0.88, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.68,
            delay: stat.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
          {/* Live-indicator pulse dot */}
          <div className="stat-pulse" />
        </motion.div>
      ))}

      {/* Center badge */}
      <div className="stats-center-badge">
        <div className="stats-badge-ring" />
        <div className="stats-badge-inner">
          <span>ADMOSPHERE</span>
          <strong>RESULTS</strong>
        </div>
      </div>
    </div>
  );
}