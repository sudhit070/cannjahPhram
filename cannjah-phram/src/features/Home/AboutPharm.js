import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const AboutPharm = () => {
    return (
        <div className="section-content about-pharm pb-0">
            <Container className="">
                <Row className="mx-0 aboutpharm-pattern">
                    <Col md={9}>
                        <div className="heading-container our-story-head text-md-start mb-50">
                            <h2>Who We Are</h2>
                            <p>We Are One Of You</p>
                        </div>
                        <h5 className='mb-4 fw-bold'>"We started this journey as Patients seeking access to clean Medical Marijuana, then decided to take matters into our own hands."</h5>
                        <h5>From <strong>Neuromuscular</strong> Disease to a Canadian Cannabis <strong>Licensed Producer</strong>.</h5>
                        <h5>Our Expertise is around Cultivation & Processing with a Farmgate store.</h5>
                        <h5>Our facility is vertically integrated with a <span className='text-main'>Hybrid Model</span> for medical & recreational sales.</h5>

                        <Link to='/about' className="btn btn-success rounded-0 px-4 py-2 mt-5">Learn More <FaLongArrowAltRight /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
