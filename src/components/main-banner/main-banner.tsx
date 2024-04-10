import React from "react";
import styles from "./main-banner.module.scss";

const MainBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <p>“Professionella retreats i Sverige och utomlands”</p>
      <a href="">Boka en gratis konsultation</a>
    </div>
  );
};

export default MainBanner;
