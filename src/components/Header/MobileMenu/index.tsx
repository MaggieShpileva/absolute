import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import styles from "./index.module.scss";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMobile = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.mobile_menu}>
      <HamburgerIcon boxSize={30} onClick={openMobile} />
      <div className={`${styles.mobile_navbar} ${isOpen ? styles.open : ""}`}>
        {isOpen ? (
          <div className={styles.items}>
            <CloseIcon
              color="black"
              onClick={() => {
                setIsOpen(false);
              }}
            />
            <nav className={styles.mobile_nav}>
              <ul>
                <li>
                  <a href="">Главная</a>
                </li>
                <li>
                  <a href="">О нас</a>
                </li>
                <li>
                  <a href="">Комнаты</a>
                </li>
                <li>
                  <a href="">Новости</a>
                </li>
                <li>
                  <a href="">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
