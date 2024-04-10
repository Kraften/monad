import React from "react";
import styles from "./main.module.scss";
import Header from "../header/header";
import MainBanner from "../main-banner/main-banner";

const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <Header></Header>
      <div className={styles.content}>
        <MainBanner></MainBanner>
      </div>
    </div>
  );
};

export default MainPage;
