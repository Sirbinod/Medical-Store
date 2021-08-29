import React, { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartDate } from "../../store/action/cartAction";
import { productFetch } from "../../store/action/productAction";

const CartRightSideBar = (props) => {
  const [custCart, setCustCart] = useState();
  const { cart, loading } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.profile);
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartDate(user && user.token));
    dispatch(productFetch());

    cart.data && cart.data.products.map((cartData) => setCustCart(cartData));
  }, dispatch);
  console.log(custCart, "cart to here add here no no");

  const cartfilter =
    product &&
    product.filter((fProduct) => fProduct._id === "612353fe6f04126ac313a5ff");
  console.log(cartfilter, "hello here cartfilter");

  return (
    <>
      <div className='cart-right-bar'>
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className='h-100'>
            <div className='rightbar-title px-3 py-4'>
              <Link
                to='#'
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
            {cart.data ? (
              cart.data.products.map((cartProduct) => (
                <Row className='right-bar-item'>
                  <Col md={4}>
                    <div className='right-bar-item-image'>
                      {cartfilter.map((cartimg) => (
                        <img
                          src={`http://pharmamanduapi.lightwebgroup.com${cartimg.image.path}`}
                        />
                      ))}
                    </div>
                  </Col>
                  <Col md={6}>
                    {cartfilter.map((cartname) => (
                      <h6>{cartname.chemicalName}</h6>
                    ))}
                    <span> $ 200</span>
                  </Col>
                  <Col md={2}>
                    <RiDeleteBin6Line />
                  </Col>
                </Row>
              ))
            ) : (
              <>Cart empty</>
            )}
            <hr className='mb-5 ' />
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
