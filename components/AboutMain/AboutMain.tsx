
import styles from './AboutMain.module.css';
import Link from "next/link";
import Icon from "../ui/Icon/Icon";
import { features } from "@/constants/feature";
const AboutMain = () => {


  return (
     
    <section className={styles.aboutMainSection}>
      <div className={styles.aboutMainLeftSide}>
               <div className={styles.aboutMainTextWrapper}>
                
                  <h2 className={styles.aboutMainTitle}>Про <span className={styles.aboutMainTitleSpan}>компанію</span> </h2>
          <p className={styles.aboutMainDescription}>
Ми — рекламна компанія, яка допомагає бізнесам ефективно презентувати себе через продумані та якісно реалізовані рішення.
Працюємо з проєктами будь-якої складності — від поліграфії до масштабних конструкцій, підбираючи оптимальний підхід для кожного клієнта.
          </p>
        </div>

        
   <Link className={styles.aboutMainLink} href="/about">
          Детальніше
          <Icon
          className={`${styles.aboutMainIcon}`}
          width={18}
          height={18}
          name="icon-arrow-right"
        />
      </Link>
      
      </div>
   <div className={styles.aboutMainRightSide}>
      <ul className={styles.aboutMainFeatureList}>
  {features.map(({ id, label, icon }) => (
    <li className={styles.aboutMainFeatureItem} key={id}>
      <Icon
        className={styles.aboutMainFeatureIcon}
        width={102}
        height={82}
        name={icon}
      />

      <p className={styles.aboutMainFeatureLabel}>
        {label}
      </p>
    </li>
  ))}
</ul>
     </div>
          </section>
             
    
  );
};

export default AboutMain;