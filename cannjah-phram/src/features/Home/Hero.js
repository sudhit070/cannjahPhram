import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mobile from "../../common/images/76459_tran.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaCanadianMapleLeaf
} from "react-icons/fa";
import Product1 from "../../common/images/products/BH-home.png";
import Product2 from "../../common/images/products/GG-home.png";
import Product3 from "../../common/images/products/GD-home.png";
import Mobile1 from "../../common/images/mobilesimage.png";
import Mobile2 from "../../common/images/new_phone_black.png";
import { Link } from "react-router-dom";

const main_slider_options = {
  loop: true,
  margin: 10,
  nav: true,
  touchDrag: true,
  mouseDrag: true,
  navText: [],
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

const mobile_slider_options = {
  loop: true,
  margin: 10,
  nav: false,
  touchDrag: true,
  mouseDrag: true,
  autoplay: true,
  autoplayTimeout: 1000,
  dots: false,
  items: 1,
};

export const Hero = () => {
  useEffect(() => {
    document.title = `You clicked times`;
  });

  return (
    <>
      <Container
        fluid
        className="main-content hero-content px-0 h-800px main-bg"
      >
        <Container className="px-0 h-100">
          <div className="section-one-wrapper">
            <div className="section-one-inner">
              <Row className="mx-0 g-3 g-sm-5">
                <Col className="order-2 order-lg-1" lg={8}>
                  <div className="main-top-wrapper position-relative">
                    <div className="section-menu-bottom-one">
                      <OwlCarousel
                        className="owl-right-carousel"
                        {...main_slider_options}
                      >
                        <div className="item">
                          <div className="section-menu-top-one">
                            <h6 className="mb-1 text-white cannedian-text fw-bold mb-3">PATIENT GROWN</h6>
                            <h3 className="mb-1">Banana Hammock RBX</h3>
                            <p className="pb-xl-3 text-ellipse">
                              Patient favorite thanks to its super delicious flavor and happy effects.
                            </p>
                            <Link to="/products" className="section-menu-top-one-btn">
                              The Farm <FaLongArrowAltRight />
                            </Link>
                          </div>
                          <Link to="Banana-Hammock/">
                            <img src={Product1} alt="Product" />
                          </Link>
                        </div>
                        <div className="item">
                          <div className="section-menu-top-one">
                            <h6 className="mb-1 text-white cannedian-text fw-bold mb-3">PATIENT GROWN</h6>
                            <h3 className="mb-1">Gorilla Glue #4 (GG4)</h3>
                            <p className="pb-xl-3  text-ellipse">
                              A powerhouse sativa-dominant hybrid. Patients and breeders favorite around the world.
                            </p>
                            <Link to="/products" className="section-menu-top-one-btn">
                              The Farm <FaLongArrowAltRight />
                            </Link>
                          </div>
                          <Link to="Gorilla-Glue/">
                            <img src={Product2} alt="Product" />
                          </Link>
                        </div>
                        <div className="item">
                          <div className="section-menu-top-one">
                            <h6 className="mb-1 text-white cannedian-text fw-bold mb-3">PATIENT GROWN</h6>
                            <h3 className="mb-1">Grape Diamonds R2</h3>
                            <p className="pb-xl-3  text-ellipse">
                              Evenly balanced hybrid. Flavor that will truly surprise you.
                            </p>
                            <Link to="/products" className="section-menu-top-one-btn">
                              The Farm <FaLongArrowAltRight />
                            </Link>
                          </div>
                          <Link to="Grape-Diamond/">
                            <img src={Product3} alt="Product" />
                          </Link>
                        </div>
                      </OwlCarousel>
                    </div>
                    <div className="postion-block-fixed">
                      <span className="postion-block-fixed-in"></span>

                      <h3>CANN<span className="maple-leaf"><FaCanadianMapleLeaf /></span></h3>
                    </div>
                    <div className="menu-icons d-none">
                      <ul>
                        <li>
                          <a href="#">
                            <div>
                              <FaFacebookF />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div>
                              <FaInstagram />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div>
                              <FaTelegramPlane />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div>
                              <FaLinkedinIn />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col className="order-1 order-lg-2" lg={4}>
                  <div className="main-second-wrapper">
                    <div className="section-menu-top-second">
                      <h3>
                        <span className="position-relative">CANN<span className="maple-leaf"><FaCanadianMapleLeaf /></span></span>JAH
                      </h3>
                      <p>Pharm</p>
                    </div>
                    <div className="section-menu-top-second mbh-700px text-center position-relative d-none d-lg-block">
                      <div className="product-mobile-cont">
                        <OwlCarousel
                          className="mobile-slider-carousel"
                          {...mobile_slider_options}
                        >
                          <div className="item">
                            <img src={Mobile1} className="" alt="Cart" width="120%" />
                          </div>
                        </OwlCarousel>
                      </div>
                      <img
                        // src={Mobile2}
                        src={mobile}
                        className="mt-5 mobile-slider mt-xxl-4"
                        width="100%"
                        alt="Mobile"
                      />
                      <div className="menu-icons">
                        <ul>
                          <li>
                            <a href="#">
                              <div>
                                <FaFacebookF />
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div>
                                <FaInstagram />
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div>
                                <FaTelegramPlane />
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div>
                                <FaLinkedinIn />
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};
