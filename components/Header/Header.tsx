// component Header
"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "../Navigation/Navigation";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Menu from "../Menu/Menu";
import Social from "../Social/Social";
import Icon from "../iu/Icon/Icon";
import Button from "../iu/Button/Button";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);

  return (
    <>
      <header className={styles.header}>
        <Link href="/" aria-label="Home" className={styles.logoLink}>
          <Icon
            width={114}
            height={54}
            name="logo"
            className={styles.iconLogo}
          />
        </Link>

        <Navigation />

        <div className={styles.headerActions}>
          <Social />

          <Button
            onClick={openMenu}
            aria-label="Open Menu"
            className={styles.headerMenuBtn}
            type="button"
          >
            <Icon
              width={24}
              height={24}
              name="menu"
              className={styles.headerMenuIcon}
            />
          </Button>

          <a className={styles.phoneNumber} href="tel:+380673327701">
            +38 067 3327701
          </a>
        </div>
      </header>
      <Modal isOpen={isOpenMenu} onClose={closeMenu}>
        <Menu />
      </Modal>
    </>
  );
};

export default Header;
