import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import Productimg from '../../common/images/products/BH-detail.png';
import { GiChestnutLeaf } from "react-icons/gi";

export const BananaHammock = () => {
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
                        <h2 className="pe-xl-4">Banana Hammock R1</h2>
                        <h4 className='mb-4'>(“Grower’s Choice”)</h4>
                        <p className="pe-xl-5">
                            Banana Hammock, aKa “Banana Hammock R1,” is crossed with the infamous Grape God X Mandarin Sunset. This bud has a sweet and sugary honey taste with accents of tropical fruits and sour lime.
                        </p>
                        <p className="pe-xl-5">Banana Hammock is often recommended for experienced patients suffering from conditions such as insomnia, chronic stress or anxiety and depression or mood swings.</p>
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
                                <td><b>Hybrid - Indica</b></td>
                            </tr>
                            <tr>
                                <td><div className='me-3'>Cannabinoids</div></td>
                                <td><span className='me-3'>:</span></td>
                                <td><b>23.881% THC, 0.049% CBD</b></td>
                            </tr>
                            <tr>
                                <td>Aroma</td>
                                <td><span className='me-3'>:</span></td>
                                <td><b>Citrus, Earthy, Fruity, Sour</b></td>
                            </tr>
                            <tr>
                                <td>Terpenes</td>
                                <td><span className='me-3'>:</span></td>
                                <td><b>Myrcene, Limonene, Caryophylene</b></td>
                            </tr>
                            <tr>
                                <td>Origin</td>
                                <td><span className='me-3'>:</span></td>
                                <td><b>Colorado, US</b></td>
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
                                <p>“Good Morning Milap ! It's Sarah , well the BH was awesome 👌 Fluffy , fragrant, fantastic taste and very smooth. Very relaxing body stone actually.  Really focused on neck and back pain relief after about 5 minutes without major head stone. Incredible. Very impressive! Even Cliff was impressed with the BH, he felt very relaxed and it eased his body tension without making him feel out of it he said 😊”  Barrie, ON</p>
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
                                            <td>Beta-Myrcene</td>
                                            <td className='text-center'>5.240</td>
                                        </tr>
                                        <tr>
                                            <td>d-Limonene</td>
                                            <td className='text-center'>2.600</td>
                                        </tr>
                                        <tr>
                                            <td>beta-Caryophyllene</td>
                                            <td className='text-center'>2.440</td>
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
