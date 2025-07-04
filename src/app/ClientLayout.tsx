"use client";

import { RoleProvider } from "@/context/RoleContext";

export default function ClientLayout({ children }) {
  return <RoleProvider>{children}</RoleProvider>;
}
