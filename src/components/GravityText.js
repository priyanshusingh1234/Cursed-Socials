'use client';

import { useEffect, useRef } from 'react';

export default function GravityText({ active }) {
  const rafRef = useRef(null);
  const scrollTimerRef = useRef(null);
  const fallingRef = useRef(false);
  const dropsRef = useRef([]);

  useEffect(() => {
    if (!active) {
      resetAllText();
      return;
    }

    const selectors = '.shape-title, .shape-desc, .shape-meta, .shape-badge, .faq-question, .faq-answer, .box-title, .box-desc, .box-rule, .box-highlight, .prize-highlight, .prize-notes p, .priyanshu-about-title, .priyanshu-quote, .priyanshu-meta, .about-badge, .steps-list p, .criteria-box p, .box-step-tag, .nav-text';

    function getTextEls() {
      return Array.from(document.querySelectorAll(selectors));
    }

    function startFalling() {
      if (fallingRef.current) return;
      fallingRef.current = true;

      const els = getTextEls();
      dropsRef.current = els.map(el => ({
        el,
        y: 0,
        vel: 0,
        accel: 0.15 + Math.random() * 0.25,
        wobble: (Math.random() - 0.5) * 0.6,
        maxFall: 60 + Math.random() * 90
      }));

      function tick() {
        if (!fallingRef.current) return;

        let allDone = true;
        for (let i = 0; i < dropsRef.current.length; i++) {
          const d = dropsRef.current[i];
          if (d.y < d.maxFall) {
            d.vel += d.accel;
            d.y = Math.min(d.y + d.vel, d.maxFall);
            allDone = false;
          }
          d.el.style.transform = `translateY(${d.y}px) rotate(${d.wobble * (d.y / d.maxFall)}deg)`;
          d.el.style.transition = 'none';
        }

        if (!allDone) {
          rafRef.current = requestAnimationFrame(tick);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    function stopFalling() {
      fallingRef.current = false;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      for (let i = 0; i < dropsRef.current.length; i++) {
        const d = dropsRef.current[i];
        d.el.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        d.el.style.transform = '';
      }
      dropsRef.current = [];
    }

    function onScroll() {
      if (fallingRef.current) {
        stopFalling();
      }
      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        startFalling();
      }, 1800);
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    scrollTimerRef.current = setTimeout(() => {
      startFalling();
    }, 3000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      fallingRef.current = false;
      resetAllText();
    };
  }, [active]);

  function resetAllText() {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    fallingRef.current = false;
    for (let i = 0; i < dropsRef.current.length; i++) {
      const d = dropsRef.current[i];
      d.el.style.transition = 'transform 0.3s ease';
      d.el.style.transform = '';
    }
    dropsRef.current = [];
  }

  return null;
}
