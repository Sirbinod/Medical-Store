import React, { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { Field, reduxForm } from "redux-form";
import { signupStart } from "../../store/action/profileAction";

import DropZoneField from "../../component/imageUpload/imageUpload";

const Precription = (props, show) => {
  const { modelPrecription } = useSelector((state) => state.profile);
  const { handleSubmit, reset, pristine, submitting, imageFile, handleOnDrop } =
    props;
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        show={modelPrecription}
        size='lg'
        className='model-size'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Row>
          <Col lg={5}>
            <div className='login-left'>
              <h3>Pharmamandu</h3>
              <h5> Prescription Upload</h5>

              <div className='my-5'>
                <span style={{ color: "#ffb50d" }}>NOTE:</span>
                <p className='px-3'>
                  Please clear photo of Prescription to uplaod here.{" "}
                </p>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className='login-form'>
              <h3 className='login'>Prescription Upload Here</h3>
              <form className='forms-sample'>
                {/* <Field name='asdas'   /> */}
                <Form.Group className='group-form'>
                  <label htmlFor='email'>Image</label>
                  {/* <Field
                    name='image'
                    component={DropZoneField}
                    type='file'
                    imageFile={imageFile}
                    handleOnDrop={handleOnDrop}
                  /> */}
                </Form.Group>

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
  // validate: validate,
  form: "SIGN_FORM",
})(Precription);
