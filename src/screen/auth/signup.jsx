import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Field, reduxForm } from "redux-form";
import {
  login,
  loginFail,
  loginOpen,
  loginStart,
  loginSuccess,
  signupStart,
} from "../../store/action/profileAction";
import { registerapi } from "../../utility/api";
import { normalPost } from "../../utility/requiest";
import validate from "./validate";

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

const Signup = (props, show) => {
  const { addToast } = useToasts();
  const [isPWShown, setIsPWShown] = useState(false);
  const showPassword = () => {
    setIsPWShown(!isPWShown);
  };
  const [modelState, setModelState] = useState({
    loading: false,
    error: null,
  });
  const { modelROpen } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const { handleSubmit, reset, pristine, submitting } = props;

  const onSubmit = async (e) => {
    console.log(e, "error ho ho ho ho");
    setModelState({
      ...modelState,
      loading: true,
    });
    try {
      const res = await normalPost(e, registerapi);
      console.log(res, "res log here");
      if (res.data.success) {
        setModelState({
          ...modelState,
          loading: false,
        });
        dispatch(signupStart());
        reset();
        if (addToast) {
          addToast("Added To Cart", {
            appearance: "success",
            autoDismiss: true,
            location: "topleft",
          });
        }
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

  // useEffect(() => {
  //   onSubmit();
  // }, [dispatch]);
  return (
    <div>
      <Modal
        show={modelROpen}
        size='lg'
        className='model-size'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Row>
          <Col lg={5}>
            <div className='login-left'>
              <h5> Welcome to back</h5>
              <h3>Pharmamandu</h3>
              <Link to=''>
                <div className='sign-up'>Login</div>
              </Link>
            </div>
          </Col>
          <Col lg={7}>
            <div className='login-form'>
              <h3 className='login'>Signup</h3>
              <form className='forms-sample' onSubmit={handleSubmit(onSubmit)}>
                {/* <Field name='asdas'   /> */}
                <Form.Group className='group-form'>
                  <label htmlFor='email'>First Name</label>
                  <Field
                    name='firstname'
                    type='text'
                    className='form-control'
                    component={renderField}
                    label='first name'
                  />
                </Form.Group>
                <Form.Group className='group-form'>
                  <label htmlFor='email'>Last Name</label>
                  <Field
                    name='lastname'
                    type='text'
                    className='form-control'
                    component={renderField}
                    label='last name'
                  />
                </Form.Group>
                <Form.Group className='group-form'>
                  <label htmlFor='email'>Email address</label>
                  <Field
                    name='semail'
                    type='email'
                    className='form-control'
                    component={renderField}
                    label='example@12gmail.com'
                  />
                </Form.Group>

                <Form.Group className='group-form'>
                  <label htmlFor='password'>Password</label>

                  <Field
                    name='spassword'
                    type={isPWShown ? "text" : "password"}
                    className='form-control'
                    component={renderField}
                    label='enter password'
                  />
                </Form.Group>
                <Form.Group className='group-form'>
                  <label htmlFor='password'>Phone NUmber</label>

                  <Field
                    name='phoneNo'
                    type='text'
                    className='form-control'
                    component={renderField}
                    label='0123456789'
                  />
                </Form.Group>

                <Form.Group className='group-form'>
                  <div className='form-check'>
                    <label className='form-check-label text-muted'>
                      <input
                        type='checkbox'
                        checked={isPWShown}
                        onChange={showPassword}
                        className='form-check-input'
                      />
                      <i className='input-helper'></i>
                      Show Password
                    </label>
                  </div>
                </Form.Group>
                {modelState.error && (
                  <p className='text-danger'>{modelState.error}</p>
                )}

                <button
                  type='submit'
                  className='btn btn-primary mr-2'
                  disabled={pristine || submitting}>
                  Submit
                </button>
                <button
                  className='btn btn-dark mx-2'
                  onClick={() => dispatch(signupStart())}>
                  Cancel
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default reduxForm({
  validate: validate,
  form: "SIGN_FORM",
})(Signup);
