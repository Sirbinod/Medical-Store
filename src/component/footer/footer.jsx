import React from "react";
import {Row, Col, Form, Button} from "react-bootstrap";
import {FaGooglePlay} from "react-icons/fa";
import {AiFillApple} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Row className="top-footer">
          <Col xs="12" md="6" lg="3">
            <div className="footer-contain">
              <h5 className="footer-contain-heading">Customer Service</h5>
              <ul className="ul-list">
                <li className="li-list">Contact Us</li>
                <li className="li-list">Custemer Care</li>
                <li className="li-list">Shipping & Delivery</li>
                <li className="li-list">Return Policy</li>
                <li className="li-list">FAQs</li>
                <li className="li-list">Track My order</li>
              </ul>
            </div>
          </Col>
          <Col xs="12" md="6" lg="3">
            <div className="footer-contain">
              <h5 footer-contain-heading>Company Link</h5>
              <ul className="ul-list">
                <li className="li-list">About Us</li>
                <li className="li-list">Careers</li>
                <li className="li-list">Teams of use</li>
                <li className="li-list">privacy Policy</li>
                <li className="li-list">Affiliates</li>
                <li className="li-list">Sitemap</li>
              </ul>
            </div>
          </Col>

          <Col md="12" lg="6">
            <div className="footer-contain">
              <h5 className="footer-contain-heading">
                {" "}
                Join Our Newsletter Now
              </h5>
              <p className="custom-text">
                Get E-mail updates about our latest shop and special offers.
              </p>
              <Form className="inline-form custom-form">
                <input
                  className="form-control custom-control"
                  type="search"
                  placeholder="Subsribe..."
                  aria-label="Search"
                ></input>
                <Button className="search-btn custom-searech" type="submit">
                  SUBSCRIBE
                </Button>
              </Form>
              <div className="mobile-app-link">
                <div className="app-link-contain">
                  <AiFillApple className="apple-icon" />
                  <div className="app-link-info">
                    <span className="inof-text">Available on the</span>
                    <span className="info-name">Google Play</span>
                  </div>
                </div>
                <div className="app-link-contain">
                  <FaGooglePlay className="app-icon" />
                  <div className="app-link-info">
                    <span className="inof-text">Available on the</span>
                    <span className="info-name">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="footer-info">
          <Col>
            <div className="footer-info-contain">
              <h5 className="footer-info-heading">Payment Methods</h5>
              <div className="footer-info-icon"></div>
            </div>
          </Col>
          <Col>
            <div className="footer-info-contain">
              <h5 className="footer-info-heading">Connect</h5>
              <div className="footer-info-icon"></div>
            </div>
          </Col>
        </Row>
        <div className="footer-buttom">
          <span>
            2021 Copyright Powered by
            <span className="powerby">LightWeb Group</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
