import React, { useState } from 'react'
import "./adminlogin.scss"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../../Redux/Slice/adminSlice/adminslice';
import toast from 'react-hot-toast';

const Adminlogin = () => {

    const [passShow,setPassShow] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    

    const [input,setinput] = useState({
        email:"",
        password:""
    })

    const handlechange = (e)=>{
     const {name,value} = e.target

     setinput({...input,[name]:value})
    }

    const handlesubmit = (e)=>{

        e.preventDefault();
        const {email,password} = input;


          if(email == ""){
            toast.error("email is required")
          }else if(!email.includes("@")){
            toast.error("please enter valid email")
          }else if(password == ""){
            toast.error("please enter password")
          }else{
            dispatch(adminLogin(input)).then((res)=>{
               if(res.payload){
                navigate("/admin/dashboard")
               }
            }).catch((e)=>{
                console.log(e);
            })
    
          }
        
    }

  return (
    <section>
    <div className="form_data">
        <div className="form_heading">
            <h1>Admin Sign In</h1>
        </div>

        <form action="">
            <div className="form_input">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={input.email} onChange={handlechange}  placeholder='Enter Your Email Address' />
            </div>

            <div className="form_input">
                <label htmlFor="password">Password</label>
                <div className="two">
                    <input type={!passShow ? "password" : "text"}  name="password" value={input.password} onChange={handlechange}  placeholder='Enter Your password' id="" />
                    <div className="showpass" onClick={() => setPassShow(!passShow)}>
                        {!passShow ? "Show" : "Hide"}
                    </div>
                </div>
            </div>

            <button className='btn' onClick={(e)=>{handlesubmit(e)}}>Login</button>
        </form>
    </div>
</section>
  )
}

export default Adminlogin
