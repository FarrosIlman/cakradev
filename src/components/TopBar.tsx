'use client';

import { useState, useEffect } from 'react';

export default function TopBar() {
  const [timeStr, setTimeStr] = useState<string>('--:--:-- WIB');

  useEffect(() => {
    const pad = (n: number) => String(n).padStart(2, '0');

    const updateClock = () => {
      const now = new Date();
      // WIB is UTC+7
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const wibDate = new Date(utc + 3600000 * 7);

      const h = pad(wibDate.getHours());
      const m = pad(wibDate.getMinutes());
      const s = pad(wibDate.getSeconds());
      setTimeStr(`${h}:${m}:${s} WIB`);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="top">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span>
          <i className="status-dot" />
          open-for-projects/
        </span>
        <span className="top-subtext" style={{ opacity: 0.6 }}>|</span>
        <span className="top-subtext" style={{ fontSize: '0.68rem', letterSpacing: '0.04em' }}>
          Menerima Konsultasi &amp; Pembuatan Sistem Baru
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span className="top-subtext" style={{ fontSize: '0.68rem', opacity: 0.85 }}>
          garansi maintenance resmi
        </span>
        <span id="cd" suppressHydrationWarning style={{ whiteSpace: 'nowrap' }}>
          {timeStr}
        </span>
      </div>
    </div>
  );
}
