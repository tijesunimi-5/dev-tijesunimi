'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

interface AnalyticsData {
  deviceId: string;
  page: string;
  visitTime: string;
  timeSpent: number;
}

const PageTracker: React.FC = () => {
  const pathname = usePathname();
  const visitDataRef = useRef<AnalyticsData | null>(null);

  useEffect(() => {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
      deviceId = uuidv4();
      localStorage.setItem('deviceId', deviceId);
    }

    const startTracking = () => {
      const page = pathname;
      const visitTime = new Date().toISOString();
      visitDataRef.current = { deviceId, page, visitTime, timeSpent: 0 };
      localStorage.setItem('pageVisit', JSON.stringify(visitDataRef.current));
    };

    const endTracking = async () => {
      if (!visitDataRef.current) return;
      const endTime = new Date();
      const startTime = new Date(visitDataRef.current.visitTime);
      visitDataRef.current.timeSpent = Math.round((endTime.getTime() - startTime.getTime()) / 1000);

      try {
        const response = await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(visitDataRef.current),
        });
        console.log('Track API response:', response.status); // Debug log
      } catch (error) {
        console.error('Error sending analytics:', error);
      }
      localStorage.removeItem('pageVisit');
    };

    // Start tracking on pathname change
    startTracking();

    // End tracking on page exit
    window.addEventListener('beforeunload', endTracking);

    // End tracking and start new tracking on pathname change
    return () => {
      endTracking();
      window.removeEventListener('beforeunload', endTracking);
    };
  }, [pathname]); // Re-run effect when pathname changes

  return null;
};

export default PageTracker;