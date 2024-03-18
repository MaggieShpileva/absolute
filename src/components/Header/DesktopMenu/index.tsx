import styles from "./index.module.scss";

export const DesktopMenu = () => {
  return (
    <nav className={styles.desktop_nav}>
      <a href="">Главная</a>
      <a href="">О нас</a>
      <a href="#rooms">Комнаты</a>
      <a href="">Новости</a>
      <button>Контакты</button>
    </nav>
  );
};
