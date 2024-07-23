import React from 'react'
import "./card.scss"
import asset1 from "./asset 5.png"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Card = ({image,heading,desc ,btntext}) => {

  const navigate = useNavigate();

  const handleClick = (e)=>{
 
   if(e == "Work with us"){
    
    navigate("/contact",{state:`hello team, i want to work with you`})

   }else if(e == "Partner with us"){
    navigate("/contact",{state:"hello team, Let's partner up to spread hungryrats worldwide, Looking forward to discussion about it"})
   }else{
    navigate("/contact",{state:"hello team, I want to become a food delivery boy for your compony"})

   }
    
  }

  return (
    <>
    <div className="cards">
        <hr />
       <div className="container">
        <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <div className="row">
          <div className="col-6 left">
            <img src={image} alt="asset 1" srcset="" />
          </div>
          <div className="col-6 right">
            <h2>{heading}</h2>
            <p>{desc}</p>
            <button className='cta' onClick={(e)=>{handleClick(btntext)}} >{btntext}</button>
            </div>    
          </div>
        </div>
        </div>
        <hr />
       </div>
    </div>
    </>
  )
}

export default Card
