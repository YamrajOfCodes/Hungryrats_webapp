import React from 'react'
import asset1 from "./asset 5.png"
import asset2 from "./asset 6.png"
import asset3 from "./asset 7.png"
import Card from '../card/Card'
import "./work.scss"
import { NavLink } from 'react-router-dom'

const Work = () => {

  const desc1 ="earn money by delivering foods from restraunts,All you need a bike or a bycycle"
  const desc2 ="Hungryrats helps restraunts and mess to growth online ordering, we asure to growth in 70 days to join"
  const desc3 ="Be a part of a team that’s building a top-notch delivery service in india"



  return (
    <section className='work'>
        <div className="container">
            <div className="row d-flex flex-column gap-4">
                <div className="col-12 mb-3 d-flex justify-content-center ">
                    <div className="heading d-flex gap-3">
                        <h2>Work with</h2>
                        <div className="subheading">
                            <h2>Hungryrats</h2>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 one ">
                    <Card image={asset1} heading={"As a Rider"} desc={desc1} btntext={"Ride with us"}/>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <Card image={asset2} heading={"As a partner"} desc={desc2} btntext={"Partner with us"}/>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <Card image={asset3} heading={"As a colleague"} desc={desc3} btntext={"Work with us"}/>
                </div>
                <div className="col-12 text-center explore ">
                    <p style={{color:"#6415ff",cursor:"pointer"}}> <NavLink to={"/fooditem"} style={{color:" #105DF0"}}>Guest? Explore</NavLink> <i class="fa-solid fa-arrow-right"></i> </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work
