import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Main/popcities.css";
import img from "../../assets/ss.jpg";
import background from "../../assets/ss.jpg";

export default function Popularcities() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="pop_cities mt-5" md={12} sm={12} xs={12}>
            Popular cities
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={3}>
            <img className="cities_imgs" src={img} />
            <span className="cities_name">Gujranwala</span>
          </Col>
          <Col md={3}>
            <img className="cities_imgs" src={img} />
            <span className="cities_name">lahore</span>
          </Col>
          <Col md={3}>
            <img className="cities_imgs" src={img} />
            <span className="cities_name">Islamabad</span>
          </Col>
          <Col md={3}>
            <img className="cities_imgs" src={img} />
            <span className="cities_name">Sialkot</span>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={3}>
            <img className="cities_imgs" src={img} />
            <span className="cities_name">Gujranwala</span>
          </Col>
          <Col md={3}>
            <img className="cities_imgs" src={img} />
            <span className="cities_name">lahore</span>
          </Col>
          <Col md={3}>
            <img className="cities_imgs" src={img} />
            <span className="cities_name">Islamabad</span>
          </Col>
          <Col md={3}>
            <img className="cities_imgs" src={img} />
            <span className="cities_name">Sialkot</span>
          </Col>
        </Row>
        {/* *********************** */}
        <Row className="mt-5">
          <Col
            md={12}
            sm={12}
            xs={12}
            className="bcm_ptnr_img"
            style={{ backgroundImage: `url(${background})` }}
          >
            <Col className="kkkkkk" md={6} style={{ textAlign: "center", alignContent: "center" }}>
              <span className="text-white in_text">Become partenr</span><br/>
              <span className="text-white in_text_2">Earn money by sharing vehicles<br/> for other people</span><br/>
              <button type="button" class="btn btn-light btn-lg mt-3">Become partenr</button>

            </Col>
          </Col>
        </Row>

        {/* ****************** */}
      </Container>
    </div>
  );
}
