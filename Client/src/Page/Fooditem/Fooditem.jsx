import React, { useEffect, useState } from 'react'
import "./fooditem.scss"
import star from "./star_icon.png"
import veg from "./veg.png"
import {useDispatch, useSelector} from "react-redux"
import { singleProduct } from '../../Redux/Slice/adminSlice/adminslice'
import {useParams} from "react-router-dom"
import { userOrder, userVerify } from '../../Redux/Slice/userSlice/userSlice'
import Loader from '../../Components/Loader/Loader'
const Fooditem = () => {


    const dispatch = useDispatch();
    const {getsingleproduct} = useSelector((state)=>state.Admin);
    const {userloggedin} = useSelector((state)=>state.User)
   

    const {productId} = useParams();



    const callAPI = ()=>{
        dispatch(singleProduct(productId))
    }

    const [spin,setspin] = useState(true);

 
    useEffect(()=>{
      setTimeout(() => {
        setspin(false)
      }, 2000);
    })
   
    
    
    const manageOrder = ()=>{
        
        
        const data={
            Firstname:userloggedin[0]?.Firstname,
            mobile:userloggedin[0]?.mobile,
            productname:getsingleproduct[0]?.productname,
            messname:getsingleproduct[0]?.messname,
            price:getsingleproduct[0]?.price
        }
        
        dispatch(userOrder(data))
    }
    
    
    useEffect(()=>{
        
        dispatch(userVerify());
       callAPI();

    },[userloggedin])

    return (
        <>
            <div className="sections ">
                {
                    spin ? <Loader/> : <div className="container ">
                    <div className="row g-5">
                        <div className=" col-12 col-sm-12 col-md-6 col-lg-6 left-part">
                          <img src={getsingleproduct[0]?.productimage} width={"100px"} style={{borderRadius:"17px"}} alt="" srcset="" />
                        </div>
                        <div className="right-part col-12 col-sm-12 col-md-6 col-lg-6">
                             <div className="content">
                                <h4>{getsingleproduct[0]?.productname}</h4>
                                <p className='para'>{getsingleproduct[0]?.messname}</p>
                               <div className="stars d-flex">
                                <img src={star} alt="rating's star" srcset="" />
                                <img src={star} alt="rating's star" srcset="" />
                                <img src={star} alt="rating's star" srcset="" />
                                <img src={star} alt="rating's star" srcset="" />
                               </div>
                               <p className='desc mt-2'>{getsingleproduct[0]?.description}.</p>
                               <div className="veg-img d-flex gap-2  align-items-center">
                                <img src={veg} width={"50px"} alt="" srcset="" />
                               <div className="veg  d-flex align-item-center" style={{paddingTop:"1rem"}}> <p>Veg</p></div>
                               </div>
                               <h4 className="price mt-3">
                                Rs {getsingleproduct[0]?.price}
                               </h4>
                               <div className="order-ctas mt-2">
                                <button className='btn btn-primary' onClick={manageOrder}>Place Order</button>
                               </div>
                             </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default Fooditem
