import { socials } from "@/constants/social";
import styles from "./Social.module.css";
import Icon from "../iu/Icon/Icon";
import withBlurClick from "@/helper/utils";

const Social = () => {
  return (
    <ul className={styles.socialList}>
      {socials.map(({ id, href, label, icon }) => (
        <li className={styles.socialItem} key={id}>
          <a
            className={styles.socialLink}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            onClick={(e) => withBlurClick(e)}
          >
            <Icon
              className={styles.socialIcon}
              width={24}
              height={24}
              name={icon}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
