'use client';

import { useEffect } from 'react';

export default function DizzyMode({ active }) {
  useEffect(() => {
    if (active) {
      document.body.classList.add('page-is-dizzy-lol');
    } else {
      document.body.classList.remove('page-is-dizzy-lol');
    }
    return () => document.body.classList.remove('page-is-dizzy-lol');
  }, [active]);

  return null;
}
