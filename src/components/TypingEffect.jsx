import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, typingSpeed = 10 }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const length = text.length;
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < length - 1) {
        setContent(prevContent => prevContent + text[i]);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, typingSpeed]);

  return <div className="typing-container">{content}</div>;
};

export default TypingEffect;
