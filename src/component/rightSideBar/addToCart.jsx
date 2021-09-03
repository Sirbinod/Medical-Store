import React, { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartDate, deleteCart } from "../../store/action/cartAction";
import { productFetch } from "../../store/action/productAction";
import { useToasts } from "react-toast-notifications";

const CartRightSideBar = (props) => {
  const { addToast } = useToasts();
  const { cart, loading } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartDate(user && user.token));
    dispatch(productFetch());
  }, dispatch);

  return (
    <>
      <div className='cart-right-bar'>
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className='h-100'>
            <div className='rightbar-title px-3 py-4'>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementsByTagName("body")[0]
                    .classList.remove("cart-right-bar-enabled");
                }}
                className='right-bar-toggle float-end'>
                <AiOutlineClose className='noti-icon' />
              </Link>
              <h5 className='m-0 wish-list'>Cart</h5>
            </div>

            <hr className='my-0' />
            {cart.data && cart.data.totalQuantity !== 0 ? (
              cart.data.products.map((cartProduct) => (
                <Row className='right-bar-item'>
                  <Col md={4}>
                    <div className='right-bar-item-image'>
                      <img
                        src={`http://pharmamanduapi.lightwebgroup.com$`}
                        alt='cart img'
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <h6>{cartProduct.product.name}</h6>

                    <span>
                      {cartProduct.quantity} X Rs {cartProduct.product.cost}
                    </span>
                  </Col>
                  <Col md={2}>
                    <RiDeleteBin6Line
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deleteCart(user.token, cartProduct, addToast));
                      }}
                    />
                  </Col>
                </Row>
              ))
            ) : (
              <div className='mx-5 my-5'>No Item in Cart</div>
            )}
            <hr className='mb-3' />
            <div className='d-flex justify-content-between px-3'>
              <h5>Total:</h5>
              <h5>{cart.data && cart.data.totalPrice}</h5>
            </div>
            <hr className='mb-5' />

            <div className='d-flex justify-content-around'>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementsByTagName("body")[0]
                    .classList.remove("cart-right-bar-enabled");
                }}>
                <Link to='/cart_list' className='wishlist_link'>
                  View Cart
                </Link>
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementsByTagName("body")[0]
                    .classList.remove("cart-right-bar-enabled");
                }}>
                <Link to='/checkout' className='wishlist_link'>
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </SimpleBar>
      </div>
      <div className='rightbar-overlay' />
    </>
  );
};

export default CartRightSideBar;
