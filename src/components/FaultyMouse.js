'use client';

import { useEffect } from 'react';

export default function FaultyMouse({ active = true }) {
  useEffect(() => {
    if (!active) return;

    const scrollSpeed = 2.6;

    function handleWheel(e) {
      e.preventDefault();
      window.scrollBy({
        top: -e.deltaY * scrollSpeed,
        left: -e.deltaX * scrollSpeed,
        behavior: 'auto'
      });
    }

    function handleKeyDown(e) {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        window.scrollBy({ top: -180, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollBy({ top: 180, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        window.scrollBy({ left: 180, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        window.scrollBy({ left: -180, behavior: 'smooth' });
      } else if (e.key === 'PageDown') {
        e.preventDefault();
        window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
      } else if (e.key === ' ' && !e.shiftKey) {
        e.preventDefault();
        window.scrollBy({ top: -window.innerHeight * 0.65, behavior: 'smooth' });
      } else if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);

  return null;
}
