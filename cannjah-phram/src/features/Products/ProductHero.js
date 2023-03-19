import React from "react";
// import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../features/Products/ProductHero.css";
// import $ from "jquery";
import ProductHero from "../../common/images/hero-pro-mobile-1.png";
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';


export const ProductSectionOne = () => {
    return (
        <div>
            <div className="section-content pb-100">
                <Container className="px-0 text-center">
                    <div className="mx-0 Section_onepad_own">
                        <div className="heading-container our-story-head text-start mb-50"><h2>Products</h2><p>Better quality medical cannabis</p></div>
                        <Row>
                            <Col lg={4}>
                                <div className="left_product_section">
                                    <Row>
                                        <Col lg={12}>
                                            <div className="top_info_pro_del">
                                                <div className="contact-box box-2 text-start">
                                                    <h5 className="fw-bold mb-4">Stores available for you to visit</h5>
                                                    <p>We'll assist you in locating the ideal products and prices for your company.</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="second_info_pro">
                                                <div className="inner_top_info_second_info_pro">
                                                    <div className="number_pro_se_do">
                                                        <span>
                                                            +
                                                        </span>
                                                        <h4>The full-melt difference</h4>
                                                    </div>

                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="middle_product_section">
                                    <div className="middle_pro_img">
                                        <img src={ProductHero} />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="last_product_section">
                                    <div className="three_info_pro">
                                        <div className="inner_top_info">
                                            <div className="number_pro_se_lft">
                                                <h4>Potent, flavourful BC bud</h4>
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
                                            <h5 className="fw-bold mb-4">Stores available for you to visit</h5>
                                            <p>We'll assist you in locating the ideal products and prices for your company.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className="main-bg">
                    <Container className="">
                        <div className="mx-0 p-own">
                            <div className="heading-container heading-container-second our-story-head text-start mb-50"><h2>Flower</h2><p>Better quality medical cannabis</p></div>
                            <Row>
                                <Col lg={3}>
                                    <div className="Product_menu_p_W">
                                        <div className="Product_menu_p_img">
                                            <img src={ProductHero} />
                                        </div>
                                        <div className="Product_menu_p_cont">
                                            <div className="Product_menu_p_cont_info">
                                                <div >
                                                    <span className="border px-2 rounded-2 me-2">Flower</span>
                                                    <span className="border px-2 rounded-2">Hybrid</span>
                                                </div>
                                                <div className="ms-auto">
                                                    <span>AVAILABLE NOW</span>
                                                </div>

                                            </div>
                                            <h5 className="pt-2">Berry Cream Puff</h5>
                                            <div className="Product_menu_p_cont_inner">
                                                <a className="me-4">Shop</a>
                                                <a className="">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="Product_menu_p_W">
                                        <div className="Product_menu_p_img">
                                            <img src={ProductHero} />
                                        </div>
                                        <div className="Product_menu_p_cont">
                                            <div className="Product_menu_p_cont_info">
                                                <div >
                                                    <span className="border px-2 rounded-2 me-2">Flower</span>
                                                    <span className="border px-2 rounded-2">Indica</span>
                                                </div>
                                                <div className="ms-auto">
                                                    <span>AVAILABLE NOW</span>
                                                </div>

                                            </div>
                                            <h5 className="pt-2">Tree Flower</h5>
                                            <div className="Product_menu_p_cont_inner">
                                                <a className="me-4">Shop</a>
                                                <a className="">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="Product_menu_p_W">
                                        <div className="Product_menu_p_img">
                                            <img src={ProductHero} />
                                        </div>
                                        <div className="Product_menu_p_cont">
                                            <div className="Product_menu_p_cont_info">
                                                <div >
                                                    <span className="border px-2 rounded-2 me-2">Flower</span>
                                                    <span className="border px-2 rounded-2">Sativa</span>
                                                </div>
                                                <div className="ms-auto">
                                                    <span>AVAILABLE NOW</span>
                                                </div>

                                            </div>
                                            <h5 className="pt-2">Black Cherry Punch</h5>
                                            <div className="Product_menu_p_cont_inner">
                                                <a className="me-4">Shop</a>
                                                <a className="">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="Product_menu_p_W">
                                        <div className="Product_menu_p_img">
                                            <img src={ProductHero} />
                                        </div>
                                        <div className="Product_menu_p_cont">
                                            <div className="Product_menu_p_cont_info">
                                                <div >
                                                    <span className="border px-2 rounded-2 me-2">Flower</span>
                                                    <span className="border px-2 rounded-2">Hybrid</span>
                                                </div>
                                                <div className="ms-auto">
                                                    <span>AVAILABLE NOW</span>
                                                </div>

                                            </div>
                                            <h5 className="pt-2">Blue Dream</h5>
                                            <div className="Product_menu_p_cont_inner">
                                                <a className="me-4">Shop</a>
                                                <a className="">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className="mx-0 p-own">
                        <div className="heading-container our-story-head text-start mb-50"><h2>Pre-Ground</h2><p>Better quality medical cannabis</p></div>
                        <Row>
                            <Col lg={3}>
                                <div className="Product_menu_p">
                                    <div className="Product_menu_p_img">
                                        <img src={ProductHero} />
                                    </div>
                                    <div className="Product_menu_p_cont">
                                        <div className="Product_menu_p_cont_info">
                                            <div>
                                                <span className="border px-2 rounded-2 me-2">Flower</span>
                                                <span className="border px-2 rounded-2">Hybrid</span>
                                            </div>
                                            <div className="ms-auto">
                                                <span>AVAILABLE NOW</span>
                                            </div>
                                        </div>
                                        <h5 className="pt-2 white-theme">Cake N Baked</h5>
                                        <div className="Product_menu_p_cont_inner">
                                            <a className="me-4">Shop</a>
                                            <a className="">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="Product_menu_p">
                                    <div className="Product_menu_p_img">
                                        <img src={ProductHero} />
                                    </div>
                                    <div className="Product_menu_p_cont">
                                        <div className="Product_menu_p_cont_info">
                                            <div >
                                                <span className="border px-2 rounded-2 me-2">Flower</span>
                                                <span className="border px-2 rounded-2">Indica</span>
                                            </div>
                                            <div className="ms-auto">
                                                <span>AVAILABLE NOW</span>
                                            </div>

                                        </div>
                                        <h5 className="pt-2 white-theme">Diesel Kush</h5>
                                        <div className="Product_menu_p_cont_inner">
                                            <a className="me-4">Shop</a>
                                            <a className="">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="Product_menu_p">
                                    <div className="Product_menu_p_img">
                                        <img src={ProductHero} />
                                    </div>
                                    <div className="Product_menu_p_cont">
                                        <div className="Product_menu_p_cont_info">
                                            <div >
                                                <span className="border px-2 rounded-2 me-2">Flower</span>
                                                <span className="border px-2 rounded-2">Indica</span>
                                            </div>
                                            <div className="ms-auto">
                                                <span>AVAILABLE NOW</span>
                                            </div>

                                        </div>
                                        <h5 className="pt-2 white-theme">CBD Dream</h5>
                                        <div className="Product_menu_p_cont_inner">
                                            <a className="me-4">Shop</a>
                                            <a className="">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="Product_menu_p">
                                    <div className="Product_menu_p_img">
                                        <img src={ProductHero} />
                                    </div>
                                    <div className="Product_menu_p_cont">
                                        <div className="Product_menu_p_cont_info">
                                            <div >
                                                <span className="border px-2 rounded-2 me-2">Flower</span>
                                                <span className="border px-2 rounded-2">Indica</span>
                                            </div>
                                            <div className="ms-auto">
                                                <span>AVAILABLE NOW</span>
                                            </div>

                                        </div>
                                        <h5 className="pt-2 white-theme">Pink Berry</h5>
                                        <div className="Product_menu_p_cont_inner">
                                            <a className="me-4">Shop</a>
                                            <a className="">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className="main-bg">
                    <Container>
                        <div className="mx-0 p-own">
                            <div className="heading-container heading-container-second our-story-head text-start mb-50"><h2>Pre-Rolls</h2><p>Better quality medical cannabis</p></div>
                            <Row>
                                <Col lg={3}>
                                    <div className="Product_menu_p_W">
                                        <div className="Product_menu_p_img">
                                            <img src={ProductHero} />
                                        </div>
                                        <div className="Product_menu_p_cont">
                                            <div className="Product_menu_p_cont_info">
                                                <div >
                                                    <span className="border px-2 rounded-2 me-2">Infused</span>
                                                    <span className="border px-2 rounded-2">Hybrid</span>
                                                </div>
                                                <div className="ms-auto">
                                                    <span>AVAILABLE NOW</span>
                                                </div>

                                            </div>
                                            <h5 className="pt-2">Berry Cream Puff</h5>
                                            <div className="Product_menu_p_cont_inner">
                                                <a className="me-4">Shop</a>
                                                <a className="">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="Product_menu_p_W">
                                        <div className="Product_menu_p_img">
                                            <img src={ProductHero} />
                                        </div>
                                        <div className="Product_menu_p_cont">
                                            <div className="Product_menu_p_cont_info">
                                                <div >
                                                    <span className="border px-2 rounded-2 me-2">Pre-Rolls</span>
                                                    <span className="border px-2 rounded-2">Indica</span>
                                                </div>
                                                <div className="ms-auto">
                                                    <span>AVAILABLE NOW</span>
                                                </div>

                                            </div>
                                            <h5 className="pt-2">Tree Flower</h5>
                                            <div className="Product_menu_p_cont_inner">
                                                <a className="me-4">Shop</a>
                                                <a className="">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="Product_menu_p_W">
                                        <div className="Product_menu_p_img">
                                            <img src={ProductHero} />
                                        </div>
                                        <div className="Product_menu_p_cont">
                                            <div className="Product_menu_p_cont_info">
                                                <div >
                                                    <span className="border px-2 rounded-2 me-2">Flower</span>
                                                    <span className="border px-2 rounded-2">Sativa</span>
                                                </div>
                                                <div className="ms-auto">
                                                    <span>AVAILABLE NOW</span>
                                                </div>

                                            </div>
                                            <h5 className="pt-2">Black Cherry Punch</h5>
                                            <div className="Product_menu_p_cont_inner">
                                                <a className="me-4">Shop</a>
                                                <a className="">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="Product_menu_p_W">
                                        <div className="Product_menu_p_img">
                                            <img src={ProductHero} />
                                        </div>
                                        <div className="Product_menu_p_cont">
                                            <div className="Product_menu_p_cont_info">
                                                <div >
                                                    <span className="border px-2 rounded-2 me-2">Flower</span>
                                                    <span className="border px-2 rounded-2">Hybrid</span>
                                                </div>
                                                <div className="ms-auto">
                                                    <span>AVAILABLE NOW</span>
                                                </div>

                                            </div>
                                            <h5 className="pt-2">Blue Dream</h5>
                                            <div className="Product_menu_p_cont_inner">
                                                <a className="me-4">Shop</a>
                                                <a className="">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className="">
                    {/* <Container>
                        <div className="mx-0 p-own">
                            <div className="heading-container our-story-head text-start mb-50"><h2>About the Products</h2><p>Better quality medical cannabis</p></div>
                            <Row>
                                <Col lg={6}>
                                    <div className="">
                                        <h4>Frequently Asked Questions</h4>
                                    </div>
                                    <div className="pt-3 accordion_outer">
                                        <div>
                                            <Accordion>
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            What’s in Cannjah Pharm’ Flower?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>
                                                            Our pre-rolls are single-strain and made with the best parts of our BC-grown cannabis flower – whole bud, no shake – to ensure the highest potency and flavour with every pull. Each tube features pre-rolls in one of our popular signature strains, grown naturally with care in our BC greenhouse.
                                                        </p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            How are Cannjah Pharm’ Pre-Ground made?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>
                                                            We use a semi-automated process to create our pre-rolls. Each one features a tapered design, finished with a twist to seal it tight, while also acting as a convenient wick.
                                                        </p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            What’s in Cannjah Pharm’ pre-rolls?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>
                                                            Our pre-rolls are single-strain and made with the best parts of our BC-grown cannabis flower – whole bud, no shake – to ensure the highest potency and flavour with every pull. Each tube features pre-rolls in one of our popular signature strains, grown naturally with care in our BC greenhouse.
                                                        </p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            How are Cannjah Pharm’ Flower made?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>
                                                            We use a semi-automated process to create our pre-rolls. Each one features a tapered design, finished with a twist to seal it tight, while also acting as a convenient wick.
                                                        </p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            What’s in Cannjah Pharm’ Pre-Ground?
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p>
                                                            Our pre-rolls are single-strain and made with the best parts of our BC-grown cannabis flower – whole bud, no shake – to ensure the highest potency and flavour with every pull. Each tube features pre-rolls in one of our popular signature strains, grown naturally with care in our BC greenhouse.
                                                        </p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                        <div className="text-end pt-3">
                                            <a className="related_articles_cont_link">
                                                <span>
                                                    VIEW ALL FAQS
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="">
                                        <h4>Frequently Asked Questions</h4>
                                    </div>
                                    <div className="pt-3">
                                        <Row>
                                            <Col lg={6}>
                                                <div className="related_articles_menu">
                                                    <div className="related_articles_info">
                                                        <div className="ms-auto">
                                                            <span className="border px-2 rounded-2 me-2">Knowledge</span>
                                                        </div>
                                                    </div>
                                                    <div className="related_articles_img">
                                                        <img src={ProductHero} />
                                                    </div>
                                                    <div className="related_articles_cont">
                                                        <h5>DEC 23, 2019 | BY CANNJAH PHARM</h5>
                                                        <p>What you need to know when choosing a cannabis pre-rol?</p>
                                                        <a className="related_articles_cont_link">
                                                            <span>
                                                                Read More
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="related_articles_menu">
                                                    <div className="related_articles_info">
                                                        <div className="ms-auto">
                                                            <span className="border px-2 rounded-2 me-2">Knowledge</span>
                                                        </div>
                                                    </div>
                                                    <div className="related_articles_img">
                                                        <img src={ProductHero} />
                                                    </div>
                                                    <div className="related_articles_cont">
                                                        <h5>MAR 23, 2019 | BY CANNJAH PHARM</h5>
                                                        <p>What you need to know when choosing a cannabis pre-rol?</p>
                                                        <a className="related_articles_cont_link">
                                                            <span>
                                                                Read More
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container> */}
                </div>
            </div>
        </div>
    );
};