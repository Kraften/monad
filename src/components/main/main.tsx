import React from "react";
import styles from "./main.module.scss";
import Header from "../header/header";
import MainBanner from "../main-banner/main-banner";
import Card from "../card/card";

const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPage}>
      <Header></Header>
      <div className={styles.background}>
        <MainBanner></MainBanner>
      </div>
      <div className={styles.content}>
        <Card></Card>
      </div>
    </div>
  );
};

export default MainPage;
