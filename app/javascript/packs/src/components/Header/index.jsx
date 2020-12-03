import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { StoreContext }  from "../../store/index.jsx";

const Header = () => {
  const store = React.useContext(StoreContext);
  return (
    <Navbar bg="light" expand="lg">
      <NavLink to="/landing-page">
        <Navbar.Brand href="#home">SharpSkills</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            {store.currentUser ? (
              <>
                <NavLink className="dropdown-item" to="/register">
                  My account
                </NavLink>
                <NavLink className="dropdown-item" to="/login">
                  Log out
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="dropdown-item" to="/login">
                  Log in
                </NavLink>
                <NavLink className="dropdown-item" to="/register">
                  Register
                </NavLink>
              </>
            )}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
