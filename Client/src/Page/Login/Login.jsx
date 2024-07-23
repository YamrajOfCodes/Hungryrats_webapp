import React, { useEffect, useState } from 'react'
import logo from "./logo.png"
import "./login.scss"
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../Redux/Slice/userSlice/userSlice'
import Loader from '../../Components/Loader/Loader'

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [input,setinput] = useState({
        email:"",
        password:""
    })

    const handlechange = (e)=>{

        const {name,value} = e.target;

        setinput({...input,[name]:value})
    }

    const handlelogin = (e)=>{

        e.preventDefault();

        const {email,password}= input;

        if(email == ""){
            toast.error("please enter your email")
        }else if(!email.includes("@")){
            toast.error("please enter valid email")
        }else if(password == ""){
            toast.error("password is required")
        }else{

            dispatch(userLogin(input)).then((res)=>{
                if(res.payload){
                    navigate("/fooditem")
                }
            }).catch((e)=>{
                console.log(e);
            })
        }

      
    }
    const [spin,setspin] = useState(true);

 
    useEffect(()=>{
      setTimeout(() => {
        setspin(false)
      }, 2000);
    })
   


    return (
        <>
        {
            spin ? <Loader/> : <section className='wrapper mx-lg-5'>
            <div className="container login-container">
                <div className="col-sm-8 offsetset-sm-2 col-lg-6 offset-lg-3 col-xl-4 text-center">
                    <div className="logo">
                        <img src={logo} width={"200px"} alt="hungryrat's logo" srcset="" />
                    </div>
                    <form className='rounded bg-white shadow p-5'>
                        <h3 className='text-dark fw-bolder fs-4  mb-2'>Sign In to Hungryrats</h3>
                        <div class="form-floating mb-3 mt-5">
                            <input type="email" name='email' onChange={handlechange} value={input.email} class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" name='password' onChange={handlechange} value={input.password} class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button type='submit' className='btn btn-primary w-100 my-4' onClick={handlelogin} >Login</button>
                    </form>
                </div>
            </div>
        </section>
        }
        </>
    )
}

export default Login
