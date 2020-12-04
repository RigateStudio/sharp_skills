import React from "react";
import { Navbar, Nav, NavDropdown, Form} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { StoreContext }  from "../../store/index.jsx";
import { Observer } from "mobx-react";
import Cookies from "js-cookie";
import "./style.scss";

const Header = () => {
  const store = React.useContext(StoreContext);

  const clickLougout = () => {
    Cookies.set("token","")
    Cookies.set("currentUser", "")
    store.currentUser = null
  }

  console.log("Header")
  console.log(store.currentUser)
  return (
    <Navbar id="nav" expand="lg">
      <NavLink className="Damion" to="/landing-page">
      Sharpskills
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end"
      id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <NavLink className="nav-link justify-content-end" to="/">
            Home
          </NavLink>
          <Observer>{ () => (
          <NavDropdown title="Account" id="basic-nav-dropdown">
            {store.currentUser?.id > 0? (
              <>
                <NavLink className="dropdown-item" to="/register">
                  My account
                </NavLink>
                <NavLink className="dropdown-item" onClick={clickLougout} to="/">
                  Log out
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="dropdown-item" to="/login">
                  Je me connecte
                </NavLink>
                <NavLink className="dropdown-item" to="/register">
                  Je me connecte
                </NavLink>
              </>
            )}
          </NavDropdown>)}
          </Observer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
