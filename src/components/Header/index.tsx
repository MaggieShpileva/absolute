import styles from "./index.module.scss";
import logo from "../../images/icons/bed-svgrepo-com.svg";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <span>Абсолют</span>
        </div>
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  );
};
