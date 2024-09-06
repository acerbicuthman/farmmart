import { useState } from 'react'
import Navbar from './Components/Navbar'
import Layout from './Components/Layout'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
       
        <Navbar/>
        
      </div>
      <div>
        <Layout/>
      </div>
     
      <Footer/>
      
    </>
  
  )
}

export default App
