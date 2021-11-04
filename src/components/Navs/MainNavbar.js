import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../Navs/mainnavbar.css";
// import Slider from "react-slick";
// import ss from "../../assets/ss.jpg";

export default function MainNavbar() {
  //   var settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };
  return (
    <>
    <Container fluid>
    <Row className="main_blue_div">
        <Row className="mt-4">
          <Col md={1} sm={1} xs={1}></Col>
          <Col md={6} sm={4} xs={4}>
            <a className="navbar-brand text-white">RantWalla.com</a>
          </Col>
          <Col md={2} sm={2} xs={2}>
            <button className="btn btn-sm border-white text-white rounded">
              Become a Partenr
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
          <div className="text-center text-white ">
            <h1>Search Auto Rental Car and Cities</h1>
          </div>
        </Row>

        {/* Searchbar */}
        <Col md={2}></Col>
        <Col className="text-center border main_search_bar" md={8}>
          <Row>
          <Col md={12}>
              
          </Col>
          <Col md={1}></Col>
            <Col md={2}>
              <input className="input_srch" />
            </Col>
            <Col md={2}>
              <input className="input_srch" />
            </Col>
            <Col md={2}>
              <input className="input_srch" />
            </Col>
            <Col md={2}>
              <input className="input_srch border-0" />
              
              {/* <i className="fas fa-search"></i> */}

            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
     

      {/* ************************************8 */}
      {/* <Slider {...settings}>
        <div>
          <div>
            <img src={ss}/>
          </div>
        </div>
        <div>
          <div>
          <img src={ss}/>
          </div>
        </div>
      </Slider> */}
    </>
  );
}
