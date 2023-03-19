import React, { useEffect } from "react";
import { ContactHero } from "../features/Contact/ContactHero";
import { ContactForm } from "../components/ContactForm";

export const ContactUs = () => {

  useEffect(() => {
    document.title = "Contact Us"
  }, []);

  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
};
