"use client"
import React, { useEffect, useRef, useState } from 'react';


const Tset = () => {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      });
    });

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={elementRef}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: isIntersecting ? 'lightgreen' : 'lightblue',
          marginTop: '500px',
        }}
      >
        {/* 要素の内容 */}
      </div>
      {isIntersecting && (
        <p>要素が画面に入りました</p>
      )}
    </div>
  );
};

export default Tset;
