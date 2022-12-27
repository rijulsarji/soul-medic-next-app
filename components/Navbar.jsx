import React, { useContext } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/Logo.png"
import styles from "../styles/Navbar.module.css"
import Cart from './Cart';
import { Context } from '../context/StateContext';
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useContext(Context);

  return (
    <div className={styles.navbarBody}>
      <Image
        src={Logo}
        alt="Picture of the author"
        className={styles.navbarBodyImg}
      />

      <div className={styles.navbarLinks}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <p>Home</p>
        </Link>
        <Link href="/about-us" style={{ textDecoration: "none" }}>
          <p>About Us</p>
        </Link>

        <button
          type="button"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping style={30}/>
          <span>{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}
    </div>
  );
}

export default Navbar