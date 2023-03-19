import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../common/images/logo.png";

export const Header = () => {

  return (
    <header className="">
      <Navbar expand="lg">
        <Container className="header-container">
          <Navbar.Brand>
            <Link to={"/"}>
              <img src={logo} width="230" className="header-logo" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="toggle-button"
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav className="my-2 my-lg-0">
              <NavLink className="nav-link" to={"about/"}>
                About
              </NavLink>
              <NavLink className="nav-link" to={"products/"}>
                Products
              </NavLink>
              <NavLink className="nav-link" to={"medical/"}>
                Medical
              </NavLink>
              <NavLink className="nav-link" to={"contact/"}>
                Connect
              </NavLink>
              {/* <NavLink className="nav-link" to={"product-detail/"}>
                detail
              </NavLink> */}
              {/* <NavLink className="nav-link" to={"dashboard/"}>
              Dashboard
            </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
