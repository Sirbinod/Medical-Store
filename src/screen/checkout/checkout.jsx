import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className='checkout-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='billing-info-wrap'>
              <h3>Billing Details</h3>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='billing-info'>
                    <label>First Name</label>
                    <input type='text' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='billing-info mb-20'>
                    <label>Last Name</label>
                    <input type='text' />
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='billing-info mb-20'>
                    <label>Company Name</label>
                    <input type='text' />
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='billing-info'>
                    <label>Country</label>
                    <select>
                      <option>Select a country</option>
                      <option>Azerbaijan</option>
                      <option>Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                    </select>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='billing-info mb-20'>
                    <label>Street Address</label>
                    <input
                      className='billing-address'
                      placeholder='House number and street name'
                      type='text'
                    />
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='billing-info mb-20'>
                    <label>Town / City</label>
                    <input type='text' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='billing-info mb-20'>
                    <label>State / County</label>
                    <input type='text' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='billing-info mb-20'>
                    <label>Postcode / ZIP</label>
                    <input type='text' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='billing-info mb-20'>
                    <label>Phone</label>
                    <input type='text' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='billing-info mb-20'>
                    <label>Email Address</label>
                    <input type='text' />
                  </div>
                </div>
              </div>
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
              <div className='place-order'>
                <button>Place Order</button>
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

export default Checkout;
