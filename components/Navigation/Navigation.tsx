"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";
import { navigation } from "@/constants/nav";
import Dropdown from "../Dropdown/Dropdown";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import withBlurClick from "@/helper/utils";

const Navigation = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const pathname = usePathname();

  const toggleDrop = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const closeDrop = () => {
    setOpenId(null);
  };

  return (
    <nav aria-label="Main Navigation" className={styles.navigation}>
      <ul className={styles.navigationList}>
        {navigation.map((item) => {
          const isSelected = pathname === item.link;

          const isSelectedDrop =
            item.children?.some(
              (child) => child.link?.split("#")[0] === pathname,
            ) ?? false;

          return (
            <li className={styles.navigationItem} key={item.id}>
              {item.children ? (
                <Dropdown
                  navItem={item}
                  onClick={() => toggleDrop(item.id)}
                  isOpen={openId === item.id}
                  onClose={closeDrop}
                  isSelected={isSelectedDrop}
                />
              ) : item.link ? (
                <Link
                  className={`${styles.navigationLink} ${isSelected ? styles.selected : ""}`}
                  href={item.link}
                  onClick={(e) => withBlurClick(e)}
                >
                  {item.label}
                </Link>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
