import styles from "./index.module.scss";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.description}>
          <h1>
            <span>Абсолют</span> - замечательный хостел для свободных и
            энергичных путешественников
          </h1>
          <p>
            Egestas pretium aenean pharetra magna ac. Et tortor consequat id
            porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed
          </p>
        </div>
        <div className={styles.banner_image}>
          <img
            src="https://html.merku.love/hosteller/img/index/hero.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
