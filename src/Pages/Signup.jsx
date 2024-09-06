import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Styles/SignUp.css'

import NavBar from "../Components/Navbar";

const Signup = () => {
  return (
    <>
    <div className="SignUpPage w-75">
      <div>
        <h1 className="">REGISTER TO GET STARTEDWELCOME! LET'S GET YOUR ADDRESS.</h1>
        <h2>WELCOME! LET'S GET YOUR ADDRESS.</h2>
        </div>
        <br />
        <div className="stepper-wrapper">
  <div className="stepper-item completed">
    <div className="step-counter">1</div>
    <div className="step-name">Delivery Details</div>
  </div>
  <div className="stepper-item completed">
    <div className="step-counter">2</div>
    <div className="step-name">Farmboxes</div>
  </div>
  <div className="stepper-item active">
    <div className="step-counter">3</div>
    <div className="step-name">Information</div>
  </div>
  <div className="stepper-item">
    <div className="step-counter">4</div>
    <div className="step-name">Finish Delivery</div>
  </div>
</div>
      <div>
        <h2>WELCOME! LET'S GET YOUR ADDRESS.</h2>
      </div>
     
      <Form>
      <Row className="g-2">
      <Col md>
      <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
        <Form.Label>Address</Form.Label>
        <Form.Control type="" placeholder="Enter a Location..." />
      </Form.Group>
      </Col>
      <Col md>
      <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
        <Form.Label>Address (line 2)</Form.Label>
        <Form.Control type="" placeholder="" />
      </Form.Group>
      </Col>
      </Row>
    </Form>
    <Form>
      <Row className="g-2">
      <Col md>
      <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
        <Form.Label>City</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>
      </Col>
      <Col md>
      <Form.Label>State</Form.Label>
      <Form.Select className="mb-3 w-50" size="lg">
      <option>Open this select menu</option>
      <option value="1">ALABAMA</option>
      <option value="2">CALIFORNIA</option>
      <option value="3">COLORADO</option>
      </Form.Select>
      </Col>
      <Col md>
      <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
        <Form.Label>Zip/Postal code*</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>
      </Col>
      </Row>
    </Form>
    <Button className="w-100" variant="secondary" size="lg">
        Continue
      </Button>

      
  );
  </div>
    </>
  );
};

export default Signup;
