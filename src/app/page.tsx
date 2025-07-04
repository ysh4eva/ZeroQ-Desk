"use client";

import { useContext, useState } from "react";
import Header from "@/components/Header/Header";
import Dashboard from "@/client/Dashboard";
import Tickets from "@/client/Tickets";
import { RoleContext } from "@/context/RoleContext";

export default function Home() {
  const { role } = useContext(RoleContext);
  const [page, setPage] = useState("tickets"); // Default page is tickets

  const renderContent = () => {
    if (page === "dashboard" && role === "admin") {
      return <Dashboard />;
    }
    // Show Tickets for both admin and client when on tickets page
    return <Tickets />;
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Header setPage={setPage} />
      {renderContent()}
    </div>
  );
}
