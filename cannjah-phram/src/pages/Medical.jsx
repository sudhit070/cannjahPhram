import React, { useEffect } from 'react'
import { AppoinmentForm } from '../features/Medical/AppoinmentForm'
import { WhyMedical } from '../features/Medical/WhyMedical'
import { StepsToTreatment } from '../features/Medical/StepsToTreatment'
import { CannJahCareMeans } from '../features/Medical/CannJahCareMeans'
import { ContactSection } from "../components/ContactSection";
import { Loader } from "../components/Loader";

export const Medical = () => {

  useEffect(() => {
    document.title = "Patient"
  }, []);

  return (
    <>
      <AppoinmentForm />
      <WhyMedical />
      <CannJahCareMeans />
      <StepsToTreatment />
      <ContactSection />
    </>
  )
}
