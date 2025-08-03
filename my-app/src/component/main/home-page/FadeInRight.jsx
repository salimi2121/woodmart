import React, { useState, useEffect, useRef } from 'react';

const FadeInRight = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current?.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = divRef.current;
    const observer = observerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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