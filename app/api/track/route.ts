import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Define the interface for the request body
interface AnalyticsData {
  deviceId: string;
  page: string;
  visitTime: string;
  timeSpent: number;
}

// Path to the analytics JSON file
const filePath = path.join(process.cwd(), 'analytics.json');

// POST handler for tracking data
export async function POST(req: NextRequest) {
  try {
    const data: AnalyticsData = await req.json();

    // Read existing analytics data
    let analytics: AnalyticsData[] = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      analytics = JSON.parse(fileData);
    } catch (error) {
      // File doesn't exist, initialize empty array (file will be created on write)
      analytics = [];
    }

    // Append new data
    analytics.push(data);

    // Write updated analytics to file
    await fs.writeFile(filePath, JSON.stringify(analytics, null, 2));

    return NextResponse.json({ message: 'Analytics recorded' }, { status: 200 });
  } catch (error) {
    console.error('Error saving analytics:', error);
    return NextResponse.json({ error: 'Failed to record analytics' }, { status: 500 });
  }
}