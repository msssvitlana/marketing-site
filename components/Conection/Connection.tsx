
import styles from './Connection.module.css';


const Connection = () => {


  return (
    <>
     
          <section className={styles.connectionSection}>
           
               <div className={styles.textWrapper}>
                
                  <h2 className={styles.connectionSectionTitle}><span className={styles.connectionSectionTitleSpan}>Маєте ідею? </span> Реалізуємо її разом</h2>
          <p className={styles.connectionSectionDescription}>
         Зв&apos;яжіться з нами та отримайте безкоштовну консультацію від наших експертів.
          </p>
        </div>

        
   <a className={styles.phoneNumber} href="tel:+380673327701">
            Зателефонувати
          </a>
      
     
          </section>
             
    </>
  );
};

export default Connection;
