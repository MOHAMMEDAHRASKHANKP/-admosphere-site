import React, { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/hero/Hero";

import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import Cursor from "./components/ui/Cursor";
import Loader from "./components/ui/Loader";
import Reveal from "./components/ui/Reveal";
import ScrollProgress from "./components/ui/ScrollProgress";
import WhyAdmosphere from "./components/sections/WhyAdmosphere";
import WhatsAppPopup from "./components/ui/WhatsAppPopup";

import {
  Services,
  Process,
  Work,
  GoodQuestions,
  CTA,
} from "./components/sections";

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

        <Services
          services={services}
          Reveal={Reveal}
        />

        <WhyAdmosphere />

        <Work Reveal={Reveal} />

        <Process Reveal={Reveal} />

        <GoodQuestions Reveal={Reveal} />

        <CTA Reveal={Reveal} />
      </main>

      <Footer Reveal={Reveal} />

      <WhatsAppPopup />
    </>
  );
}

export default App;