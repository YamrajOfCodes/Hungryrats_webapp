import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import Services from '../../Components/Services/Services'
import Section from '../../Components/section/Section'
import Work from '../../Components/Work/Work'
import Loader from '../../Components/Loader/Loader'

const Home = () => {

  
  const [spin,setspin] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setspin(false)
    },2000);

  },[]);
  return (
    <>
   {
    spin ? <Loader/> : <> <Banner/>
    <Services/>
    <Section/>
    <Work/></>
   }
    </>
  )
}

export default Home
