import { lazy}  from "react"
import Layout from "./Layout/Layout"
import Home from "./Page/Home/Home"
import {Routes,Route} from "react-router-dom"
import CommonLayout from "../src/Layout/Layout"
const Login = lazy(() => import("./Page/Login/Login"));
const Food = lazy(() => import("./Page/Foodpage/Food"));
const Fooditem = lazy(() => import("./Page/Fooditem/Fooditem"));
const Contact = lazy(() => import("./Page/Contact/Contact"));
const Adminlogin = lazy(() => import("./Page/adminlogin/Adminlogin"));
const Admindashboard = lazy(() => import("./Page/Admin/Admindashboard"));
const Adminproducts = lazy(() => import("./Page/Admin/Adminproducts"));
const Addproduct = lazy(() => import("./Page/Admin/Addproduct"));
const Adminuser = lazy(() => import("./Page/Admin/Adminuser"));
const Adminprotected = lazy(() => import("./Components/ProtectedRoutes/Adminprotected"));
const Userprotected = lazy(() => import("./Components/ProtectedRoutes/Userprotected"));
const Order = lazy(() => import("./Page/Admin/Order"));


import { Toaster } from "react-hot-toast"
import Loader from "./Components/Loader/Loader"
import { Suspense, useEffect, useState } from "react"
import ScrollTop from "./Components/Scrolltop/ScrollTop"

function App() {

  const [spin,setspin] = useState(true);

 
  useEffect(()=>{
    setTimeout(() => {
      setspin(false)
    }, 2000);
  })


  return (
    <>
  {
    spin ? <Loader/> : <>
      <ScrollTop/>
      <Suspense fallback={<p>Loading...</p>}>


     <Routes>
   
   <Route path="/admin/login" element={<Layout><Adminlogin/></Layout>}/>
   <Route path="/admin/dashboard" element={<CommonLayout><Adminprotected Component={Admindashboard}/></CommonLayout>}/>
   <Route path="/admin/products" element={<CommonLayout><Adminprotected Component={Adminproducts}/></CommonLayout>}/>
   <Route path="/admin/addproduct" element={<CommonLayout><Adminprotected Component={Addproduct}/></CommonLayout>}/>
   <Route path="/admin/orders" element={<CommonLayout><Adminprotected Component={Order}/></CommonLayout>}/>
   <Route path="/admin/createuser" element={<CommonLayout><Adminprotected Component={Adminuser}/></CommonLayout>}/>




    <Route path="/" element={<Layout><Home/></Layout>}/>
    <Route path="/login" element={<Layout><Login/></Layout>}/>
    <Route path="/fooditem" element={<Layout><Food/></Layout>}/>
    <Route path="/fooditem/:productId" element={<Layout><Userprotected Component={Fooditem}/></Layout>}/>
    <Route path="/contact" element={<Layout><Contact/></Layout>}/>
 </Routes>
      </Suspense>
 <Toaster/>
    </> 
  }
  
   
    </>
  )
}

export default App
