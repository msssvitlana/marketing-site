"use client";

import { NavigationItem } from "@/types/nav";
import Button from "../ui/Button/Button";
import styles from "./Dropdown.module.css";
import Link from "next/link";
import Icon from "../ui/Icon/Icon";
import { withBlurClick } from "@/helper/utils";
import { useCallback, useEffect, useRef } from "react";

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

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose],
  );

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const el = refDrop.current;
      if (!el) return;

      if (!el.contains(e.target as Node)) {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleKeyDown, handleClickOutside]);
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
      <ul className={`${styles.dropdownList} ${isOpen ? styles.open : ""}`}>
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
    </div>
  );
};

export default Dropdown;
