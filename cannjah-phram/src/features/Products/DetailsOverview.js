import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const DetailsOverview = () => {
    return (
        <div className="section-content pb-100 main-bg">
            <Container>
                <Row className="mx-0">
                    <Col sm={12} className="text-center">
                        <h2>Sit back, <span className='text-white'>relax</span> and <br />get high.</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
