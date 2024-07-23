import React, { useEffect, useState } from 'react'
import Item from '../../Components/Foodcard/Item'
import {useDispatch, useSelector} from "react-redux"
import { deleteSingleProduct, getallProducts } from '../../Redux/Slice/adminSlice/adminslice'

const Adminproducts = () => {

 
  const dispatch = useDispatch();
  const {getallproducts} = useSelector((state)=>state.Admin);
  // console.log(getallproducts);
  const {deletesingleproduct}= useSelector((state)=>state.Admin)


  const callapi = (e)=>{
   
    dispatch(getallProducts())

  }

  const handledelete = (e)=>{

    let productId = e;
    
    dispatch(deleteSingleProduct(productId))

  }

  useEffect(()=>{

    callapi();
  
  },[deletesingleproduct])

  return (
    <div className='mb-5 sec'>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center menu mb-5 mt-5"><h2>Menu</h2></div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 wrap">
            {
              getallproducts[0]?.map((element) => {
                return (
                  <>
                    <div className="item border shadow">
                      <div className="img-div shadow">
                        <img src={element?.productimage} alt="" />
                      </div>
                      <div className="price d-flex">
                        <h4 className='head'>{element?.productname}</h4>
                        <div className="real-p">₹{element?.price}</div>
                      </div>
                      <p className='subtitle'>{element?.messname}</p>
                      <p onClick={()=>{handledelete(element?._id)}} className='ctaa  btn btn-primary text-center mx-auto'>  <i className='fa-solid fa-trash mx-3'></i> <span>Delete</span></p>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminproducts
