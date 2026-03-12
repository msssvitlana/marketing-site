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
      <Navigation />
    </header>
  );
};

export default Header;
