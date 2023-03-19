import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import White from "../../common/images/products/WhitePre-Rolled.png"
import Brown from "../../common/images/products/BrownPre-Roll.png"
import Organic from "../../common/images/products/organichemp.png"
import Palm from "../../common/images/products/Palmleaf.png"
import { FaLongArrowAltRight } from "react-icons/fa";

export const PrerollList = () => {
    return (
        <div className="section-content pb-100">
            <Container>
                <div className="heading-container ps-sm-4 preroll-head text-md-start mb-50">
                    <h2>Pre Roll</h2>
                    <p>Regular Or Infused : You pick, We Roll</p>
                </div>
                <Row className="mx-0 g-2 g-md-5">
                    <Col xxl={3} lg={4} md={6}>
                        <div className="product-flip-card">
                            <div className="product-flip-card-inner">
                                <div className="product-flip-card-front">
                                    <div className='product-img'>
                                        <img src={Brown} className="w-100 h-100" alt="Product" />
                                    </div>
                                    <div className='product-name text-start'>
                                        <h3>Unrefined & Refined Cones</h3>
                                        <span className="btn text-white rounded-0 px-2 py-1 h3 hover-btn"><FaLongArrowAltRight /></span>
                                    </div>
                                </div>
                                <div className="product-flip-card-back">
                                    <div className=''>
                                        <h4 className='mb-3 mt-2'>Unrefined & Refined Cones</h4>

                                    </div>
                                    <div>
                                        <p className='mb-1'>Available In :</p>
                                        <div className='d-flex gap-3 flex-wrap'>
                                            <Badge bg="light" text="dark">1 X 1g</Badge>
                                            <Badge bg="light" text="dark">2 X 0.5g</Badge>
                                            <Badge bg="light" text="dark">3 X 0.5g</Badge>
                                        </div>
                                        <button className="btn d-none btn-light rounded-0 mt-4">
                                            Learn More<FaLongArrowAltRight className='ms-2' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={3} lg={4} md={6}>
                        <div className="product-flip-card">
                            <div className="product-flip-card-inner">
                                <div className="product-flip-card-front">
                                    <div className='product-img'>
                                        <img src={Organic} className="w-100 h-100" alt="Product" />
                                    </div>
                                    <div className='product-name text-start'>
                                        <h3>100% organic hemp</h3>
                                        <span className="btn text-white rounded-0 px-2 py-1 h3 hover-btn"><FaLongArrowAltRight /></span>
                                    </div>
                                </div>
                                <div className="product-flip-card-back">
                                    <div className=''>
                                        <h4 className='mb-3 mt-2'>100% Organic Hemp Cones</h4>
                                        <p className='mb-1'>Type: 100% Organic Hemp Cones</p>

                                    </div>
                                    <div>
                                        <p className='mb-1'>Available In :</p>
                                        <div className='d-flex gap-3 flex-wrap'>
                                            <Badge bg="light" text="dark">1 X 1g</Badge>
                                            <Badge bg="light" text="dark">2 X 0.5g</Badge>
                                            <Badge bg="light" text="dark">3 X 0.5g</Badge>
                                        </div>
                                        <button className="btn d-none btn-light rounded-0 mt-4">
                                            Learn More<FaLongArrowAltRight className='ms-2' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={3} lg={4} md={6}>
                        <div className="product-flip-card">
                            <div className="product-flip-card-inner">
                                <div className="product-flip-card-front">
                                    <div className='product-img'>
                                        <img src={Palm} className="w-100 h-100" alt="Product" />
                                    </div>
                                    <div className='product-name text-start'>
                                        <h3>Hemp or Palm Leaf Blunt</h3>
                                        <span className="btn text-white rounded-0 px-2 py-1 h3 hover-btn"><FaLongArrowAltRight /></span>
                                    </div>
                                </div>
                                <div className="product-flip-card-back">
                                    <div className=''>
                                        <h4 className='mb-3 mt-2'>Hemp or Palm Leaf Blunt</h4>
                                        <p className='mb-1'>Type: Hemp or Palm Leaf Blunt Wraps</p>

                                    </div>
                                    <div>
                                        <p className='mb-1'>Available In :</p>
                                        <div className='d-flex gap-3 flex-wrap'>
                                            <Badge bg="light" text="dark">1 X 1g</Badge>
                                            <Badge bg="light" text="dark">2 X 0.5g</Badge>
                                            <Badge bg="light" text="dark">3 X 0.5g</Badge>
                                        </div>
                                        <button className="btn d-none btn-light rounded-0 mt-4">
                                            Learn More<FaLongArrowAltRight className='ms-2' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
