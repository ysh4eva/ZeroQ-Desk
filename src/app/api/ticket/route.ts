import mongoose from "mongoose";
import { createTicket, getTickets } from "@/app/controllers/ticketController";
// MONGO_URI =
//   "mongodb+srv://vyshnavizeroQ:zeroQ@zeroq.qcnyvyy.mongodb.net/zeroq?retryWrites=true&w=majority";

const MONGO_URI =
  "mongodb+srv://vyshnavizeroQ:zeroq@zeroq.qcnyvyy.mongodb.net/zeroq?retryWrites=true&w=majority";

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
