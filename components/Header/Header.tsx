// component Header
"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "../Navigation/Navigation";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
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

        <button
          aria-label="Open Menu"
          className={styles.headerMenuBtn}
          onClick={open}
        >
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
      <Modal isOpen={isOpen} onClose={close}>
        <Menu />
      </Modal>
    </>
  );
};

export default Header;
