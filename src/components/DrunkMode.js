'use client';

import { useEffect } from 'react';

export default function DrunkMode({ active }) {
  useEffect(() => {
    if (active) {
      document.body.classList.add('page-is-drunk-lol');
    } else {
      document.body.classList.remove('page-is-drunk-lol');
    }
    return () => document.body.classList.remove('page-is-drunk-lol');
  }, [active]);

  return null;
}
