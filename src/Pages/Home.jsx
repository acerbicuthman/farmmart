import React, { useEffect } from "react";
import "../Styles/home.css";
import BackVegetable from "../Images/banner1-min.jpg";
import Discover from "../Components/Discover";
import AOS from "aos";
import 'aos/dist/aos.css';
import { motion, useScroll, useSpring } from "framer-motion";
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
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <div className="HomeContain container-fluid">
        <div className="banner-image">
          <img src={BackVegetable} alt="Banner" className="img-fluid w-100" />
          <div className="Homecard text-white">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <p className="card-title">The Farmer's Market Delivered</p>
              <a href="#" className="join">JOIN NOW</a>
            </motion.div>
          </div>
        </div>
      </div>
              <section className="px-4">

             
      <HowitWorks />
      <div>
      <ShopAll />
      </div>
  
     
      </section>
      

      <section className="testimonials-section mt-5 py-5 bg-light">
        <h1 className="text-center mb-5">Why North Texans Love Farmbox</h1>
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-4">
              <p>
                “I have used this company on and off for several years now. There
                have been very few issues with deliveries... Nicole (Google Reviews)”
              </p>
            </div>
            <div className="col-md-4">
              <p>
                “I absolutely love Farmbox Delivery... I love that they are a local
                DFW company and support local farmers. Mary (Google Reviews)”
              </p>
            </div>
            <div className="col-md-4">
              <p>
                “This is the best service with quality local organic grocery items...
                Stacy (Google Reviews)”
              </p>
            </div>
          </div>
        </div>
      </section>

      <Discover />
    </>
  );
};

export default Home;
