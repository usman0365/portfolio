import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNextdotjs,
  SiWordpress,
  SiShopify,
  SiWoocommerce,
  SiPagespeedinsights,
  SiPhp,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJquery,
} from "react-icons/si";
import { FaShieldAlt, FaChartLine, FaSearchPlus } from "react-icons/fa";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* CMS & Stores */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress fontSize={"24px"} />
        <div className="tech-icons-text">WordPress</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopify fontSize={"24px"} />
        <div className="tech-icons-text">Shopify</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWoocommerce fontSize={"24px"} />
        <div className="tech-icons-text">WooCommerce</div>
      </Col>

      {/* Security & Optimization */}
      <Col xs={4} md={2} className="tech-icons">
        <FaShieldAlt fontSize={"24px"} />
        <div className="tech-icons-text">WP Security</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPagespeedinsights fontSize={"24px"} />
        <div className="tech-icons-text">WP Optimization</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartLine fontSize={"24px"} />
        <div className="tech-icons-text">SEO Optimization</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSearchPlus fontSize={"24px"} />
        <div className="tech-icons-text">Technical SEO</div>
      </Col>

      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp fontSize={"24px"} />
        <div className="tech-icons-text">PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 fontSize={"24px"} />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 fontSize={"24px"} />
        <div className="tech-icons-text">CSS3</div>
      </Col>

      {/* Libraries & Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery fontSize={"24px"} />
        <div className="tech-icons-text">jQuery</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="mui" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      {/* Backend, Database & Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize={"24px"} />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="redis" />
        <div className="tech-icons-text">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
    </Row>
  );
}

export default Techstack;
