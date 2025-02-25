import {React, useEffect} from 'react'
import Vegetablesample from '../Images/vegetablesample.jpg'
import Typing from "../Images/typing.jpg";
import FruitBag from "../Images/pickbag.jpg"; 
import FarmerSketch from "../Images/farmersketch.jpg";
import FoodanDrink from "../Images/foodanddrink.jpg";
import Recycle from "../Images/recycle1.jpg";
import Truck from '../Images/truck1.jpg'
import '../Styles/howitworks.css'
import Discover from '../Components/Discover';

const Howitworks = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      
      <div class="card text-white mt-5">
    <img src={Vegetablesample} class="card-img Howitworksbg" alt="Card image" />
    <div class="card-img-overlay d-flex flex-column justify-content-center">
        <h3 class="text-center">HOW IT WORKS</h3>
    </div>
    </div>
    <div className="d-flex flex-column flex-md-row justify-content-between m-5">
   
    <div class="choose me-" >
    <div data-aos="fade-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
      
      <h2 class="m-2">CHOOSE YOUR FARMBOX</h2>
    <ul >
       
        <li class="p-2">Choose your base farmbox and how often you’d like to receive it.</li>
        <li class="p-2">Add items weekly: local eggs, fresh bread, small-batch pantry staples.</li>
        <li class="p-2">Choose your delivery start day.</li>
        <li class="p-2">Enjoy free delivery over $30.</li>
    </ul>
    </div>
    </div>
    <div className="mb-5 ms-5">
    <div data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
        <img className="HowTyping" src={Typing} alt="" />
    </div>
    </div>
    
</div>
<div className="d-flex flex-column flex-md-row justify-content-between m-5">
<div className="mb-5 ms-5">
<div data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
        <img className="HowTyping" src={FruitBag} alt="" />
    </div>
    </div>
    <div class="choose me-" >
    <div data-aos="fade-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
      <h2 class="m-2">PICK YOUR GROCERIES</h2>
    <ul >
       
        <li class="p-2">View what’s coming in your box on Fridays.</li>
        <li class="p-2">Edit contents up to Sunday by 5pm.</li>
        <li class="p-2">Browse incredible add-ons to complete your weekly grocery needs.</li>
        <li class="p-2">Skip a week if you’re out of town.</li>
    </ul>
    </div>
    </div>
   
    
</div>
<div className="d-flex flex-column flex-md-row justify-content-between m-5">
    <div class="choose me-" >
    <div data-aos="fade-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
      <h2 class="m-2">FARMERS HARVEST</h2>
     
    <ul >
       
    <li class="p-2"> We let our farmers know what’s been ordered and they harvest it just for you.</li>
          <li class="p-2">Everything is freshly picked, prepared or baked to order.</li>
          <li class="p-2">We’re helping eliminate food waste since we only receive what we need.</li>
          <li class="p-2">Nothing sits on a grocery store shelf.</li>
    </ul>
    </div>
    </div>
    <div className="mb-5 ms-5">
    <div data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
        <img className="HowTyping" src={FarmerSketch} alt="" />
    </div>
    </div>
</div>
<div className="d-flex flex-column flex-md-row justify-content-between m-5">
<div className="mb-5 ms-5">
<div data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
        <img className="HowTyping" src={Truck} alt="" />
        </div>
    </div>
    <div class="choose me-" >
    <div data-aos="fade-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
      <h2 class="m-2">PICK YOUR GROCERIES</h2>
    <ul >
       
        <li class="p-2">View what’s coming in your box on Fridays.</li>
        <li class="p-2">Edit contents up to Sunday by 5pm.</li>
        <li class="p-2">Browse incredible add-ons to complete your weekly grocery needs.</li>
        <li class="p-2">Skip a week if you’re out of town.</li>
    </ul>
    </div>
    </div>
   
    
</div>

<div className="d-flex flex-column flex-md-row justify-content-between m-5">
    <div class="choose me-" >
    <div data-aos="fade-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
      <h2 class="m-2">FARMERS HARVEST</h2>
    <ul >
       
    <li class="p-2"> We let our farmers know what’s been ordered and they harvest it just for you.</li>
          <li class="p-2">Everything is freshly picked, prepared or baked to order.</li>
          <li class="p-2">We’re helping eliminate food waste since we only receive what we need.</li>
          <li class="p-2">Nothing sits on a grocery store shelf.</li>
    </ul>
    </div>
    </div>
    <div className="mb-5 ms-5">
    <div data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
        <img className="HowTyping" src={FoodanDrink} alt="" />
        </div>
    </div>
    
</div>

<div className="d-flex flex-column flex-md-row justify-content-between m-5">
<div className="mb-5 ms-5">
<div data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
        <img className="HowTyping" src={Recycle} alt="" />
    </div>
    </div>
    <div class="choose me-" >
    <div data-aos="fade-up" data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
      <h2 class="m-2">PICK YOUR GROCERIES</h2>
    <ul >
       
        <li class="p-2">View what’s coming in your box on Fridays.</li>
        <li class="p-2">Edit contents up to Sunday by 5pm.</li>
        <li class="p-2">Browse incredible add-ons to complete your weekly grocery needs.</li>
        <li class="p-2">Skip a week if you’re out of town.</li>
    </ul>
    </div>
    </div>
   
    
</div>
<Discover/>
<br />
<br />

    </div>
  )
}

export default Howitworks
