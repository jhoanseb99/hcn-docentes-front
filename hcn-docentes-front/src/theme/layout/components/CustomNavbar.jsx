import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { toAbsoluteUrl } from "../../helpers";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className="header fixed-top">
      <Navbar.Brand href="/home">
        <img className="logo" src={toAbsoluteUrl("/media/logos/logo_v1.png")}/>{' '}
        Historias Clínicas Nutricionales
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/courses">Mis cursos</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <NavDropdown title="Benito Fernandez" id="collasible-nav-dropdown">
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Cerrar sesión</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar;