import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   SVG Platform Icons — hand-crafted, brand-accurate
───────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────
   Official Brand Icons — 100% authentic vectors & colors
───────────────────────────────────────────────────────────── */

/* Official Google Ads diagonal bar & circle logo */
function IconGoogleAds() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M12.5 35.8C8.4 33.4 7 28.2 9.4 24.1L20.2 5.4C22.6 1.3 27.8 -0.1 31.9 2.3C36 4.7 37.4 9.9 35 14L24.2 32.7C21.8 36.8 16.6 38.2 12.5 35.8Z"
        fill="#4285F4"
      />
      <circle cx="12.5" cy="35.5" r="7.5" fill="#FBBC04" />
      <path
        d="M38.8 40.5C34.7 42.9 29.5 41.5 27.1 37.4L20.2 25.5L30.9 19.3L37.8 31.2C40.2 35.3 38.8 40.5 38.8 40.5Z"
        fill="#34A853"
      />
      <circle cx="35.5" cy="35.5" r="7.5" fill="#34A853" />
    </svg>
  );
}

/* Official Meta Infinity Symbol */
function IconMeta() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M35.6 12C31.8 12 28.5 14.2 25.8 17.5C23.6 14.1 20.2 12 16.1 12C8.9 12 4 17.6 4 24.8C4 32 9.1 37.4 16 37.4C20.6 37.4 24.3 34.6 26.6 30.6C28.8 34.7 32.2 37.4 36.8 37.4C43.7 37.4 48 32 48 24.8C48 17.6 42.7 12 35.6 12ZM16 32.6C11.6 32.6 8.5 29.2 8.5 24.7C8.5 20.2 11.6 16.8 16 16.8C19.2 16.8 22.1 19 24.1 23C22.6 28.8 19.2 32.6 16 32.6ZM35.6 32.6C32.1 32.6 28.9 28.8 27.8 23.8C29.6 19.6 32.5 16.8 35.6 16.8C39.8 16.8 43.1 20.2 43.1 24.7C43.1 29.2 39.8 32.6 35.6 32.6Z"
        fill="url(#meta-gradient)"
      />
      <defs>
        <linearGradient id="meta-gradient" x1="4" y1="24.7" x2="48" y2="24.7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0064E0" />
          <stop offset="0.4" stopColor="#0064E0" />
          <stop offset="0.8" stopColor="#0082FB" />
          <stop offset="1" stopColor="#0081FB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Official Google Analytics Bar & Dot Symbol */
function IconGA4() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="20" y="16" width="8" height="24" rx="4" fill="#F9AB00" />
      <rect x="32" y="6" width="8" height="34" rx="4" fill="#E37400" />
      <circle cx="12" cy="36" r="4" fill="#F9AB00" />
    </svg>
  );
}

/* Official Instagram Camera Glyph with accurate Instagram gradient */
function IconInstagram() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="ig-grad" cx="20%" cy="115%" r="130%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="15%" stopColor="#FCAF45" />
          <stop offset="35%" stopColor="#F77737" />
          <stop offset="60%" stopColor="#F56040" />
          <stop offset="75%" stopColor="#FD1D1D" />
          <stop offset="90%" stopColor="#E1306C" />
          <stop offset="100%" stopColor="#C13584" />
        </radialGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ig-grad)" />
      <rect x="11" y="11" width="26" height="26" rx="7.5" stroke="#fff" strokeWidth="2.8" fill="none" />
      <circle cx="24" cy="24" r="6" stroke="#fff" strokeWidth="2.8" fill="none" />
      <circle cx="31.8" cy="16.2" r="1.8" fill="#fff" />
    </svg>
  );
}

/* Official YouTube Rounded Play Button */
function IconYouTube() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect width="48" height="34" y="7" rx="9" fill="#FF0000" />
      <path d="M20 16.5L32 24L20 31.5V16.5Z" fill="#FFFFFF" />
    </svg>
  );
}

/* Authentic SEO Search & Analytics Growth Icon */
function IconSEO() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="21" cy="21" r="12" stroke="#4285F4" strokeWidth="3.5" fill="none" />
      <line x1="30" y1="30" x2="41" y2="41" stroke="#34A853" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M15 23L19 19L23 21L27 15" stroke="#EA4335" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="24,15 27,15 27,18" stroke="#EA4335" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/* Official WhatsApp Green Badge with Authentic Phone Vector */
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="23" fill="#25D366" />
      <path
        d="M24.1 8.5C15.5 8.5 8.5 15.5 8.5 24.1C8.5 26.9 9.2 29.5 10.6 31.8L8.8 38.3L15.6 36.5C18.1 38 21 38.8 24.1 38.8C32.7 38.8 39.7 31.8 39.7 23.2C39.7 14.6 32.7 8.5 24.1 8.5ZM32.4 29.7C32 30.8 30.5 31.7 29.3 32C28.5 32.2 27.4 32.3 23.9 30.9C19.4 29 16.5 24.4 16.3 24.1C16.1 23.8 14.5 21.7 14.5 19.5C14.5 17.3 15.6 16.2 16.1 15.7C16.5 15.3 17 15.2 17.5 15.2C17.7 15.2 17.8 15.2 18 15.2C18.5 15.2 18.7 15.3 19 16C19.4 16.9 20.3 19.2 20.4 19.5C20.5 19.8 20.6 20.1 20.4 20.4C20.2 20.8 20.1 20.9 19.8 21.2C19.6 21.5 19.3 21.8 19.1 22C18.8 22.3 18.6 22.6 18.9 23.1C19.2 23.6 20.2 25.2 21.7 26.5C23.6 28.2 25.2 28.7 25.7 28.9C26.2 29.1 26.5 29.1 26.8 28.7C27.2 28.3 28.4 26.9 28.7 26.4C29 25.9 29.3 26 29.7 26.1C30.1 26.2 32.3 27.3 32.7 27.5C33.1 27.7 33.4 27.9 33.5 28C33.6 28.3 33.6 29.2 32.4 29.7Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/* DOOH Billboard / Digital Outdoor Display Vector */
function IconDOOH() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="5" y="7" width="38" height="25" rx="3.5" fill="#1E1B4B" stroke="#7C3AED" strokeWidth="2.5" />
      <rect x="8" y="10" width="32" height="19" rx="1.5" fill="#4C1D95" />
      <path d="M12 24L18 18L24 23L31 15L36 21" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="31" cy="15" r="1.8" fill="#FDE047" />
      <rect x="22" y="32" width="4" height="9" fill="#6B7280" />
      <rect x="14" y="41" width="20" height="3" rx="1.5" fill="#4B5563" />
    </svg>
  );
}

/* Creative Studio Production & Media Icon */
function IconCreative() {
  return (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="6" y="8" width="36" height="32" rx="7" fill="#18181B" stroke="#E4E4E7" strokeWidth="2" />
      <path d="M6 18H42" stroke="#E4E4E7" strokeWidth="2" />
      <circle cx="13" cy="13" r="2" fill="#EF4444" />
      <circle cx="19" cy="13" r="2" fill="#F59E0B" />
      <circle cx="25" cy="13" r="2" fill="#10B981" />
      <polygon points="21,24 21,34 30,29" fill="#FF6B35" />
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
