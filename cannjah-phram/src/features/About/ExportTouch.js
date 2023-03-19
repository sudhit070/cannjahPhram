import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExportTouchImg2 from "./../../common/images/export-touch-2.png";
import ExportTouchImg1 from "./../../common/images/export-touch-3.png";
import { IoMusicalNotesSharp } from "react-icons/io5";

export const ExportTouch = () => {
  return (
    <div className="section-content overflow-hidden main-bg">
      <Container>
        <div>
          <div className="heading-container export-touch text-center mx-auto mb-50">
            <h2>
              <span className="text-white">Real</span> Expert Touch
            </h2>
            <p>From Educating to Growing</p>
          </div>
        </div>
        <Row className="mx-0 g-4 justify-content-center text-center text-xl-start justify-content-xl-between">
          <Col xl={3} className="px-0">
            <h4 className="mb-4">Patience as Patients</h4>
            <p className="mb-3">
              CannJah grows in small batches with cultivar-specific environmental control parameters and nutrient delivery programs.
            </p>
          </Col>
          <Col xl={3} className="position-relative export-touch-bg">
            <img
              src={ExportTouchImg1}
              width="150"
              className="position-absolute mt-4 export-touch-1-img top-0"
            />

            <img
              src={ExportTouchImg1}
              width="150"
              className="position-absolute mb-4 export-touch-2-img bottom-0"
            />
          </Col>
          <Col xl={3} className="text-xl-end px-0">
            <h4 className="mb-4">Gentle Care for the Cure</h4>
            <p className="mb-3">Plants are hung-dried at 60 F & 60% RH for 14-17 days.</p>
            <p className="mb-3">
              Destemmed, trimmed by hand, and cold cured for 14-28 days in TerpLoc R technology tote liners and bags.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
