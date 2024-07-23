import React, { useEffect } from 'react'
import AdminuserTable from './AdminuserTable'
import "./admin.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getallUsers } from '../../Redux/Slice/userSlice/userSlice'

const Admindashboard = () => {

    const dispatch = useDispatch();
    const {getallusers} = useSelector((state)=>state.User);
    // console.log(getallusers[0]);

    const callAPI = ()=>{
        dispatch(getallUsers())
    }

    useEffect(()=>{
      callAPI();
    },[])

  return (
    <>
   <div className="overview-boxes">
                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">Total Order</div>
                        <div className="number">5</div>
                       
                    </div>
                 
                </div>

                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">Total Products</div>
                        <div className="number">14</div>
                       
                    </div>
                    
                </div>

                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">User</div>
                        <div className="number">777887</div>
                      
                    </div>
                   
                </div>

                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">Total Return</div>
                        <div className="number">11,086</div>
                      
                    </div>
                  
                </div>


                
            </div>


          <AdminuserTable getallusers= {getallusers[0]}/>



            
    </>
  )
}


export default Admindashboard
