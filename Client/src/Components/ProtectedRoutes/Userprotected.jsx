import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Userprotected = ({Component}) => {

    const navigate = useNavigate();

    const checklogin = (e)=>{
        const login = localStorage.getItem("userToken");
        if(!login){
            navigate("/login");
        }
    }

    useEffect(()=>{
     checklogin()
    },[])

  return (
    <div>
      <Component/>
    </div>
  )
}

export default Userprotected
