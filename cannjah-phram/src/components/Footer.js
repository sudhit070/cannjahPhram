import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../common/images/logo.png";
import footerImg from "../common/images/footer-img.png";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer bg-dark pt-100 pb-50">
      <Container>
        <Row className="">
          <Col lg={5} className="footer-line">
            <img src={logo} width="350" className="mb-4 footer-logo" />
            <p className="text-gray location-text">
              Get in touch with us.
            </p>
            <div className="d-flex flex-wrap gap-2 gap-md-4 gap-lg-2 mb-3">
              <div className="d-flex gap-3">
                <div className="btn-icon mx-auto"><IoCall /></div>
                <h4 className='mb-0'><a href="tel:+1 888 551 0501" className='text-white fw-bold'>+1 888 551 0501</a></h4>
              </div>
              <div className="d-flex gap-3">
                <div className="btn-icon mx-auto"><MdEmail /></div>
                <h4 className="fw-bolder mb-0"><a href="mailto:info@cannjahpharm.com"
                  className="text-white"><b>info@cannjahpharm.com</b></a></h4>
              </div>
            </div>
            <div className="d-none social-media d-flex flex-wrap gap-2 gap-sm-4 mt-4">
              <div className="d-flex flex-wrap pe-3">
                <a className="social-icon px-2 facebook">
                  <FaFacebookF className="h4" />
                </a>
                <a className="social-icon px-2 telegram">
                  <FaTelegramPlane className="h4" />
                </a>
                <a className="social-icon px-2 linkedin">
                  <FaLinkedinIn className="h4" />
                </a>
                <a className="social-icon px-2 instagram">
                  <FaInstagram className="h4" />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7} className="px-0">
            <Row className="mx-0 g-md-5">
              <Col sm={6} className="col-6 ps-xl-100">
                <h4 className="text-gray mt-4 footer-head">Services</h4>
                <p className="mt-4 mb-2">
                  <a className="text-gray">Products</a>
                </p>
                <p className="mb-2">
                  <a className="text-gray">Flowers</a>
                </p>
                <p className="mb-0">
                  <a className="text-gray">Pre Roll</a>
                </p>
              </Col>
              <Col sm={6} className="col-6 ps-xl-100">
                <h4 className="text-gray mt-4 footer-head">Company</h4>
                <p className="mt-4 mb-2">
                  <a className="text-gray">Home</a>
                </p>
                <p className="mb-2 fw-light">
                  <a className="text-gray">About</a>
                </p>
                <p className="mb-2">
                  <a className="text-gray">Privacy Policy</a>
                </p>
                <p className="mb-0">
                  <a className="text-gray">Terms & Condition</a>
                </p>
              </Col>
              <Col sm={12} className="ps-0 d-none">
                <InputGroup className="mb-3 ps-xl-100">
                  <Form.Control
                    placeholder="Enter Email Address..."
                    aria-label="Enter Email Address..."
                    aria-describedby="newsSetters"
                  />
                  <button className="btn btn-success rounded-0 px-4">Learn More<i className="fa-solid ms-3 fa-right-long"></i></button>
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col sm={12} className="d-flex flex-wrap mt-4 justify-content-between">
            <div className="text-gray mb-0 align-self-center location-text pe-3">
              <a href="#" className="text-gray">Term of use</a> | <a href="#" className="text-gray">Privacy Policy</a>
            </div>
            <p className="text-gray mb-0 align-self-center location-text pe-3">
              Copyright © 2023 CannjahPharm, All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
