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
              title="Headless Shopify Store"
              description="A high-performance headless commerce website built with Next.js, Tailwind CSS, and Shopify Storefront API. Fully optimized for Core Web Vitals, featuring a custom shopping cart, dynamic search filters, and checkout integrations."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SpeedBoost WooCommerce"
              description="A comprehensive optimization plugin/suite for large WooCommerce stores. Implements database index tuning, query caching (Redis), critical path CSS generation, WebP conversion, and lazy-loading, boosting Google PageSpeed scores from 30 to 95+."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="WP-Guard Security"
              description="Security configuration suite and audit framework for enterprise WordPress environments. Features custom login URL obfuscation, REST API restriction, SQL injection filters, malware scanner automation, and XML-RPC attack mitigation."
              ghLink="#"
              demoLink="#"
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
