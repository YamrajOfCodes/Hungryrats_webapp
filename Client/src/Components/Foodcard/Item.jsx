import React, { useEffect } from 'react'
import "./item.scss"
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { userVerify } from '../../Redux/Slice/userSlice/userSlice';
const Item = ({price,productname,productimage,messname,id}) => {

  const {userloggedin} = useSelector((state)=>state.User);
  // console.log(userloggedin);
  const {userlogin} = useSelector((state)=>state.User);

  const dispatch = useDispatch();

  const handleorder = ()=>{
    toast.error("you have to login before furthur processing")
  }

  useEffect(()=>{
    dispatch(userVerify());
  },[])



  return (
    <div className="item border shadow">
        <div className="img-div shadow">
            <img src={productimage} alt="" />
        </div>
           <div className="price d-flex">
           <h4 className='head'>{productname}</h4>
           <div className="real-p">₹{price}</div>
           </div>
        <p className='subtitle'>{messname}</p>
       {
        userlogin?.length > 0?   <NavLink to={`/fooditem/${id}`}><p className='ctaa  btn btn-primary text-center mx-auto'>Order</p></NavLink>
        :
        <p onClick={handleorder} className='ctaa  btn btn-primary text-center mx-auto'>Order</p>
       }
    </div>
  )
}

export default Item
