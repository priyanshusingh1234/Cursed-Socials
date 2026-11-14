'use client';

import { useState } from 'react';

export default function SpiderHang() {
  const [disturbed, setDisturbed] = useState(false);
  const [webActive, setWebActive] = useState(false);

  function handleSpiderClick() {
    try {
      const audio = new Audio('/boing.mp3');
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch (e) {}

    setDisturbed(true);
    setWebActive(true);

    setTimeout(() => {
      setDisturbed(false);
    }, 600);
  }

  function handleClearWeb() {
    setWebActive(false);
  }

  return (
    <>
      <div
        className={`spider-hang-wrap ${disturbed ? 'is-disturbed' : ''}`}
        onClick={handleSpiderClick}
        title="Disturb the spider at your own risk!"
      >
        <div className="spider-thread-line"></div>
        <img
          src="/assets/spider.gif"
          alt="Hanging spider"
          className="spider-hang-img"
        />
        <div className="spider-tooltip">disturb me</div>
      </div>

      {webActive && (
        <div className="spider-web-overlay" onClick={handleClearWeb}>
          <img
            src="/assets/spider-web.gif"
            alt="Spider net"
            className="spider-web-img"
          />
          <div className="spider-web-hint">
            click anywhere to wipe off
          </div>
        </div>
      )}
    </>
  );
}
