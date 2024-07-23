import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Slice/adminSlice/adminslice';

const Addproduct = () => {

  const [input,setinput] = useState({
    productname:"",
    price:"",
    quantity:"",
    description:"",
    messname:""
  })

  const dispatch = useDispatch();

  const [img,setimage] = useState("");

  const handlechange = (e)=>{

    const {name,value} = e.target;

    setinput({...input,[name]:value})
  }

  const imghandle = (e)=>{
    setimage(e.target.files[0]);
  }


  const handledata = (e)=>{

      e.preventDefault();

    const {productname,price,description,quantity,messname} = input;
     
    if (productname == ""){
        toast.error("productname is required")
    }else if(price == ""){
        toast.error("price is required")
    }else if(description == ""){
        toast.error("description is required")
    }else if(messname == ""){
        toast.error("messname is required")
    }else{

        const data =  new FormData();
        data.append("productname",productname);
        data.append("price",price);
        data.append("quantity",quantity);
        data.append("description",description);
        data.append("productuploads",img);
        data.append("messname",messname);

        const config = {
            "Content-Type":"multipart/formdata"
          }
          
          const newdata = {
            data,
            config
          }

       dispatch(addProduct(newdata)).then((res)=>{
        if(res.payload){
            setinput({...input,productname:'',price:'',quantity:'',description:'',messname:''})
            setimage('');
        }
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
                                <input type="text" name="productname" onChange={handlechange} value={input.productname} placeholder='Product Name' id="" />
                            </div>
                            
                            <div className="form_input">
                                <input type="text" name="price" onChange={(e)=>{handlechange(e)}} value={input.price}  placeholder='Price' id="" />
                            </div>
                           
                            <div className="form_input">
                                <input type="file" name="productimage" onChange={imghandle}  id="" />
                            </div>
                            <div className="form_input">
                                <input type="text" name="quantity" onChange={handlechange}  value={input.quantity}  placeholder='quantity' id="" />
                            </div>
                            <div className="form_input">
                                <input type="text" name="messname" onChange={handlechange}  value={input.messname}  placeholder='enter messname' id="" />
                            </div>


                            <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea"  name='description' onChange={handlechange} value={input.description} placeholder='product description' rows={3} />
                            </Form.Group>

                            <button className='btn'onClick={handledata}>Submit</button>

                        </form>
                    </div>
                </section>
            </div>
   </>
  )
}

export default Addproduct
