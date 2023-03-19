import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import Productimg from '../../common/images/products/GG-detail.png';
import { GiChestnutLeaf } from "react-icons/gi";

export const GorillaGlue = () => {
    return (
        <>
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
                        <h2 className="pe-xl-4">Gorilla Glue #4</h2>
                        <h4 className='mb-4'>(“light & lifted”)</h4>
                        <p className="pe-xl-5">
                            Gorilla Glue #4, aKa “Original Glue”, “Gorilla Glue” or “GG#4” crossed with Chem's Sister X Sour Dubb X Chocolate Diesel strains.  This celebrity strain feels lifted euphoria and light creative energy.
                        </p>
                        <p className="pe-xl-5">  Gorilla Glue #4 is often said to be perfect for treating ADD or ADHD, Bipolar Disorder, chronic pain, chronic fatigue, insomnia, appetite loss or nausea and migraines or headaches.</p>
                        <p className="pe-xl-5 mb-0">Available In :</p>
                        <div className='d-flex gap-3 mb-4'>
                            <div className='badge-container'><span class="badge">3.5g</span></div>
                            <div className='badge-container'><span class="badge">7g</span></div>
                            <div className='badge-container'><span class="badge">Pre-Rolls</span></div>
                        </div>
                        <table className='w-100 description-product'>
                            <tr>
                                <td>Type</td>
                                <td><span className='me-3'>:</span></td>
                                <td><b>Hybrid - Sativa</b></td>
                            </tr>
                            <tr>
                                <td><div className='me-3'>Cannabinoids</div></td>
                                <td><span className='me-3'>:</span></td>
                                <td><b>26.494% THC, 0.042% CBD</b></td>
                            </tr>
                            <tr>
                                <td>Aroma</td>
                                <td><span className='me-3'>:</span></td>
                                <td><b>Chemical, Coffee, Diesel, Sour</b></td>
                            </tr>
                            <tr>
                                <td>Terpenes</td>
                                <td><span className='me-3'>:</span></td>
                                <td><b>Caryophylene, Limonene, Humelene, Myrcene, Nerolidol</b></td>
                            </tr>
                            <tr>
                                <td>Origin</td>
                                <td><span className='me-3'>:</span></td>
                                <td><b>Nevada, US</b></td>
                            </tr>
                        </table>
                        {/* <p className="pe-xl-5 mb-1">Type : <b>Hybrid - Sativa</b></p>
                        <p className="pe-xl-5 mb-1">Cannabinoids: <b>22% - 28%</b></p>
                        <p className="pe-xl-5 mb-1">Aroma: <b>Chemical, Coffee, Diesel, Sour</b></p>
                        <p className="pe-xl-5 mb-1">Terpenes: <b>Caryophylene, Limonene, Humelene, Myrcene, Nerolidol</b></p> */}
                        <Link to='/contact' className="btn d-none btn-success rounded-0 px-4 py-2 mt-3">Buy Now <FaLongArrowAltRight /></Link>
                    </Col>
                </Row>
            </Container>
            <div className="section-content pb-100 main-bg">
                <Container>
                    <Row className="mx-0 justify-content-center">
                        <Col sm={8} className="text-start">
                            <div className="heading-container plant-science our-story-head text-md-start mb-50">
                                <h2>Plant Science</h2>
                                <p>Herb Benefits</p>
                            </div>
                            <div className='plant-science-table pe-lg-5'>
                                <p>”The GG strain was out of the world actually! Tons of red hairs , Buds break up beautifully and so fragrant. Burns so well and clean. Super smooth.  Relaxed all over stone and then ......this amazing lifting lightness!!! Almost a euphoric, giggly feeling that in over 30 years of smoking cannabis I have never experienced.  Just fantastic.  Headache diminished, body aches dulled.  Totally relaxed but still felt sharp. I am so impressed with how I felt. The lift and lightness I felt in the body was something I will continue to crave.”  Barrie, ON</p>
                            </div>
                        </Col>
                        <Col sm={4} className="">
                            <div className='card-note'>
                                <div className='note-heading'>
                                    <h4><GiChestnutLeaf className='me-3' />Terpene Profile</h4>
                                </div>
                                <div className='note-body'>
                                    <table className='w-100 des-plant-product'>
                                        <thead>
                                            <tr>
                                                <th>Compounds</th>
                                                <th className='text-center result-label'>Results<small>(mg/g)</small></th>
                                            </tr>
                                        </thead>
                                        <tr>
                                            <td>beta-Caryophyllene</td>
                                            <td className='text-center'>5.590</td>
                                        </tr>
                                        <tr>
                                            <td>d-Limonene</td>
                                            <td className='text-center'>4.350</td>
                                        </tr>
                                        <tr>
                                            <td>alpha-Humulene</td>
                                            <td className='text-center'>2.940</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
