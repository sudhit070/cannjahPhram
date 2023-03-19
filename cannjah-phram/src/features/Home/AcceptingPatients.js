import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaLongArrowAltRight } from "react-icons/fa";

export const AcceptingPatients = () => {
    return (
        <div className="section-content Accepting-Patients pb-100 main-bg">
            <Container>
                <Row className="mx-0">
                    <Col sm={12} className="text-center">
                        <h2>Now Accepting <span className='text-white'>Patients!</span></h2>
                        <a className="btn btn-light rounded-0 px-4 py-2 mt-4" href="/contact/">Register <FaLongArrowAltRight /> </a>
                    </Col>
                </Row>
                <Row className="mx-0 mt-4 mt-sm-5">
                    <Col lg={4} className="">
                        <ul>
                            <li>Possession limits</li>
                            <li>Health Canada <span className='box-desktop'><br /></span>Approved</li>
                        </ul>
                    </Col>
                    <Col lg={4} className="">
                        <ul>
                            <li>Medical Tax Benefits</li>
                            <li>Covered by Insurance - Direct Billing</li>

                        </ul>
                    </Col>
                    <Col lg={4} className="">
                        <ul>
                            <li>Wholesale Pricing</li>
                            <li>Compassionate Pricing (Veterans, 1st Nations, Disable) </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
