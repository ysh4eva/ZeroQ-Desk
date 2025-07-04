import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { createTicket, getTickets } from "@/app/controllers/ticketController";

const MONGO_URI = process.env.MONGO_URI!;

// Connect to MongoDB (only once)
if (!mongoose.connections[0].readyState) {
  await mongoose.connect(MONGO_URI, { dbName: "zeroq" });
}

export async function POST(request: Request) {
  return createTicket(request);
}

export async function GET() {
  return getTickets();
}
