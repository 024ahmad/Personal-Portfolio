"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  duration: string;
  delay: string;
  size: number;
}

export function SakuraPetals({ count = 18 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const arr: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${8 + Math.random() * 10}s`,
      delay: `${Math.random() * 8}s`,
      size: 8 + Math.random() * 10,
    }));
    setPetals(arr);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </div>
  );
}
