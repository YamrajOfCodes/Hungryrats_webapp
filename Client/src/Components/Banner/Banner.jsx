import React from 'react'
import "./banner.scss"
import banner from "./banner.jpg";
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
      <button><a>Start Now</a></button>
     </div>
    </div>
    
    </>
  )
}

export default Banner
