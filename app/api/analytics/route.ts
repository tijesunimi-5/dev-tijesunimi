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

export async function GET(req: NextRequest) {
  try {
    let analytics: AnalyticsData[] = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      analytics = JSON.parse(fileData);
    } catch (error) {
      console.log('No analytics file found, returning empty array');
      analytics = [];
    }
    return NextResponse.json(analytics, { status: 200 });
  } catch (error) {
    console.error('Error reading analytics:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}