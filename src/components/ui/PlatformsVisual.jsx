import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   SVG Platform Icons — hand-crafted, brand-accurate
───────────────────────────────────────────────────────────── */

function IconGoogleAds() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="10" cy="36" r="8" fill="#FBBC04" />
      <circle cx="38" cy="36" r="8" fill="#34A853" />
      <circle cx="24" cy="12" r="8" fill="#4285F4" />
      <line x1="10" y1="36" x2="24" y2="12" stroke="#4285F4" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="24" y1="12" x2="38" y2="36" stroke="#EA4335" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );
}

function IconMeta() {
  return (
    <svg viewBox="0 0 48 30" fill="none">
      <path
        d="M6 15 C6 8, 11 4, 16 7 C19.5 9.5, 22 13, 24 15 C26 17, 28.5 20.5, 32 23 C37 26, 42 22, 42 15 C42 8, 37 4, 32 7 C28.5 9.5, 26 13, 24 15 C22 17, 19.5 20.5, 16 23 C11 26, 6 22, 6 15Z"
        fill="#1877F2"
      />
    </svg>
  );
}

function IconGA4() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="4"  y="28" width="10" height="16" rx="3" fill="#4285F4" />
      <rect x="19" y="18" width="10" height="26" rx="3" fill="#FBBC04" />
      <rect x="34" y="8"  width="10" height="36" rx="3" fill="#34A853" />
      <rect x="4"  y="4"  width="10" height="10" rx="5" fill="#EA4335" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="ig1" cx="30%" cy="107%" r="115%">
          <stop offset="0%"  stopColor="#feda75" />
          <stop offset="20%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="80%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </radialGradient>
      </defs>
      <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#ig1)" />
      <rect x="13" y="13" width="22" height="22" rx="7" stroke="#fff" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="6" stroke="#fff" strokeWidth="2.5" fill="none" />
      <circle cx="34" cy="14" r="2" fill="#fff" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg viewBox="0 0 48 34" fill="none">
      <rect width="48" height="34" rx="9" fill="#FF0000" />
      <path d="M20 9.5 L34 17 L20 24.5 Z" fill="#fff" />
    </svg>
  );
}

function IconSEO() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="21" cy="21" r="13" stroke="#34A853" strokeWidth="4" fill="none" />
      <line x1="30" y1="30" x2="44" y2="44" stroke="#4285F4" strokeWidth="4" strokeLinecap="round" />
      <path d="M15 21 L18 24 L27 15" stroke="#FBBC04" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#25D366" />
      <path
        d="M34 29.5 C34 29.5 31.5 28.8 30 28 C28.5 27.2 28 26.5 28 26.5 L25.5 28 C23 26, 21 24, 19.5 21.5 L21 19 C21 19 20.2 18.5 19.4 17 C18.6 15.5 17.8 13 17.8 13 L14 13 C14 13, 13 25, 24 35 C24 35 36 34, 36 30.2 L34 29.5Z"
        fill="#fff"
      />
    </svg>
  );
}

function IconDOOH() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="4" y="6" width="40" height="26" rx="4" fill="#7C3AED" />
      <rect x="8" y="10" width="32" height="18" rx="2" fill="#EDE9FE" />
      <rect x="13" y="14" width="7" height="10" rx="1" fill="#7C3AED" opacity=".6" />
      <rect x="22" y="17" width="7" height="7"  rx="1" fill="#7C3AED" opacity=".8" />
      <rect x="31" y="11" width="5" height="13" rx="1" fill="#7C3AED" />
      <rect x="20" y="32" width="8" height="10" rx="2" fill="#7C3AED" />
      <rect x="12" y="40" width="24" height="3" rx="1.5" fill="#7C3AED" opacity=".5" />
    </svg>
  );
}

