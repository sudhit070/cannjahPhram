import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhoWeAreBg from "./../../common/images/who-we-are.png";

export const WhoWeAre = () => {
  return (
    <Container fluid className="px-0">
      <div className="section-content main-bg">
        <Container>
          <Row className="mx-0">
            <Col lg={5} className="order-2 order-lg-1 text-center">
              <div className="our-story-img-conta">
                <img
                  src={WhoWeAreBg}
                  className="img-fluid our-story-img"
                  alt="Who We Are"
                  width="450"
                  height="460"
                />
              </div>
            </Col>
            <Col lg={7} className="order-1 text-center text-lg-start order-lg-2">
              <div className="heading-container who-we me-lg-0 mx-auto mb-50">
                <h2>
                  Our <span className="text-white">Story</span>
                </h2>
                <p className="main-bg px-5">It's Real...</p>
              </div>
              <h4 className="mb-4">Experience is everything.</h4>
              <p className="mb-4">
                We believe there's no better way to <b>innovate</b> if you haven’t gone through the <b>experience</b>, which makes us <b>unique</b>. From <b>muscular dystrophy</b> to <b>broken bones</b>, we’ve been through it all.
              </p>
              <p className="">
                Our motivation and drive to find the solution to our problems began from there. <b>We take our medication seriously</b>.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};
