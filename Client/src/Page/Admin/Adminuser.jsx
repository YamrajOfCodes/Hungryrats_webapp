import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { createUser } from '../../Redux/Slice/adminSlice/adminslice'

const Adminuser = () => {
 
    const dispatch = useDispatch();

    const [input,setinput] = useState({
        Firstname:"",
        Lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
        mobile:"",
        address:""
    })

    const [img,setimg] = useState("");

    const handlechange = (e)=>{

        const {name,value} = e.target;

        setinput({...input,[name]:value})
    }

    const handleimage = (e)=>{
        setimg(e.target.files[0])
    }


    const handlesubmit = (e)=>{

        e.preventDefault();

    const {Firstname,Lastname,email,password,confirmpassword,address,mobile} = input;

         if(Firstname == ""){
            toast.error("name is required")
         }else if(Lastname == ""){
            toast.error("Lastname is mandatory")
         }else if(email == ""){
            toast.error("please submit your email")
         }else if(!email.includes("@")){
            toast.error("please enter valid email")
         }else if(mobile == ""){
            toast.error("please enter mobile")
         }
         else if(password == ""){
            toast.error("please enter password")
         }else if(confirmpassword == ""){
            toast.error("please confirm your password")
         }else if (password !== confirmpassword){
            toast.error("both passwords does not matched")
         }else if(address == ""){
            toast.error("address is required")
         }else if(img == ""){
            toast.error("please select user image")
         }else{
            
            const data = new FormData();
            data.append("Firstname",Firstname)
            data.append("Lastname",Lastname)
            data.append("email",email)
            data.append("password",password)
            data.append("confirmpassword",confirmpassword)
            data.append("mobile",mobile)
            data.append("address",address)
            data.append("useruploads",img)

            const config ={
                 "Content-Type":"multipart/formdata"
            }

            const newdata = {
                data,
                config
            }


            dispatch(createUser(newdata)).then((res)=>{
                if(res.payload){
                    setinput({...input,Firstname:"",Lastname:"",email:"",password:"",confirmpassword:"",mobile:"",address:""});
                    setimg("");
                }
            }).catch((e)=>{
                console.log(e);
            })
         }


    }
 

  return (
   <>
   <div className="container">
                <section>
                    <div className="form_data">
                        <div className="form_heading">
                            <h1>Add Products</h1>
                        </div>

                        <form>
                            <div className="form_input">
                                <input type="text" name="Firstname" onChange={handlechange}  value={input.Firstname}   placeholder='enter firstname' id="" />
                            </div>

                            <div className="form_input">
                                <input type="text" name="Lastname" onChange={handlechange} value={input.Lastname}   placeholder='enter Lastname' id="" />
                            </div>

                            <div className="form_input">
                                <input type="text" name="email" onChange={handlechange} value={input.email}   placeholder='enter your email' id="" />
                            </div>

                            <div className="form_input">
                                <input type="number" name="mobile"  onChange={handlechange} value={input.mobile}  placeholder='enter phone number' id="" />
                            </div>

                            <div className="form_input">
                                <input type="password" name="password" onChange={handlechange} value={input.password}   placeholder='enter password' id="" />
                            </div>

                            <div className="form_input">
                                <input type="confirmpassword" name="confirmpassword" onChange={handlechange} value={input.confirmpassword}   placeholder='confirm your password' id="" />
                            </div>
                           
                            <div className="form_input">
                                <input type="file" name="userprofile" onChange={handleimage}   id="" />
                            </div>
                        

                            <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea"  onChange={handlechange} value={input.address} name='address' placeholder='Address' rows={3} />
                            </Form.Group>

                            <button className='btn'onClick={handlesubmit}>Add user</button>

                        </form>
                    </div>
                </section>
            </div>
   </>
  )
}

export default Adminuser
