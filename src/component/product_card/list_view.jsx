import React from "react";

import {AiFillStar} from "react-icons/ai";
import {MdFavoriteBorder} from "react-icons/md";
import {BiCart} from "react-icons/bi";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

const List_view = (data) => {
  return (
    <Row className="product-list mb-3">
      <Col xl={3} className="product-image">
        <a href="#" className="image_wrap">
          <img className="image" src={data.data.img} />
        </a>
        <span className="product-discount-label">-33%</span>
        <ul className="product-links">
          <li>
            <a href="#" data-tip="Add to Wishlist">
              <MdFavoriteBorder className="icon" />
            </a>
          </li>

          <li>
            <a href="#" data-tip="Add to Cart">
              <BiCart className="icon" />
            </a>
          </li>
        </ul>
      </Col>
      <Col className="product-content">
        <h3 className="title">{data.data.name}</h3>
        <ul className="rating">
          <AiFillStar style={{color: "#f57224"}} />
          <AiFillStar style={{color: "#f57224"}} />
          <AiFillStar style={{color: "#f57224"}} />
          <AiFillStar style={{color: "#f57224"}} />
          <AiFillStar style={{color: "#f57224"}} />
        </ul>
        <div className="price">
          <span>$90.00</span> $66.00
        </div>
        <p>This product is very good for you. </p>
        {/* <a className="add-to-cart" href="#">
          add to cart
        </a> */}
      </Col>
    </Row>
  );
};

export default List_view;
