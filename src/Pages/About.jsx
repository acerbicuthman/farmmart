import React from "react";
import Card from "react-bootstrap/Card";
import About1 from "../Images/about-manifesto-min.jpg";
import About2 from "../Images/about-box-1.jpg";
import HandPotatoes from "../Images/hands-holding-potatoes.jpg";
import OurStandard from "../Images/our-about-standards-producer-min.jpg";
import FatherandSon from '../Images/father-and-son-min.jpg'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/About.css";
const About = () => {
  return (
    <>
      <h2>WHY Abour us</h2>

      <Card className="">
        <Row>
          <Col className="WhyFarmBox">
            <div className="WhyFarmtext">
              <h1>WHY FARMBOX</h1>
            </div>
          </Col>
          <Col>
            <img className="Planthands" src={About1} alt="" />
          </Col>
        </Row>
      </Card>

      <Card className="">
        <Row>
          <Col className="">
            <img className="AboutBag " src={About2} alt="" />
          </Col>
          <Col>
            <div className="m-2 mt-5">
              <h2>TEXAS WHENEVER POSSIBLE</h2>
            </div>
            <p className="m-2">
              While other delivery companies and grocery stores in Texas mainly
              provide produce, meats, dairy, and pantry items from outside the
              state or Mexico, we collaborate with local producers such as
              Denton Creek Farms in Ponder, Texas, celebrated for their
              succulent tomatoes, exceptionally sweet cantaloupes, and rich
              leafy greens. Our dairy comes from Mill-King Creamery in McGregor,
              Texas. For pasture-raised poultry, we turn to Windy Meadow Farms
              and Greener Pastures Chicken, both of which are preferred by many
              top chefs across Texas. We take great pride in our local
              producers, and we believe that by supporting them, we contribute
              to sustaining and strengthening our local economy with every
              FarmBox we deliver.
            </p>
          </Col>
        </Row>
      </Card>
      <Card className="">
        <Row>
          <Col className=" NOshady">
            <div className="NoshadyText mt-5">
              <h1>No Shady Ingredients!</h1>
              <p className="mt-3">
                We're champions of clean eating, which means our food is all
                about the good stuff—simple ingredients, no confusing additives.
                Think of a list you can read through without stumbling, packed
                with things you know and trust. We've set the bar high to keep
                anything unnecessary out of your pantry. It's a pretty extensive
                list we don't approve of, so while we can't list them all here,
                feel free to drop us a line if you're curious!
              </p>
            </div>
          </Col>
          <Col>
            <img className="OurStandard" src={OurStandard} alt="" />
          </Col>
        </Row>
      </Card>

      <Card className="">
        <Row>
          <Col className="">
            <img className="HandPotatoes " src={HandPotatoes} alt="" />
          </Col>
          <Col>
            <div className="m-2 mt-5">
              <h2>SUSTAINABLE, COMMUNITY CENTERED</h2>
            </div>
            <p className="m-2 ">
              We are committed to positively contributing to the world around
              us. Being environmentally friendly is a part of who we are. We
              utilize reusable boxes and bags with each delivery. We also
              contribute to our community through supporting local food banks.
            </p>
          </Col>
        </Row>
      </Card>
      <div className="ThenanadNow">
        <br />
        <Row>
          <Col>
        <Card
          className="d-flex "
          style={{
            width: "47rem",
            height: "38rem",
            marginTop: "57px",
            marginLeft: "130px",
            borderRadius: "0px",
            textAlign: "left",
          }}
        >
          <Card.Body className="ThenandNowbody">
            <h1 className="text-center my-5">THEN AND NOW</h1>
            <Card.Title className="mx-5">Supporting local farms</Card.Title>

            <Card.Text className="mx-5 my-4">
              Back in April 2013, Greg Hoover kicked things off in North Texas
              with a big idea: make it a cinch for local farm enthusiasts to
              grab fresh, awesome ingredients without having to zip around
              farmers’ markets. Fast forward to now, and we're still all about
              hooking you up with the best local growers and food makers who dig
              natural, good-for-you eats just as much as you do.
            </Card.Text>
            <Card.Text className="mx-5 my-4">
              We're not just sticking to the old script, though. We're upping
              our game with even more homegrown food options and some snazzy new
              tech to make your shopping smoother. It's all about giving a
              high-five to our local farms with every Farmbox we deliver and
              making sure you get to know exactly where your food is coming
              from.
            </Card.Text>
            <Card.Text className="mx-5 my-4">
              Each day is essentially a 'wow' moment for us, seeing our dream of
              connecting amazing customers like you with our awesome local
              farmers and artisans become a reality. This magic all started with
              Greg's simple spark of an idea, and look at us now – we're not
              just a company; we're a community that's growing stronger every
              day..
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        
        <div className="d-flex">
        <img className="FathersON " src={FatherandSon}  alt="" />
        </div>
    
    </Col>
    </Row>
      </div>
    </>
  );
};

export default About;
