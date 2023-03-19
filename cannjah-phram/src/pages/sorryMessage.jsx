import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../common/images/logo.png";

export const SorryMessage = () => {
  return (
    <>
      <Container fluid className="container-fluid vh-100 verifiction-bg">
        <div className="get-birth-container">
          <img src={logo} alt="logo" className="logo" width="280" />
          <h2 className="text-uppercase pt-5 pb-2 fw-bolder h2">
            Very Sorry, But this Content Not For you
          </h2>
          <p className="">
            You must be at least 18 years old to access our website.
          </p>
        </div>
      </Container>
    </>
  );
};
