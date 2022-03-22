import React from "react";
import { Col, Container, Row, Navbar} from "react-bootstrap";

function Navigation(props) {
  const tabs = ["about", "projects", "contact", "resume"];
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Claude Pardue</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ul className="nav justify-content-center">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab}>
              <a
                href={"#" + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? "nav-link active" : "nav-link"
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Navbar>
  );
}

export default Navigation;
