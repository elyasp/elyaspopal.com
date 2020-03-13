import React, { useState } from "react";
import {
  Hamburger,
  HamburgerInput,
  Bars,
  Navigation,
  NavLink,
  Nav
} from "./styles";

export const HamburgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Hamburger isOpen={isOpen}>
        <HamburgerInput onChange={() => setIsOpen(!isOpen)} checked={isOpen} />
        <Bars />
        <Bars />
        <Bars />
        <Navigation isOpen={isOpen}>
          <NavLink section="home">Home</NavLink>
          <NavLink section="contact">Contact</NavLink>
          <NavLink section="about">About me</NavLink>
          <NavLink section="portfolio">Portfolio</NavLink>
        </Navigation>
      </Hamburger>
    </Nav>
  );
};
