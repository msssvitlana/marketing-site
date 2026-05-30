import { NavigationItem } from "@/types/nav";
import Button from "../iu/Button/Button";
import styles from "./Dropdown.module.css";
import Link from "next/link";
import Icon from "../iu/Icon/Icon";

type DropdownProps = {
  navItem: NavigationItem;
  onClick: () => void;
  isOpen: boolean;
};

const Dropdown = ({ navItem, onClick, isOpen }: DropdownProps) => {
  return (
    <div className={styles.dropdown}>
      <Button onClick={onClick} className={styles.dropdownBtn} type="button">
        <span className={styles.dropdownText}>{navItem.label}</span>
        <Icon
          className={styles.dropdownBtnIcon}
          width={24}
          height={24}
          name="arrow"
        />
      </Button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {navItem.children?.map(({ id, label, link }) =>
            link ? (
              <li className={styles.dropdownItem} key={id}>
                <Link className={styles.dropdownLink} href={link}>
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
