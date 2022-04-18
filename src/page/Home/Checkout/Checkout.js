import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Checkout = () => {
  return (
    <div>
     <h2 className='text-center'>welcome to Photographylia</h2>
     <p className='text-center'>thanks for visite my website. if you need any services confirm this form</p>

     <Form className='w-50 mx-auto'>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>service Name</Form.Label>
    <Form.Control placeholder="enter service Name" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>dhaka</option>
        <option>shylet</option>
        <option>kumilla</option>
        <option>Noakhali</option>
        <option>kishorganj</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>location</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  <Button variant="primary" type="submit">
    Booking
  </Button>
</Form>

    </div>
  );
};

export default Checkout;