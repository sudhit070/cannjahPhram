import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaLongArrowAltRight } from "react-icons/fa";

export const AppoinmentForm = () => {
  return (
    <Container fluid className="main-content overflow-hidden px-0 vh-100">
      <Row className="vh-100 medical-row mx-0 medical-background-responsive">
        <Col
          xl={6}
          className="pe-xl-0 responsive-bg ps-xl-150 position-relative align-self-center"
        >
          <div className="heading-container welcome-head mb-100">
            <h1 className="welcome-title">CannJah Care</h1>
            <p className="fw-bold h6">"Our Specialized Medical Program"</p>
          </div>

          <h4 className="mb-4 pe-xl-4">Now Accepting Medical Patients</h4>
          <p className="pe-xl-5 mb-5 mb-2">
            <b>Register</b> yourself to become a <b>Member</b>, submit your <b>Prescription</b>,and start <b>Saving</b> by purchasing directly from Us.
          </p>
          {/* <h4 className="mb-2 pe-xl-4">Why Medical Cannabis</h4>
          <p>Cannabis Insurance Coverage</p> */}
        </Col>
        <Col xl={6} className="medical-background">
          <Form className='d-none'>
            <h3 className='fw-bold mb-4'>Registration Form </h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" className='' placeholder="eg. Jacob Jones" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" className='' placeholder="eg. infoeasy@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" className='' placeholder="eg. SF, Bay Area, Germany" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Add prescription Photo</Form.Label>
              <Form.Control type="file" className='' />
            </Form.Group>
            <Button variant="dark" className='fw-bold w-100' type="submit">
              Submit <FaLongArrowAltRight />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
