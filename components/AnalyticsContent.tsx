'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface AnalyticsData {
  deviceId: string;
  page: string;
  visitTime: string;
  timeSpent: number;
}

export default function AnalyticsPage() {
  const searchParams = useSearchParams();
  const key = searchParams.get('key');
  if (key !== 'secret') {
    return <div className="text-center p-4 text-red-500">Access denied. Please provide the correct key.</div>;
  }

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
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '' },
    },
  };

  if (loading) return <div className="text-center p-4">Loading analytics...</div>;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Portfolio Analytics</h1>

      {/* Charts */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Page Visits</h2>
        <Bar data={chartDataVisits} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: 'Number of Visits per Page' } } }} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Average Time Spent</h2>
        <Bar data={chartDataTime} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: 'Average Time Spent per Page (seconds)' } } }} />
      </div>

      {/* Raw Data Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Visit Details</h2>
        {analytics.length === 0 ? (
          <p className="text-center text-gray-500">No visit data available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left text-black">Device ID</th>
                  <th className="border px-4 py-2 text-left text-black">Page</th>
                  <th className="border px-4 py-2 text-left text-black">Visit Time</th>
                  <th className="border px-4 py-2 text-left text-black">Time Spent (seconds)</th>
                </tr>
              </thead>
              <tbody>
                {analytics.map((entry, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="border px-4 py-2 text-black">{entry.deviceId}</td>
                    <td className="border px-4 py-2 text-black">{entry.page}</td>
                    <td className="border px-4 py-2 text-black">
                      {new Date(entry.visitTime).toLocaleString()}
                    </td>
                    <td className="border px-4 py-2">{entry.timeSpent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}