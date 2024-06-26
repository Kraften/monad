import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button className={styles.button}>{title}</button>;
};

export default Button;
