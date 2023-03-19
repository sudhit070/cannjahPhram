import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductHero from "../../common/images/productsmain-img.png";

export const ProdHero = () => {
    return (
        <>
            <div className="section-content main-product pb-100 vh-100">
                <Container className="px-0 h-100 text-center Section_onepad_own">
                    <div className="mx-0 ">
                        <div className="heading-container ps-3 product-main-head text-start mb-50"><h2>Products</h2><p>Clean Quality Medical Marijuana</p></div>
                        <Row className='g-4 mx-0'>
                            <Col md={6} lg={4}>
                                <div className="left_product_section">
                                    <div className="top_info_pro_del mb-5">
                                        <div className="contact-box box-2 text-start">
                                            <h5 className="fw-bold mb-4">From Patients…</h5>
                                            <p>Our Founders Have Always Approached Cannabis as <b>Natural</b> Medicine. Regardless of The Market, Our Goal Is To Produce Medicinal Marijuana. We believe this plant is a gift from God.</p>
                                        </div>
                                    </div>
                                    <div className="second_info_pro">
                                        <div className="inner_top_info_second_info_pro">
                                            <div className="number_pro_se_do">
                                                <span>
                                                    +
                                                </span>
                                                <div className='plus-heading two'>
                                                    <h4>Sacred Herb</h4>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className="middle_product_section">
                                    <div className="middle_pro_img">
                                        <img src={ProductHero} className="product-main-img" />
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} lg={4}>
                                <div className="last_product_section">
                                    <div className="three_info_pro">
                                        <div className="inner_top_info">
                                            <div className="number_pro_se_lft">
                                                <div className='plus-heading one'>
                                                    <h4>…To Patients</h4>
                                                </div>

                                                <span>
                                                    +
                                                </span>
                                            </div>
                                            <div className="number_hover_se">
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="four_info_pro pt-5">
                                        <div className="contact-box box-2 text-start">
                                            <h5 className="fw-bold mb-4">…To Patients</h5>
                                            <p>From our MMAR days, CannJah understands that potency and experience are highly subjective, from person to person. <b>Quality</b> Does <b>Not</b> Mean <b>The highest THC, CBD or Terps</b> Alone; It’s The Experience with Combined Effects.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}
