import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurMistion from "./../../common/images/outMisstion.png";

export const OurMisstion = () => {
  return (
    <div className="section-content main-bg overflow-hidden pb-0">
      <Container>
        <Row className="mx-0 g-4 text-center text-lg-start justify-content-between">
          <Col lg={5} className="text-center text-lg-start">
            <div className="heading-container our-misstion-head">
              <h2>
                <span className="text-white">Our</span> Mission
              </h2>
              <p>Now Accepting Patients</p>
            </div>
            <img src={OurMistion} className="img-fluid mt-5 our-misstion-img" />
          </Col>
          <Col lg={6} className="align-self-end">
            <h4 className="mb-4">
              Teaching to Preaching, As We Grow for Your Glow
            </h4>
            <p className="mb-3">
              Ensuring patients’ <b>access</b> to high-quality cannabis is at the forefront of our ambition. We are patients and have personally felt the <b>medical benefits</b> of this plant. Therefore, we want to help others access safe and high-quality <b>natural</b> medicine.
            </p>
            <p className="mb-3">
              We ultimately want to reach a stage where we can cultivate <b>unique</b> and individual strains for our patients and better <b>improve</b> their <b>lives</b>.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
