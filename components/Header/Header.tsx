// component Header

import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Home" className={styles.logoLink}>
        <Image
          width={72}
          height={34}
          alt="Logo"
          src="/images/logo/logo.png"
          className={styles.logoLinkImg}
        />
      </Link>
      <a href="tel:+380673327701 ">+38 (067) 332-77-01</a>

      <button aria-label="Open Menu" className={styles.headerMenuBtn}>
        <svg
          width={28}
          height={28}
          aria-label="Open Menu"
          className={styles.headerMenuIcon}
        >
          <use href="/icons/icons.svg#burger"></use>
        </svg>
      </button>
      <Navigation />
    </header>
  );
};

export default Header;
