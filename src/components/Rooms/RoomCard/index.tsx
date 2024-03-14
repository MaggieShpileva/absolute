import { FC } from "react";
import styles from "./index.module.scss";
import user from "../../../images/icons/user.svg";
import bed from "../../../images/icons/bed.svg";

type Props = {
  data: {
    id: number;
    img: string;
    title: string;
    sleeps: number;
    type_bed: string;
  };
};

export const RoomCard: FC<Props> = ({ data }) => {
  return (
    <div className={styles.room}>
      <img src={data.img} alt="" />
      <div className={styles.description}>
        <h4>{data.title}</h4>
        <div>
          <div className={styles.row}>
            <img src={user} alt="" />
            <span>{data.sleeps} спальных мест</span>
          </div>
          <div className={styles.row}>
            <img src={bed} alt="" />
            <span>{data.type_bed}</span>
          </div>
        </div>
        <a href="">Увидеть больше</a>
      </div>
    </div>
  );
};
