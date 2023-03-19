import React from 'react'
import { Container } from 'react-bootstrap'
import { IoMusicalNotesSharp } from "react-icons/io5";
import { FaUser, FaBook, FaPhoneAlt, FaAmbulance, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const StepsToTreatment = () => {
    return (
        <div className="section-content pb-0 overflow-hidden">
            <Container>
                <div className="heading-container text-start step-treatment">
                    <h2 className='step-head-1'>STEPS</h2>
                    <h2 className='step-head-2'>TO</h2>
                    <h2 className='step-head-3'>TREATMENT...</h2>
                    <p>... HighWay To Health <IoMusicalNotesSharp /></p>
                </div>
                <div className='treatment-box mt-5'>
                    <div className='step step-1'>
                        <div className='step-info step-info-1'>
                            <div className='step-icon user'><FaUser /></div>
                            <h4>01 : Need a Prescription?</h4>
                            <p>Talk to your doctor for a medical <br />cannabis prescription or <br /><span className='text-main'>CannJah Care</span> can assist.</p>

                        </div>
                    </div>
                    <div className='step step-2'>
                        <div className='step-info step-info-2'>
                            <div className='step-icon book'><FaBook /></div>
                            <h4>02 : Have a Prescription?</h4>
                            <p>Fax over your prescription & fill <br />our online <span className='text-main'>registration form</span>.</p>
                            <a href='#' className='text-main d-none'>Register Now <FaLongArrowAltRight /></a>
                        </div>
                    </div>
                    <div className='step step-3'>
                        <div className='step-info step-info-3'>
                            <div className='step-icon phone'><FaPhoneAlt /></div>
                            <h4>03 : Verify Prescription</h4>
                            <p>Once registered, a CannXpert will <br />contact you following your medical needs.</p>

                        </div>
                    </div>
                    <div className='step step-4'>
                        <div className='step-info step-info-4'>
                            <div className='step-icon ambulance'><FaAmbulance /></div>
                            <h4>04 : Fill Prescription</h4>
                            <p><span className='text-main'>Order</span> your medication & we’ll have<br /> it prepared for pick up or delivery.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
