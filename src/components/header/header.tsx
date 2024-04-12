import React from "react";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation1}>
        <ul>
          <li>Menu</li>
        </ul>
      </nav>
      <img className={styles.logo} src={"/logo.svg"}></img>
      <nav className={styles.navigation}>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
