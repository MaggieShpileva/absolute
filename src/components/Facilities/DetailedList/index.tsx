import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  data: {
    title: string;
    icon: string;
    points: string[];
  };
};
export const DetailedList: FC<Props> = ({ data }) => {
  return (
    <div className={styles.list}>
      <div className={styles.title}>
        <span className="material-symbols-outlined">{data.icon}</span>
        <h3>{data.title}</h3>
      </div>
      <ul>
        {data.points.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};
