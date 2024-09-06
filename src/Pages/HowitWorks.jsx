import React from "react";
import NavBar from "../Components/Navbar";
import VegetableSamples from "../Images/vegetablesample.jpg";
import Card from "react-bootstrap/Card";
import "../Styles/HowitWorks.css";
import Discover from "../Components/Discover";
import Typing from "../Images/typing.jpg";
import FruitBag from "../Images/pickbag.jpg";
import TruckSketch from "../Images/truck1.jpg";
import FarmerSketch from "../Images/farmersketch.jpg";
import FoodanDrink from "../Images/foodanddrink.jpg";
import Recycle from "../Images/recycle1.jpg";

const HowitWorks = () => {
  return (
    <>
      <Card className="bg-dark text-white mt-5">
        <Card.Img
          className="Howitworksbg"
          src={VegetableSamples}
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>
            {/* <h5 className="text-center">HOW IT WORKS</h5> */}
          </Card.Title>
          <Card.Text className="text-center mt-5"><h3>HOW IT WORKS</h3></Card.Text>
        </Card.ImgOverlay>
      </Card>
      <div className="Howexplain mx-5 my-5 mb-5">
        <h2>CHOOSE YOUR FARMBOX</h2>
        <ul>
          <li>
            Choose your base farmbox and how often you’d like to receive it.
          </li>
          <li>
            Add items weekly: local eggs, fresh bread, small-batch pantry
            staples.
          </li>
          <li>Choose your delivery start day.</li>
          <li>Enjoy free delivery over $30.</li>
        </ul>

        <img className="HowTyping" src={Typing} alt="" />
      </div>
      <div className="FruitPickBag ">
        <div>
          <img className="my-5" src={FruitBag} alt="" style={{
              width: "400px",
              height: "400px",
           }} />
        </div>
        <div className="PickGrocery">
          <h2>PICK YOUR GROCERIES</h2>
          <ul>
            <li> View what’s coming in your box on Fridays.</li>
            <li>Edit contents up to Sunday by 5pm.</li>
            <li>Swap items you don't like with more of what you love.</li>
            <li>
              Browse incredible add-ons to complete your weekly grocery needs.
            </li>
            <li>Skip a week if you’re out of town.</li>
          </ul>
        </div>
      </div>
      <div className="Howexplain mx-5 my-5 mb-5">
        <h2>FARMERS HARVEST</h2>
        <ul>
          <li>
          We let our farmers know what’s been ordered and they harvest it just for you.          </li>
          <li>
          Everything is freshly picked, prepared or baked to order.
          </li>
          <li>We’re helping eliminate food waste since we only receive what we need.</li>
          <li>Nothing sits on a grocery store shelf.</li>
        </ul>

        <img
          className="HowTyping"
          src={FarmerSketch}
          alt=""
          style={{
            width: "400px",
            height: "400px",
        
          }}
        />
      </div>
      <div className="Truckpage ">
        <div>
          <img className="my-5" src={TruckSketch} alt="" style={{
              width: "400px",
              height: "200px"
           }} />
        </div>
        <div className="TruckpageTxt">
          <h2>WE DELIVER</h2>
          <ul>
            <li>All of your goodies are assembled and loaded into our delivery vehicle.</li>
            <li>Thermal packaging is used on all cold items to ensure freshness, especially if you’re not home to receive it.</li>
            <li>Your order will arrive between 8am-9pm. And we’ll always text you when it arrives.</li>
            <li>
            We deliver to most areas in Dallas/Fort Worth, Waco, Austin and a growing number of zip codes in Texas.            </li>
        
          </ul>
        </div>
      </div>
      <div className="Howexplain mx-5 my-5 mb-5">
        <h2>        YOU COOK AND SHARE
</h2>
        <ul>
          <li>
          Let us help guide you in the kitchen with inspirational recipes.         </li>
          <li>
          Discover unique and exotic foods along with ingredient tips and new cooking techniques.

          </li>
          <li>Spread the love and GET $20 FOR EVERY FRIEND YOU REFER.</li>
        </ul>



        <img
          className="HowTyping"
          src={FoodanDrink}
          alt=""
          style={{
            width: "400px",
            height: "180px",
            marginRight: "20px"
        
          }}
        />
      </div>
      <div className="RecycleBox ">
        <div>
          <img className="" src={Recycle} alt="" style={{
              width: "400px",
              height: "350px"
           }} />
        </div>
        <div className="RecycleBoxTxt">
          <h2>WE TOGETHER WE REDUCE, REUSE & RECYCLE</h2>
          <ul>
            <li>You will notice a conscious effort to use minimal packaging in every order we send out</li>
            <li>Return the packaging we do include and we can use it again in future deliveries.</li>
            <li>When the packaging is no longer reusable, it’s recycled.</li>
            <li>
            Better for you, better for us, better for the planet! </li>
          </ul>
        </div>
      </div>
      <div><h2>Questions? See our FAQ</h2> </div>
      <Discover />
      <div>
        <h2>HOW IT WORKS</h2>
      </div>
    </>
  );
};

export default HowitWorks;
