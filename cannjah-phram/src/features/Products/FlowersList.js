import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import Banana from "../../common/images/products/BH-prod-prod.png"
import Gorilla from "../../common/images/products/GG-prod-prod.png"
import Diamond from "../../common/images/products/GD-prod-prod.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const FlowersList = () => {
    return (
        <div className="section-content pb-100 main-bg">
            <Container>
                <div className="heading-container ps-sm-4 flowerlist-head text-md-start mb-50">
                    <h2>Flower</h2>
                    <p>Growing for "US"</p>
                </div>
                <Row className="mx-0 g-2 g-md-5">
                    <Col xxl={3} lg={4} md={6}>
                        <Link to='/Gorilla-Glue'>
                            <div className="product-flip-card">
                                <div className="product-flip-card-inner">
                                    <div className="product-flip-card-front">
                                        <div className='product-img'>
                                            <img src={Gorilla} className="w-100 h-100" alt="Product" />
                                        </div>
                                        <div className='product-name text-start'>
                                            <h3>Gorilla Glue #4 (GG4)</h3>
                                            <span className="btn text-white rounded-0 px-2 py-1 h3 hover-btn"><FaLongArrowAltRight /></span>
                                        </div>
                                    </div>
                                    <div className="product-flip-card-back">
                                        <div className=''>
                                            <h4 className='mb-3 mt-2'>Gorilla Glue #4 (GG4)</h4>
                                            <p className='mb-1'>Type: Hybrid - Sativa</p>
                                            <p className='mb-1'>Cannabinoids: 22% - 28%</p>
                                            <p className='mb-1'>Terpenes: Caryophylene, Limonene, Humelene, Myrcene, Nerolidol</p>
                                            <p className='mb-1'>Aroma: Chemical, Coffee, Diesel, Sour</p>

                                        </div>
                                        <div>
                                            <p className='mb-1'>Available In :</p>
                                            <div className='d-flex gap-2 flex-wrap'>
                                                <Badge bg="light" text="dark">3.5g</Badge>
                                                <Badge bg="light" text="dark">7g</Badge>
                                                <Badge bg="light" text="dark">Pre-Rolls</Badge>
                                            </div>

                                            <Link to='/Gorilla-Glue' className="btn btn-light rounded-0 mt-4">
                                                Learn More<FaLongArrowAltRight className='ms-2' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col xxl={3} lg={4} md={6}>
                        <Link to="/Grape-Diamond">
                            <div className="product-flip-card">
                                <div className="product-flip-card-inner">
                                    <div className="product-flip-card-front">
                                        <div className='product-img'>
                                            <img src={Diamond} className="w-100 h-100" alt="Product" />
                                        </div>
                                        <div className='product-name text-start'>
                                            <h3>Grape Diamonds R2</h3>
                                            <span className="btn text-white rounded-0 px-2 py-1 h3 hover-btn"><FaLongArrowAltRight /></span>
                                        </div>
                                    </div>
                                    <div className="product-flip-card-back">
                                        <div className=''>
                                            <h4 className='mb-3 mt-2'>Grape Diamonds R2</h4>
                                            <p className='mb-1'>Type: Hybrid - Balance</p>
                                            <p className='mb-1'>Cannabinoids: 18 - 24%</p>
                                            <p className='mb-1'>Terpenes: Myrcene, Limonene, Linalool</p>
                                            <p className='mb-1'>Aroma: Spicy, Fruity, Herbal</p>

                                        </div>
                                        <div>
                                            <p className='mb-1'>Available In :</p>
                                            <div className='d-flex gap-2 flex-wrap'>
                                                <Badge bg="light" text="dark">3.5g</Badge>
                                                <Badge bg="light" text="dark">7g</Badge>
                                                <Badge bg="light" text="dark">Pre-Rolls</Badge>
                                            </div>
                                            <Link to="/Grape-Diamond" className="btn btn-light rounded-0 mt-4">
                                                Learn More<FaLongArrowAltRight className='ms-2' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col xxl={3} lg={4} md={6}>
                        <Link to="/Banana-Hammock">
                            <div className="product-flip-card">
                                <div className="product-flip-card-inner">
                                    <div className="product-flip-card-front">
                                        <div className='product-img'>
                                            <img src={Banana} className="w-100 h-100" alt="Product" />
                                        </div>
                                        <div className='product-name text-start'>
                                            <h3>Banana Hammock</h3>
                                            <span className="btn text-white rounded-0 px-2 py-1 h3 hover-btn"><FaLongArrowAltRight /></span>
                                        </div>
                                    </div>
                                    <div className="product-flip-card-back">
                                        <div className=''>
                                            <h4 className='mb-3 mt-2'>Banana Hammock</h4>
                                            <p className='mb-1'>Type: Hybrid - Indica</p>
                                            <p className='mb-1'>Cannabinoids: 22% - 27%</p>
                                            <p className='mb-1'>Terpenes: Myrcene, Limonene, Caryophylene</p>
                                            <p className='mb-1'>Aroma: Citrus, Earthy, Fruity, Sour</p>

                                        </div>
                                        <div>
                                            <p className='mb-1'>Available In :</p>
                                            <div className='d-flex gap-2 flex-wrap'>
                                                <Badge bg="light" text="dark">3.5g</Badge>
                                                <Badge bg="light" text="dark">7g</Badge>
                                                <Badge bg="light" text="dark">Pre-Rolls</Badge>
                                            </div>
                                            <Link to="/Banana-Hammock" className="btn btn-light rounded-0 mt-4">
                                                Learn More<FaLongArrowAltRight className='ms-2' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
