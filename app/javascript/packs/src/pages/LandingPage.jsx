import React from "react";
import { Button } from "react-bootstrap";
import "./landingpage.scss";

const LandingPage = () => {
  return (
    <body>
      <section className="Container" >
        <div id="half-left">
          <div id="left-square">
            <div id="left-text">
              <p id="left-title">Sharpskills</p>
              <p id="left-description">Un nouveau monde de savoirs s'ouvre à vous</p>
            </div>
          </div>
        </div>
        <div id="half-right">
          <div id="right-square">
            <div id="right-text">
              <p id="right-title">Formez-vous aux métiers du digital <br></br>en Peer-learning.</p>
              <Button id="right-button" variant="outline-warning">Découvrir</Button>{' '}
            </div>
          </div>
        </div>
      </section>
    </body>
  )
}

export default LandingPage;
