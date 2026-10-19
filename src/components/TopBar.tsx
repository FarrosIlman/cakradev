'use client';

import { useState, useEffect } from 'react';

export default function TopBar() {
  const [timeStr, setTimeStr] = useState<string>('--:-- WIB');

  useEffect(() => {
    const pad = (n: number) => String(n).padStart(2, '0');

    const updateClock = () => {
      const now = new Date();
      // WIB is UTC+7
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const wibDate = new Date(utc + 3600000 * 7);

      const h = pad(wibDate.getHours());
      const m = pad(wibDate.getMinutes());
      setTimeStr(`${h}:${m} WIB`);
    };

    updateClock();
    const timer = setInterval(updateClock, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="top">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden' }}>
        <i className="status-dot" style={{ flexShrink: 0 }} />
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Siap Menerima Proyek Baru
        </span>
        <span className="top-mobile-hide" style={{ opacity: 0.4 }}>•</span>
        <span className="top-mobile-hide" style={{ opacity: 0.85, whiteSpace: 'nowrap' }}>
          Layanan Seluruh Indonesia
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        <span className="top-mobile-hide" style={{ opacity: 0.75 }}>
          Pekalongan, ID
        </span>
        <span id="cd" suppressHydrationWarning style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>
          {timeStr}
        </span>
      </div>
    </div>
  );
}
