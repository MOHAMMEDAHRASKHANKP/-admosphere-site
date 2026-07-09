import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   SVG chart helper — smooth cubic bezier from data points
───────────────────────────────────────────────────────────── */
const RAW = [14,20,17,28,24,36,32,44,40,52,48,60,56,67,63,73,69,79,75,84,80,88,84,91,87,94,90,96,93,100];

function buildPath(pts, W, H, fill = false) {
  const mapped = pts.map((v, i) => [
    (i / (pts.length - 1)) * W,
    H * 0.92 - (v / 100) * H * 0.84,
  ]);
  let d = `M ${mapped[0][0].toFixed(1)} ${mapped[0][1].toFixed(1)}`;
  for (let i = 1; i < mapped.length; i++) {
    const mx = ((mapped[i - 1][0] + mapped[i][0]) / 2).toFixed(1);
    d += ` C ${mx},${mapped[i - 1][1].toFixed(1)} ${mx},${mapped[i][1].toFixed(1)} ${mapped[i][0].toFixed(1)},${mapped[i][1].toFixed(1)}`;
  }
  if (fill) d += ` L ${(mapped[mapped.length - 1][0]).toFixed(1)} ${H} L ${mapped[0][0].toFixed(1)} ${H} Z`;
  return d;
}

/* ─────────────────────────────────────────────────────────────
   Tab data
───────────────────────────────────────────────────────────── */
const TABS = ['Analytics', 'Google Ads', 'Meta Ads'];

const TAB_COLOR  = { Analytics: '#1a73e8', 'Google Ads': '#ea4335', 'Meta Ads': '#1877f2' };
const TAB_ICON   = { Analytics: 'G', 'Google Ads': 'Ads', 'Meta Ads': 'f' };
const TAB_BADGE  = { Analytics: '#e8f0fe', 'Google Ads': '#fce8e6', 'Meta Ads': '#e7f0fd' };

const METRICS = {
  Analytics: [
    { label: 'Users',         value: '8,240',  trend: '↑ 12%',  up: true  },
    { label: 'Sessions',      value: '14.2K',  trend: '↑ 8%',   up: true  },
    { label: 'Bounce Rate',   value: '34.2%',  trend: '↓ 6%',   up: true  },
    { label: 'Avg. Duration', value: '3m 24s', trend: '↑ 18%',  up: true  },
  ],
  'Google Ads': [
    { label: 'Impressions',   value: '1.24L',  trend: '↑ 22%',  up: true  },
    { label: 'Clicks',        value: '4,820',  trend: '↑ 15%',  up: true  },
    { label: 'CTR',           value: '4.8%',   trend: '↑ 0.6%', up: true  },
    { label: 'ROAS',          value: '6.2×',   trend: '↑ 1.1×', up: true  },
  ],
  'Meta Ads': [
    { label: 'Reach',         value: '2.4L',   trend: '↑ 34%',  up: true  },
    { label: 'Leads',         value: '1,240',  trend: '↑ 28%',  up: true  },
    { label: 'CPL',           value: '₹ 124',  trend: '↓ 18%',  up: true  },
    { label: 'Conv. Rate',    value: '4.1%',   trend: '↑ 0.8%', up: true  },
  ],
};

