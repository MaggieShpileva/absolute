import { FooterContacts } from "./FooterContacts";
import styles from "./index.module.scss";
import { Links } from "./Links";
import { MainInfo } from "./MainInfo";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <MainInfo />
      <Links />
      <FooterContacts />
      {/* <div className={styles.social}>
        <h4>social</h4>
      </div> */}
    </div>
  );
};
