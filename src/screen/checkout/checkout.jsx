import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Select from "react-select";
import { useState } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../auth/validate";
import { authPost, normalPost } from "../../utility/requiest";
import { addressapi, orderapi } from "../../utility/api";
import { useDispatch, useSelector } from "react-redux";
import { cartDate, cartEpty } from "../../store/action/cartAction";
const renderField = ({
  input,
  label,
  type,
  name,
  meta: { touched, error, warning },
}) => (
  <div>
    <div>
      <input {...input} name={name} placeholder={label} type={type} />
    </div>
    {touched &&
      ((error && <span className='error'>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

const Checkout = (props) => {
  const [modelState, setModelState] = useState({ loading: false, error: null });
  const { user, isLoggedIn } = useSelector((state) => state.profile);
  const { cart, loading } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartDate(user && user.token));
  }, dispatch);
  const { handleSubmit, reset, pristine, submitting } = props;
  const onSubmit = async (e) => {
    setModelState({ ...modelState, loading: true });
    try {
      const res = await authPost(addressapi, e, user.token);
      if (res.data.success) {
        setModelState({ ...modelState, loading: false });
        reset();
        const addData = { shippingAddress: res.data.data._id };
        const response = await authPost(orderapi, addData, user.token);
        dispatch(cartEpty());

        props.history.push("/order-success");
      }
    } catch (err) {
      setModelState({
        ...modelState,
        loading: false,
        error: err.response
          ? err.response.data.message
          : "Unable to login at this moment. Please try again",
      });
    }
  };

  return (
    <div className='checkout-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='billing-info-wrap'>
              <h3>Billing Details</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row className='mt-3'>
                  <Col lg='6'>
                    <div className='mb-3'>
                      <label className='control-label'>Country</label>
                      <Field
                        name='country'
                        className='form-control'
                        component='select'>
                        <option></option>
                        <option value='Nepal'>Nepal</option>
                      </Field>
                    </div>
                  </Col>
                  <Col lg='6'>
                    <div className='mb-3'>
                      <label className='control-label'>State</label>
                      <Field
                        name='state'
                        className='form-control'
                        component='select'>
                        <option></option>
                        <option value='Bagmati'>Bagmati</option>
                        <option value='Gandaki'>Gandaki</option>
                        <option value='Lumbini'>Lumbini</option>
                      </Field>
                    </div>
                  </Col>
                  <Col lg='6'>
                    <div className='mb-3'>
                      <label className='control-label'>City</label>
                      <Field
                        name='city'
                        className='form-control'
                        component='select'>
                        <option></option>
                        <option value='Kathmandu'>Kathmandu</option>
                        <option value='Lalitpur'>Lalitpur</option>
                        <option value='Bhaktapir'>Bhaktapur</option>
                      </Field>
                    </div>
                  </Col>
                  <Col lg='6'>
                    <div className='mb-3'>
                      <label className='control-label'>Phone</label>
                      <Field
                        name='phone'
                        className='form-control'
                        component='input'
                        type='text'
                        label='0123456789'
                      />
                    </div>
                  </Col>
                  <Col lg='12'>
                    <div className='mb-3'>
                      <label className='control-label'>Address Line 1</label>
                      <Field
                        name='addressLine1'
                        className='form-control'
                        component='input'
                        type='text'
                        defaultValue=''
                      />
                    </div>
                  </Col>
                  <Col lg='12'>
                    <div className='mb-3'>
                      <label className='control-label'>Address Line 2</label>
                      <Field
                        name='addressLine2'
                        className='form-control'
                        component='input'
                        type='text'
                        defaultValue=''
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='place-order my-4'>
                      <button type='submit' disabled={pristine || submitting}>
                        Checkout Proccess
                      </button>
                    </div>
                  </Col>
                </Row>
              </form>
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
                      {cart.data && cart.data.totalQuantity !== 0 ? (
                        cart.data.products.map((cartProduct) => (
                          <li>
                            <span>{cartProduct.product.name}</span>
                            <span className='order-middle-left'>
                              {cartProduct.quantity} X{" "}
                              {cartProduct.product.cost}
                            </span>
                            <span className='order-price'>
                              {cartProduct.quantity * cartProduct.product.cost}
                            </span>
                          </li>
                        ))
                      ) : (
                        <>jndsj</>
                      )}
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

                      <li> {cart.data && cart.data.totalPrice}</li>
                    </ul>
                  </div>
                </div>
                <div className='payment-method'>
                  <span style={{ color: "#ffb50d" }}>Note: </span>
                  <span>Cash on Delivery</span>
                </div>
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

export default reduxForm({
  validate: validate,
  form: "ADDRESS_FORM",
})(Checkout);
