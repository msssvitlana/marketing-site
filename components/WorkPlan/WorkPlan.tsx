
import styles from './WorkPlan.module.css';
import { workPlan } from '@/constants/workPlan'
import Icon from "../ui/Icon/Icon";


const WorkPlan = () => {


  return (
     
    <section className={styles.workPlanSection}>
      <div className={styles.workPlanLeftSide}>
               <div className={styles.workPlanTextWrapper}>
                
                  <h2 className={styles.workPlanTitle}>Як ми<span className={styles.workPlanTitleSpan}> працюємо</span> </h2>
          <p className={styles.workPlanDescription}>
Простий і прозорий процес від ідеї до реалізації.
          </p>
        </div>
      
      </div>
   
     <ol className={styles.workPlanList}>
  {workPlan.map(({  title, description }) => (
    <li key={title} className={styles.workPlanItem}>
      {/* <Icon
        className={styles.workPlanIcon}
        width={39}
        height={80}
        name={icon}
      /> */}

      <div className={styles.textBox}>
        <h3 className={styles.workPlanLabel}>{title}</h3>

        <p className={styles.workPlanItemDescription}>
          {description}
        </p>
      </div>
    </li>
  ))}
</ol>
    
          </section>
             
    
  );
};

export default WorkPlan;