import React, { useEffect } from "react";
import { Cultivar } from "../features/About/Cultivar";
import { Welcome } from "../features/About/Welcome";
import { WhoWeAre } from "../features/About/WhoWeAre";
import { OurMisstion } from "../features/About/OurMisstion";
import { OurStory } from "../features/About/OurStory";
import { ExportTouch } from "../features/About/ExportTouch";
import { ContactSection } from "../components/ContactSection";

export const AboutUs = () => {

  useEffect(() => {
    document.title = "About Us"
  }, []);


  return (
    <>
      <Welcome />
      <WhoWeAre />
      <OurStory />
      <ExportTouch />
      <Cultivar />
      <OurMisstion />
      <ContactSection />
    </>
  );

};
