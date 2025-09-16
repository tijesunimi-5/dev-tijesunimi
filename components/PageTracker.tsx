'use client';

import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Define the interface for analytics data
interface AnalyticsData {
  deviceId: string; // Added device ID
  page: string;
  visitTime: string;
  timeSpent: number; // in seconds
}

const PageTracker: React.FC = () => {
  useEffect(() => {
    // Get or generate a unique device ID
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
      deviceId = uuidv4();
      localStorage.setItem('deviceId', deviceId);
    }

    // Get current page URL and timestamp
    const page = window.location.pathname;
    const visitTime = new Date().toISOString();

    // Store initial visit data in localStorage
    const visitData: AnalyticsData = {
      deviceId,
      page,
      visitTime,
      timeSpent: 0,
    };
    localStorage.setItem('pageVisit', JSON.stringify(visitData));

    // Function to calculate time spent and send data
    const handleBeforeUnload = async () => {
      const endTime = new Date();
      const startTime = new Date(visitData.visitTime);
      const timeSpent = Math.round((endTime.getTime() - startTime.getTime()) / 1000); // Time in seconds

      // Update visit data with time spent
      visitData.timeSpent = timeSpent;

      try {
        // Send data to API
        await fetch('/api/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(visitData),
        });
      } catch (error) {
        console.error('Error sending analytics:', error);
      }

      // Clear page visit data after sending
      localStorage.removeItem('pageVisit');
    };

    // Add event listener for when the user leaves the page
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
};

export default PageTracker;