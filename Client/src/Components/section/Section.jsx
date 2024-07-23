import React from 'react'
import "./section.scss"
import sideimage from "./asset 4.png"
import { NavLink } from 'react-router-dom'

const Section = () => {
    return (
        <section className='mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 left d-flex flex-column justify-content-md-center">
                        <p className='section-head'>A Reputed brand</p>
                        <div className="heading d-flex gap-2">
                            <h2>Why</h2>
                            <div className="subheading">
                                <h2>Choose Us?</h2>
                            </div>
                        </div>
                        <p className='desc'>
                            Hungryrats is the india's first ever food delivery service who deliver foods items in affordable price hungryrats is not only for those peoples who are regulary ordered food but also for those peoples who lives outside the home, <span className='fw-bold'> because hungryrats provides a variety of taste that they need most</span>
                        </p>
                        <button className='mt-lg-4'><NavLink style={{color:'#fff'}} to={"/fooditem"}>Order Now</NavLink></button>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 mt-5 right">
                        <div className="img">
                            <img src={sideimage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section
