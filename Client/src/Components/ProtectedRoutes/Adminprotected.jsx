import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const Adminprotected = ({Component}) => {

    const navigate = useNavigate();

    const checklogin = (e)=>{
        const login = localStorage.getItem("adminToken");
        if(!login){
            navigate("/admin/login")
        }
    }
    
    useEffect(()=>{
     checklogin();
    },[]);

  return (
    <>
    <Component/>
    </>
  )
}

export default Adminprotected
