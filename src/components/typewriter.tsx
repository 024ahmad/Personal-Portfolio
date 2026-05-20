"use client";

import { useEffect, useRef, useState } from "react";

export function Typewriter({
  text,
  speed = 55,
  delay = 0,
  className = "",
  showCursor = true,
  onDone,
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onDone?: () => void;
}) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          if (interval) clearInterval(interval);
          setDone(true);
          onDoneRef.current?.();
        }
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {out}
      {showCursor && (
        <span
          className={`inline-block w-[0.08em] -mb-1 ml-0.5 bg-current align-baseline ${
            done ? "animate-pulse" : ""
          }`}
          style={{ height: "0.95em" }}
          aria-hidden
        />
      )}
    </span>
  );
}

/** Sequenced multi-line typewriter — types lines one after another, then stays static */
export function TypewriterSequence({
  lines,
  speed = 55,
  startDelay = 0,
  gap = 250,
  finalCursor = false,
}: {
  lines: { text: string; className?: string; speed?: number }[];
  speed?: number;
  startDelay?: number;
  gap?: number;
  finalCursor?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>(
    () => lines.map(() => false)
  );

  return (
    <>
      {lines.map((l, idx) => {
        const isPending = idx > active;
        const isDone = completed[idx];
        const isActive = idx === active && !isDone;

        return (
          <span key={idx} className={l.className ?? "block"}>
            {isPending && <span className="opacity-0">{l.text}</span>}

            {isDone && (
              <>
                {l.text}
                {finalCursor && idx === lines.length - 1 && (
                  <span
                    className="inline-block w-[0.08em] -mb-1 ml-0.5 bg-current align-baseline animate-pulse"
                    style={{ height: "0.95em" }}
                    aria-hidden
                  />
                )}
              </>
            )}

            {isActive && (
              <Typewriter
                text={l.text}
                speed={l.speed ?? speed}
                delay={idx === 0 ? startDelay : 0}
                showCursor
                onDone={() => {
                  setCompleted((c) => {
                    if (c[idx]) return c;
                    const next = [...c];
                    next[idx] = true;
                    return next;
                  });
                  if (idx < lines.length - 1) {
                    setTimeout(() => setActive((a) => Math.max(a, idx + 1)), gap);
                  }
                }}
              />
            )}
          </span>
        );
      })}
    </>
  );
}
