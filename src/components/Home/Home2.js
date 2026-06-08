import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Web Developer and CMS Specialist who loves building secure, 
              high-performance websites and digital storefronts. Over time, I’ve 
              developed a deep passion for e-commerce design, site optimization, 
              and server hardening.
              <br />
              <br />
              I’m highly proficient in
              <i>
                <b className="purple">
                  {" "}
                  WordPress, Shopify, PHP, Liquid, and JavaScript{" "}
                </b>
              </i>
              — and I work across front-end themes, custom API integrations, and back-end databases.
              <br />
              <br />
              My key areas of interest include building custom
              <i>
                <b className="purple">
                  {" "}
                  E-commerce Platforms, WooCommerce Storefronts,{" "}
                </b>
              </i>
              and implementing advanced security measures to protect customer data.
              <br />
              <br />
              Whenever possible, I apply my knowledge of
              <b className="purple"> Core Web Vitals, SEO Optimization, </b> and speed optimization using tools like
              <i>
                <b className="purple">PageSpeed Insights</b>, custom caching layers, and database tuning to ensure peak performance and high search engine rankings.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
