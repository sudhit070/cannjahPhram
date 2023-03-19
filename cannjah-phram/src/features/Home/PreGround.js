import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Rounded1 from "../../common/images/PreRollHome.png";
import Rounded1 from "../../common/images/20230130_092133.jpg";

import Badge from 'react-bootstrap/Badge';
import White from "../../common/images/products/WhitePre-Rolled.png"
// import Brown from "../../common/images/products/BrownPre-Roll.png"
import Brown from "../../common/images/TectonicTruffle.jpg"
import Organic from "../../common/images/Peachquake.jpg"
import Palm from "../../common/images/PeachesEnRegalia.jpg"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const preroll_left_options = {
  loop: true,
  nav: true,
  margin: 10,
  dots: false,
  navText: [<FiArrowLeft />, <FiArrowRight />],
  responsive: {
    0: {
      items: 1,
    },
    1200: {
      items: 2,
    },
    1400: {
      items: 3,
    },
  },
};

const preroll_right_options = {
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  items: 1,
  navText: [
    "<i className='fa fa-chevron-left'></i>",
    "<i className='fa fa-chevron-right'></i>",
  ],
};


export const PreGround = () => {
  useEffect(() => {

  });
  return (
    <>
      <Container fluid className="px-0  section-content main-bg product-details-container">
        <Container className="px-0">
          <Row className="mx-0">
            <Col lg={5} xxl={4} className="py-sm-5">
              <OwlCarousel
                className="owl-right-carousel"
                {...preroll_right_options}
              >
                <div className="item">
                  <div className="con text-center">
                    <div className="heading-container products-section text-md-start mb-50 text-center"><h2 className="text-center">Upcoming Strains</h2><p className="text-center"></p></div>


                    <div className="product-rounded">
                      <div className="product-image-container">
                        <img src={Rounded1} width="w-100 h-100" className="upcoming" alt="product" />
                      </div>
                    </div>

                    <button className="btn btn-success rounded-0 mt-4 d-none">
                      Learn More<i className="fa-solid ms-3 fa-right-long"></i>
                    </button>
                    <p className="mt-4">
                      "An exclusive lineup, fresh from the farm!”
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </Col>
            <Col lg={7} xxl={8} className="product-details px-0">
              <OwlCarousel {...preroll_left_options} className="owl-product-details-carousel py-4">
                <div className="item">
                  <div className="product-flip-card">
                    <div className="product-flip-card-inner">
                      <div className="product-flip-card-front">
                        <div className='product-img'>
                          <img src={Brown} className="w-100 h-100" alt="Product" />
                        </div>
                        <div className='product-name text-start'>
                          <h3>Tectonic Truffle</h3>
                          <span className="btn text-white rounded-0 px-2 py-1 h3 hover-btn"><FaLongArrowAltRight /></span>
                        </div>
                      </div>
                      <div className="product-flip-card-back">
                        <div className=''>
                          <h4 className='mb-3 mt-2'>Tectonic Truffle</h4>

                        </div>
                        <div>
                          <p className='mb-1'>Available In :</p>
                          <div className='d-flex gap-3 flex-wrap'>
                            <Badge bg="light" text="dark">3.5g</Badge>
                            <Badge bg="light" text="dark">7g</Badge>
                            <Badge bg="light" text="dark">Pre-Roll</Badge>
                          </div>
                          <button className="btn d-none btn-light rounded-0 mt-4">
                            Learn More<FaLongArrowAltRight className='ms-2' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-flip-card">
                    <div className="product-flip-card-inner">
                      <div className="product-flip-card-front">
                        <div className='product-img'>
                          <img src={Organic} className="w-100 h-100" alt="Product" />
                        </div>
                        <div className='product-name text-start'>
                          <h3>PeachQuake </h3>
                          <span className="btn text-white rounded-0 px-2 py-1 h3 hover-btn"><FaLongArrowAltRight /></span>
                        </div>
                      </div>
                      <div className="product-flip-card-back">
                        <div className=''>
                          <h4 className='mb-3 mt-2'>PeachQuake </h4>
                          {/* <p className='mb-1'>Type: 100% Organic Hemp Cones</p> */}

                        </div>
                        <div>
                          <p className='mb-1'>Available In :</p>
                          <div className='d-flex gap-3 flex-wrap'>
                            <Badge bg="light" text="dark">3.5g</Badge>
                            <Badge bg="light" text="dark">7g</Badge>
                            <Badge bg="light" text="dark">Pre-Roll</Badge>
                          </div>
                          <button className="btn d-none btn-light rounded-0 mt-4">
                            Learn More<FaLongArrowAltRight className='ms-2' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-flip-card">
                    <div className="product-flip-card-inner">
                      <div className="product-flip-card-front">
                        <div className='product-img'>
                          <img src={Palm} className="w-100 h-100" alt="Product" />
                        </div>
                        <div className='product-name text-start'>
                          <h3>Peaches En Regalia</h3>
                          <span className="btn text-white rounded-0 px-2 py-1 h3 hover-btn"><FaLongArrowAltRight /></span>
                        </div>
                      </div>
                      <div className="product-flip-card-back">
                        <div className=''>
                          <h4 className='mb-3 mt-2'>Peaches En Regalia</h4>
                          {/* <p className='mb-1'>Type: Hemp or Palm Leaf Blunt Wraps</p> */}

                        </div>
                        <div>
                          <p className='mb-1'>Available In :</p>
                          <div className='d-flex gap-3 flex-wrap'>
                            <Badge bg="light" text="dark">3.5g</Badge>
                            <Badge bg="light" text="dark">7g</Badge>
                            <Badge bg="light" text="dark">Pre-Roll</Badge>
                          </div>
                          <button className="btn d-none btn-light rounded-0 mt-4">
                            Learn More<FaLongArrowAltRight className='ms-2' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </OwlCarousel>
            </Col>
          </Row>
          <div className=""></div>
        </Container>
      </Container>
    </>
  );
};
