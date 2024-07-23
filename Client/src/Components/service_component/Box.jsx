import React from 'react'
import "./box.scss"
import clockpng from "./asset 2.png"

const Box = ({heading,desc,image}) => {
  return (
    <>
    <div className="box shadow">
      <div className="img">
        <img
        src={image} alt="service logo" srcset="" />
      </div>
      <h3>{heading}</h3>
      <p className='text-center'>{desc}</p>
    </div>
    </>
  )
}

export default Box
