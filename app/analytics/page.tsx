'use client';

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define the interface for analytics data
interface AnalyticsData {
  deviceId: string;
  page: string;
  visitTime: string;
  timeSpent: number;
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch analytics data
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/analytics');
        const data = await response.json();
        setAnalytics(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching analytics:', error);
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  // Prepare data for charts
  const pageVisits = analytics.reduce((acc, curr) => {
    acc[curr.page] = (acc[curr.page] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const avgTimeSpent = analytics.reduce((acc, curr) => {
    if (!acc[curr.page]) {
      acc[curr.page] = { total: 0, count: 0 };
    }
    acc[curr.page].total += curr.timeSpent;
    acc[curr.page].count += 1;
    return acc;
  }, {} as Record<string, { total: number; count: number }>);

  const chartDataVisits = {
    labels: Object.keys(pageVisits),
    datasets: [
      {
        label: 'Page Visits',
        data: Object.values(pageVisits),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const chartDataTime = {
    labels: Object.keys(avgTimeSpent),
    datasets: [
      {
        label: 'Average Time Spent (seconds)',
        data: Object.keys(avgTimeSpent).map(
          (page) => avgTimeSpent[page].total / avgTimeSpent[page].count
        ),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  if (loading) return <div>Loading analytics...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Page Visits</h2>
        <Bar data={chartDataVisits} options={{ responsive: true }} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Average Time Spent</h2>
        <Bar data={chartDataTime} options={{ responsive: true }} />
      </div>
    </div>
  );
}