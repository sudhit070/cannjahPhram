import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import Productimg from '../../common/images/hero-pro-1.png';

export const DetailsHero = () => {
    return (
        <Container className="main-content product overflow-hidden px-0 vh-100">
            <Row className="h-100 mx-0 g-4 mt-5">
                <Col xl={6} className="pe-xl-0 position-relative align-self-center">
                    <div className='product-container  mx-auto'>
                        <div className='product-image w-100 mb-3'>
                            <img src={Productimg} alt="product" className='img-fluid w-100 h-100' />
                        </div>
                        <Link to='/contact' className="rounded-0 text-main py-2"><FaQuestionCircle className='me-2' />Need Help ?</Link>
                    </div>

                </Col>
                <Col xl={6} className="detail-info-background align-self-center">

                    <h2 className="mb-4 pe-xl-4">Grower's Choice Indica</h2>
                    <p className="pe-xl-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="pe-xl-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p className="pe-xl-5 mb-0">Available In :</p>
                    <div className='d-flex gap-3 mb-4'>
                        <div className='badge-container'><span class="badge">3.5g</span></div>
                        <div className='badge-container'><span class="badge">7g</span></div>
                        <div className='badge-container'><span class="badge">14g</span></div>
                        <div className='badge-container'><span class="badge">28g</span></div>
                    </div>
                    <p className="pe-xl-5">Type : Hybrid-Indica Dominant, 70% Indica / 30% Sativa</p>
                    <p className="pe-xl-5">THC: 22% - 27%</p>
                    <Link to='/contact' className="btn btn-success rounded-0 px-4 py-2 mt-3">Buy Now <FaLongArrowAltRight /></Link>
                </Col>
            </Row>
        </Container>
    );
}
