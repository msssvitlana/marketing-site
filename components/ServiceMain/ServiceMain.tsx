
import styles from './ServiceMain.module.css';
import Link from "next/link";
import Icon from "../ui/Icon/Icon";
import { serviceMainDescriptions } from "@/constants/serviceMainDescription";
import Image from "next/image";

const ServiceMain = () => {


  return (
     
    <section className={styles.serviceMainSection}>
               <div className={styles.serviceMainTextWrapper}>
                
                   <h2 className={styles.serviceMainTitle}>Наші <span className={styles.serviceMainTitleSpan}>послуги</span> </h2>
          <p className={styles.serviceMainDescription}>
Широкий спектр рекламних і не тільки послуг для 
вашого бізнесу.
          </p>
        </div>

        

      
<ul className={styles.serviceMainFeatureList}>
  {serviceMainDescriptions.map(
    ({ photo, title, description, href }) => (
      <li className={styles.serviceMainFeatureItem} key={title}>
  <Image
  src={photo}
  alt={title}
  width={400}
  height={300}
 
        />
        <div className={styles.serviceMainFeatureItemBox}>
  <div className={styles.serviceMainFeatureItemTextWrapper}>
          
             <h3 className={styles.serviceMainFeatureItemTitle}>{title}</h3>

          <p className={styles.serviceMainFeatureItemDescription}>{description}</p>
</div>
         
         
        <Link className={styles.serviceMainLink} href={href}>
          Детальніше
          <Icon
            className={styles.serviceMainIcon}
            width={18}
            height={18}
            name="icon-arrow-right"
          />
        </Link>


        </div>
      
      
      </li>
    )
  )}
</ul>
     
          </section>
             
    
  );
};

export default ServiceMain;