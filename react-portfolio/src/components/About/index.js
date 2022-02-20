import React from "react";
import coverImage from "../../assets/images/cover-image.jpg";
import { Col } from "react-bootstrap";


function About() {
  return (
    <section className="title">
      <div className="row justify-content-center" id="about-container">
        <Col lg={6} md={12}>
          {/* <h1 id="about">Claude Pardue</h1> */}
          <center>
            <img
              src={coverImage}
              className="my-image img-fluid rounded-circle "
              alt="black dodge challenger in the hill country"
            />
          </center>
          <p class="name">Claude Pardue</p>
          <p class="job">Full Stack Web Developer</p>
          <h2 class="education">A little about me</h2>
          <p>
            Hi! I am Claude!
            <br></br>
            <br></br>I am Full Stack Web Developer based in Austin
            <br></br>
            <br></br>
          </p>
        </Col>
      </div>
    </section>
  );
}

export default About;
