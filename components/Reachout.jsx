import React, { useEffect } from 'react'
import styles from "../styles/Reachout.module.css"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Popup from 'reactjs-popup';
import { useRouter } from "next/router";

// TODO: add email id and number of client

const Reachout = () => {

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
    <motion.div className={styles.reachoutBody} ref={ref} animate={animation}>
      <h1>Reach out to us!</h1>

      <div className={styles.reachoutFlexbox}>
        <div
          className={styles.reachoutButton}
          onClick={() => router.push("/about-us")}
        >
          <p>About Soul Medic</p>
        </div>

        <Popup
          trigger={
            <div
              className={styles.reachoutButton}
              onClick={() => window.open("mailto:abcd@gmail.com")}
            >
              <p>Contact Us</p>
            </div>
          }
          modal
        >
          <div className={styles.reachoutModal}>
            <h1>Phone Number</h1>
            <p>+91 99998 98562</p>
            <br />
            <h1 style={{marginTop: "15px"}}>Email ID</h1>
            <p style={{marginTop: "20px", cursor: "pointer"}} onClick={() => window.open("mailto:wadhwadashmeet@gmail.com", '_blank')}>wadhwadashmeet@gmail.com</p>
          </div>
        </Popup>
      </div>
    </motion.div>
  );
}

export default Reachout