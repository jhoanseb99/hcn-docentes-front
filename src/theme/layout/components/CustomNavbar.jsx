import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { toAbsoluteUrl } from "../../helpers";
import { actions as authActions } from "../../../app/modules/Auth/_redux/authRedux";

function CustomNavbar() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  const handleLogout = () => dispatch(authActions.logout());

  return (
    <Navbar bg="dark" variant="dark" className="header navbar-default navbar-fixed-top fixed-top">
      <Navbar.Brand href="/home">
        <img className="logo" src={toAbsoluteUrl("/media/logos/logo_v1.png")}/>{' '}
        Historias Clínicas Nutricionales
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/courses">Mis cursos</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end navbar-dropdown">
        <NavDropdown title={user.Name} id="collasible-nav-dropdown">
          <NavDropdown.Divider />
          <NavDropdown.Item>
             <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar;