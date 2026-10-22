import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const projects = [
  {
    id: '01',
    name: 'Kora Living',
    category: 'Brand System · E-commerce',
    result: '+184% Conversion',
    tags: ['Brand Identity', 'Web Design'],
    gradient:
      'linear-gradient(135deg, #18090a 0%, #4a0d11 48%, #9e2329 100%)', // Deep maroon to dark red
  },
  {
    id: '02',
    name: 'Nila Studios',
    category: 'Launch Campaign · Social',
    result: '12M Impressions',
    tags: ['Social Media', 'Content'],
    gradient:
      'linear-gradient(135deg, #161211 0%, #291b1a 45%, #69211f 100%)', // Warm charcoal to deep brick
  },
  {
    id: '03',
    name: 'Mango Works',
    category: 'Web Experience · SEO',
    result: '3.4× Organic Growth',
    tags: ['SEO', 'Web Dev'],
    gradient:
      'linear-gradient(135deg, #1f0b0d 0%, #5e1317 48%, #c44f3d 100%)', // Deep maroon to soft coral
  },
  {
    id: '04',
    name: 'Zenith Apparel',
    category: 'Meta Ads · Performance',
    result: '6.2× ROAS',
    tags: ['Meta Ads', 'Creative'],
    gradient:
      'linear-gradient(135deg, #141110 0%, #301716 48%, #7c2222 100%)', // Charcoal to dark red
  },
  {
    id: '05',
    name: 'Aura Hospitality',
    category: 'Brand Elevation · Booking UX',
    result: '+215% Direct Bookings',
    tags: ['UI/UX', 'Google Ads'],
    gradient:
      'linear-gradient(135deg, #240c0e 0%, #6e181c 50%, #db6c56 100%)', // Rich burgundy to soft coral
  },
  {
    id: '06',
    name: 'Solis Energy',
    category: 'Lead Gen Engine · B2B',
    result: '420+ Qualified Leads/mo',
    tags: ['Performance', 'Landing Page'],
    gradient:
      'linear-gradient(135deg, #151211 0%, #261b1a 48%, #541d1d 100%)', // Warm charcoal to deep wine
  },
  {
    id: '07',
    name: 'Vogue Dental Care',
    category: 'Local Dominance · Meta Ads',
    result: '4.8× Patient Growth',
    tags: ['Local SEO', 'Video Ads'],
    gradient:
      'linear-gradient(135deg, #1c0a0c 0%, #4f1115 48%, #8e2024 100%)', // Deep maroon to dark ruby
  },
  {
    id: '08',
    name: 'Pulse Fitness Hub',
    category: 'Rebrand · Membership Scale',
    result: '1,400+ Active Members',
    tags: ['Brand Strategy', 'Reels Production'],
    gradient:
      'linear-gradient(135deg, #210e0f 0%, #5c181b 48%, #e05e4c 100%)', // Deep maroon to vibrant coral
  },
];

function Work({ Reveal }) {
  return (
    <section className="work-section" id="work">
      {/* Background glow behind header */}
      <div className="work-bg-glow" aria-hidden="true" />

      <div className="work-container">

        {/* ── Header ─────────────────────────────── */}
        <Reveal className="work-header">
          <span className="work-label">Selected Work</span>

          <div className="work-header-row">
            <h2 className="work-title">
              Results with a
              <br />
              <em>point of view.</em>
            </h2>

            <p className="work-subtitle">
              Each project is built around a clear outcome. We measure
              success by your growth, not our output.
            </p>
          </div>
        </Reveal>

        {/* ── Project Grid ───────────────────────── */}
        <div className="work-grid">
          {projects.map((project, i) => (
            <motion.article
              className="work-card"
              key={project.id}
              data-cursor="work"
              initial={{ opacity: 0, y: 52, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{
                duration: 0.72,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Gradient art panel with bottom fade overlay */}
              <div
                className="work-art"
                style={{ background: project.gradient }}
              >
                <span className="work-num">{project.id}</span>
              </div>

              {/* Info */}
              <div className="work-info">
                <div className="work-info-top">
                  <h3 className="work-name">{project.name}</h3>
                  <p className="work-category">{project.category}</p>
                </div>

                <div className="work-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="work-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="work-result">
                  <span className="work-result-dot" />
                  <strong>{project.result}</strong>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Footer CTA ─────────────────────────── */}
        <Reveal className="work-footer">
          <a href="#contact" className="work-cta">
            Start your project
            <span className="work-cta-arrow" style={{ display: 'inline-flex', alignItems: 'center' }}><FiArrowUpRight /></span>
          </a>
        </Reveal>

      </div>
    </section>
  );
}

export default Work;
