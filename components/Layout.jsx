import React from 'react'
import styles from "../styles/App.module.css"
import Head from "next/head"
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => { 
  return (
    <div>
      <div className={styles.layout}>
        <Head>
          <title>Soul Medic Store</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Merriweather:ital@1&family=Playfair+Display:ital@0;1&family=Roboto&display=swap" rel="stylesheet" />
        </Head>
      
        <header>
          <Navbar />
        </header>

        <main className='main-container'>
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </div>

    </div>
  )
}

export default Layout