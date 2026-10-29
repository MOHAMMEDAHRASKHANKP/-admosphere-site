import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* ─── stat definitions ───────────────────────────────────────── */
const stats = [
  { rawNum: 184,  prefix: '+', suffix: '%',  label: 'Avg. Conversion Lift',    icon: '📈', cardClass: 'stat-card-1', side: 'left'   },
  { rawNum: 12,   prefix: '',  suffix: 'M+', label: 'Impressions Generated',   icon: '👁️', cardClass: 'stat-card-2', side: 'right'  },
  { rawNum: 3.4,  prefix: '',  suffix: '×',  label: 'Organic Growth',          icon: '🌱', cardClass: 'stat-card-3', side: 'left'   },
  { rawNum: 20,   prefix: '',  suffix: 'X',  label: 'Average ROAS',            icon: '🚀', cardClass: 'stat-card-4', side: 'right'  },
  { rawNum: 100,  prefix: '',  suffix: '+',  label: 'Brands Scaled',           icon: '🤝', cardClass: 'stat-card-5', side: 'center' },
];

/* Entrance direction per card on mobile */
const mobileEntranceOffset = { left: { x: -24, y: 0, scale: 1 }, right: { x: 24, y: 0, scale: 1 }, center: { x: 0, y: 24, scale: 0.9 } };

/* ─── easing helper ─────────────────────────────────────────── */
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/* ─── count-up hook ─────────────────────────────────────────── */
function useCountUp(target, duration = 1400, trigger = false, onDone = null) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const run = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    const isDecimal = !Number.isInteger(target);

    const step = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const val = eased * target;
      setDisplay(isDecimal ? parseFloat(val.toFixed(1)) : Math.round(val));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        if (onDone) onDone();
      }
    };

    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    if (trigger) run();
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [trigger]);

  return { display, rerun: run };
}

