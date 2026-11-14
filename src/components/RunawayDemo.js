'use client';

import { useState, useRef } from 'react';

export default function RunawayDemo() {
  const [pos, setPos] = useState({ x: 40, y: 110 });
  const [escapes, setEscapes] = useState(0);
  const [caught, setCaught] = useState(false);
  const boxRef = useRef(null);

  function dodge() {
    if (caught) return;
    if (!boxRef.current) return;
    const box = boxRef.current.getBoundingClientRect();
    const btnW = 90;
    const btnH = 34;
    const maxX = Math.max(10, box.width - btnW - 10);
    const maxY = Math.max(10, box.height - btnH - 10);

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    setPos({ x: newX, y: newY });
    setEscapes(prev => prev + 1);
  }

  function handleCatch() {
    setCaught(true);
  }

  function reset() {
    setPos({ x: 40, y: 110 });
    setEscapes(0);
    setCaught(false);
  }

  return (
    <div className="demo-card-wrap">
      <div className="demo-card-header">
        <span className="demo-badge">HOW IT WILL LOOK!</span>
        <span className="demo-hint">try hovering the like button!</span>
      </div>

      <div className="demo-post-box" ref={boxRef}>
        <div className="demo-post-top">
          <img src="/assets/cursed-cat.jpg" alt="cat avatar" className="demo-avatar-img" />
          <div>
            <div className="demo-username">@cursed_cat</div>
            <div className="demo-sub">2 mins ago · Hey could you like my post?</div>
          </div>
        </div>

        <div className="demo-post-media">
          <img src="/assets/cursed-cat.jpg" alt="cursed cat" className="demo-post-img" />
        </div>

        <p className="demo-post-text">
          {caught
            ? 'YOU CAUGHT IT! You are a certified click master.'
            : escapes > 0
              ? `Dodged you ${escapes} time${escapes === 1 ? '' : 's'}! Keep trying...`
              : 'just a normal photo of my cat. nothing suspicious here. click like!'}
        </p>

        <button
          type="button"
          className={`demo-run-btn ${caught ? 'caught' : ''}`}
          style={{
            position: 'absolute',
            left: `${pos.x}px`,
            top: `${pos.y}px`
          }}
          onMouseEnter={dodge}
          onTouchStart={dodge}
          onClick={handleCatch}
        >
          {caught ? 'LIKED!' : 'Like'}
        </button>
      </div>

      <div className="demo-footer-bar">
        <span>Dodges: <strong>{escapes}</strong></span>
        {escapes > 0 && (
          <button type="button" onClick={reset} className="demo-reset-link">
            reset button
          </button>
        )}
      </div>
    </div>
  );
}
