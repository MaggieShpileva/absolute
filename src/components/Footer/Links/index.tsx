import styles from "./index.module.scss";

export const Links = () => {
  return (
    <div className={styles.links}>
      <h4>Страницы</h4>
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
      </ul>
    </div>
  );
};
