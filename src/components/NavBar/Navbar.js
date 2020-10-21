import React from "react";
import { Nav, Icon } from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <Nav>
      <Icon>
        <BsCircle /> <FaBars />
      </Icon>
    </Nav>
  );
};

export default Navbar;
