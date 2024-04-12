import React from "react";
import Button from "../button/button";
import styles from "./card.module.scss";

const Card: React.FC = () => {
  return (
    <div className={styles.content}>
      <p>PROFESSIONELLA RETREATS I SVERIGE OCH UTOMLANDS</p>

      {/* <p>Professionella retreats i Sverige och utomlands</p> */}
      {/* <Button title={"Boka en gratis konsultation"}></Button> */}
    </div>
  );
};

export default Card;
