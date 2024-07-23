import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "../../Page/Admin/admin.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogout, adminVerify } from '../../Redux/Slice/adminSlice/adminslice';


const Adminsidebar = ({children}) => {

    const [isSidebarActive, setSidebarActive] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {adminloggedin} = useSelector((state)=>state.Admin)
    // console.log(adminloggedin);

    useEffect(()=>{
   dispatch(adminVerify());
    },[])


    const handlelogout = (e)=>{
         dispatch(adminLogout()).then((res)=>{
            if(res.payload){
                navigate("/admin/login")
            }
         }).catch((e)=>{
            console.log(e);
         })
    }

  return (
    <>
    <div className={`sidebar ${isSidebarActive ? 'active' : ""}`}>

                {/* sidebar code */}
                <div className="logo-details">
                    <NavLink to="/" className="text-decoration-none">
                        <i className='fa-solid fa-user'></i>
                        <span className='logo_name'>{adminloggedin[0]?.name} Admin</span>
                    </NavLink>

                </div>
                <ul className='nav-links'>
                    <li>
                        <NavLink to="/admin/dashboard" className="active">
                            <i className='bx bx-grid-alt'></i>
                            <span className='links_name'>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/addproduct" >
                            <i className='fa-solid fa-truck-fast'></i>
                            <span className='links_name'>Add Products</span>
                        </NavLink>
                    </li>
                
                    <li>
                        <NavLink to="/admin/products" >
                            <i className='fa-solid fa-certificate'></i>
                            <span className='links_name'>Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/orders">
                            <i className='fa-solid fa-bag-shopping'></i>
                            <span className='links_name'>Orders</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/createuser" >
                            <i className='fa-solid fa-gear'></i>
                            <span className='links_name'>Add User</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/dashboard" >
                            <i className='fa-solid fa-gear'></i>
                            <span className='links_name'>Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </div>





<section className='home-section' style={{margin:"0"}}>
<nav>
    <div className="sidebar-button">
        <i className='fa-solid fa-bars'></i>
        <span className='dashboard'>Dashboard</span>
    </div>
    <div className="search-box">
        <input type="text" name="" placeholder="Search..." id="" />
        <i className='bx bx-search'></i>
    </div>

    <div className="profile-details">
        <span className='admin_name'>{adminloggedin[0]?.name}</span>
        <Dropdown className='text-center'>
            <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                <img src={adminloggedin[0]?.profile} alt="" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item  onClick={handlelogout}>

                    <i class="fa-solid fa-right-from-bracket"></i>&nbsp;&nbsp;&nbsp;
                    Logout

                </Dropdown.Item>


            </Dropdown.Menu>
        </Dropdown>
    </div>
</nav>
<div className="home-content">
    {children}
</div>
</section>
</>
  )
}

export default Adminsidebar
