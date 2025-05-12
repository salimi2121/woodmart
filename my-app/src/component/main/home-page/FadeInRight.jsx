import React, { useState, useEffect, useRef } from 'react';

const FadeInRight = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(divRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={`opacity-0 ${isVisible ? 'animate-fade-in-Right opacity-100' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInRight;