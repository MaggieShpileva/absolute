import styles from "./index.module.scss";
import { Logo } from "../../Logo";

export const MainInfo = () => {
  return (
    <div className={styles.info}>
      <Logo type="small" />
      <p>Замечательный хостел для свободных и энергичных путешественников</p>
    </div>
  );
};
