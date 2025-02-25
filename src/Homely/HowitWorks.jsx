import React from 'react'
import Green from "../Images/green-01.png";
import Blue from "../Images/blue-01.png";
import Orange from "../Images/orange-01.png";
import '../Styles/howitworks.css'

const HowitWorks = () => {
  return (
    <div>
    <div className="container-fluid">
    <div className="Howitworks  text-center mb-lg-5">
      <div data-aos="fade-up">How It Works</div>
    </div>
    {/* <p className="Howitworks text-center mb-lg-5">
      <div data-aos="fade-up">How It Works</div>
    </p> */}

    <div data-aos="fade-left">
      <div className="colorgroup row text-center">
        <div className="col-12 col-md-4 mb-4">
          <img className="color" src={Green} alt="Green Produce" />
          <h2>Pick a starter option</h2>
          <h5>
            Choose from select produce to start. Keep, add, or remove
            items.
          </h5>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <img className="color" src={Blue} alt="Blue Produce" />
          <h2>Shop groceries</h2>
          <h5>
            Add in your grocery staples, meats, dairy, and other favorite
            pantry items every week.
          </h5>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <img className="color" src={Orange} alt="Orange Produce" />
          <h2>We deliver. You enjoy</h2>
          <h5>
            Save yourself a trip to the store and enjoy tasty meals! Isn't
            it awesome to open your door to a delicious delivery?
          </h5>
        </div>
      </div>
    </div>
  </div>

  </div>
  )
}

export default HowitWorks
