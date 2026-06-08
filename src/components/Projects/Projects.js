import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wellness from "../../Assets/Projects/wellness.png";
import dental from "../../Assets/Projects/dental.png";
import shoe from "../../Assets/Projects/shoe.png";

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
              imgPath={wellness}
              isBlog={false}
              title="Wellness Coach Theme"
              description="A custom WordPress theme built specifically for health and wellness coaches. Features a dynamic booking system, bespoke Elementor widgets, and a fully responsive layout optimized for mobile coaching clients."
              ghLink="https://github.com/usman0365/wellness-coach-clone"
              demoLink="https://wellness-coach-tau.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dental}
              isBlog={false}
              title="Dental Clinic Pro"
              description="A professional WordPress website tailored for dental practices. Built with a custom post type for services, integrated appointment scheduling, patient testimonial sliders, and advanced SEO optimization."
              ghLink="https://github.com/usman0365/dental-care-clone"
              demoLink="https://dental-care-sandy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoe}
              isBlog={false}
              title="Sneaker Store E-commerce"
              description="A high-conversion WooCommerce store for a streetwear sneaker brand. Features a custom dark-mode aesthetic, dynamic product filtering, AJAX add-to-cart, and a streamlined multi-step checkout process."
              ghLink="https://github.com/usman0365/shoe-store-clone"
              demoLink="https://shoe-store-liart.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
