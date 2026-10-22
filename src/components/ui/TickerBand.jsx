import React from 'react';

const TickerBand = () => {
  const items = [
    'Brand Presence',
    'Digital Experiences',
    'Performance Growth',
    'Creative Direction',
    'Strategy Systems',
    'Full-Stack Media',
    'Growth Infrastructure',
  ];

  return (
    <div className="section-ticker-strip" aria-hidden="true">
      <div className="section-ticker-track">
        {[...items, ...items, ...items, ...items].map((word, i) => (
          <React.Fragment key={`${word}-${i}`}>
            <span>{word}</span>
            <b className="ticker-dot">✦</b>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TickerBand;
