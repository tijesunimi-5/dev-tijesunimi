'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

interface AnalyticsData {
  deviceId: string;
  page: string;
  visitTime: string;
  timeSpent: number;
}

const PageTracker: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
      deviceId = uuidv4();
      localStorage.setItem('deviceId', deviceId);
    }

    let visitData: AnalyticsData | null = null;

    const startTracking = () => {
      const page = window.location.pathname;
      const visitTime = new Date().toISOString();
      visitData = { deviceId, page, visitTime, timeSpent: 0 };
      localStorage.setItem('pageVisit', JSON.stringify(visitData));
    };

    const endTracking = async () => {
      if (!visitData) return;
      const endTime = new Date();
      const startTime = new Date(visitData.visitTime);
      visitData.timeSpent = Math.round((endTime.getTime() - startTime.getTime()) / 1000);

      try {
        const response = await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(visitData),
        });
        console.log('Track API response:', response.status); // Debug log
      } catch (error) {
        console.error('Error sending analytics:', error);
      }
      localStorage.removeItem('pageVisit');
    };

    startTracking();

    const handleRouteChange = () => {
      endTracking();
      startTracking();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    window.addEventListener('beforeunload', endTracking);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      window.removeEventListener('beforeunload', endTracking);
    };
  }, [router]);

  return null;
};

export default PageTracker;