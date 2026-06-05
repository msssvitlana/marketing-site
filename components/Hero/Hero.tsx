
import styles from './Hero.module.css';


const Hero = () => {


  return (
    <>
     
          <section className={styles.heroSection}>
                <p className={styles.agency}>Рекламне агентство</p>
               <div className={styles.textWrapper}>
                
                  <h1 className={styles.title}><span className={styles.titleSpan}>Рекламні рішення</span> будь-якої складності</h1>
          <p className={styles.description}>
          Від дизайну до реалізації масштабних
           рекламних конструкцій.
          </p>
        </div>

        
   <a className={styles.phoneNumber} href="tel:+380673327701">
            Зателефонувати
          </a>
      
     
          </section>
             
    </>
  );
};

export default Hero;
