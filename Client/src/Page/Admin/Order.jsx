import React, { useEffect } from 'react'
import "./orders.scss"
import { Card, Dropdown, Row, Table } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux"
import { deleteOrder, getallOrders } from '../../Redux/Slice/userSlice/userSlice'
const Order = () => {
 
    const dispatch = useDispatch();
    const {getallorders} =  useSelector((state)=>state.User);
    const {deleteorder}  = useSelector((state)=>state.User);
    console.log(deleteorder);


   const callAPI = ()=>{
         dispatch(getallOrders())
   }

   const handledelete = (e)=>{

    const orderId = e;

    const data ={
        orderId
    }

    dispatch(deleteOrder(data))

   }

   useEffect(()=>{
     callAPI();
   },[deleteorder]);


  return (
  <>
  <div className="container mb-3">
                <h4>Orders</h4>

                <Row>
                    <div className="col mt-0">
                        <Card className='shadow'>
                            <Table className='align-items-center' responsive="sm">
                                <thead className='thead-dark'>
                                    <tr className='table-dark'>
                                        <th>ID</th>
                                        <th>Firstname</th>
                                        <th>messname</th>
                                        <th>Mobile</th>
                                        <th>&nbsp;&nbsp;&nbsp;Fooditem</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>

                                <tbody>   {
                                    
                                     getallorders[0]?.map((element)=>{
                                        return(
                                            <>
                                            
                                            <tr>
                                                        <td> {element?._id}</td>
                                                        <td>{element?.Firstname}</td>
                                                        <td>{element?.messname}</td>
                                                        <td>{element?.mobile}</td>
                                                        <td>{element?.productname}</td>
                                                        <td>{element?.price}</td>
                                                        <td><i className='fa-solid fa-trash' onClick={()=>{handledelete(element?._id)}} style={{cursor:"pointer"}}></i></td>
                                                       
                                                    </tr>
                                            </>
                                        )
                                     })
                                          }
                                        

                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </div>
  </>
  )
}

export default Order
