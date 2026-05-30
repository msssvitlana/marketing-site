// component Navigation to header ->>

"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";
import { navigation } from "@/constants/nav";
import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

const Navigation = () => {
  const [isOpenDrop, setIsOpenDrop] = useState(false);

  const openDrop = () => setIsOpenDrop(true);
  const closeDrop = () => setIsOpenDrop(false);

  return (
    <nav aria-label="Main Navigation" className={styles.navigation}>
      <ul className={styles.navigationList}>
        {navigation.map((item) => (
          <li key={item.id}>
            {item.children ? (
              <Dropdown navItem={item} onClick={openDrop} isOpen={isOpenDrop} />
            ) : item.link ? (
              <Link href={item.link}>{item.label}</Link>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
