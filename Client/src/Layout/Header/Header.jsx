import React, { useEffect, useMemo, useState } from 'react'
import "./header.scss"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userLogout, userVerify } from '../../Redux/Slice/userSlice/userSlice';


const Header = () => {

  const {userlogin} = useSelector((state)=>state.User);
  const {userloggedin} = useSelector((state)=>state.User)

  console.log(userloggedin);
  









  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [navbar,setnavbar] = useState("home");

  const handleLogout = (e)=>{
     dispatch(userLogout()).then((res)=>{
      if(res.payload){
        navigate("/")
      }
     }).catch((e)=>{
      console.log(e);
     })
  }

  useEffect(()=>{
   dispatch(userVerify())
  },[])

 




  return (
    <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <NavLink  class="navbar-brand" to={"/"} ><h1 className='text-white'>Hungryrats</h1></NavLink>
      <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars text-white"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ">
          <li  onClick={(e)=>{setnavbar("home")}} class={navbar == "home" ? "nav-item class" : "nav-item"}>
            <NavLink class="nav-link text-white active" to={"/"} style={{color:"#fff"}} aria-current="page" >Home</NavLink>
          </li>
          <li  onClick={(e)=>{setnavbar("menu")}} class={navbar == "menu" ? "nav-item class" : "nav-item"}>
            <NavLink to={"/fooditem"}  style={{color:"#fff"}} class="nav-link text-white " >Menu</NavLink>
          </li>   
          <li  onClick={(e)=>{setnavbar("contact")}} class={navbar == "contact" ? "nav-item class" : "nav-item"}>
            <NavLink class="nav-link text-white" to={"/contact"} style={{color:"#fff"}}>Contact us</NavLink>
          </li> 
          <li class="nav-item ">
           {
             userloggedin?.length > 0 ?
            <NavLink  onClick={handleLogout} class={navbar == "logout" ? "nav-item class" : "nav-item"}  style={{color:"#fff"}}   >Logout</NavLink>
            :
            <NavLink   onClick={(e)=>{setnavbar("")}} class={navbar == "login" ? "nav-item class" : "nav-item"} style={{color:"#fff"}}  to={"/login"}>Login</NavLink>
           }
           
          </li>  
        </ul>
      
      </div>
    </div>
  </nav>
  )
}

export default Header
