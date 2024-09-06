import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import HomepageFarmer from '../Images/homepage-farmer-image-min.jpg'
import Hompagerecipe from '../Images/homepage-recipes-min.jpg'
import Feed1 from '../Images/Feed/feed_1.jpg'
import Feed2 from '../Images/Feed/feed_2.jpg'
import Feed3 from '../Images/Feed/feed_3.jpg'
import Feed4 from '../Images/Feed/feed_4.jpg'
import Feed5 from '../Images/Feed/feed_5.jpg'
import Feed6 from '../Images/Feed/feed_6.jpg'
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";

const Discover = () => {
  return (
    <div>
       <h1 className="text-center my-5">Discover More From Us</h1>

<CardGroup className="mx-5 Cardgroup">
  <Card>
  <Card.Img variant="top" src={HomepageFarmer} />
  <Card.Body>
  
   
  </Card.Body>
  <Card.Footer>
  <Card.Title>FARMERS AND PRODUCERS</Card.Title>
  </Card.Footer>
</Card>

<Card>
  <div className="Feedimg">
      <figure className="feeditem">
  <Card.Img variant="top" src={Feed1} /></figure>
  <figure>
  <Card.Img variant="top" src={Feed2} /></figure>
  <figure>
  <Card.Img variant="top" src={Feed3} /></figure>
  <figure>
  <Card.Img variant="top" src={Feed4} /></figure>
  <figure>
  <Card.Img variant="top" src={Feed5} /></figure>
  <figure>
  <Card.Img variant="top" src={Feed6} /></figure>
  </div>
  
  <Card.Body>
   
  </Card.Body>
  <Card.Footer>
  <Card.Title>BE SOCIAL WITH US</Card.Title>
  </Card.Footer>
</Card>
<Card> 
  
  <Card.Img variant="top" src={Hompagerecipe} />
  <Card.Body>
   
   
  </Card.Body>
  <Card.Footer>
  <Card.Title>TIPS & RECIPE</Card.Title>
  </Card.Footer>
</Card>
</CardGroup>

<h1 className="text-center my-5">
Let’s Keep In Touch
</h1>
<p className="text-center">Sign up for recipes, tips & inspiration</p>


<Form className="m-5">
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  
  <Form.Control className="w-50 EmailForm" type="email" placeholder="What's your email address" /> <div className="justify-content-center"><Form.Label>SIGN UP</Form.Label></div>
 
</Form.Group>
</Form>

    </div>
  )
}

export default Discover
