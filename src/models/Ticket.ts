import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    uuid: { type: String, unique: true },
    firstName: String,
    lastName: String,
    email: String,
    clientId: String, // e.g., ABC Corp
    companyId: String, // e.g., "abc-corp" → Important for filtering
    issue: String,
    status: {
      type: String,
      enum: ["unresolved", "in_progress", "resolved", "rejected"],
      default: "unresolved",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema);
