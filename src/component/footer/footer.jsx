import React from "react";
import {Row, Col, Form, Button} from "react-bootstrap";
import {FaGooglePlay} from "react-icons/fa";
import {AiFillApple} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <Row className='top-footer'>
          <Col xs='12' md='6' lg='3'>
            <div className='footer-contain'>
              <h5 style={{ fontSize: "2rem", fontWeight: "600" }}>
                Pharmamandu
              </h5>
              <ul className='ul-list'>
                <li className='li-list'>© 2021 Pharmamandu</li>
                <li style={{ lineHeight: "0" }}>
                  <div className='footer-buttom'>
                    <span>
                      Powered by
                      <span className='powerby'>LightWeb Group</span>
                    </span>
                  </div>
                </li>
                {/* <li className='li-list'>jj</li> */}
              </ul>
            </div>
          </Col>
          <Col xs='12' md='6' lg='3'>
            <div className='footer-contain'>
              <h5 footer-contain-heading>Company Link</h5>
              <ul className='ul-list'>
                <li className='li-list'>About Us</li>
                <li className='li-list'>Blog</li>
                <li className='li-list'>Contact</li>
              </ul>
            </div>
          </Col>

          <Col md='12' lg='6'>
            <div className='footer-contain'>
              <h5 className='footer-contain-heading'>
                {" "}
                Join Our Newsletter Now
              </h5>
              <p className='custom-text'>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <Form className='inline-form custom-form'>
                <input
                  className='form-control custom-control'
                  type='search'
                  placeholder='Subsribe...'
                  aria-label='Search'></input>
                <Button className='search-btn custom-searech' type='submit'>
                  SUBSCRIBE
                </Button>
              </Form>
              {/* <Row className='footer-info'>
                <Col>
                  <div className='footer-info-contain'>
                    <h5 className='footer-info-heading'>Payment Methods</h5>
                    <div className='footer-info-icon'></div>
                  </div>
                </Col>
                <Col>
                  <div className='footer-info-contain'>
                    <h5 className='footer-info-heading'>Connect</h5>
                    <div className='footer-info-icon'></div>
                  </div>
                </Col>
              </Row> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