const TOP_PAGES = [
  { page: '/ Homepage',  pct: 100, n: 48 },
  { page: '/services',   pct: 65,  n: 31 },
  { page: '/contact',    pct: 46,  n: 22 },
  { page: '/work',       pct: 33,  n: 16 },
];

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */
export default function ProcessVisual() {
  const [tab, setTab]         = useState('Analytics');
  const [liveN, setLiveN]     = useState(47);
  const [inView, setInView]   = useState(false);
  const ref                   = useRef(null);

  /* IntersectionObserver — triggers once */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  /* Simulated realtime counter — fluctuates like GA4 */
  useEffect(() => {
    const id = setInterval(() => {
      setLiveN(n => Math.max(34, Math.min(78, n + (Math.random() > 0.5 ? 1 : -1) * Math.ceil(Math.random() * 3))));
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const W = 440, H = 96;
  const linePath = buildPath(RAW, W, H, false);
  const areaPath = buildPath(RAW, W, H, true);
  const endY     = (H * 0.92 - (RAW[RAW.length - 1] / 100) * H * 0.84).toFixed(1);
  const color    = TAB_COLOR[tab];

  return (
    <motion.div
      ref={ref}
      className="pv-shell"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* ── window chrome ── */}
      <div className="pv-chrome">
        <div className="pv-chrome-dots">
          <i style={{ background: '#ff5f57' }} />
          <i style={{ background: '#febc2e' }} />
          <i style={{ background: '#28c840' }} />
        </div>
        <div className="pv-chrome-bar">
          <span className="pv-chrome-lock">🔒</span>
          <span>analytics.google.com/analytics</span>
        </div>
        <div className="pv-chrome-refresh">↻</div>
      </div>

      {/* ── google top nav ── */}
      <div className="pv-gnav">
        <div className="pv-gnav-logo">
          <span className="pv-g-letter" style={{ color: '#4285f4' }}>G</span>
          <span className="pv-g-letter" style={{ color: '#ea4335' }}>o</span>
          <span className="pv-g-letter" style={{ color: '#fbbc05' }}>o</span>
          <span className="pv-g-letter" style={{ color: '#4285f4' }}>g</span>
          <span className="pv-g-letter" style={{ color: '#34a853' }}>l</span>
          <span className="pv-g-letter" style={{ color: '#ea4335' }}>e</span>
          <span className="pv-gnav-product">&nbsp;Analytics</span>
        </div>
        <div className="pv-gnav-right">
          <div className="pv-live-chip">
            <span className="pv-live-pulse" />
            Live
          </div>
          <div className="pv-avatar">A</div>
        </div>
      </div>

      {/* ── platform tab bar ── */}
      <div className="pv-tabs">
        {TABS.map(t => (
          <button
            key={t}
            className={`pv-tab ${tab === t ? 'active' : ''}`}
            style={tab === t ? { color, borderBottomColor: color } : {}}
            onClick={() => setTab(t)}
          >
            <span
              className="pv-tab-icon"
              style={tab === t
                ? { background: TAB_BADGE[t], color }
                : {}}
            >
              {TAB_ICON[t]}
            </span>
            {t}
          </button>
        ))}
        <div className="pv-daterange">Jun 1 – Jun 30, 2026 ▾</div>
      </div>

      {/* ── metric cards ── */}
      <div className="pv-metrics" key={tab}>
        {METRICS[tab].map((m, i) => (
          <motion.div
            key={m.label}
            className="pv-metric"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: i * 0.07 }}
          >
            <div className="pv-metric-label">{m.label}</div>
            <div className="pv-metric-value">{m.value}</div>
            <div className={`pv-metric-trend ${m.up ? 'up' : 'dn'}`}>
              {m.trend}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── SVG line chart ── */}
      <div className="pv-chart" key={tab + '-chart'}>
        <div className="pv-chart-header">
          <span className="pv-chart-title">Users over time</span>
          <span className="pv-chart-legend" style={{ color }}>
            <span className="pv-legend-dot" style={{ background: color }} />
            Users
          </span>
        </div>

        <svg
          className="pv-svg"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`grad-${tab}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor={color} stopOpacity="0.15" />
              <stop offset="100%" stopColor={color} stopOpacity="0"    />
            </linearGradient>
          </defs>

          {/* horizontal grid lines */}
          {[0.25, 0.5, 0.75].map(r => (
            <line
              key={r}
              x1={0} y1={H * r}
              x2={W} y2={H * r}
              stroke="#e8eaed"
              strokeWidth="0.8"
            />
          ))}

          {/* filled area */}
          <motion.path
            d={areaPath}
            fill={`url(#grad-${tab})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />

          {/* animated line */}
          <motion.path
            d={linePath}
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: inView ? 1 : 0,
              opacity:    inView ? 1 : 0,
            }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.15 }}
          />

          {/* endpoint glowing dot */}
          <motion.circle
            cx={W}
            cy={endY}
            r="4"
            fill={color}
            filter={`drop-shadow(0 0 4px ${color})`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
            transition={{ delay: 1.7, duration: 0.35, type: 'spring' }}
          />
        </svg>

        <div className="pv-chart-x">
          {['Jun 1','Jun 7','Jun 14','Jun 21','Jun 28'].map(l => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>

      {/* ── realtime strip ── */}
      <div className="pv-realtime">
        <div className="pv-rt-left">
          <span className="pv-rt-dot" />
          <strong className="pv-rt-num">{liveN}</strong>
          <span className="pv-rt-label">users right now</span>
        </div>

        <div className="pv-pages">
          {TOP_PAGES.map((p, i) => (
            <div key={p.page} className="pv-page">
              <span className="pv-page-name">{p.page}</span>
              <div className="pv-page-track">
                <motion.div
                  className="pv-page-fill"
                  style={{ background: color }}
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${p.pct}%` : 0 }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: [0.22,1,0.36,1] }}
                />
              </div>
              <span className="pv-page-n">{p.n}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── footer status bar ── */}
      <div className="pv-footer">
        <div className="pv-platform-chips">
          {[
            { label: 'Google Ads',  color: '#ea4335', dot: '#4285f4' },
            { label: 'Meta Ads',    color: '#1877f2', dot: '#1877f2' },
            { label: 'SEO ↑ #2',   color: '#34a853', dot: '#34a853' },
            { label: 'Search',      color: '#fbbc05', dot: '#fbbc05' },
          ].map(p => (
            <span key={p.label} className="pv-chip" style={{ borderColor: p.dot + '44' }}>
              <i className="pv-chip-dot" style={{ background: p.dot }} />
              {p.label}
            </span>
          ))}
        </div>
        <div className="pv-sync">
          <span className="pv-sync-dot" />
          Synced 2s ago
        </div>
      </div>

    </motion.div>
  );
}
