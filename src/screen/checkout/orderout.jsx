import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authGet, authPost } from "../../utility/requiest";
import { addressapi, orderapi } from "../../utility/api";

const OrderOut = (props) => {
  const [addressState, setaddressState] = useState({
    loading: false,
    error: null,
    address: null,
  });
  const [modelState, setModelState] = useState({ loading: false, error: null });
  const { user, isLoggedIn } = useSelector((state) => state.profile);

  //   const fetchAddress = async () => {
  //     setaddressState({
  //       ...addressState,
  //       loading: true,
  //     });
  //     try {
  //       const res = await authGet(addressapi, user.token);
  //       setaddressState({
  //         ...addressState,
  //         loading: false,
  //         address: res.data.data,
  //       });
  //     } catch (err) {
  //       if (err.res) {
  //         setaddressState({
  //           ...addressState,
  //           loading: false,
  //           error: err.res.data.message,
  //         });
  //       } else {
  //         setaddressState({
  //           ...addressState,
  //           loading: false,
  //           error: "Unable to fetch Data form server ",
  //         });
  //       }
  //     }
  //   };

  //   const onSubmit = async () => {
  //     setModelState({ ...modelState, loading: true });

  //     try {
  //       const res = await authPost(orderapi, res.data._id, user.token);

  //       if (res.data.success) {
  //         setModelState({ ...modelState, loading: false });
  //       }
  //     } catch (err) {
  //       setModelState({
  //         ...modelState,
  //         loading: false,
  //         error: err.response
  //           ? err.response.data.message
  //           : "Unable to login at this moment. Please try again",
  //       });
  //     }
  //   };
  //   useEffect(() => {
  //     fetchAddress();
  //     // onsubmit();
  //   });
  return (
    <div className='checkout-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='billing-info-wrap'>
              <h3>Billing Details</h3>
              <Row className='mt-3'>
                <Col md={12}>
                  <div className='mb-3'>
                    <label className='control-label'>Address Line 2</label>
                    <div className=''></div>
                  </div>
                </Col>
                <Col md={12}>
                  <div className='mb-3'>
                    <label className='control-label'>Address Line 2</label>
                    <div className=''></div>
                  </div>
                </Col>
                <Col>
                  <div className='place-order my-4'>
                    <button>Order Proccess</button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className='col-lg-5'>
            <div className='your-order-area'>
              <h3>Your order</h3>
              <div className='your-order-wrap'>
                <div className='your-order-product-info'>
                  <div className='your-order-top'>
                    <ul>
                      <li>Product</li>
                      <li>Total</li>
                    </ul>
                  </div>
                  <div className='your-order-middle'>
                    <ul>
                      <li>
                        <span className='order-middle-left'>1 X 1</span>
                        <span className='order-price'>22</span>
                      </li>
                    </ul>
                  </div>
                  <div className='your-order-bottom'>
                    <ul>
                      <li className='your-order-shipping'>Shipping</li>
                      <li>Free shipping</li>
                    </ul>
                  </div>
                  <div className='your-order-total'>
                    <ul>
                      <li className='order-total'>Total</li>
                      <li>2</li>
                    </ul>
                  </div>
                </div>
                <div className='payment-method'></div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Shop Now
                                </Link>
                                
                    </div>
                  </div>
                </div>
              </div> */}
      </div>
    </div>
  );
};

export default OrderOut;
