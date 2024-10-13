import { NextResponse } from 'next/server';
import { writeFile, utils } from 'xlsx';
import path from 'path';
import fs from 'fs';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received form data:', data);

    // Convert the data to an Excel sheet
    const ws = utils.json_to_sheet([data]);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Students');

    // Ensure the 'data' folder exists
    const dirPath = path.resolve('./data');
    const filePath = path.resolve(dirPath, 'student-data.xlsx');

    // Check if the directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
      console.log('Created data directory:', dirPath);
    }

    // Try to write the Excel file
    console.log('Attempting to save file at:', filePath);
    writeFile(wb, filePath);
    console.log('Excel file written successfully.');

    return NextResponse.json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error while saving data:', error.message);
    console.error('Full error:', error); // Log the full error details for clarity

    return NextResponse.json({ message: 'Error saving data.', error: error.message }, { status: 500 });
  }
}
