import React from "react";
import ProduceBoxNav from "../AboutDetails/ProduceBoxNav";
import Butcher from "../Images/butcher (1).jpg";
import FarmboxVeg from "../Images/Farmbox_veg1.jpeg";
import FarmboxVeg2 from "../Images/Farmbox_mixa2.jpeg";
import FarmboxFruit from "../Images/farmbox_fruit1.jpeg";
import BakkaATxcake from "../Images/BakkaATXCake.jpg";
import Bakksign from "../Images/BakkaATXSymbol.jpg";
import HubbbakSauce from "../Images/hoboken vodka sause.jpeg";

const Groceries = () => {
  return (
    <div>
      <ProduceBoxNav />
      <h2>Groceries</h2>
      <div class="container">
        <div class="ProduceBox">
          <h3>Shop &gt;FarmBoxes</h3>
          <h1 class="text-center">Build Your Own (Butcher) Box</h1>
          <p>
            Personalize your choices with an expansive array of cuts from Texas
            ranchers who are devoted to both animal welfare and environmental
            stewardship. Their commitment shines through in their embrace of
            sustainable and regenerative farming practices. From the robust
            flavors of our grass-fed beef to the richness of our pasture-raised
            chicken and pork, savor the unmistakable quality and health benefits
            of premium meats
          </p>
          <div class="row">
            <div class="col">
              <div class="card Boxcard">
                <img src={Butcher} class="card-img-top" alt="Butcher" />
                <div class="card-body">
                  <p class="card-text">FROM OUR FARMERS</p>
                  <p>$36.49 $35 Minimum</p>
                  <h5 class="card-title">
                    Build Your Own (FarmBox) Fruits, Veggies + More
                  </h5>
                  <p class="card-text">
                    The choice is entirely yours! Opt for our curated Farmbox or
                    design your very own unique assortment...
                  </p>
                </div>
                <div class="card-footer">
                  <button class="btn AddDEliveryBtn text-light w-100">
                    + ADD TO DELIVERY
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card Boxcard">
                <img src={Butcher} class="card-img-top" alt="Butcher" />
                <div class="card-body">
                  <p class="card-text">FROM OUR FARMERS</p>
                  <p>$36.49 $35 Minimum</p>
                  <h5 class="card-title">
                    Build Your Own (FarmBox) Fruits, Veggies + More
                  </h5>
                  <p class="card-text">
                    The choice is entirely yours! Opt for our curated Farmbox or
                    design your very own unique assortment...
                  </p>
                </div>
                <div class="card-footer">
                  <button class="btn AddDEliveryBtn text-light w-100">
                    + ADD TO DELIVERY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groceries;
