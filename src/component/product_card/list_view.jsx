import React from "react";

import {AiFillStar} from "react-icons/ai";
import {MdFavoriteBorder} from "react-icons/md";
import {BiCart} from "react-icons/bi";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import { addCart } from "../../store/action/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

const List_view = (data) => {
  const { addToast } = useToasts();
  const { user, isLoggedIn } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  return (
    <Row className='product-list mb-3'>
      <Col xl={3} className='product-image'>
        <a href={`/product_details/${data.data._id}`} className='image_wrap'>
          <img
            className='image'
            src={`http://pharmamanduapi.lightwebgroup.com/${data.data.image.path}`}
          />
        </a>
      </Col>
      <Col className='product-content'>
        <h3 className='title'>{data.data.name}</h3>
        {data.data.discount === 0 ? (
          <></>
        ) : (
          <ul className='rating'>
            {data.data.discount}
            {/* <AiFillStar style={{ color: "#f57224" }} />
          <AiFillStar style={{ color: "#f57224" }} />
          <AiFillStar style={{ color: "#f57224" }} />
          <AiFillStar style={{ color: "#f57224" }} />
          <AiFillStar style={{ color: "#f57224" }} /> */}
          </ul>
        )}
        <div className='price'>{data.data.cost}</div>
        <p>{data.data.chemicalName}</p>
        <div
          className='add-button'
          onClick={() =>
            dispatch(addCart(data.data._id, user.token, addToast))
          }>
          Add To Card
        </div>
      </Col>
    </Row>
  );
};

export default List_view;
