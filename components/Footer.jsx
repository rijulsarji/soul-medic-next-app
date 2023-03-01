import React from 'react'
import styles from "../styles/Footer.module.css"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

const Footer = () => {
  return (
    <div className={styles.footerBody}>
      <h2>Get The Healings Done</h2>
      <p>Created with ❤️ by Dashmeet Kaur</p>
      <div className={styles.footerSocial}>
        <a href="https://www.google.com">
          <FaInstagram id="insta" className={styles.footerIcons} />
        </a>
        <a href="https://www.google.com">
          <FaFacebook id="facebook" className={styles.footerIcons} />
        </a>
        <a href="https://www.google.com">
          <FaTwitter id="twitter" className={styles.footerIcons} />
        </a>
      </div>
      <a
        href="https://github.com/rijulsarji"
        target="_blank"
        rel="noreferrer"
        style={{ paddingTop: "20px", color: "gray", fontSize: "14px" }}
      >
        Created by © Rijul Sarji
      </a>
    </div>
  );
}

export default Footer