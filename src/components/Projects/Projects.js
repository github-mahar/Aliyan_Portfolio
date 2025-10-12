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
              title="E-Commerce website"
              description="A sleek and responsive eCommerce website for showcasing and selling cutting-edge tech gadgets with modern UI and smooth user experience."
              demoLink="https://6863f824cba1fa68a6b94488--comfy-fox-78e511.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indexwise}
              isBlog={false}
              title="IndexWise Research"
              description="A professional research and writing service website offering expert thesis review, proofreading, and academic formatting with clarity, precision, and confidentiality."
              ghLink="https://github.com/github-mahar/IndexWise-Research.git"
              demoLink="https://github-mahar.github.io/IndexWise-Research/"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
