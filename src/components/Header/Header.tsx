import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import "../../../styles/global.css"; // Ensure global styles are imported

export default function Header() {
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
        <nav className={styles["nav-links"]}>
          <Link href="/Tickets" className={styles.navLink}>
            Tickets
          </Link>
          <Link href="/Dashboard" className={styles.navLink}>
            Dashboard
          </Link>
        </nav>
      </header>
    </>
  );
}
