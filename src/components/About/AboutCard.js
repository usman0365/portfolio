import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m a passionate <span className="purple">Web & E-commerce Developer</span>.
            <br />
            I specialize in designing high-converting online stores, building custom themes and plugins, and securing/optimizing sites for speed and search engines.
            <br />
            My focus is on providing robust web presence for businesses through custom integrations, database optimizations, and comprehensive security hardening.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Analyzing Core Web Vitals 📈
            </li>
            <li className="about-activity">
              <ImPointRight /> Auditing Web Application Security 🛡️
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching UX and Conversion Optimization (CRO) 🛒
            </li>
            <li className="about-activity">
              <ImPointRight /> Implementing Technical SEO Strategies 🔍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Usman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
