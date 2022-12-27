import React from 'react'
import styles from "../styles/Journey.module.css"
import Logo from "../assets/Logo.png"
import { motion } from 'framer-motion';
import Image from 'next/image';

const Journey = () => {

  return (
    <motion.div
      className={styles.journeyBody}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.15 }}
    >
      <h2>Our Journey</h2>
      <Image src={Logo} alt="Dashmeet Kaur" className={styles.journeyBodyImg} />
      <p>
        &ldquo;I always had faith in my intuitions and a promising spiritual
        soul. That&apos;s where my journey began— now being my business which
        initially started with shuffling tarot cards and looking up for
        different crystals aligning with my zodiac. &ldquo;It is never too late
        to be what you might have been.&rdquo; I began my journey with a
        stumbling foot with no opportunity un turn. Bring things that add
        meaning to it, and my business did it! Not a day goes away where I
        don&apos;t thank God for blessing me with such kind customers and for
        the industry to do well. However, the journey hasn&apos;t always been
        easy, as &ldquo;People will always have their opinion on you despite who
        you are and what you&apos;re capable of.&rdquo; As rightly said, people
        who didn&apos;t appreciate my work and hard work existed, but I never
        gave them the upper hand. Belive yourself is always a good mantra for
        me; I believe myself, and so should you too.&rdquo;
      </p>
    </motion.div>
  );
}

export default Journey