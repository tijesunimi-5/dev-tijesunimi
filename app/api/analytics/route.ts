import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Define the interface for analytics data
interface AnalyticsData {
  deviceId: string;
  page: string;
  visitTime: string;
  timeSpent: number;
}

// Path to the analytics JSON file
const filePath = path.join(process.cwd(), 'analytics.json');

// GET handler to retrieve analytics data
export async function GET(req: NextRequest) {
  try {
    let analytics: AnalyticsData[] = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      analytics = JSON.parse(fileData);
    } catch (error) {
      // File doesn't exist, return empty array
      analytics = [];
    }
    return NextResponse.json(analytics, { status: 200 });
  } catch (error) {
    console.error('Error reading analytics:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}