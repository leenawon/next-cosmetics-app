import React from "react";
// style
import styles from "./Header.module.css";
// components
import GNB from "../GNB/GNB";

function Header() {
  return (
    <header className={styles.container}>
      {/* Logo image */}
      <img className={styles.logo} src="/images/beauty.png" alt="로고" />
      {/* GNB component */}
      <GNB />
    </header>
  );
}

export default Header;
