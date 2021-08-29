import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { cartDate } from "../../store/action/cartAction";
const Add_Cart = () => {
  const { cart, loading } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartDate(user && user.token));
  }, dispatch);

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
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.data &&
                    cart.data.products.map((cartData) => (
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
                        <td className='product-quantity'>
                          <div className='cart-plus-minus'>
                            <button className='dec qtybutton'>-</button>
                            <input
                              className='cart-plus-minus-box'
                              type='text'
                              value={cartData.quantity}
                              readOnly
                            />
                            <button className='inc qtybutton'>+</button>
                          </div>
                        </td>
                        <td className='product-subtotal'> 38</td>

                        <td className='product-remove'>
                          <ImCross />
                        </td>
                      </tr>
                    ))}
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

export default Add_Cart;
