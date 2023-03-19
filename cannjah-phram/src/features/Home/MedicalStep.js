import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Leaf from '../../common/images/leaf.png'
import user from '../../common/images/userone.png'
import book from '../../common/images/clipboardone.png'
import check from '../../common/images/check-circleone.png'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

export const MedicalStep = () => {
    return (
        <div className="section-content medical-step pb-100">
            <Container className="">
                <Row className='mx-0'>
                    <Col xl={6}>
                        <img src={Leaf} width="100%" alt="Leaf" />
                    </Col>
                    <Col xl={6} className="align-self-center medical-program">
                        <div className="heading-container medical-step-head text-md-start mb-50">
                            <h2>CannJah Care</h2>
                            <p>Our Specialized Medical Program</p>
                        </div>

                        <div className='d-flex gap-4 mb-4 ms-3 jusify-content-centent'>
                            <div>
                                <img src={book} alt="User" width="35" />
                            </div>
                            <div>
                                <h4>01 :  Why Medical Cannabis?</h4>
                                <p>It’s a <b>Natural Alternative Approach</b>. The history of medical marijuana goes back to <b>ancient times</b>, and most <b>cultures</b> worldwide have realized its therapeutic application.</p>
                            </div>
                        </div>
                        <div className='d-flex gap-4 mb-4 ms-3 jusify-content-centent'>
                            <div>
                                <img src={user} alt="User" width="30" />
                            </div>
                            <div>
                                <h4>02 : Our Certified CannXperts</h4>
                                <p>They are subject matter experts <b>(SMEs)</b>, who have <b>completed</b> an intense cannabis <b>diploma</b> program. They have extensive knowledge of all various cannabinoids, terpenes, and their combined effects.</p>
                            </div>
                        </div>
                        <div className='d-flex gap-4 mb-4 ms-3 jusify-content-centent'>
                            <div>
                                <img src={check} alt="User" width="38" />
                            </div>
                            <div>
                                <h4>03 : Building Healthy Relationships</h4>
                                <p>We hope to co-create a personal <b>one-on-one</b> relationship. Our CannXperts will <b>assist</b> you with any necessary steps to <b>register</b> as a medical patient.</p>
                            </div>
                        </div>
                        <div className='text-center text-sm-end '>
                            <Link to="/medical" className="text-main">Read More <FaLongArrowAltRight /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
