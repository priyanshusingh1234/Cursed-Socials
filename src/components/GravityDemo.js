'use client';

import { useState, useRef, useEffect } from 'react';

export default function GravityDemo() {
  const [isFalling, setIsFalling] = useState(false);
  const rafRef = useRef(null);
  const elementsRef = useRef([]);
  const cardRef = useRef(null);

  function triggerDrop() {
    if (isFalling) {
      reset();
      return;
    }

    if (!cardRef.current) return;
    const targets = cardRef.current.querySelectorAll('.gravity-target');
    if (!targets.length) return;

    setIsFalling(true);

    elementsRef.current = Array.from(targets).map(el => ({
      el,
      y: 0,
      vel: 0,
      accel: 0.2 + Math.random() * 0.25,
      maxFall: 45 + Math.random() * 60,
      wobble: (Math.random() - 0.5) * 8
    }));

    function frame() {
      let done = true;
      elementsRef.current.forEach(item => {
        if (item.y < item.maxFall) {
          item.vel += item.accel;
          item.y = Math.min(item.y + item.vel, item.maxFall);
          done = false;
        }
        item.el.style.transform = `translateY(${item.y}px) rotate(${item.wobble * (item.y / item.maxFall)}deg)`;
        item.el.style.transition = 'none';
      });

      if (!done) {
        rafRef.current = requestAnimationFrame(frame);
      }
    }

    rafRef.current = requestAnimationFrame(frame);
  }

  function reset() {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsFalling(false);

    if (cardRef.current) {
      const targets = cardRef.current.querySelectorAll('.gravity-target');
      targets.forEach(el => {
        el.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        el.style.transform = '';
      });
    }
  }

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="demo-card-wrap">
      <div className="demo-card-header">
        <span className="demo-badge">#CURSED-LESSON-1 LIVE DEMO</span>
        <span className="demo-hint">watch text fall with physics!</span>
      </div>

      <div className="demo-post-box" ref={cardRef}>
        <div className="demo-post-top">
          <img src="/assets/hackclub-icon.svg" alt="orpheus" className="demo-avatar-img" />
          <div>
            <div className="demo-username gravity-target">@orpheus_physics</div>
            <div className="demo-sub gravity-target">Newton entered the chat · 1 sec ago</div>
          </div>
        </div>

        <div style={{ padding: '8px 2px 14px' }}>
          <h4 className="gravity-target" style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '1.25rem', color: '#1e1750', marginBottom: '4px' }}>
            Gravity Text Experiment
          </h4>
          <p className="demo-post-text gravity-target" style={{ fontSize: '0.95rem', lineHeight: 1.35, color: '#352c73' }}>
            Stop scrolling and gravity takes over. All letters start dropping like autumn leaves.
          </p>
          <p className="demo-post-text gravity-target" style={{ fontSize: '0.85rem', color: '#6a5e9e', marginTop: '4px' }}>
            Powered by requestAnimationFrame and 60 lines of vanilla JavaScript.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
          <button
            type="button"
            onClick={triggerDrop}
            className="cta-btn"
            style={{ fontSize: '0.88rem', padding: '5px 12px', cursor: 'pointer' }}
          >
            {isFalling ? 'Snap Text Back ↑' : 'Drop Text (Test Gravity) ↓'}
          </button>
          {isFalling && (
            <button
              type="button"
              onClick={reset}
              className="demo-reset-link"
              style={{ fontSize: '0.84rem' }}
            >
              reset
            </button>
          )}
        </div>
      </div>

      <div className="demo-footer-bar">
        <span>Status: <strong>{isFalling ? 'gravity active (falling!)' : 'stable'}</strong></span>
        <span>Vanilla JS rAF physics</span>
      </div>
    </div>
  );
}
