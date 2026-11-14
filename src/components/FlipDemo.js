'use client';

import { useState, useEffect } from 'react';

export default function FlipDemo() {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'r' || e.key === 'R') {
        setFlipped(prev => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="mini-demo-card">
      <div className={`mini-post-box ${flipped ? 'flipped-box' : ''}`}>
        <div className="mini-post-header">
          <div className="mini-avatar">R</div>
          <div>
            <div className="mini-username">@upside_down</div>
            <div className="mini-time">1 min ago</div>
          </div>
          <button
            type="button"
            className="mini-btn"
            style={{ marginLeft: 'auto' }}
            onClick={() => setFlipped(prev => !prev)}
          >
            {flipped ? 'Reset' : 'Flip card'}
          </button>
        </div>

        <p className="mini-post-content">
          {flipped
            ? 'screen rotated 180 degrees. press R or click reset to restore.'
            : 'normal post until you flip it. press R on keyboard or click flip!'}
        </p>
      </div>
    </div>
  );
}
