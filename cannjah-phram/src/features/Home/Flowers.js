import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Badge from 'react-bootstrap/Badge';
import Col from "react-bootstrap/Col";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import Rounded2 from "../../common/images/rounded-pro-2.png";
import Banana from "../../common/images/products/BH-prod-home.png"
import Gorilla from "../../common/images/products/GG-prod-home.png"
import Diamond from "../../common/images/products/GD-prod-home.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const left_slider_options = {
  loop: false,
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

const right_slider_options = {
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  items: 1,
  navText: [
    "<i className='fa fa-chevron-left'></i>",
    "<i className='fa fa-chevron-right'></i>",
  ],
};

function slide_vi() {
  let active_slide = Array.from(
    document.querySelectorAll(".owl-left-carousel .owl-item.active")
  );
  let all_slide = Array.from(
    document.querySelectorAll(".owl-left-carousel .owl-item")
  );

  all_slide.forEach((items, index) => {
    if (active_slide.includes(items)) {
      items.style.transform = "rotate(13deg) scale(1)";
      items.style.opacity = "1";
    } else {
      items.style.transform = "rotate(13deg) scale(0.8)";
      items.style.opacity = "0";
    }
  });
}

export const Flowers = () => {
  useEffect(() => {
    $(document).ready(function () {
      // slide_vi();
      $(".owl-nav button").on("click", slide_vi);
    });
  });
  return (
    <>
      <Container fluid className="px-0 section-content product-details-container pt-50">
        <Container className="px-0">
          <Row className="mx-0">
            <Col lg={7} xxl={8} className="product-details-1 order-2 order-lg-1 px-0">
              <OwlCarousel {...left_slider_options} className="owl-product-details-carousel  py-4">
                <div className="item">
                  <Link to="/Gorilla-Glue">
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
                            <Link to="/Gorilla-Glue" className="btn btn-light rounded-0 mt-4">
                              Learn More<FaLongArrowAltRight className='ms-2' />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="item">
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
                </div>
                <div className="item">
                  <Link to="/Banana-Hammock" >
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
                </div>
              </OwlCarousel>
            </Col>
            <Col lg={5} xxl={4} className="order-1 order-lg-2 py-sm-5">
              <OwlCarousel
                className="owl-right-carousel"
                {...right_slider_options}
              >
                <div className="item">
                  <div className="con text-center">
                    <div className="heading-container preroll-section text-md-start mb-50"><h2 className="text-center">Flowers</h2><p className="text-center">Our Finest Selection of<br />Marijuana</p></div>


                    <div className="product-rounded">
                      <div className="product-image-container">
                        <img src={Rounded2} width="w-100 h-100" alt="product Two" />
                      </div>
                    </div>

                    <button className="btn btn-light rounded-0 mt-4 d-none">
                      Learn More<i className="fa-solid ms-3 fa-right-long"></i>
                    </button>
                    <p className="mt-4">
                      Seriously smooth with aromas of mint, sweet and dairy.
                    </p>

                  </div>
                </div>
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
