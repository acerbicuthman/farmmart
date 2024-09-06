import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <>
      <div>
        <h1>ALREADY REGISTERED?</h1>
      </div>
      <Row>
        <Col>
          <Card>
            <Card.Header>RETURNING CUSTOMER</Card.Header>
            <Card.Body>
              <Card.Title>RETURNING CUSTOMER</Card.Title>
              <Card.Text>
              Please login if you have an account with us
              </Card.Text>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className="w-25 border-0 bo" variant="primary" type="submit">
      LOG IN
      </Button>
      <div className="mt-3"><a href=""> Forgot your Password</a></div>
      
   
    </Form>
             
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>NEW CUSTOMER</Card.Header>
            <Card.Body>
              <Card.Title>NEW CUSTOMER</Card.Title>
              <Card.Text>
                By creating an account with us, you will be able to move through
                the checkout process faster and view your orders.
              </Card.Text>
              <Button variant="primary"> CREATE AN ACCOUNT</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Login;
