import React from "react";
import Navbar from "../Navs/Navbar";
import { Row, Col, Container, Card, Button, Dropdown } from "react-bootstrap";
import "../Main/carswali.css";
import car from "../../assets/car.jpg";
import Footer from "./footer/Footer";

const Carswali = () => {
  return (
    <>
      {/* <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Sort by
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <Navbar />
      <Container>
        <Row className="mt-3">
          <Col md={1} style={{ marginLeft: "10px" }}>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-3"><button className="Apply_btn">Apply</button></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={1}>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={1}>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={1}>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={1}>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        {/* <Row className="mt-3">
          <Col md={12} sm={12} xs={12}>

            <button className="btn btn=light border filters_btn">
              <b>Sort by</b>
            </button>
            <button className="btn btn=light border filters_btn">
              <b>Price</b>
            </button>
            <button className="btn btn=light border filters_btn">
              <b>Pick/drop</b>
            </button>
            <button className="btn btn=light border filters_btn">
              <b>All time</b>
            </button>
            <button className="btn btn=light border filters_btn">
              <b>Filter</b>
            </button>
            <button className="btn btn-dark" style={{ float: "right" }}>
              <b>Show Map</b> <i className="fas fa-map-marked-alt"></i>
            </button>
          </Col>
        </Row> */}
        {/* cards */}
        <Row className="mt-3">
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
          <Col md={3} sm={3} xs={3}>
            <div className="card">
              <img
                src={car}
                alt="Avatar"
                style={{ width: "100%", borderRadius: "7px 7px 0px 0px" }}
              />
              <div className="p-2">
                <b className="toyota">Toyota corolla GLI 2021 Modal</b>
                <br />
                <span className="toyota">
                  5.0<i className="fas fa-star" style={{ color: "gold" }}></i>
                  &nbsp;&nbsp;&nbsp;(20 Booking)
                </span>
                <hr />
                <span className="lst_wala">4674 kilometer away</span>
                <span className="rs">Rs.7000/day</span>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center">
          <button type="button" class="btn btn-light btn-lg mt-5">
            Show more
          </button>
        </div>

        <Row className="mt-5">
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default Carswali;
