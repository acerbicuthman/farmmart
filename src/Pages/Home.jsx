import React from "react";
import "../Styles/home.css";
import BackVegetable from "../Images/banner1-min.jpg";
import Discover from "../Components/Discover";
import AOS from "aos";
import { motion , useScroll, useSpring} from "framer-motion"; // Import Framer Motion
import { useEffect } from "react";
import HowitWorks from "../Homely/HowitWorks";
import ShopAll from "../Homely/ShopAll";
import OurMission from "../Homely/OurMission";



const Home = () => {

 useEffect(() => {
  AOS.init();
  AOS.refresh();
}, []);

const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
});

 
  
  return (
    <>
         

      <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
        <div className="HomeContain  container-fluid ">
          <div className="banner-image">
            <img src={BackVegetable} alt="Banner" />
            <div className="Homecard text-white">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1, 1.1, 1],
                  rotate: [0, 10, 10, 10, 0],
                  borderRadius: ["10%", "10%", "10%", "0%", "0%"],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: onafterprint,
                  repeatDelay: 2,
                }}
              >
                <p className="card-title ">The Farmer's Market Delivered</p>
                <a href="#" className="join">
                  JOIN NOW
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <HowitWorks/>
        <ShopAll/>
        <OurMission/>
        
      </div>
   
      
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="mt-5">
        <h1 class="text-center m-5">Why North Texans Love Farmbox</h1>
        <div class="container text-center">
  <div class="row ">
    <div class="col">
      
      <p>
      I have used this company on and off for several years now. There have been very few issues with deliveries, no issues with billing and the items that I receive are always fresh and delicious! I definitely recommend signing up for produce deliveries from Farmbox.

Nicole (Google Reviews)
      </p>
    </div>
    <div class="col">
      <p>
      I absolutely love Farmbox Delivery...we have been getting weekly deliveries for 3 months now and the produce has always been fresh and tasty! I love that they are a local DFW company and support local farmers. Keep up the great work!!!

Mary (Google Reviews)
      </p>
    </div>
    <div class="col">
      <p>
      This is the best service with best kind of quality local organic grocery items that I want to buy. I keep recommending this service to all my friends. I've been using this service since 3 months and they've been perfect.

Stacy (Google Reviews)
      </p>
    </div>
  </div>
</div>
</div>
    
      <Discover/>
    </>
  );
};

export default Home;