function IconCreative() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="14" cy="14" r="8"  fill="#FF6B35" />
      <circle cx="34" cy="14" r="8"  fill="#FFD700" />
      <circle cx="14" cy="34" r="8"  fill="#4285F4" />
      <circle cx="34" cy="34" r="8"  fill="#34A853" />
      <circle cx="24" cy="24" r="7"  fill="#fff" />
      <circle cx="24" cy="24" r="4"  fill="#FF6B35" opacity=".7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Platform data — 100% genuine
───────────────────────────────────────────────────────────── */

const platforms = [
  {
    name:    'Google Ads',
    tagline: 'Search · Display · Shopping',
    badge:   'Paid',
    color:   '#4285F4',
    ring:    'rgba(66,133,244,.22)',
    Icon:    IconGoogleAds,
  },
  {
    name:    'Meta Ads',
    tagline: 'Facebook · Instagram · Audience',
    badge:   'Paid',
    color:   '#1877F2',
    ring:    'rgba(24,119,242,.22)',
    Icon:    IconMeta,
  },
  {
    name:    'Google Analytics 4',
    tagline: 'Tracking · Insights · Reports',
    badge:   'Analytics',
    color:   '#E37400',
    ring:    'rgba(227,116,0,.22)',
    Icon:    IconGA4,
  },
  {
    name:    'Instagram',
    tagline: 'Reels · Stories · Organic Growth',
    badge:   'Social',
    color:   '#D62976',
    ring:    'rgba(214,41,118,.22)',
    Icon:    IconInstagram,
  },
  {
    name:    'YouTube Ads',
    tagline: 'Video Ads · Brand Reach',
    badge:   'Video',
    color:   '#FF0000',
    ring:    'rgba(255,0,0,.18)',
    Icon:    IconYouTube,
  },
  {
    name:    'SEO',
    tagline: 'Rank · Traffic · Authority',
    badge:   'Organic',
    color:   '#34A853',
    ring:    'rgba(52,168,83,.22)',
    Icon:    IconSEO,
  },
  {
    name:    'WhatsApp Business',
    tagline: 'Campaigns · CRM · Conversions',
    badge:   'CRM',
    color:   '#25D366',
    ring:    'rgba(37,211,102,.22)',
    Icon:    IconWhatsApp,
  },
  {
    name:    'DOOH Advertising',
    tagline: 'Billboards · Screens · Outdoor',
    badge:   'OOH',
    color:   '#7C3AED',
    ring:    'rgba(124,58,237,.22)',
    Icon:    IconDOOH,
  },
  {
    name:    'Creative Studio',
    tagline: 'Design · Video · Content',
    badge:   'Creative',
    color:   '#FF6B35',
    ring:    'rgba(255,107,53,.22)',
    Icon:    IconCreative,
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 28, scale: 0.94 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */

export default function PlatformsVisual() {
  return (
    <div className="plat-wrap">

      {/* header */}
      <div className="plat-header">
        <span className="plat-header-dot" />
        <span className="plat-header-text">Platforms we run your campaigns on</span>
      </div>

      {/* grid */}
      <div className="plat-grid">
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            className="plat-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            whileHover={{
              y: -6,
              boxShadow: `0 16px 40px ${p.ring}, 0 0 0 1.5px ${p.color}44`,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }}
            style={{ '--plat-color': p.color, '--plat-ring': p.ring }}
          >
            {/* icon */}
            <div className="plat-icon-wrap">
              <p.Icon />
            </div>

            {/* text */}
            <div className="plat-info">
              <span className="plat-name">{p.name}</span>
              <span className="plat-tagline">{p.tagline}</span>
            </div>

            {/* badge */}
            <span
              className="plat-badge"
              style={{
                color:           p.color,
                background:      p.ring,
                borderColor:     p.color + '33',
              }}
            >
              {p.badge}
            </span>
          </motion.div>
        ))}
      </div>

      {/* footer note */}
      <p className="plat-note">
        Every campaign is managed end-to-end across these platforms — no outsourcing, no shortcuts.
      </p>

    </div>
  );
}
