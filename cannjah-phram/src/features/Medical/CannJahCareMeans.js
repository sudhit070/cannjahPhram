import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import portrait from '../../common/images/portrait-smiling.jpg'

export const CannJahCareMeans = () => {
    return (
        <div className="section-content pb-0 overflow-hidden">
            <Container>
                <Row className="mx-0 g-5">
                    <Col lg={5}>
                        <img src={portrait} alt="docter" width="100%" className='rounded-3' />
                    </Col>
                    <Col lg={7} className="align-self-center">

                        <h3 className='cannjah-care mb-5'>CannJah Care: What It means</h3>
                        <p>CannJah Care is our specialized <b>Medical program</b>, developed only for medical clients. Once successfully registered, <b>CannXperts</b> from our team will be in <b>direct communication.</b></p>

                        <p>Our carefully selected CannXperts have <b>completed</b> an intense cannabis <b>diploma</b> program from cannabis <b>Plant Science - Cultivation - Processing - Regulations.</b> Having transitioned from students to becoming certified CannXperts, they can help you select the appropriate medicine for your needs. They have extensive knowledge of all various Cannabinoids, Terpenes, and their combined effects.</p>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
