import React, { useState, useEffect, useRef } from 'react';

const FadeInUp = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // استفاده از entry.target به جای divRef.current
          observerRef.current?.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = divRef.current;
    const observer = observerRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement && observer) {
        observer.unobserve(currentElement);
      }
      // قطع کامل observer
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={`opacity-0 transition-opacity duration-500 ${
        isVisible ? 'animate-fade-in-up opacity-100' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInUp;