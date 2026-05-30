"use client";

import { NavigationItem } from "@/types/nav";
import Button from "../iu/Button/Button";
import styles from "./Dropdown.module.css";
import Link from "next/link";
import Icon from "../iu/Icon/Icon";
import withBlurClick from "@/helper/utils";
import { useEffect, useRef } from "react";

type DropdownProps = {
  navItem: NavigationItem;
  onClick: () => void;
  onClose: () => void;
  isOpen: boolean;
  isSelected: boolean;
};

const Dropdown = ({
  navItem,
  onClick,
  isOpen,
  onClose,
  isSelected,
}: DropdownProps) => {
  const refDrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) =>
      e.code === "Escape" && onClose();
    document.addEventListener("keydown", handleKeyDown);

    const handleClickOutside = (e: MouseEvent) => {
      if (!refDrop.current) return;

      if (!refDrop.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <div className={styles.dropdown} ref={refDrop}>
      <Button
        onClick={(e) => withBlurClick(e, onClick)}
        className={`${styles.dropdownBtn} ${isSelected ? styles.selected : ""}`}
        type="button"
      >
        <span className={styles.dropdownText}>{navItem.label}</span>
        <Icon
          className={`${styles.dropdownBtnIcon} ${isOpen ? styles.arrowOpen : ""}`}
          width={18}
          height={18}
          name="arrow"
        />
      </Button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {navItem.children?.map(({ id, label, link }) =>
            link ? (
              <li className={styles.dropdownItem} key={id}>
                <Link
                  className={styles.dropdownLink}
                  href={link}
                  onClick={(e) => withBlurClick(e, onClose)}
                >
                  {label}
                </Link>
              </li>
            ) : null,
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
