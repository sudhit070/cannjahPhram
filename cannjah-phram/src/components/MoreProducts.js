import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import OwlCarousel from "react-owl-carousel";
import Badge from 'react-bootstrap/Badge';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import White from "../common/images/products/WhitePre-Rolled.png"
import Brown from "../common/images/products/BrownPre-Roll.png"
import Organic from "../common/images/products/organichemp.png"
import viewMore from "../common/images/view-more-ill.svg"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const moreitems_options = {
    loop: false,
    nav: true,
    margin: 10,
    dots: false,
    navText: [<FiArrowLeft />, <FiArrowRight />],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        992: {
            items: 3,
        },
    },
};

export const MoreProducts = () => {
    return (
        <div className="section-content pb-100">
            <Container>
                <div className="heading-container ps-4 our-story-head text-md-start mb-50">
                    <h2>More Items</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <Row className='mx-0'>
                    <Col lg={9}>
                        <OwlCarousel
                            className="moreitem-carousel"
                            {...moreitems_options}
                        >
                            <div className='item'>
                                <div className="product-flip-card">
                                    <div className="product-flip-card-inner">
                                        <div className="product-flip-card-front">
                                            <div className='product-img'>
                                                <img src={White} className="w-100 h-100" alt="Product" />
                                            </div>
                                            <div className='product-name text-start'>
                                                <h3>Refined White</h3>
                                                <span className="btn text-white rounded-0 px-2 py-1 h3 hover-btn"><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                        <div className="product-flip-card-back">
                                            <div className=''>
                                                <h4 className='mb-3 mt-2'>Refined White</h4>

                                                <p className='mb-1'>Available In :</p>
                                                <div className='d-flex gap-3 flex-wrap'>
                                                    <Badge bg="light" text="dark">1 X 1g</Badge>
                                                    <Badge bg="light" text="dark">2 X 0.5g</Badge>
                                                    <Badge bg="light" text="dark">2 X 0.5g</Badge>
                                                </div>
                                            </div>
                                            <div>

                                                <button className="btn btn-light rounded-0 mt-4">
                                                    Learn More<FaLongArrowAltRight className='ms-2' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="product-flip-card">
                                    <div className="product-flip-card-inner">
                                        <div className="product-flip-card-front">
                                            <div className='product-img'>
                                                <img src={Brown} className="w-100 h-100" alt="Product" />
                                            </div>
                                            <div className='product-name text-start'>
                                                <h3>Unrefined Brown</h3>
                                                <span className="btn text-white rounded-0 px-2 py-1 h3 hover-btn"><FaLongArrowAltRight /></span>
                                            </div>
                                        </div>
                                        <div className="product-flip-card-back">
                                            <div className=''>
                                                <h4 className='mb-3 mt-2'>Unrefined Brown</h4>

                                                <p className='mb-1'>Available In :</p>
                                                <div className='d-flex gap-3 flex-wrap'>
                                                    <Badge bg="light" text="dark">1 X 1g</Badge>
                                                    <Badge bg="light" text="dark">2 X 0.5g</Badge>
                                                    <Badge bg="light" text="dark">2 X 0.5g</Badge>
                                                </div>
                                            </div>
                                            <div>

                                                <button className="btn btn-light rounded-0 mt-4">
                                                    Learn More<FaLongArrowAltRight className='ms-2' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
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
                                                <h4 className='mb-3 mt-2'>100% organic hemp</h4>

                                                <p className='mb-1'>Available In :</p>
                                                <div className='d-flex gap-3 flex-wrap'>
                                                    <Badge bg="light" text="dark">1 X 1g</Badge>
                                                    <Badge bg="light" text="dark">2 X 0.5g</Badge>
                                                    <Badge bg="light" text="dark">2 X 0.5g</Badge>
                                                </div>
                                            </div>
                                            <div>

                                                <button className="btn btn-light rounded-0 mt-4">
                                                    Learn More<FaLongArrowAltRight className='ms-2' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Col>
                    <Col lg={3}>
                        <div className='view-more-box'>
                            <Link to='/products' className="btn btn-success position-relative z-index-1 mt-5 ms-5 rounded-0 px-4 py-2 mt-5">View More <FaLongArrowAltRight /></Link>
                            <img src={viewMore} className="view-more-img" alt="view more" />
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
