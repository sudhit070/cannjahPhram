import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <Container fluid className="main-content overflow-hidden px-0 vh-100">
      <Row className="vh-100 mx-0 about-background-responsive">
        <Col
          xl={6}
          className="pe-xl-0 responsive-bg pt-100 ps-xl-150 position-relative align-self-center"
        >
          <div className="heading-container welcome-head mb-100">
            <h1 className="welcome-title">Welcome</h1>
            <p className="fw-bold h6">From Patients to Patients</p>
          </div>

          <h4 className="mb-4 pe-xl-4">Seed to Sale. We do it All.</h4>
          <p className="pe-xl-5">
            "We started this journey as patients seeking access to clean quality medical marijuana, then decided to take matters into our own hands."
          </p>
          <p className="pe-xl-5">Being patient pushed us to learn the actual benefits of this Plant. <b>We come to you as a source of knowledge, not just a product.</b></p>
          <Link to='/contact' className="btn btn-success rounded-0 px-4 py-2 mt-3">Register <FaLongArrowAltRight /></Link>
        </Col>
        <Col xl={6} className="about-background"></Col>
      </Row>
    </Container>
  );
};
