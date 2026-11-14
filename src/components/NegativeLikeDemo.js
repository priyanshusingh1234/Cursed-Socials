'use client';

import { useState } from 'react';

export default function NegativeLikeDemo() {
  const [likes, setLikes] = useState(10);
  const [corrupt, setCorrupt] = useState(false);

  function playBoing() {
    try {
      const audio = new Audio('/boing.mp3');
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch (e) {}
  }

  function handleLike() {
    setLikes(prev => prev - 1);
    playBoing();
  }

  function reset() {
    setLikes(10);
    setCorrupt(false);
  }

  return (
    <div className="mini-demo-card">
      <div className="mini-post-box">
        <div className="mini-post-header">
          <div className="mini-avatar">-</div>
          <div>
            <div className="mini-username">@like_drain</div>
            <div className="mini-time">just now</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span className="mini-likes-badge">{likes} likes</span>
            {likes !== 10 && (
              <button type="button" className="mini-reset-link" onClick={reset}>
                reset
              </button>
            )}
          </div>
        </div>

        <p className={`mini-post-content ${corrupt ? 'corrupted-text' : ''}`}>
          {corrupt
            ? '01100011 01110101 01110010 01110011 01100101 01100100'
            : likes <= 0
              ? `in like debt: currently at ${likes} likes.`
              : 'every like removes 1 like and plays a sound.'}
        </p>

        <div className="mini-post-actions">
          <button type="button" className="mini-btn red-btn" onClick={handleLike}>
            Like ({likes})
          </button>
          <button
            type="button"
            className="mini-btn-secondary"
            onClick={() => setCorrupt(prev => !prev)}
          >
            {corrupt ? 'Normal text' : 'Corrupt text'}
          </button>
        </div>
      </div>
    </div>
  );
}
