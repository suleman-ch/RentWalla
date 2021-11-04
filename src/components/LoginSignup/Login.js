import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Main/footer/Footer";
import Navbar from "../Navs/Navbar";
import facebook from "../../assets/facebook.png";
import search from "../../assets/search.png";
import apple from "../../assets/apple.png";
import mail from "../../assets/mail.png";

import "../LoginSignup/login.css";
const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Row className="mb-5">
          <Col md={3} sm={2} xs={2}></Col>
          <Col md={6} sm={5} xs={5}>
            <Col className="form-control mt-5" md={12}>
              <div className="text-center">
                <b style={{ color: "grey  " }}>Log in or sign up</b>
                <hr />
              </div>
              <div className="p-3">
                <b>Wellcome to RentWalla</b>
                <input className="form-control mt-3" type="tel" pattern="+92" />
                <button
                  className="btn btn-danger btn-block mt-3"
                  style={{ width: "100%" }}
                >
                  Continue
                </button>
                <Row className="mt-3">
                  <Col md={1}></Col>
                  <Col md={5}>
                    <hr />
                  </Col>
                  or
                  <Col md={5}>
                    <hr />
                  </Col>
                </Row>
                <button className=" form-control social_btns">
                  <img className="social_imgs" src={facebook} />
                  Continue with Facebook
                </button>
                <button className=" form-control social_btns">
                  <img className="social_imgs" src={search} />
                  Continue with Google
                </button>
                <button className=" form-control social_btns">
                  <img className="social_imgs" src={apple} />
                  Continue with Apple
                </button>
                <button className=" form-control social_btns">
                  <img className="social_imgs" src={mail} />
                  Continue with Mail
                </button>
              </div>
            </Col>
          </Col>
        </Row>
        <hr />
      </Container>
      <Footer />
    </>
  );
};

export default Login;
