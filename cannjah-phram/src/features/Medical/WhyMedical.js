import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const WhyMedical = () => {
  return (
    <div className="section-content Accepting-Patients main-bg">
      <Container>
        <Row className="mx-0">
          <Col sm={12} className="text-center">
            <h2>Need a prescription?</h2>
            <h4>CannJah Care can assist.</h4>
            <a className="btn btn-light rounded-0 px-4 py-2 mt-4" href="/contact">CannTender</a>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
