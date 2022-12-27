import { motion } from 'framer-motion';
import React from 'react'
import styles from "../styles/Banner.module.css";

const Banner = () => {

  return (
    <motion.div className={styles.bannerBody} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 0.15}}>
      <div className={styles.bannerBG}></div>
      <div className={styles.bannerContent}>
        <h1>Welcome to Soul Medic</h1>
        <p>Get Healings Done</p>
      </div>
    </motion.div>
  );
}

export default Banner