import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Wellness Coach Theme"
              description="A custom WordPress theme built specifically for health and wellness coaches. Features a dynamic booking system, bespoke Elementor widgets, and a fully responsive layout optimized for mobile coaching clients."
              ghLink="https://github.com/usman0365/wellness-coach-clone"
              demoLink="https://wellness-coach-tau.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Dental Clinic Pro"
              description="A professional WordPress website tailored for dental practices. Built with a custom post type for services, integrated appointment scheduling, patient testimonial sliders, and advanced SEO optimization."
              ghLink="https://github.com/usman0365/dental-care-clone"
              demoLink="https://dental-care-sandy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sneaker Store E-commerce"
              description="A high-conversion WooCommerce store for a streetwear sneaker brand. Features a custom dark-mode aesthetic, dynamic product filtering, AJAX add-to-cart, and a streamlined multi-step checkout process."
              ghLink="https://github.com/usman0365/shoe-store-clone"
              demoLink="https://shoe-store-liart.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Multi-Vendor Marketplace"
              description="A full-featured multi-vendor e-commerce web application built on WordPress and WooCommerce Dokan. Includes customized vendor dashboards, split-payment gateways, automated tax calculations, and dynamic shipping rate calculations."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Bespoke Shopify Theme"
              description="A bespoke Shopify OS 2.0 theme built from scratch using Liquid, HTML5, Vanilla CSS, and JavaScript. Designed with conversion rate optimization (CRO) guidelines, featuring a customizable slider, slide-out drawer cart, and mega-menus."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="WP Cloud Deployer"
              description="A CLI and automation script tool for automated migration of WordPress/WooCommerce staging environments to live cloud servers (AWS/DigitalOcean). Handles database search-and-replace, SSL certificate generation, and performance verification."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
