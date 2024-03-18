import styles from "./index.module.scss";
import logo from "../../images/icons/icons8-занятая-кровать-64.png";
import { FC } from "react";

type Props = {
  type: string;
};

export const Logo: FC<Props> = ({ type }) => {
  return (
    <div className={type === "large" ? styles.large_logo : styles.small_logo}>
      <img src={logo} alt="" />
      <span>Абсолют</span>
    </div>
  );
};
