import { FacilitiesData } from "../../data/facilities";
import { DetailedList } from "./DetailedList";
import styles from "./index.module.scss";

export const Facilities = () => {
  return (
    <div className={styles.facilities}>
      <h2>Удобства в хостеле</h2>
      <div className={styles.list_points}>
        {FacilitiesData.map((item) => {
          return <DetailedList data={item} />;
        })}
      </div>
    </div>
  );
};
