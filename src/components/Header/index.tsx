import styles from "./index.module.scss";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Logo type="large" />
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  );
};
