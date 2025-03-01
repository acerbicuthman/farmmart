import React from 'react'
import FarmboxVeg from "../Images/Farmbox_veg1.jpeg";
import FarmboxVeg2 from "../Images/Farmbox_mixa2.jpeg";
import FarmboxFruit from "../Images/farmbox_fruit1.jpeg";
import '../Styles/produceboxcard.css'
import ProduceBoxNav from '../AboutDetails/ProduceBoxNav';

const Groceries = () => {
  return (
    <div>
      {/* <ProduceBoxNav /> */}
      <h3 className="m-3">Shop &gt; FarmBoxes</h3>
      <h1 className="text-center m-5">SEASONAL FARMBOXES</h1>
      <div className="row text-center mb-5">
        {/* Card for FarmBox Veg */}
        <div className="card Boxcard" style={{ width: "20rem" }}>
          <img src={FarmboxVeg} className="card-img-top" alt="Farmbox Veg" />
          <div className="card-body">
            <p className="card-text">FROM OUR FARMERS.</p>
            <h5 className="card-title"> Build Your Own FarmBox Fruits, Veggies + More</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="input-group mb-0 d-flex">
              <div className="row g-0 text-center">
                <div className="d-flex justify-content-between mb-3 w-100">
                  <div className="flex-fill me-3">
                    <label htmlFor="inputGroupSelect01" className="form-label">Quality</label>
                    <select className="form-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="flex-fill">
                    <label htmlFor="inputGroupSelect02" className="form-label">Quality</label>
                    <select className="form-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer AddDEliveryBtn w-100 border-success">
            <a href="#" className="btn text-light">Add to Delivery</a>
          </div>
        </div>
        {/* Repeat similar blocks for the other cards */}
      </div>
    </div>
  );
};

export default Groceries;
