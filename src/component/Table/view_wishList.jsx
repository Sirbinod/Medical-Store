import React from "react";
import { BiCart } from "react-icons/bi";

import { ImCross } from "react-icons/im";

import { Link } from "react-router-dom";
const View_wishList = () => {
  return (
    <>
      <div className='cart-main-area'>
        <h3 className='cart-page-title'>Your cart items</h3>
        <div className='row'>
          <div className='col-12'>
            <div className='table-content table-responsive cart-table-content'>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>

                    <th>Add To Cart</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='product-thumbnail'>
                      <Link>
                        <img
                          className='img-fluid'
                          src='https://www.okdam.com/public/upload/product/extra/NIVEA-ALOE-YDRATION-BODY-LOTION-400-ML-5facd079cd119.jpg'
                          alt=''
                        />
                      </Link>
                    </td>
                    <td className='product-name'>
                      <Link>Nivea Aloe Hydration Body Lotion 400 Ml</Link>
                    </td>
                    <td className='product-price-cart'>
                      <>
                        <span className='amount old'>12</span>
                        <span className='amount'>12</span>
                      </>
                    </td>

                    <td className='product-subtotal'>
                      <BiCart className='add-icon' />
                    </td>

                    <td className='product-remove'>
                      <ImCross />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='cart-shiping-update-wrapper'>
              <div className='cart-shiping-update'>Continue Shopping</div>
              <div className='cart-shiping-update'>Clear Shopping Cart</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View_wishList;
