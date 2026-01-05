import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecom from "../../Assets/Projects/ecom.png";
import indexwise from "../../Assets/Projects/indexwise.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Rangeen Zaiqay"
              description="Rangeen Zaiqay is a vibrant restaurant management system featuring a centralized admin dashboard for real-time order tracking, revenue monitoring, and menu management."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indexwise}
              isBlog={false}
              title="Weather App"
              description="A vibrant and minimalist weather dashboard designed for intuitive real-time climate tracking and air quality monitoring."
              ghLink="https://github.com/ali786-c/WeatherApp.git"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
