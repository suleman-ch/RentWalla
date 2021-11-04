import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Navs/navbar.css";

export default function Navbar() {
  return (
    <>
      <Row className="nav_blue_div">
        <Row className="mt-3">
          <Col md={1} sm={1} xs={1}></Col>
          <Col md={6} sm={4} xs={4}>
            <a className="navbar-brand text-white">RantWalla.com</a>
          </Col>
          <Col md={2} sm={2} xs={2}>
            <button className="btn btn-sm border-white text-white rounded">
              Partenr Dashboard
            </button>
          </Col>
          <Col md={1} sm={1} xs={1}>
            <i className="far fa-globe text-white"></i>
          </Col>
          <Col md={1} sm={1} xs={1}>
            <span className="text-white">login</span>
          </Col>
          <Col md={1} sm={1} xs={1}>
            <span className="text-white">signup</span>
          </Col>
        </Row>
      </Row>

      {/* ************* */}
      {/* <Container fluid>
        <Row>
          <Col lg={4} md={4} sm={4} xs={4}>
            <a>Popular Creators</a>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <a>Accounts</a>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <a>tags</a>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}
