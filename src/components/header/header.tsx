import React from "react";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={"/logo.svg"}></img>
      <nav className={styles.navigation}>
        <ul>
          <li>Home</li>
          <li>Away</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
