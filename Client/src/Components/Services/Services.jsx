import React from 'react'
import "./services.scss"
import Box from '../service_component/Box'
import asset1 from "./asset 1.png"
import asset2 from "./asset 2.png"
import asset3 from "./asset 3.png"

const Services = () => {

  const desc1 = "A fast delivery services for customers who need their food quickly deliver"
  const desc2 = "A service that allows customer to schedule their food delivery in advance"
  const desc3 = "In the order of food delivery we update menu daily avoid repeatable items"

  return (
   <>
   <div className="services container-fluid pt-2 px-5 mb-5">
    <div className="row g-5 g-sm-3">
        <div className="col-12 col-sm-12 col-lg-12 d-flex justify-content-center mt-5 mb-2 mb-lg-5">
            <div className="heading d-flex gap-2 align-items-center">
                <h2>Amazing</h2>
                <div className="subheading">
                    <h2>Services</h2>
                </div>
            </div>
        </div>

        <div className="col-12 col-sm-4 col-md-4 col-lg-4 d-flex d-flex justify-content-start justify-content-sm-center ">
            <Box image={asset1} heading={"Express delivery"}  desc={desc1} />
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4  d-flex justify-content-end  justify-content-sm-center">
            <Box image={asset2} heading={"Scheduled delivery"}  desc={desc2} />
        </div>
        <div className="col- col-sm-4 col-md-4 col-lg-4  d-flex justify-content-start">
            <Box image={asset3} heading={"Updated menu"}  desc={desc3} />
        </div>
    </div>
   </div>
   </>
  )
}

export default Services
