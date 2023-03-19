import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const OurStory = () => {
  return (
    <div className="section-content our-story-bg pb-100">
      <Container className="pb-50">
        <Row className="mx-0 justify-content-center pb-100 mb-100">
          <Col lg={8}>
            <div className="heading-container our-story-head text-md-start mb-50">
              <h2>Who We Are</h2>
              <p>We are one of YOU!</p>
            </div>
            <p className="mb-4 text-center text-md-start">
              From the roots, we were <b>Patients</b>. We are coming to you as sprouting <b>Education</b> and growing for you as <b>Medication</b>.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
