import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from 'formik'
import { contactFormSchema } from "../services/Schemas/FormsValidation";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
    FaFacebookF,
    FaTelegramPlane,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ContactData } from "../services/Api/ContactApi";


const initialValues = {
    email: '',
    related: '',
    subject: '',
    message: '',
}
export const ContactForm = () => {

    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: contactFormSchema,
        onSubmit: (values, action) => {
            dispatch(ContactData(values));
            // console.log(values);
            action.resetForm();
        }
    });


    return (
        <Container fluid className="main-bg contact-form-section">
            <Container className="p-0">
                <Row className="mx-0 g-4">

                    <Col lg={8} className="px-lg-5 text-start">
                        <div className="heading-container get-touch">
                            <h2>
                                Get In<span className="text-white">Touch</span>
                            </h2>
                            <p>Let's Connect!</p>
                        </div>
                        <Row className="mt-5">
                            <Form>
                                <Row className="mx-0 g-3">
                                    <Col lg={6}>
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                autoComplete="off"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="eg. infoeasy@gmail.com"
                                            />
                                            {errors.email && touched.email ?
                                                <p className="form-error">{errors.email}</p> : null}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                            <Form.Label>Related</Form.Label>
                                            <Form.Select aria-label="Default select example" autoComplete="off"
                                                name="related"
                                                value={values.related}
                                                onChange={handleChange}
                                                onBlur={handleBlur}>
                                                <option value='' disabled>
                                                    Select...
                                                </option>
                                                <option value="Medical">Medical</option>
                                                <option value="Retail">Retail</option>
                                                <option value="Wholesale">Wholesale</option>
                                                <option value="Educational">Educational</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                            </Form.Select>
                                            {errors.related && touched.related ?
                                                <p className="form-error">{errors.related}</p> : null}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={values.subject}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                autoComplete="off"
                                                name="subject"
                                                placeholder="eg. Product Information"
                                            />
                                            {errors.subject && touched.subject ?
                                                <p className="form-error">{errors.subject}</p> : null}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                value={values.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                autoComplete="off"
                                                name="message"
                                                placeholder="Type a Message..."
                                                style={{ height: "100px" }}
                                            />
                                            {errors.message && touched.message ?
                                                <p className="form-error">{errors.message}</p> : null}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Button variant="dark" className="mt-3" type="button" onClick={handleSubmit}>
                                            Let's Connect <FaLongArrowAltRight />
                                        </Button>
                                    </Col>
                                </Row>

                            </Form>
                        </Row>
                    </Col>
                    <Col lg={4} className="p-lg-0">
                        {/* <div className="heading-container get-touch mb-5">
                            <h2>
                                Get In<span className="text-white">Touch</span>
                            </h2>
                            <p>Let's Connect</p>
                        </div> */}
                        <div className="contact-box p-5 text-center ">
                            <Row className="g-0 justify-content-center">


                                <Col xl={12}>
                                    <div className="btn-icon  mx-auto">
                                        <IoLocationSharp className="h2" />
                                    </div>
                                    <h4 className="fw-bolder mt-3 mb-0">Barrie, Ontario,
                                        Canada</h4>
                                    <p>Local Marijuana <br />Pharm–C</p>


                                </Col>
                                <Col xl={12} className="verical-divider pt-4">
                                    <div className="btn-icon mx-auto">
                                        <MdEmail className="h2" />
                                    </div>
                                    <h4 className="fw-bolder mt-3 mb-0"><a href="mailto:info@cannjahpharm.com"
                                        className="text-black"><b>info@cannjahpharm.com</b></a>
                                    </h4>
                                    <p className="mb-0">Support Email</p>
                                    <div className="d-flex flex-wrap justify-content-center mt-0 pe-0">
                                        {/* <a href="" target="_blank" className="social-icon px-2 facebook">
                                            <FaFacebookF className="h4 text-black" />
                                        </a>
                                        <a href="" target="_blank" className="social-icon px-2 telegram">
                                            <FaTelegramPlane className="h4 text-black" />
                                        </a>
                                        <a href="" target="_blank" className="social-icon px-2 linkedin">
                                            <FaLinkedinIn className="h4 text-black" />
                                        </a> */}
                                        <a href="https://www.instagram.com/cannjahpharm/" target="_blank" className="social-icon px-2 instagram">
                                            <FaInstagram className="h4 text-black" />
                                        </a>
                                    </div>
                                    <div className="separate-line mt-3 mb-4 d-none"></div>
                                </Col>

                                <Col xl={12} className="verical-divider pt-4">
                                    <div className="btn-icon mx-auto">
                                        <IoCall className="h2" />
                                    </div>
                                    <h5 className="fw-bolder mt-3 mb-0"><a href="tel:+1 888 551 0501"
                                        className="text-black"><b>Toll: 1 888 551 0501</b></a></h5>
                                    <h5 className="fw-bolder mb-0"><a href="tel:+1 705 999 9542"
                                        className="text-black"><b>Local: 1 705 999 9542</b></a></h5>
                                    <h5 className="fw-bolder mb-0"><a href="tel:+1 855 326 2303"
                                        className="text-black"><b>Fax: 1 855 326 2303</b></a></h5>
                                    <p>Contact Number</p>
                                    <div className="separate-line mt-3 mb-4 d-none"></div>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container >
        </Container >
    );
};
