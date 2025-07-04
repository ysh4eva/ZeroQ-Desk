"use client";

import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import styles from "./Header.module.scss";
import "../../../styles/global.css";
import { RoleContext } from "@/context/RoleContext";

interface HeaderProps {
  setPage: (page: string) => void;
}

export default function Header({ setPage }: HeaderProps) {
  const { role, setRole } = useContext(RoleContext);

  const handleToggleRole = () => {
    const newRole = role === "client" ? "admin" : "client";
    setRole(newRole);
  };

  const handlePageChange = (page: string) => () => {
    setPage(page);
  };

  return (
    <>
      <Head>
        <title>ZeroQ Desk</title>
        <link rel="icon" href="/cyborg.png" />
        <meta name="description" content="ZeroQ Desk - Ticketing System" />
      </Head>

      <header className={styles["header-container"]}>
        <div className={styles["header-text-container"]}>
          <Image src="/cyborg.png" alt="ZeroQ Logo" width={40} height={40} />
          <div className={styles["dancing-text"]}>ZeroQ Desk</div>
        </div>

        <div className={styles["role-indicator"]}>
          {role === "admin" ? "🛡 Admin Dashboard" : "🙋‍♀️ Client Dashboard"}
        </div>

        <nav className={styles["nav-links"]}>
          <div className={styles.navLink} onClick={handlePageChange("tickets")}>
            Tickets
          </div>
          <div className={styles.navLink} onClick={handlePageChange("dashboard")}>
            Dashboard
          </div>
        </nav>

        <div className={styles["toggle-container"]} onClick={handleToggleRole}>
          <div
            className={`${styles["toggle-switch"]} ${
              role === "admin" ? styles["active"] : ""
            }`}
          >
            {role === "admin" ? "Admin" : "Client"}
          </div>
        </div>
      </header>
    </>
  );
}
