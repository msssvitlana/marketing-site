import styles from "./Social.module.css";

const Social = () => {
  return (
    <div className={styles.social}>
      <a
        className={styles.socialLink}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Viber"
      >
        <svg className={styles.socialIcon} width={24} height={24}>
          <use href="/icons/icons.svg#viber"></use>
        </svg>
      </a>
      <a
        className={styles.socialLink}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <svg className={styles.socialIcon} width={24} height={24}>
          <use href="/icons/icons.svg#telegram"></use>
        </svg>
      </a>
    </div>
  );
};

export default Social;
