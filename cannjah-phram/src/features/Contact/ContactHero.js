import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ContactHero = () => {
  return (
    <Container fluid className="main-content vh-100">
      <div className="position-relative vh-100">
        <Row className="mx-0 g-3 g-sm-5 position-absolute contact-bg-one-section">
          <Col lg={6} className="contact-hero-content"></Col>
          <Col lg={6} className="contact-bg"></Col>
        </Row>
        <div className="mx-0 g-3 g-sm-5 h-100 d-flex align-self-center contact-bg-two-section">
          <Container className="vh-100 d-flex justify-content-center flex-column pt-5">
            <div className="z-index-1 responsive-bg">
              <div className="heading-container contact-head mb-sm-5 pb-5">
                <h1 className="contact-title">Team CannJah</h1>
                <p className="fw-bold h6">Open Minded</p>
              </div>
              <Row className="mx-0 d-flex g-3 g-sm-5 z-index-2 position-relative">
                <Col lg={6} xl={5} xxl={4}>
                  <div className="contact-box box-1">
                    <h5 className="fw-bold mb-3">
                      Got a question ?
                    </h5>
                    <p>
                      We Love to talk about Cannabis. Medical, Recreational, Plant Science, etc…
                    </p>
                    <button type="button" className="btn w-100 px-3 btn-primary">
                      Chat with a CANNtender
                    </button>
                  </div>
                </Col>
                <Col lg={6} xl={5} xxl={4} className="d-none d-lg-block">
                  <div className="contact-box box-2">
                    <h5 className="fw-bold mb-3">
                      Membership ?
                    </h5>
                    <p>
                      Become a <b>Member</b> <br /> & <br /><b>SAVE</b>  NOW
                    </p>
                    <button type="button" className="btn w-100 btn-primary">
                      Register
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};
