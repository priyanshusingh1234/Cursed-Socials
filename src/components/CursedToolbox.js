'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export default function CursedToolbox({
  gangActive, toggleGang,
  faultyMouseActive, toggleFaultyMouse,
  dizzyModeOn, toggleDizzy
}) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 16, y: -1 });
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const boxRef = useRef(null);

  useEffect(() => {
    setPos({ x: 16, y: window.innerHeight - 260 });
  }, []);

  const startDrag = useCallback((cx, cy) => {
    dragging.current = true;
    dragOffset.current = {
      x: cx - pos.x,
      y: cy - pos.y
    };
  }, [pos]);

  const doDrag = useCallback((cx, cy) => {
    if (!dragging.current) return;
    const nx = Math.max(0, Math.min(cx - dragOffset.current.x, window.innerWidth - 180));
    const ny = Math.max(0, Math.min(cy - dragOffset.current.y, window.innerHeight - 60));
    setPos({ x: nx, y: ny });
  }, []);

  const stopDrag = useCallback(() => {
    dragging.current = false;
  }, []);

  useEffect(() => {
    function onMouseMove(e) { doDrag(e.clientX, e.clientY); }
    function onMouseUp() { stopDrag(); }
    function onTouchMove(e) {
      if (!dragging.current) return;
      e.preventDefault();
      doDrag(e.touches[0].clientX, e.touches[0].clientY);
    }
    function onTouchEnd() { stopDrag(); }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [doDrag, stopDrag]);

  if (pos.y < 0) return null;

  const notes = [
    { id: 'gang', lbl: gangActive ? 'shoo spiders!' : 'bring the gang', on: gangActive, fn: toggleGang, rot: '-3.2deg', bg: '#fff9a8', bgOn: '#6dbf4a' },
    { id: 'mouse', lbl: faultyMouseActive ? 'faulty mouse: ON' : 'faulty mouse: OFF', on: faultyMouseActive, fn: toggleFaultyMouse, rot: '2.1deg', bg: '#ffcce0', bgOn: '#ec3750' },
    { id: 'dizzy', lbl: dizzyModeOn ? 'stop spinning' : 'dizzy mode', on: dizzyModeOn, fn: toggleDizzy, rot: '-1.4deg', bg: '#e0d4ff', bgOn: '#8b5cf6' }
  ];

  return (
    <div
      ref={boxRef}
      className="cursed-toolbox-wrapper"
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    >
      <div
        className="toolbox-lid-handle"
        onMouseDown={e => { e.preventDefault(); startDrag(e.clientX, e.clientY); }}
        onTouchStart={e => { startDrag(e.touches[0].clientX, e.touches[0].clientY); }}
      >
        <span className="toolbox-drag-dots">: :</span>
      </div>

      <button
        type="button"
        className={`toolbox-lid-btn ${open ? 'lid-open' : ''}`}
        onClick={() => setOpen(prev => !prev)}
      >
        <span className="lid-scribble">cursed stuff</span>
        <span className="lid-arrow-thing">{open ? '×' : '▼'}</span>
      </button>

      {open && (
        <div className="toolbox-guts">
          {notes.map((n, i) => (
            <button
              key={n.id}
              type="button"
              className={`toolbox-sticky-note ${n.on ? 'note-is-on' : ''}`}
              style={{
                transform: `rotate(${n.rot})`,
                background: n.on ? n.bgOn : n.bg,
                color: n.on ? '#fff' : '#1e1750',
                animationDelay: `${i * 0.06}s`
              }}
              onClick={n.fn}
            >
              {n.lbl}
            </button>
          ))}
          <div className="toolbox-scribble-footer">drag me around lol</div>
        </div>
      )}
    </div>
  );
}
