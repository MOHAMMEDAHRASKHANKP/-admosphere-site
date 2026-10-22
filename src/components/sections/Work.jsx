import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiChevronDown, FiChevronUp, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Lock page scroll when full-screen viewer is open
  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalIndex]);

  // Close full-screen viewer on Escape key press (works on desktop too)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalIndex(null);
      } else if (activeModalIndex !== null) {
        if (e.key === 'ArrowRight') {
          setActiveModalIndex((prev) => (prev + 1) % projects.length);
        } else if (e.key === 'ArrowLeft') {
          setActiveModalIndex((prev) => (prev - 1 + projects.length) % projects.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex]);

  // Handle mobile View More / Show Less toggle
  const handleToggleMobile = () => {
    if (showAllMobile) {
      setShowAllMobile(false);
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setShowAllMobile(true);
    }
  };

  const activeProject = activeModalIndex !== null ? projects[activeModalIndex] : null;

  return (
    <section className="work-section" id="work" ref={sectionRef}>
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
        <div className={`work-grid ${showAllMobile ? 'show-all-mobile' : 'show-initial-mobile'}`}>
          {projects.map((project, i) => {
            const isExtraMobile = i >= 4;

            return (
              <motion.article
                className={`work-card ${isExtraMobile ? 'mobile-extra-card' : ''}`}
                key={project.id}
                data-cursor="work"
                tabIndex={0}
                role="button"
                aria-label={`Open project ${project.id}: ${project.name}`}
                onClick={() => setActiveModalIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalIndex(i);
                  }
                }}
                initial={{ opacity: 0, y: 52, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
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
            );
          })}
        </div>

        {/* ── Mobile-Only View All / Show Less Controls ────────────────── */}
        <div className="work-mobile-toggle-wrapper">
          <span className="work-mobile-counter">
            Showing {showAllMobile ? '8 of 8' : '4 of 8'}
          </span>

          <button
            type="button"
            className="work-mobile-pill-btn"
            onClick={handleToggleMobile}
            aria-label={showAllMobile ? 'Show less projects' : 'View all work'}
          >
            {showAllMobile ? (
              <>
                Show less <FiChevronUp className="work-toggle-icon" />
              </>
            ) : (
              <>
                View all work <FiChevronDown className="work-toggle-icon" />
              </>
            )}
          </button>
        </div>

        {/* ── Desktop / General Footer CTA ─────────────────────────── */}
        <Reveal className="work-footer">
          <a href="#contact" className="work-cta">
            Start your project
            <span className="work-cta-arrow" style={{ display: 'inline-flex', alignItems: 'center' }}><FiArrowUpRight /></span>
          </a>
        </Reveal>

      </div>

      {/* ── Fullscreen Work Viewer Modal (Mobile & Desktop) ──────────────── */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="work-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={() => setActiveModalIndex(null)}
            onTouchStart={(e) => {
              setTouchStart({
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
              });
            }}
            onTouchEnd={(e) => {
              const deltaX = e.changedTouches[0].clientX - touchStart.x;
              const deltaY = e.changedTouches[0].clientY - touchStart.y;

              // Swipe down closes
              if (deltaY > 70 && Math.abs(deltaY) > Math.abs(deltaX)) {
                setActiveModalIndex(null);
              }
              // Swipe left -> next
              else if (deltaX < -50 && Math.abs(deltaX) > Math.abs(deltaY)) {
                setActiveModalIndex((prev) => (prev + 1) % projects.length);
              }
              // Swipe right -> prev
              else if (deltaX > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
                setActiveModalIndex((prev) => (prev - 1 + projects.length) % projects.length);
              }
            }}
          >
            <div
              className="work-modal-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar: Counter & Close */}
              <div className="work-modal-top">
                <span className="work-modal-counter">
                  {activeProject.id} / 08
                </span>

                <button
                  type="button"
                  className="work-modal-close"
                  onClick={() => setActiveModalIndex(null)}
                  aria-label="Close"
                >
                  <FiX />
                </button>
              </div>

              {/* Modal Card Preview */}
              <div
                className="work-modal-art"
                style={{ background: activeProject.gradient }}
              >
                <span className="work-modal-art-num">{activeProject.id}</span>
              </div>

              {/* Modal Content */}
              <div className="work-modal-content">
                <span className="work-modal-category">{activeProject.category}</span>
                <h3 className="work-modal-title">{activeProject.name}</h3>

                <div className="work-modal-tags">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="work-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="work-modal-result">
                  <span className="work-result-dot" />
                  <strong>{activeProject.result}</strong>
                </div>
              </div>

              {/* Nav Arrows */}
              <div className="work-modal-nav">
                <button
                  type="button"
                  className="work-modal-arrow"
                  onClick={() =>
                    setActiveModalIndex((prev) => (prev - 1 + projects.length) % projects.length)
                  }
                  aria-label="Previous project"
                >
                  <FiChevronLeft />
                </button>

                <button
                  type="button"
                  className="work-modal-arrow"
                  onClick={() =>
                    setActiveModalIndex((prev) => (prev + 1) % projects.length)
                  }
                  aria-label="Next project"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Work;
