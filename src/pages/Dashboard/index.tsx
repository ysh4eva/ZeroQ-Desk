"use client";

import { fetchTickets } from "@/app/services/ticket";
import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";

export default function Dashboard() {
  const [tickets, setTickets] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchTickets();
        const data = await response.json();
        console.log(data, "data");
        if (data.tickets) {
          setTickets(data.tickets);
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      <div>
        <h2>Tickets</h2>
        {tickets.length > 0 ? (
          <ul>
            {tickets.map((ticket) => (
              <li key={ticket._id}>
                <strong>
                  {ticket.firstName} {ticket.lastName}
                </strong>{" "}
                - {ticket.issue}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tickets found</p>
        )}
      </div>
    </div>
  );
}
