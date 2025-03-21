import { google } from "googleapis";
import { NextResponse } from "next/server";

// Decode base64 JSON key
const serviceAccountJson = Buffer.from(
  process.env.GOOGLE_SERVICE_ACCOUNT_KEY ?? "",
  "base64"
).toString("utf-8");

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(serviceAccountJson),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    console.log(process.env.GOOGLE_SPREADSHEET_ID);

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID!,
      range: "GuestBook!A2:C",
    });

    return NextResponse.json({ data: response.data.values });
  } catch (error) {
    console.error("Google Sheets API Error:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.error("Google Sheets Post Data", name, email, message);

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(serviceAccountJson),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID!,
      range: "GuestBook!A:D",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[name, email, message, new Date().toISOString()]],
      },
    });

    return NextResponse.json({ message: "Data added successfully" });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
