import React, { useEffect, useState } from 'react'
import Item from '../../Components/Foodcard/Item'
import "./food.scss"
import { useDispatch, useSelector } from 'react-redux';
import { getallProducts } from '../../Redux/Slice/adminSlice/adminslice';
import { userVerify } from '../../Redux/Slice/userSlice/userSlice';
import Loader from '../../Components/Loader/Loader';

const Food = () => {

    const dispatch = useDispatch();
    const {getallproducts} = useSelector((state)=>state.Admin);
    
    
    

    const callapi = (e)=>{
      
      dispatch(getallProducts())
      
      
    }
    
    useEffect(()=>{
      
      callapi();
      
       
      
    },[])
    
    
    const [spin,setspin] = useState(true);
    
    useEffect(()=>{
     
      setTimeout(()=>{
       setspin(false)
      },2000)
    
      },[]);
    

  return (
   <div className='mb-5 sec'>
   {
    spin ?  <Loader/>  :  <div className="container">
    <div className="row">
        <div className="col-12 text-center menu mb-5 mt-5"><h2>Menu</h2></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 wrap">
           {
            getallproducts[0]?.map((element,index)=>{
                return(
                    <>
                     <Item key={index} productname={element?.productname} price={element?.price} productimage={element?.productimage} messname={element?.messname} id={element?._id}/>
                    </>
                )
            })
           }

        </div>
    </div>
</div>
   }
   </div>
  )
}

export default Food
