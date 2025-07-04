"use server";

import Ticket from "@/models/Ticket";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid"; // ✅ Import UUID here

export async function createTicket(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    if (!body.firstName || !body.lastName || !body.email || !body.issue) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const ticketId = uuidv4(); // ✅ Create UUID here

    console.log("Request body:", body);

    const ticketData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      company: body.company,
      issue: body.issue,
      ticketId,
      status: "unresolved", // Make sure this matches your enum exactly
    };

    console.log("Creating ticket with data:", ticketData);

    const newTicket = new Ticket(ticketData);
    console.log("Before save - newTicket:", newTicket);

    const savedTicket = await newTicket.save();
    console.log("After save - savedTicket:", savedTicket);

    return NextResponse.json({
      message: "Ticket saved successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error saving ticket:", error);

    return NextResponse.json(
      {
        message: "Failed to save ticket",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function getTickets() {
  try {
    const tickets = await Ticket.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return NextResponse.json(
      { message: "Failed to fetch tickets" },
      { status: 500 }
    );
  }
}

export async function getTicketById(id: string) {
  try {
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return NextResponse.json(
        { message: "Ticket not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ ticket }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching ticket ${id}:`, error);
    return NextResponse.json(
      { message: "Failed to fetch ticket" },
      { status: 500 }
    );
  }
}
