import classNames from "classnames";
import { motion, MotionValue } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { JobDescription } from "../../types/JobDescription";
import styles from "./Timeline.module.css";

type  TimelineProp = {
  scrollYProgress:MotionValue<number>
} & JobDescription

export default function Timeline({description,endDate,startDate,companyName,jobTitle,scrollYProgress}: TimelineProp) {
  return (
    <div style={{display:'flex'}}>
      <div className={styles.timeLine}></div>
      <div className={styles.textBox}>
        <div className={styles.textContainer}>
          <div className={styles.expHeader}>
            <div className={styles.icon}>
              <BriefcaseBusiness size={30} />
            </div>
            <h1>{companyName},</h1>
            <h2>{jobTitle}</h2>
          </div>
          <motion.div  className={classNames(styles.expContent)}>
            <motion.div style={{scaleY: scrollYProgress}} className={styles.progressBar}>

            </motion.div>
            <div className={styles.dateContainer}>
              <div className={styles.dateArrow}></div>
              <p>{endDate}</p>
            </div>
            <ul className={styles.list}>
              {
                description.map((point,key) => <li key={key}>{point}</li>)
              }
            </ul>
            <div className={classNames(styles.dateContainer, styles.startDate)}>
              <div className={styles.dateArrow}></div>
              <p>{startDate}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
