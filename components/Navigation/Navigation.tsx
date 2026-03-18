// component Navigation to header ->>

import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav aria-label="Main Navigation" className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <Link className={styles.navigationLink} href="/about">
            Про нас
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link className={styles.navigationLink} href="/services">
            Послуги
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link className={styles.navigationLink} href="/portfolio">
            Портфоліо
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link className={styles.navigationLink} href="/contacts">
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
