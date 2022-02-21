import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="container ">
      <div className="d-flex flex-column justify-content-center align-items-center">
        {" "}
        <footer className="w-100 mt-auto bg-secondary p-4">
          <h1 data-testid="h1tag" className="contact">
            contact me
          </h1>

          <div className="contact-icons">
            <Row>
              <Col lg={3} md={12}>
                <a href="https://github.com/pardue95">
                  <img
                    src="https://img.icons8.com/fluency/96/000000/github.png"
                    alt="github-logo"
                    class="icon"
                  />
                </a>
                <p class="icon-text">github</p>
              </Col>

              <Col lg={3} md={12}>
                <a href="https://www.linkedin.com/in/claude-pardue-79617921/">
                  <img
                    src="https://img.icons8.com/fluency/96/000000/linkedin.png"
                    alt="linkedin-logo"
                    class="icon"
                  />
                </a>
                <p class="icon-text">linkedin</p>
              </Col>

              <Col lg={3} md={12}>
                <a href="mailto:cwpardue@gmail.com">
                  <img
                    src="https://img.icons8.com/fluency/96/000000/send-mass-email.png"
                    alt="mail-logo"
                  />
                </a>
                <p class="icon-text">email</p>
              </Col>
            </Row>
          </div>

          <div className="container">
            &copy;{new Date().getFullYear()} by Claude WIlliam Pardue
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
