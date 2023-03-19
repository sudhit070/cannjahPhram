import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./PreGround.css";
import $ from "jquery";
import productimg from "../../common/images/unsplash_mQVlwFd3OPA.png";
import Product1 from "../../common/images/product-cart-1.png";
import Product2 from "../../common/images/product-cart-2.png";
import Product3 from "../../common/images/product-cart-3.png";
import Rounded1 from "../../common/images/rounded-pro-1.png";
import Rounded2 from "../../common/images/rounded-pro-2.png";
import Rounded3 from "../../common/images/rounded-pro-3.png";

const left_slider_options = {
    loop: true,
    margin: -290,
    nav: true,
    dots: false,
    mouseDrag: false,
    pullDrag: false,
    touchDrag: false,
    navText: [
        "<i className='fa fa-chevron-left'></i>",
        "<i className='fa fa-chevron-right'></i>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
        },
    },
};

const right_slider_options = {
    loop: true,
    margin: 10,
    nav: true,
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


export const ProductSection = () => {

    useEffect(() => {
        $(document).ready(function () {
            slide_vi();

            $(".owl-nav button").on("click", slide_vi);

            let first_slider = $(".owl-right-carousel");
            let second_slider = $(".owl-left-carousel");

            second_slider.on("click", ".owl-next", function () {
                first_slider.trigger("next.owl.carousel");
            });
            second_slider.on("click", ".owl-prev", function () {
                first_slider.trigger("prev.owl.carousel");
            });
            first_slider.on("click", ".owl-next", function () {
                second_slider.trigger("next.owl.carousel");
            });
            first_slider.on("click", ".owl-prev", function () {
                second_slider.trigger("prev.owl.carousel");
            });
        });
    });
    return (
        <Container fluid className="px-0 pt-50 product-details-container">
            <Container className="px-0">
                <OwlCarousel
                    className="owl-right-carousel"
                    {...right_slider_options}
                >
                    <div className="item">
                        <Row className="mx-0">
                            <Col lg={5} xxl={4} className="py-5">
                                <div className="con text-center">
                                    <div className="heading-container products-section text-md-start mb-50"><h2>Flowers</h2><p>From Patient to Patient</p></div>
                                    <div className="product-rounded">
                                        <div className="product-image-container">
                                            <img src={Rounded1} width="w-100 h-100" alt="product" />
                                        </div>
                                    </div>
                                    <button className="btn btn-success rounded-0 mt-4">
                                        Learn More<i className="fa-solid ms-3 fa-right-long"></i>
                                    </button>
                                    <p className="mt-4">
                                        Seriously smooth with aromas of mint, sweet and dairy.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={7} xxl={8} className="product-details px-0 py-5">

                            </Col>
                        </Row>
                    </div>
                </OwlCarousel>
            </Container>
        </Container>
    )
}
