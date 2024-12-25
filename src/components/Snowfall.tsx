'use client';

import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Create initial snowflakes
    const initialSnowflakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
    }));

    setSnowflakes(initialSnowflakes);

    const animateSnowflakes = () => {
      setSnowflakes(prev => prev.map(flake => ({
        ...flake,
        y: flake.y + flake.speed,
        x: flake.x + Math.sin(flake.y / 30) * 0.5,
        ...(flake.y > window.innerHeight ? {
          y: -10,
          x: Math.random() * window.innerWidth
        } : {})
      })));
    };

    const intervalId = setInterval(animateSnowflakes, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white opacity-80"
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
        />
      ))}
    </div>
  );
} 