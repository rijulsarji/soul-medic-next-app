import React, { useEffect } from 'react'
import styles from "../styles/Categories.module.css"
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useRouter } from "next/router"

const Categories = () => {

  const router = useRouter();

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
    <motion.div className={styles.categoryBody} ref={ref} animate={animation}>
      <h1>Our Categories of shopping...</h1>

      <div className={styles.categoryFlexbox}>
        <div className={styles.categoryButton} 
        onClick={() => router.push("/crystal-store")}
        >
          <p>Crystals</p>
        </div>
        <div className={styles.categoryButton} 
        onClick={() => router.push("/book-store")}
        >
          <p>E-Books</p>
        </div>
      </div>

      <div className={styles.bannerMid}></div>

    </motion.div>
  );
}

export default Categories