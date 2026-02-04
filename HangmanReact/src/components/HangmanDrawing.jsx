import React from 'react';

const BODY_PARTS = [
  <circle key="head" cx="140" cy="70" r="20" stroke="black" strokeWidth="4" fill="none" />,
  <line key="body" x1="140" y1="90" x2="140" y2="150" stroke="black" strokeWidth="4" />,
  <line key="right-arm" x1="140" y1="110" x2="170" y2="130" stroke="black" strokeWidth="4" />,
  <line key="left-arm" x1="140" y1="110" x2="110" y2="130" stroke="black" strokeWidth="4" />,
  <line key="right-leg" x1="140" y1="150" x2="170" y2="180" stroke="black" strokeWidth="4" />,
  <line key="left-leg" x1="140" y1="150" x2="110" y2="180" stroke="black" strokeWidth="4" />,
];

export default function HangmanDrawing({ incorrectGuesses }) {
  return (
    <div className="hangman-drawing">
      <p>Wrong guesses: {incorrectGuesses}</p>
      <svg height="250" width="200" className="hangman-svg">
        {/* Gallows */}
        <line x1="20" y1="230" x2="180" y2="230" stroke="black" strokeWidth="4" />
        <line x1="60" y1="20" x2="60" y2="230" stroke="black" strokeWidth="4" />
        <line x1="60" y1="20" x2="140" y2="20" stroke="black" strokeWidth="4" />
        <line x1="140" y1="20" x2="140" y2="50" stroke="black" strokeWidth="4" />

        {/* Body parts based on incorrectGuesses */}
        {BODY_PARTS.slice(0, incorrectGuesses)}
      </svg>
    </div>
  );
}
