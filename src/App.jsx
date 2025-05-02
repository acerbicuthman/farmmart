import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { motion, useScroll, useSpring } from "framer-motion";
import './App.css'
import Faq from "../../farmclone/src/Pages/Faq";
import Home from "../../farmclone/src/Pages/Home";
import About from "../../farmclone/src/Pages/About";
import Groceries from "../../farmclone/src/Pages/Groceries";
import HowitWorks from "../../farmclone/src/Pages/Howitworks";
import Login from "../../farmclone/src/Pages/Login";
import SignUp from "../../farmclone/src/Pages/SignUp";
import Producebox from "../../farmclone/src/Pages/Producebox";
import Butcherbox from "../../farmclone/src/Pages/Butcherbox";
import Search from '../../farmclone/src/Images/search_icon.svg'
import { Routes, Route, Router, useLocation} from 'react-router-dom';
import { BsCartPlus } from "react-icons/bs";
// import PreSignUP from './Pages/PreSignUp';
// import App from "../App";



function App() {

  // const location = useLocation(); // This gives you access to location details
  // console.log(location.pathname);

  return (
    <>
    
   
      <div>
      
        
        {/* <div>Current Path: {location.pathname}</div>; */}
        <Navbar/>
        <Routes>
            {/* <Route path="/"> */}
              <Route path="/" element={<Home />} />
              <Route path="/Faq" element={<Faq />} />
              <Route path="/AboutUs" element={<About />} />
              <Route path="/howitworks" element={<HowitWorks />} />
              <Route path="/login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/ProduceBox" element={<Producebox />} />
              <Route path="/Groceries" element={<Groceries />} />
              <Route path="/ButcherBox" element={<Butcherbox />} />
              {/* <Route path="/" element={<App />} /> */}
            {/* </Route> */}
          </Routes>
     
       
      </div>
     <div>

     </div>
     
    </>
  )
}

export default App
