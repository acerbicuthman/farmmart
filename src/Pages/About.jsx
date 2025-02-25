import { React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import About1 from "../Images/about-manifesto-min.jpg";
import About2 from "../Images/about-box-1.jpg";
import HandPotatoes from "../Images/hands-holding-potatoes.jpg";
import OurStandard from "../Images/our-about-standards-producer-min.jpg";
import FatherandSon from "../Images/father-and-son-min.jpg";
import Discover from "../Components/Discover";
import "../Styles/about.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div>
        <div class="container">
          <div class="card">
            <div class="row">
              <div class="col-md-6 d-flex align-items-center justify-content-center">
                <div class="WhyFarmBox text-center">
                  <h1 class="WhyFarmtext">WHY FARMBOX</h1>
                </div>
              </div>
              <div class="col-md-6">
                <img
                  class="Planthands img-fluid"
                  src={About1}
                  alt="About Farmbox"
                />
              </div>
            </div>
          </div>

          <div class="card ">
            <div class="row">
              <div class="col-md-6">
                <img
                  class="AboutBag img-fluid"
                  src={About2}
                  alt="Texas Produce"
                />
              </div>

              <div class="col-md text-wrap m-4">
                <div data-aos="fade-left" data-aos-duration="1500">
                  <h2 class="mt-5">TEXAS WHENEVER POSSIBLE</h2>
                  <p>
                    While other delivery companies and grocery stores in Texas
                    mainly provide produce, meats, dairy, and pantry items from
                    outside the state or Mexico, we collaborate with local
                    producers such as Denton Creek Farms in Ponder, Texas,
                    celebrated for their succulent tomatoes, exceptionally sweet
                    cantaloupes, and rich leafy greens. Our dairy comes from
                    Mill-King Creamery in McGregor, Texas. For pasture-raised
                    poultry, we turn to Windy Meadow Farms and Greener Pastures
                    Chicken, both of which are preferred by many top chefs
                    across Texas. We take great pride in our local producers,
                    and we believe that by supporting them, we contribute to
                    sustaining and strengthening our local economy with every
                    FarmBox we deliver.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="row">
              <div class="col-md-6 d-flex align-items-center">
                <div class="NoshadyText text-wrap m-4">
                  <div data-aos="fade-right" data-aos-duration="1500">
                    <h1>No Shady Ingredients!</h1>
                    <p>
                      We're champions of clean eating, which means our food is
                      all about the good stuff—simple ingredients, no confusing
                      additives. Think of a list you can read through without
                      stumbling, packed with things you know and trust. We've
                      set the bar high to keep anything unnecessary out of your
                      pantry. It's a pretty extensive list we don't approve of,
                      so while we can't list them all here, feel free to drop us
                      a line if you're curious!
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <img
                  class="OurStandard img-fluid"
                  src={OurStandard}
                  alt="Our Standards"
                />
              </div>
            </div>
          </div>

          <div class="card mb-4">
            <div class="row">
              <div class="col-md-6">
                <img
                  class="HandPotatoes img-fluid"
                  src={HandPotatoes}
                  alt="Sustainable Practices"
                />
              </div>
              <div class="col-md text-wrap m-4">
                <div data-aos="fade-left" data-aos-duration="1500">
                  <h2 class="mt-5">SUSTAINABLE, COMMUNITY CENTERED</h2>
                  <p>
                    We are committed to positively contributing to the world
                    around us. Being environmentally friendly is a part of who
                    we are. We utilize reusable boxes and bags with each
                    delivery. We also contribute to our community through
                    supporting local food banks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="ThenanadNow">
            <div class="row">
              <div class="col-md-6">
              <div data-aos="flip-right" data-aos-duration="1500">
                <div class="card">
               
                  <div class="card-body">
                  
                    <h1 class="text-center my-5">THEN AND NOW</h1>
                    <h5>Supporting local farms</h5>
                    <p>
                      Back in April 2013, Greg Hoover kicked things off in North
                      Texas with a big idea: make it a cinch for local farm
                      enthusiasts to grab fresh, awesome ingredients without
                      having to zip around farmers’ markets. Fast forward to
                      now, and we're still all about hooking you up with the
                      best local growers and food makers who dig natural,
                      good-for-you eats just as much as you do.
                    </p>
                    <p>
                      We're not just sticking to the old script, though. We're
                      upping our game with even more homegrown food options and
                      some snazzy new tech to make your shopping smoother. It's
                      all about giving a high-five to our local farms with every
                      Farmbox we deliver and making sure you get to know exactly
                      where your food is coming from.
                    </p>
                    <p>
                      Each day is essentially a 'wow' moment for us, seeing our
                      dream of connecting amazing customers like you with our
                      awesome local farmers and artisans become a reality. This
                      magic all started with Greg's simple spark of an idea, and
                      look at us now – we're not just a company; we're a
                      community that's growing stronger every day.
                    </p>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
<div data-aos="flip-up">
                <div class="d-flex justify-content-center">
                  <img
                    class="FathersON img-fluid"
                    src={FatherandSon}
                    alt="Father and Son"
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Discover />
        <br />
        <br />
      </div>
    </>
  );
};

export default About;
