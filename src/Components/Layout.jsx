import Card from "react-bootstrap/Card";
import image from "../Images/banner1-min.jpg";
import "../Styles/Layout.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Green from "../Images/green-01.png";
import Blue from "../Images/blue-01.png";
import Orange from "../Images/orange-01.png";
import prodbox from "../Images/produce-box-farmbox-delivery-min.jpg";
import dairyegg from "../Images/dairy-items-farmbox-delivery-min.jpg";
import butcherbox from "../Images/meat-farmbox-delivery-min.jpg";
import pantry from "../Images/farmbox-delivery-pantry-category.jpg";
import { React, Component } from "react";
import Blogpost from '../Images/farmbox-delivery-push-blog-post-image-min.jpg'
import Discover from "./Discover";
import { Routes, Route} from 'react-router-dom'
function ImgOverlayExample() {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img className="cardimg" src={image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>
            <h1 className="cardtitle">The Farmer's Market Delivered</h1>
          </Card.Title>
          <button className="join">JOIN NOW</button>
        </Card.ImgOverlay>
      </Card>
      <div>
        <h1 className="justify-content-center howitworks ">HOW IT WORKS</h1>
      </div>
      <Container>
        <Row className="colorcontain">
          <Col xs={6} md={4}>
            <Image className="color" src={Green} roundedCircle />
            <h2>Pick a starter option</h2>
            <h5>
              Choose from select produce to start. Keep, add, or remove items.
            </h5>
          </Col>
          <Col xs={6} md={4}>
            <Image className="color" src={Blue} roundedCircle />
            <h2>Shop groceries</h2>
            <h5>
              Add in your grocery staples, meats, dairy, and other favorite
              pantry items every week.
            </h5>
          </Col>
          <Col xs={6} md={4}>
            <Image className="color" src={Orange} roundedCircle />
            <h2>We deliver. You enjoy</h2>

            <h5>
              Save yourself a trip to the store and enjoy tasty meals! Isn't it
              awesome to open your door to a delicious delivery?
            </h5>
          </Col>
        </Row>
      </Container>

      <div>
        <h1 className=" justify-content-center howitworks ">Shop The Market</h1>
      </div>
      <Container>
        <Row className="shopmarket">
          <Col className="marketbox" xs={6} md={3}>
            <Card className="text-white">
              <a href="">
                <Card.Img
                  className="prodbox"
                  src={prodbox}
                  rounded
                  alt="Card image"
                />
                <Card.ImgOverlay className="imgtext">
                  <Card.Title className="my-5">
                    <h1>Farm Boxes</h1>
                  </Card.Title>
                  <Card.Text>
                    Picked at the Peak of Ripeness. Beyond organic
                  </Card.Text>
                </Card.ImgOverlay>
                FARM BOXES
              </a>
            </Card>
          </Col>
          <Col className="marketbox" xs={6} md={3}>
            <Card className="text-white">
              <a href="">
                <Card.Img
                  className="prodbox"
                  src={dairyegg}
                  rounded
                  alt="Card image"
                />
                <Card.ImgOverlay className="imgtext">
                  <Card.Title className="my-5">
                    <h1>Farm Boxes</h1>
                  </Card.Title>
                  <Card.Text>
                    Picked at the Peak of Ripeness. Beyond organic
                  </Card.Text>
                </Card.ImgOverlay>
                FARM BOXES
              </a>
            </Card>
          </Col>
          <Col className="marketbox" xs={6} md={3}>
            <Card className="text-white">
              <a href="">
                <Card.Img
                  className="prodbox"
                  src={butcherbox}
                  rounded
                  alt="Card image"
                />
                <Card.ImgOverlay className="imgtext">
                  <Card.Title className="my-5">
                    <h1>Farm Boxes</h1>
                  </Card.Title>
                  <Card.Text>
                    Picked at the Peak of Ripeness. Beyond organic
                  </Card.Text>
                </Card.ImgOverlay>
                FARM BOXES
              </a>
            </Card>
          </Col>
          <Col className="marketbox" xs={6} md={3}>
            <Card className="text-white">
              <a href="">
                <Card.Img
                  className="prodbox"
                  src={pantry}
                  rounded
                  alt="Card image"
                />
                <Card.ImgOverlay className="imgtext">
                  <Card.Title className="my-5">
                    <h1>Farm Boxes</h1>
                  </Card.Title>
                  <Card.Text>
                    Picked at the Peak of Ripeness. Beyond organic
                  </Card.Text>
                </Card.ImgOverlay>
                FARM BOXES
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <button className="shopNowbtn">SHOP ALL</button>
     
        <div className="BackImg border-4 border-top border-bottom border-warning ">
          <Row >
            <Col>
          <Card className="d-flex "
            style={{
              width: "52rem",
              height: "38rem",
              marginTop: "55px",
              marginLeft: "130px",
              borderRadius: "0px",
              textAlign: 'left'
            }}
          >
            <Card.Body>
              <h1 className="text-center my-5">Our Mission</h1>
              <Card.Title className="mx-5">Supporting local farms</Card.Title>
             
              <Card.Text className="mx-5 my-4">
                We would not exist without our North Texas farmers. They are the
                reason Farmbox got started! For the past 7 years, we have built
                genuine relationships with the most dedicated Texas farmers and
                makers in the regio
              </Card.Text>

              <Card.Title className="mx-5">Sustainability</Card.Title>
              <Card.Text className="mx-5 my-4">
                We slash food miles by keeping it local. We always purchase
                local first and expand out to find the best of the best. When we
                have to expand further out to find items not available locally,
                we partner with thoroughly-vetted vendors that meet the same
                guidelines we apply to our local producers.
              </Card.Text>
              
              <Card.Link className="MoreAboutUs" href="#" >More About Us &gt;</Card.Link>
              

            </Card.Body>
            </Card>
            </Col>
            <Col >
           
           <img className="Blogpost" src={Blogpost} alt="" />
          
           </Col>
          
           </Row>
        </div>
        
     
      <div className="border-4 border-bottom border-warning ">
        <h1 className="WhyFarmbox d-flex justify-content-center my-5">
          Why North Texans Love Farmbox
        </h1>
        <Container>
          <Row>
            <Col>
              I have used this company on and off for several years now. There
              have been very few issues with deliveries, no issues with billing
              and the items that I receive are always fresh and delicious! I
              definitely recommend signing up for produce deliveries from
              Farmbox.
              <div className="my-5 mx-5 Review">
                Nicole{" "}
                <a
                  href="https://www.google.com/search?q=farmbox+delivery&sca_esv=d7773eb477db942c&ei=PdI7Zp6DGMr-wbkP1q-S4AI&ved=0ahUKEwjelYXm5P6FAxVKfzABHdaXBCwQ4dUDCBA&uact=5&oq=farmbox+delivery&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGZhcm1ib3ggZGVsaXZlcnkyBRAAGIAEMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigVIvwdQ_wJY_wJwAngBkAEAmAFKoAFKqgEBMbgBA8gBAPgBAZgCA6ACU8ICChAAGLADGNYEGEeYAwCIBgGQBgiSBwEzoAfPBQ&sclient=gws-wiz-serp"
                  target="_blank"
                >
                  (Google Reviews)
                </a>
              </div>
            </Col>
            <Col>
              I absolutely love Farmbox Delivery...we have been getting weekly
              deliveries for 3 months now and the produce has always been fresh
              and tasty! I love that they are a local DFW company and support
              local farmers. Keep up the great work!!!
              <div className="my-5 mx-5 Review">
                Mary
                <a
                  href="https://www.google.com/search?q=farmbox+delivery&sca_esv=d7773eb477db942c&ei=PdI7Zp6DGMr-wbkP1q-S4AI&ved=0ahUKEwjelYXm5P6FAxVKfzABHdaXBCwQ4dUDCBA&uact=5&oq=farmbox+delivery&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGZhcm1ib3ggZGVsaXZlcnkyBRAAGIAEMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigVIvwdQ_wJY_wJwAngBkAEAmAFKoAFKqgEBMbgBA8gBAPgBAZgCA6ACU8ICChAAGLADGNYEGEeYAwCIBgGQBgiSBwEzoAfPBQ&sclient=gws-wiz-serp"
                  target="_blank"
                >
                  (Google Reviews)
                </a>
              </div>
            </Col>
            <Col>
              This is the best service with best kind of quality local organic
              grocery items that I want to buy. I keep recommending this service
              to all my friends. I've been using this service since 3 months and
              they've been perfect.
              <div className="my-5 mx-5 Review">
                Stacy{" "}
                <a
                  href="https://www.google.com/search?q=farmbox+delivery&sca_esv=d7773eb477db942c&ei=PdI7Zp6DGMr-wbkP1q-S4AI&ved=0ahUKEwjelYXm5P6FAxVKfzABHdaXBCwQ4dUDCBA&uact=5&oq=farmbox+delivery&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGZhcm1ib3ggZGVsaXZlcnkyBRAAGIAEMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigVIvwdQ_wJY_wJwAngBkAEAmAFKoAFKqgEBMbgBA8gBAPgBAZgCA6ACU8ICChAAGLADGNYEGEeYAwCIBgGQBgiSBwEzoAfPBQ&sclient=gws-wiz-serp"
                  target="_blank"
                >
                  (Google Reviews)
                </a>
              </div>
            </Col>
          </Row>
        </Container>
       
            
      </div>
     <Discover/>
         </>
  );
}

export default ImgOverlayExample;


