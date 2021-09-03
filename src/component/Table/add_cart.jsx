import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import { cartDate, deleteCart } from "../../store/action/cartAction";
const Add_Cart = () => {
  const { addToast } = useToasts();

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
                  {cart.data && cart.data.totalQuantity !== 0 ? (
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
                          {cartData.product.name}
                        </td>
                        <td className='product-price-cart'>
                          <>
                            <span className='amount'>
                              {cartData.product.cost}
                            </span>
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
                        <td className='product-subtotal'>
                          {cartData.quantity * cartData.product.cost}
                        </td>

                        <td className='product-remove'>
                          <ImCross
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              dispatch(
                                deleteCart(user.token, cartData, addToast),
                              );
                            }}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <h1 className='mx-5 my-3 px-5' style={{ width: "100%" }}>
                      No Item in Cart
                    </h1>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='cart-shiping-update-wrapper'>
              <Link to='/'>
                <div className='cart-shiping-update'>Continue Shopping</div>
              </Link>
              <Link to='/checkout'>
                <div className='cart-shiping-update'>Checkout</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Cart;
