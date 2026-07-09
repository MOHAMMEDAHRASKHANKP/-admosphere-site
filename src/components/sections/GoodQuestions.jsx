import React from 'react';

function GoodQuestions({ Reveal }) {
  const questions = [
    [
      'What does a typical engagement look like?',
      'We begin with a focused discovery sprint, then build a measurable 90-day roadmap around your strongest growth opportunities.',
    ],
    [
      'Do you work with brands outside Kerala?',
      'Yes. Our process is remote-first and we work with ambitious teams across India and international markets.',
    ],
    [
      'How quickly can we start?',
      'Most projects begin within two to three weeks after scope, goals, and access requirements are confirmed.',
    ],
  ];

  return (
    <section className="section faq">
      <div className="section-inner">
        <Reveal className="section-head">
          <span className="kicker">Good questions</span>
          <h2>Before we begin.</h2>
        </Reveal>

        <div className="faq-list">
          {questions.map((q, i) => (
            <details key={q[0]}>
              <summary>
                <span>0{i + 1} &nbsp; {q[0]}</span>
                <b>+</b>
              </summary>
              <p>{q[1]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GoodQuestions;