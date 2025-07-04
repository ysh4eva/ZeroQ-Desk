"use client";
export const ticketCreation = async (ticketData: any) => {
  try {
    const response = await fetch("/api/ticket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticketData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating ticket:", error);
    throw error;
  }
};
export async function fetchTickets() {
  const response = await fetch("/api/ticket");
  return response;
}
