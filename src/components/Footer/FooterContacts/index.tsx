import styles from "./index.module.scss";
import location from "../../../images/icons/location.svg";

export const FooterContacts = () => {
  return (
    <div className={styles.contacts}>
      <h4>Контакты</h4>
      <div className={styles.row}>
        <span className="material-symbols-outlined">location_on</span>
        <span className={styles.text}>
          Аптечный переулок 12, Ногинск, Московская область
        </span>
      </div>
      <div className={styles.row}>
        <span className="material-symbols-outlined">call</span>
        <span className={styles.text}>+7 (903) - 479 - 77 - 65</span>
      </div>
    </div>
  );
};
