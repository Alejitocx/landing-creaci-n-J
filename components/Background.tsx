import React, { useEffect, useState } from 'react';

interface HeartStyle {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  fontSize: string;
  opacity: number;
}

export const Background: React.FC = () => {
  const [hearts, setHearts] = useState<HeartStyle[]>([]);

  useEffect(() => {
    // Generate static hearts on mount to avoid hydration mismatch
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${10 + Math.random() * 20}s`, // Slower, more romantic float
      animationDelay: `${Math.random() * -20}s`, // Start at random positions
      fontSize: `${1 + Math.random() * 2}rem`,
      opacity: 0.3 + Math.random() * 0.4,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {hearts.map((style) => (
        <div
          key={style.id}
          className="absolute text-rose-400 select-none animate-float"
          style={{
            left: style.left,
            bottom: '-10%',
            animationDuration: style.animationDuration,
            animationDelay: style.animationDelay,
            fontSize: style.fontSize,
            opacity: style.opacity,
            transform: 'translateY(0) rotate(0deg)',
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};