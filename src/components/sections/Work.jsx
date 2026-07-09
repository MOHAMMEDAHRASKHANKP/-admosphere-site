import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    name: 'Kora Living',
    category: 'Brand System · E-commerce',
    result: '+184% Conversion',
    tags: ['Brand Identity', 'Web Design'],
    gradient:
      'linear-gradient(135deg, #1a0505 0%, #7a0808 48%, #d4855e 100%)',
  },
  {
    id: '02',
    name: 'Nila Studios',
    category: 'Launch Campaign · Social',
    result: '12M Impressions',
    tags: ['Social Media', 'Content'],
    gradient:
      'linear-gradient(135deg, #060e1b 0%, #0e2a52 48%, #4a72bf 100%)',
  },
  {
    id: '03',
    name: 'Mango Works',
    category: 'Web Experience · SEO',
    result: '3.4× Organic Growth',
    tags: ['SEO', 'Web Dev'],
    gradient:
      'linear-gradient(135deg, #091209 0%, #1a4a18 48%, #52a04a 100%)',
  },
  {
    id: '04',
    name: 'Zenith Apparel',
    category: 'Meta Ads · Performance',
    result: '6.2× ROAS',
    tags: ['Meta Ads', 'Creative'],
    gradient:
      'linear-gradient(135deg, #120510 0%, #5c1050 48%, #c45890 100%)',
  },
];

function Work({ Reveal }) {
  return (
    <section className="work-section" id="work">
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
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.72,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Gradient art panel */}
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
            <span className="work-cta-arrow">↗</span>
          </a>
        </Reveal>

      </div>
    </section>
  );
}

export default Work;