import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface AnalyticsData {
  deviceId: string;
  page: string;
  visitTime: string;
  timeSpent: number;
}

const filePath = path.join('/tmp', 'analytics.json');

export async function POST(req: NextRequest) {
  try {
    const data: AnalyticsData = await req.json();
    console.log('Received analytics data:', data); // Debug log

    let analytics: AnalyticsData[] = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      analytics = JSON.parse(fileData);
    } catch (error) {
      console.log('No analytics file found, creating new one');
      analytics = [];
    }

    analytics.push(data);
    await fs.writeFile(filePath, JSON.stringify(analytics, null, 2));

    return NextResponse.json({ message: 'Analytics recorded' }, { status: 200 });
  } catch (error) {
    console.error('Error saving analytics:', error);
    return NextResponse.json({ error: 'Failed to record analytics' }, { status: 500 });
  }
}