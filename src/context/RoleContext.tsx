"use client";
import { createContext, useState } from "react";

interface RoleContextType {
  role: string;
  setRole: (newRole: string | ((prevRole: string) => string)) => void;
}

export const RoleContext = createContext<RoleContextType>({
  role: 'client',
  setRole: () => {}
});

export const RoleProvider = ({ children }: any) => {
  const [role, setRole] = useState(() => {
    // Try to get the role from localStorage on initial load
    if (typeof window !== "undefined") {
      const savedRole = localStorage.getItem("userRole");
      return savedRole || "client";
    }
    return "client";
  });

  // Update localStorage when role changes
  const updateRole = (newRole: string | ((prevRole: string) => string)) => {
    setRole((prevRole) => {
      const updatedRole =
        typeof newRole === "function" ? newRole(prevRole) : newRole;
      if (typeof window !== "undefined") {
        localStorage.setItem("userRole", updatedRole);
      }
      return updatedRole;
    });
  };

  return (
    <RoleContext.Provider value={{ role, setRole: updateRole }}>
      {children}
    </RoleContext.Provider>
  );
};
