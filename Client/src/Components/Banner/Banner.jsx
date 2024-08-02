import React from 'react'
import "./banner.scss"
import banner from "./banner.jpg";
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <>
    <div className='banner'>
      <div className="image">
        <img src={banner} alt="header image" className='img-fluid' srcset="" />
      </div>
     
     <div className="card shadow">
      <h2>Great Food Deserves Great Delivery</h2>
      <p>Every food lover deserves fast and Reliable delivery</p>
      <button><Link to={"/fooditem"}>Start Now</Link></button>
     </div>
    </div>
    
    </>
  )
}

export default Banner
