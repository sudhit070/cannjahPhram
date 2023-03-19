import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cultivars1 from "./../../common/images/cultivars-1.png";
import cultivars2 from "./../../common/images/cultivars-2.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Cultivar = () => {
  return (
    <div className="section-content cultivars-containter">
      <Container className="text-center text-md-start">
        <Row className="mx-0 g-3 cultivars-cont position-relative justify-content-between">
          <Col md={5} className="order-2 order-md-1 position-relative">
            <img src={cultivars1} className="img-thumbnail cultivars-img" />
          </Col>
          <Col md={7} className="order-1 order-md-2">
            <div className="heading-container cultivars mb-50">
              <h2>The Cultivars</h2>
              <p>Finest Selections</p>
            </div>
            <p className="cartivars-p">
              We've worked with various breeders inside and outside Canada. Our genetic vault holds cultivars personally procured for medical and household needs that could resonate with any age.
              <span className="center-content-carticars">Once a strain has been selected, our master grower “phenohunts” with <b>CannJah Care</b> standard as a priority.</span>
            </p>
          </Col>
        </Row>
        <Row className="mx-0 g-4 g-md-2 justify-content-between mt-n20">
          <Col lg={8} className="align-self-end order-2 order-md-1">
            <h4>Fresh from the Pharm</h4>
            <p>
              Our currently available line-up can be found here, and we expect more to come soon!
            </p>
            <Link to="/products" className="btn btn-success rounded-0">Explore Pharm <FaLongArrowAltRight /></Link>
          </Col>
          <Col
            lg={4}
            className="position-relative order-1 order-md-2 text-center text-md-end"
          >
            <img src={cultivars2} className="img-thumbnail cultivars-img second" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
