import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import styles from "../styles/Company.module.css"
import { useInView } from 'react-intersection-observer';

const Company = () => {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  });

  return (
    <motion.div className={styles.companyBody} ref={ref} animate={animation}>
      <div>

      </div>

      <p>
        Gethealingsdone was established in 2019, with an aim to improve the life
        of the people around by giving insights using Tarot. The company
        delivers solutions and products that benefits users in their day to day
        life
      </p>
    </motion.div>
  );
}

export default Company