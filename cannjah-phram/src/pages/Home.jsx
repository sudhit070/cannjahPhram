import React, { useEffect } from "react";
import { PreGround } from "../features/Home/PreGround";
import { Hero } from "../features/Home/Hero";
import { AboutPharm } from "../features/Home/AboutPharm";
import { MedicalStep } from "../features/Home/MedicalStep";
import { AcceptingPatients } from "../features/Home/AcceptingPatients";
import { ContactSection } from "../components/ContactSection";
import { Flowers } from "../features/Home/Flowers";

export const Home = () => {

  useEffect(() => {
    document.title = "Home"
  }, []);

  return (
    <>
      <Hero />
      <AboutPharm />
      <MedicalStep />
      <AcceptingPatients />
      <Flowers />
      <PreGround />
      <ContactSection />
    </>
  );

};
