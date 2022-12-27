import React, { useEffect } from 'react'
import Company from '../components/Company'
import Dashmeet from '../components/Dashmeet'
import Journey from '../components/Journey'

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Journey />
      <Company />
      <Dashmeet />
    </div>
  )
}

export default AboutUs