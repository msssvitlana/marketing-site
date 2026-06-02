
import styles from './AboutMain.module.css';
import Link from "next/link";
import Icon from "../ui/Icon/Icon";
import { features } from "@/constants/feature";
const AboutMain = () => {


  return (
     
    <section className={styles.AboutMainSection}>
      <div className={styles.leftSide}>
               <div className={styles.textWrapper}>
                
                  <h2 className={styles.title}>Про <span className={styles.titleSpan}>компанію</span> </h2>
          <p className={styles.description}>
Ми — рекламна компанія, яка допомагає бізнесам ефективно презентувати себе через продумані та якісно реалізовані рішення.
Працюємо з проєктами будь-якої складності — від поліграфії до масштабних конструкцій, підбираючи оптимальний підхід для кожного клієнта.
          </p>
        </div>

        
   <Link className={styles.link} href="/about">
          Детальніше
          <Icon
          className={`${styles.icon}`}
          width={18}
          height={18}
          name="icon-arrow-right"
        />
      </Link>
      
      </div>
   <div className={styles.rightSide}>
      <ul className={styles.featureList}>
  {features.map(({ id, label, icon }) => (
    <li className={styles.featureItem} key={id}>
      <Icon
        className={styles.featureIcon}
        width={102}
        height={82}
        name={icon}
      />

      <p className={styles.featureLabel}>
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