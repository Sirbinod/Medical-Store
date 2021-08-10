import React from "react";
import {useDispatch, useSelector} from "react-redux";
import SimpleBar from "simplebar-react";
import {showRightSidebarAction} from "../../store/layout/action";
import {AiOutlineClose} from "react-icons/ai";
import {RiDeleteBin6Line} from "react-icons/ri";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Row, Col, Button} from "react-bootstrap";

const RightSideBar = (props) => {
  return (
    <>
      <div className="right-bar">
        <SimpleBar style={{height: "900px"}}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementsByTagName("body")[0]
                    .classList.remove("right-bar-enabled");
                }}
                className="right-bar-toggle float-end"
              >
                <AiOutlineClose className="noti-icon" />
              </Link>
              <h5 className="m-0 wish-list">Wish List</h5>
            </div>

            <hr className="my-0" />
            <Row className="right-bar-item">
              <Col md={4}>
                <div className="right-bar-item-image">
                  <img src=""></img>
                </div>
              </Col>
              <Col md={6}>
                <h6>Item Name</h6>
                <span> $ 200</span>
              </Col>
              <Col md={2}>
                <RiDeleteBin6Line />
              </Col>
            </Row>
            <hr className="mb-5 " />
            <Link to="/wish_list" className="wishlist_link">
              View Wishlist
            </Link>
          </div>
        </SimpleBar>
      </div>
      <div className="rightbar-overlay" />
    </>
  );
};

export default RightSideBar;
