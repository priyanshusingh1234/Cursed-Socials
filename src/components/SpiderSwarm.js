'use client';

import { useEffect, useRef } from 'react';

export default function SpiderSwarm({ active, onDismiss }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (active) {
      try {
        const audio = new Audio('/spiders-crawl.mp3');
        audio.loop = true;
        audio.play().catch(() => {});
        audioRef.current = audio;
      } catch (e) {}
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="spider-gang-fullscreen" onClick={onDismiss} title="Click anywhere to dismiss spiders">
      <img
        src="/assets/spiders-walking.gif"
        alt="spiders walking"
        className="spider-gang-gif"
      />
    </div>
  );
}
