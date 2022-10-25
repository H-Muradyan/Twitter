import React from "react";
import { NavDropdown } from "react-bootstrap";

const Dropdown = () => {
  return (
    <NavDropdown
      id="nav-dropdown-light-example"
      title="Dropdown"
      menuVariant="light"
    >
      <NavDropdown.Item>Logout</NavDropdown.Item>
    </NavDropdown>
  );
};

export default Dropdown;
