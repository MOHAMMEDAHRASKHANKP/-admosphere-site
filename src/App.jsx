import React, { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/hero/Hero";

import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import Cursor from "./components/ui/Cursor";
import Loader from "./components/ui/Loader";
import Reveal from "./components/ui/Reveal";
import ScrollProgress from "./components/ui/ScrollProgress";
import { lazy, Suspense } from 'react';
import TickerBand from "./components/ui/TickerBand";

import "./styles/depth-enhancements.css";

const WhyAdmosphere = lazy(() => import('./components/sections/WhyAdmosphere'));
const Services = lazy(() => import('./components/sections/Services'));
const Process = lazy(() => import('./components/sections/Process'));
const Work = lazy(() => import('./components/sections/Work'));
const GoodQuestions = lazy(() => import('./components/sections/GoodQuestions'));
const CTA = lazy(() => import('./components/sections/CTA'));
const WhatsAppPopup = lazy(() => import('./components/ui/WhatsAppPopup'));

import { services } from "./data/services";

import useLenis from "./hooks/useLenis";

function App() {
  useLenis();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />

      <Navbar />

      <FloatingWhatsApp />

      <Cursor />

      {/* Ambient depth layers */}
      <div className="ambient-glows-container" aria-hidden="true">
        <div className="ambient-glow-peach" />
        <div className="ambient-glow-red" />
        <div className="ambient-glow-center" />
      </div>
      <div className="ambient-grid" aria-hidden="true" />
      <div className="ambient-grain" aria-hidden="true" />

      <main id="top">
        <Hero />

        {/* ── Marquee Band ── */}
        <div className="marquee-section">
          <div className="marquee-row">
            <div className="marquee-track">
              {[
                'Brand Strategy',
                'Digital Experiences',
                'Web Development',
                'Google Ads',
                'Meta Ads',
                'SEO',
                'Performance Marketing',
                'Social Media',
                'DOOH Advertising',
                'Video Production',
                'Content Marketing',
                'UI UX Design',
                // duplicate for seamless loop
                'Brand Strategy',
                'Digital Experiences',
                'Web Development',
                'Google Ads',
                'Meta Ads',
                'SEO',
                'Performance Marketing',
                'Social Media',
                'DOOH Advertising',
                'Video Production',
                'Content Marketing',
                'UI UX Design',
              ].map((text, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span className="marquee-item">{text}</span>
                  <span className="marquee-sep"></span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <Suspense fallback={null}>
          <Services
            services={services}
            Reveal={Reveal}
          />

          <hr className="section-divider" aria-hidden="true" />

          <WhyAdmosphere />

          <TickerBand />

          <Work Reveal={Reveal} />

          <hr className="section-divider" aria-hidden="true" />

          <Process Reveal={Reveal} />

          <hr className="section-divider" aria-hidden="true" />

          <GoodQuestions Reveal={Reveal} />

          <hr className="section-divider" aria-hidden="true" />

          <CTA Reveal={Reveal} />
        </Suspense>
      </main>

      <Footer Reveal={Reveal} />

      <Suspense fallback={null}>
        <WhatsAppPopup />
      </Suspense>
    </>
  );
}

export default App;