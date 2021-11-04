import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../footer/footer.css";

export default function Footer() {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col md={3}>
            <span className="headings">ABOUT</span>
            <br />
            <span className="optns">How airban work</span>
            <br />
            <span className="optns">Newsroom</span>
            <br />
            <span className="optns">Airban 2021</span>
            <br />
            <span className="optns">Investors</span>
            <br />
            <span className="optns">Airban plus</span>
            <br />
            <span className="optns">Airban luxe</span>
            <br />
            <span className="optns">HotelTonight</span>
            <br />
            <span className="optns">Airban for work</span>
            <br />
            <span className="optns">Made possible by hosts</span>
            <br />
            <span className="optns">Careers</span>
            <br />
            <span className="optns">Founder Letters</span>
            <br />
          </Col>
          <Col md={3}>
            <span className="headings">COMMUNITY</span>
            <br />
            <span className="optns">Diversity and Belonging</span>
            <br />

            <span className="optns">Against Discrimination</span>
            <br />
            <span className="optns">Accessibility</span>
            <br />
            <span className="optns">Airban Associates</span>
            <br />
            <span className="optns">Guest Referrals</span>
            <br />
            <span className="optns">Gift cards</span>
            <br />
            <span className="optns">Airban.org</span>
          </Col>
          <Col md={3}>
            <span className="headings">PARTNER</span>
            <br />
            <span className="optns">Host your home</span>
            <br />

            <span className="optns">Host an online Exprience</span>
            <br />
            <span className="optns">Responsible hosting</span>
            <br />
            <span className="optns">Resource center</span>
            <br />
            <span className="optns">Community center</span>
            <br />
          </Col>
          <Col md={3}>
            <span className="headings">Support</span>
            <br />
            <span className="optns">Our COVID-19 Responcse</span>
            <br />

            <span className="optns">Help center</span>
            <br />
            <span className="optns">Cancellation options</span>
            <br />
            <span className="optns">Neighborhood support</span>
            <br />
            <span className="optns">Trust & Saety</span>

          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <span className="last_text">@ 2021 RentWalla,</span>
            &nbsp;&nbsp;&nbsp;
            <span className="last_text">Privacy</span>&nbsp;&nbsp;&nbsp;
            <span className="last_text">Terms</span>&nbsp;&nbsp;&nbsp;
            <span className="last_text">Sitemap</span>
          </Col>
          <Col md={3}>
            <span className="last_text">English US</span>
            <span className="last_text">$ USD</span>
          </Col>
          <Col md={3}>
            <Row>
              <Col md={2}>
                <i className="fab fa-facebook-f social_icons"></i>
              </Col>
              <Col md={2}>
                <i className="fab fa-twitter social_icons"></i>
              </Col>
              <Col md={2}>
                <i className="fab fa-linkedin-in social_icons"></i>
              </Col>
              <Col md={2}>
                <i className="fab fa-instagram social_icons"></i>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