/* ─── individual mobile stat card ─────────────────────────────── */
function MobileStatCard({ stat, index, visible, scrollDelta }) {
  const cardRef = useRef(null);
  const shimmerRef = useRef(null);

  const triggerShimmer = () => {
    const el = shimmerRef.current;
    if (!el) return;
    el.classList.remove('shimmer-run');
    void el.offsetWidth;
    el.classList.add('shimmer-run');
  };

  const { display, rerun } = useCountUp(stat.rawNum, 1400, visible, triggerShimmer);

  /* parallax: left/right cards shift on scroll, center stays */
  const parallaxSign = stat.side === 'left' ? -1 : stat.side === 'right' ? 1 : 0;
  const parallaxY = Math.max(-6, Math.min(6, scrollDelta * 0.06 * parallaxSign));

  /* ── touch tilt ─────────────────────────────────────────── */
  const tiltRef = useRef({ x: 0, y: 0 });
  const hlRef = useRef(null);

  const onTouchStart = (e) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.05s ease, box-shadow 0.2s ease';
    card.style.boxShadow = '0 20px 50px rgba(166,3,4,0.22), inset 0 1px 0 #fff';
  };

  const onTouchMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (touch.clientX - cx) / (rect.width / 2);
    const dy = (touch.clientY - cy) / (rect.height / 2);
    const tiltX = -dy * 8;
    const tiltY =  dx * 8;
    tiltRef.current = { x: tiltX, y: tiltY };
    card.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${parallaxY}px)`;

    if (hlRef.current) {
      const hx = ((touch.clientX - rect.left) / rect.width) * 100;
      const hy = ((touch.clientY - rect.top) / rect.height) * 100;
      hlRef.current.style.background = `radial-gradient(circle at ${hx}% ${hy}%, rgba(255,255,255,0.55) 0%, transparent 70%)`;
    }
  };

  const onTouchEnd = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.55s cubic-bezier(.2,.9,.3,1.2), box-shadow 0.3s ease';
    card.style.transform = `translateY(${parallaxY}px)`;
    card.style.boxShadow = '';
    if (hlRef.current) hlRef.current.style.background = 'none';
  };

  /* ── tap: scale bounce + pulse + rerun count ── */
  const onTap = () => {
    const card = cardRef.current;
    if (!card) return;
    // Tap shrink-bounce
    card.style.transition = 'transform 0.12s ease';
    card.style.transform = `scale(0.95) translateY(${parallaxY}px)`;
    // pulse dot animation restart
    const dot = card.querySelector('.stat-pulse');
    if (dot) {
      dot.classList.remove('stat-pulse-tap');
      void dot.offsetWidth; // reflow
      dot.classList.add('stat-pulse-tap');
    }
    // spring back
    setTimeout(() => {
      if (card) {
        card.style.transition = 'transform 0.55s cubic-bezier(.2,.9,.3,1.2)';
        card.style.transform = `translateY(${parallaxY}px)`;
      }
      rerun();
      triggerShimmer();
    }, 120);
  };

  /* ── apply parallax from parent scroll ── */
  useEffect(() => {
    const card = cardRef.current;
    if (!card || stat.side === 'center') return;
    card.style.transform = `translateY(${parallaxY}px)`;
  }, [scrollDelta, stat.side, parallaxY]);

  /* ── entrance animation config ── */
  const { x, y, scale } = mobileEntranceOffset[stat.side];
  const staggerDelay = index * 0.12;

  const formattedNum = stat.rawNum === 3.4 ? display.toFixed(1) : display;

  return (
    <motion.div
      ref={cardRef}
      className={`stat-card ${stat.cardClass} mob-stat-card`}
      initial={{ opacity: 0, x, y, scale }}
      animate={visible ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x, y, scale }}
      transition={{ duration: 0.68, delay: staggerDelay, ease: [0.2, 0.9, 0.3, 1.2] }}
      onClick={onTap}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ willChange: 'transform, opacity', touchAction: 'pan-y' }}
    >
      {/* Moving highlight layer */}
      <div ref={hlRef} className="mob-card-highlight" aria-hidden="true" />
      {/* Shimmer overlay — JS-triggered via class */}
      <div ref={shimmerRef} className="mob-card-shimmer" aria-hidden="true" />

      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-value" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {stat.prefix}{formattedNum}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-pulse" />

      {/* Badge on 12M+ card (card index 1) */}
      {index === 1 && (
        <div className="mob-badge-wrap">
          <div className="stats-badge-ring mob-badge-ring" />
          <div className="stats-badge-inner">
            <span>ADMOSPHERE</span>
            <strong>RESULTS</strong>
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ─── desktop stat card (original, unchanged) ──────────────────── */
function DesktopStatCard({ stat, index }) {
  const delay = [0, 0.12, 0.24, 0.36, 0.48][index] ?? 0;
  const displayValue = stat.prefix + (stat.rawNum === 3.4 ? '3.4' : stat.rawNum) + stat.suffix;

  return (
    <motion.div
      className={`stat-card ${stat.cardClass}`}
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-value">{displayValue}</div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-pulse" />
    </motion.div>
  );
}

/* ─── GrowthEngine (main export) ───────────────────────────────── */
export default function GrowthEngine() {
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrollDelta, setScrollDelta] = useState(0);
  const containerRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const rafScroll = useRef(null);
  const reducedMotion = useRef(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  /* ── detect mobile ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 700);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── IntersectionObserver for entrance (mobile only) ── */
  useEffect(() => {
    if (!isMobile || !containerRef.current) return;
    if (reducedMotion.current) { setVisible(true); return; }

    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [isMobile]);

  /* ── Scroll parallax (mobile only) ── */
  useEffect(() => {
    if (!isMobile || reducedMotion.current) return;

    const onScroll = () => {
      if (rafScroll.current) return;
      rafScroll.current = requestAnimationFrame(() => {
        const delta = window.scrollY - lastScrollY.current;
        lastScrollY.current = window.scrollY;
        setScrollDelta(delta);
        rafScroll.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafScroll.current) cancelAnimationFrame(rafScroll.current);
    };
  }, [isMobile]);

  /* ── DESKTOP render ── */
  if (!isMobile) {
    return (
      <div className="stats-visual">
        <div className="stats-bg-glow" />
        {stats.map((stat, i) => <DesktopStatCard key={stat.label} stat={stat} index={i} />)}
        {/* Desktop center badge */}
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

  /* ── MOBILE render ── */
  return (
    <div
      className={`stats-visual mob-stats-visual${visible ? ' mob-stats-visible' : ''}`}
      ref={containerRef}
    >
      <div className="stats-bg-glow" />
      {stats.map((stat, i) => (
        <MobileStatCard
          key={stat.label}
          stat={stat}
          index={i}
          visible={visible}
          scrollDelta={scrollDelta}
        />
      ))}
    </div>
  );
}
