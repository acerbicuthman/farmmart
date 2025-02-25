import React from 'react'
import prodbox from "../Images/produce-box-farmbox-delivery-min.jpg";
import dairyegg from "../Images/dairy-items-farmbox-delivery-min.jpg";
import butcherbox from "../Images/meat-farmbox-delivery-min.jpg";
import pantry from "../Images/farmbox-delivery-pantry-category.jpg";
import '../Styles/shopitall.css'

const ShopAll = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="3000">
    <div className="text-center my-5">
      <h1 className="howitworks">Shop The Market</h1>
    </div>

    <div class="container">
      <div class="row shopmarket">
        <div class="col-12 col-sm-6 col-md-3 marketbox">
          <div class="card text-white">
            <a href="#">
              <img
                class="card-img prodbox"
                src={prodbox}
                alt="Card image"
              />
              <div class="card-img-overlay imgtext">
                <h5 class="card-title my-5">Farm Boxes</h5>
                <p class="card-text">
                  Picked at the Peak of Ripeness. Beyond organic
                </p>
              </div>
              <h5 class="text-center mt-3">PASTRIES</h5>
            </a>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3 marketbox">
          <div class="card text-white">
            <a href="#">
              <img
                class="card-img prodbox"
                src={dairyegg}
                alt="Card image"
              />
              <div class="card-img-overlay imgtext">
                <h5 class="card-title my-5">Farm Boxes</h5>
                <p class="card-text">
                  Picked at the Peak of Ripeness. Beyond organic
                </p>
              </div>
              <h5 class="text-center mt-3">PASTRIES</h5>
            </a>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3 marketbox">
          <div class="card text-white">
            <a href="#">
              <img
                class="card-img prodbox"
                src={butcherbox}
                alt="Card image"
              />
              <div class="card-img-overlay imgtext">
                <h5 class="card-title my-5">Farm Boxes</h5>
                <p class="card-text">
                  Picked at the Peak of Ripeness. Beyond organic
                </p>
              </div>
              <h5 class="text-center mt-3">PASTRIES</h5>
            </a>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3 marketbox">
          <div class="card text-white">
            <a href="#">
              <img
                class="card-img prodbox"
                src={pantry}
                alt="Card image"
              />
              <div class="card-img-overlay imgtext">
                <h2 class="card-title my-5">Farm Boxes</h2>
                <p class="card-text">
                  Picked at the Peak of Ripeness. Beyond organic
                </p>
              </div>
              <h5 class="text-center mt-3">PASTRIES</h5>
            </a>
          </div>
        </div>
        <div className="button-container">
            <button className="shopNowbtn">SHOP ALL</button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default ShopAll
