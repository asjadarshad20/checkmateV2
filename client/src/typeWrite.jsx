import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, onAnimationComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setCompleted(true);
      onAnimationComplete(); // Trigger the callback when animation completes
    }
  }, [currentIndex, delay, onAnimationComplete, text]);

  return (
    <span className={`intoText ${completed ? 'translated' : ''}`}>{currentText}</span>
  );
};

export default Typewriter;
