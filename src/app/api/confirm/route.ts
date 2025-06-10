import { google } from "googleapis";
import { NextResponse } from "next/server";

// Decode base64 JSON key
const serviceAccountJson = Buffer.from(
  process.env.GOOGLE_SERVICE_ACCOUNT_KEY ?? "",
  "base64"
).toString("utf-8");

export async function POST(req: Request) {
  try {
    const { name, phone, will_join, guest_of, number_of_guests } =
      await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(serviceAccountJson),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID!,
      range: "GuestConfirm!A2:F",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID!,
      range: "GuestConfirm!A:F",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            (response.data.values?.length ?? 0) + 1,
            name,
            phone,
            will_join ? "Có" : "Không",
            guest_of.join(" + "),
            will_join ? +number_of_guests : 0,
          ],
        ],
      },
    });

    return NextResponse.json({ message: "Data added successfully" });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: error }, { status: 500 });
  }
}
