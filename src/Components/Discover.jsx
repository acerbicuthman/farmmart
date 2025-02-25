import {React, useEffect} from 'react';
import HomepageFarmer from '../Images/homepage-farmer-image-min.jpg';
import Hompagerecipe from '../Images/homepage-recipes-min.jpg';
import '../Styles/discover.css';
import Feed1 from '../Images/Feed/feed_1.jpg';
import Feed2 from '../Images/Feed/feed_2.jpg';
import Feed3 from '../Images/Feed/feed_3.jpg';
import Feed4 from '../Images/Feed/feed_4.jpg';
import Feed5 from '../Images/Feed/feed_5.jpg';
import Feed6 from '../Images/Feed/feed_6.jpg';

const Discover = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <div>
      <div data-aos="zoom-in" data-aos-duration="1500">
      <div className="border-top border-warning border-5">
        <h1 className="text-center m-5">Discover More From Us</h1>
        <div className="card-group">
          <div className="card Discoverdetails">
            <img src={HomepageFarmer} className="card-img-top" alt="Farmer" />
            <div className="card-body">
              <h5 className="card-title text-center">FARMWRS & PRODUCERS</h5>
            </div>
          </div>

          <div className="card Discoverdetails">
            <div className="container text-center">
              <div className="row g-0">
                <div className="col-12 col-sm-6 col-md-4">
                  <img className="feedimg" src={Feed1} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <img className="feedimg" src={Feed2} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <img className="feedimg" src={Feed3} alt="" />
                </div>
              </div>
              <div className="row g-0">
                <div className="col-12 col-sm-6 col-md-4">
                  <img className="feedimg" src={Feed4} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <img className="feedimg" src={Feed5} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <img className="feedimg" src={Feed6} alt="" />
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">BE SOCIAL WITH US</h5>
            </div>
          </div>

          <div className="card Discoverdetails">
            <img src={Hompagerecipe} className="card-img-top" alt="Recipes" />
            <div className="card-body">
              <h5 className="card-title text-center">TIPS & RECIPES</h5>
            </div>
          </div>
        </div>

        <h1 className="text-center m-5">Let’s Keep In Touch</h1>
        <p className="text-center">Sign up for recipes, tips & inspiration</p>
        <div className="text-center">
          <input
            className="emailbox m-3 p-3 border-0 border-bottom border-2 border-warning w-50"
            type="email"
            placeholder="What's your email address"
          />
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Discover;
