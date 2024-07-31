import React, { useEffect, useState } from 'react'
import "./contact.scss"
import contactImage from "./contact.png"
import toast from "react-hot-toast"
import {useDispatch} from "react-redux";
import { userMessage } from '../../Redux/Slice/userSlice/userSlice';
import Loader from '../../Components/Loader/Loader';
import { useLocation } from 'react-router-dom';

const Contact = () => {

  const [spin,setspin] = useState(true);

  const {state} = useLocation();

  useEffect(()=>{
    setTimeout(() => {
      setspin(false)
    },2000);

  },[]);


  const [input,setinput] = useState({
    email:"",
    name:"",
    message: state ? state : ""
  })

  const dispatch =  useDispatch();

   const handlechange = (e)=>{
    const {name,value} = e.target;
    setinput({...input,[name]:value})
   }

   const handlesubmit = (e)=>{

     e.preventDefault();

     const {email,name,message} = input;

      if(email == ""){
        toast.error("email is required to submit")
      }else if(name == ""){
        toast.error("please enter your name");
      }else if(message == ""){
        toast.error("please enter your message")
      }else{

        dispatch(userMessage(input)).then((res)=>{
          if(res.payload){
            setinput({...input,email:"",name:"",message:""})
          }
        }).then((e)=>{
          console.log(e);
        })

      }

      


   }

  return (
    <div className='contact'>
    {
      spin ? <Loader/> :<div className="container-fluid">
      <div className="row">
      <div className="col-12 col-sm-3">
       <img src={contactImage} alt="contact image"  />
      </div>
       <div className=" col-12 col-9 right ">
       <form  className='rounded bg-white shadow p-5'>
                   <h3 className='text-dark fw-bolder fs-4 text-center mb-2'>Contact us</h3>
                   <div class="form-floating mb-3 mt-5">
                  
 <input type="email" class="form-control mt-4" style={{paddingTop:"34px"}} id="floatingInput" onChange={handlechange} value={input.email}  placeholder="name@example.com" name='email'/>
  <label for="floatingInput" className='email mb-5'>Email address</label>
</div>
<div class="form-floating">
<input type="input" class="form-control" id="floatingPassword" style={{paddingTop:"34px"}} onChange={handlechange} value={input.name} placeholder="Password" name='name'/>
<label for="floatingPassword">name</label>
</div>
<div class="form-floating">
<textarea class="form-control mt-4"  placeholder="Leave a message here"  onChange={handlechange} value={state? state : input.message} id="floatingTextarea2" name='message' style={{height:'150px',paddingTop:"34px"}}></textarea>
<label for="floatingTextarea2">Comments</label>

</div>
<button type='submit' className='btn btn-primary w-100 my-4 h-4' onClick={handlesubmit} value="Send">Send message</button>
</form>
       </div>
      </div>
   </div>
    }
</div>
  )
}

export default Contact
