import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="main-footer p-3">
      <div className="container">
        <div className="row">
        {/* Column 1 */}
          <div className="damion-white">
          <h4>Sharpskills</h4>
          </div>

          <ul className="list-unstyled">
          <li>Me connecter</li>
          <li>Créer un compte</li>
          <li>Mentions légales</li>
          </ul>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
        <p className="text-xs-center">
        &copy;{new Date().getFullYear()} Copyright Boris Maxime Stephane & Lucas
        </p>

          </div>
      </div>
    </div>
    )
  }

export default Footer;
