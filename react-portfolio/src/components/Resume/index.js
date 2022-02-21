import React from "react";
import { Row, Col } from "react-bootstrap";
import ResumePDF from "../../assets/resume.pdf"

function Resume() {
  return (
    <>
      <h1 className="resume">RESUME</h1>
      <div class="resume-intro">
        <Row>
          <Col lg={8} md={12}>
            Full Stack Web Developer who possesses technical skills within the
            MERN stack. Always continuously learning and trying to do better.
          </Col>
        </Row>
      </div>

      <div class="resume-container">
        <Row>
          <Col lg={4} md={12}>
            <h2 class="resume">FRONT END PROFICIENCIES</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React.js</li>
              <li>Framework (Bootstrap, , Bulma, Materalize)</li>
              <li>UI/UX Design</li>
              <li>Responsive Web Design</li>
            </ul>
          </Col>

          <Col lg={4} md={12}>
            <h2 class="resume">BACK END PROFICIENCIES</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL (mysql lite3, mysql2)</li>
              <li>NoSQL (MongoDB, Mongoose)</li>
              <li>API's (web, third-party, RESTful, server-side, GraphQL)</li>
              <li>Templating language (Handlebars)</li>
            </ul>
          </Col>
          <Col lg={3} md={12}>
            <a href={ResumePDF} download>
              <img
                src="https://img.icons8.com/doodle/120/000000/pdf-2.png"
                alt="resume"
              />
            </a>
            <p class="icon-text">Click the icon to download my resume!</p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Resume;
