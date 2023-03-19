import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { GiChestnutLeaf } from "react-icons/gi";

export const ReviewsWIthPlant = () => {
    return (
        <div className="section-content pb-100 main-bg">
            <Container>
                <Row className="mx-0 justify-content-center">
                    <Col sm={8} className="text-start">
                        <div className="heading-container plant-science our-story-head text-md-start mb-50">
                            <h2>Plant Science</h2>
                            <p>Herb Benefits</p>
                        </div>
                        <div className='plant-science-table pe-lg-5'>
                            <p>"The GG strain was out of the world actually! Tons of red hairs , Buds break up beautifully and so fragrant. Burns so well and clean. Super smooth.  Relaxed all over stone and then ......this amazing lifting lightness!!! Almost a euphoric, giggly feeling that in over 30 years of smoking cannabis I have never experienced.  Just fantastic.  Headache diminished, body aches dulled.  Totally relaxed but still felt sharp. I am so impressed with how I felt. The lift and lightness I felt in the body was something I will continue to crave.”  Barrie, ON</p>

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
    )
}
