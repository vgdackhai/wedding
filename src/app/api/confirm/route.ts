import { google } from "googleapis";
import { NextResponse } from "next/server";

// Decode base64 JSON key
const serviceAccountJson = Buffer.from(
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY ?? "",
    "base64"
).toString("utf-8");

export async function POST(req: Request) {
    try {
        const {
            name,
            phone,
            will_join,
            guest_of,
            number_of_guests,
        } = await req.json();

        console.error("Google Sheets Post Data", name);

        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(serviceAccountJson),
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID!,
            range: "GuestConfirm!A:A",
            valueInputOption: "RAW",
            insertDataOption: "INSERT_ROWS",
            requestBody: {
                values: [[name, phone, will_join ? 'Có' : 'Không', guest_of.join(" + "), number_of_guests]],
            },
        });

        return NextResponse.json({ message: "Data added successfully" });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ error: error }, { status: 500 });
    }
}
