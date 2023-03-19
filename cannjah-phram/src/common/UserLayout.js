import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useNavigate } from "react-router-dom";

export const UserLayout = () => {

  const navigate = useNavigate();

  const AgeVerification = localStorage.getItem("Age");

  useEffect(() => {

    if (AgeVerification == null) {
      navigate("/verification");
    } else if (AgeVerification <= 18) {
      navigate("/failed-verification");
    }
  })
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
