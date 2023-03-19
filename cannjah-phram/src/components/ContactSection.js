import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

export const ContactSection = () => {
    return (
        <div className="section-content build-relationships pb-100 main-bg">
            <Container>
                <Row className="mx-0 mb-3">
                    <Col md={8} className="">
                        <div className="heading-container build-relationships-head text-md-start">
                            <h2>Building Healthy Relationships</h2>
                            <p>“a friend with weed is a friend indeed...”</p>
                        </div>
                    </Col>
                    <Col md={4} className="text-center text-md-end mt-4">
                        <Link to='/contact' className="btn btn-dark mb-0 py-md-3 rounded-0 px-4 py-2">Get In Touch <FaLongArrowAltRight /></Link>
                    </Col>
                </Row>
                <Row className="mx-0 extra-contact justify-content-end d-none">
                    <Col lg={12} xl={8} className="text-center text-md-end">
                        <div className='bg-white mb-3 contact-info-box px-4 text-start py-2'>
                            <p className='mb-0'>Help Line Number</p>
                            <h4 className='mb-0'><a href="tel:+1 888 551 0501" className='text-dark fw-bold'>+1 888 551 0501</a></h4>
                        </div>
                        <div className='bg-white mb-3 contact-info-box text-start px-4 py-2'>
                            <p className='mb-0'>Send Your Query</p>
                            <h4 className='fw-bold mb-0'><a href="mailto:info@cannjahpharm.com" className='text-dark fw-bold'>info@cannjahpharm.com</a></h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
