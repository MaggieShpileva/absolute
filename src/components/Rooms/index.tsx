import { dataRoomsCard } from "../../data/data";
import styles from "./index.module.scss";
import { RoomCard } from "./RoomCard";

export const Rooms = () => {
  return (
    <div className={styles.container}>
      <h2>Комнаты</h2>
      <div className={styles.rooms}>
        {dataRoomsCard.map((card, index) => {
          return <RoomCard key={index} data={card} />;
        })}
      </div>
    </div>
  );
};
