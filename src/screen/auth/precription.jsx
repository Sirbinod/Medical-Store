import React, { useState } from "react";
import { Modal, Form, Button, Row, Col, Card} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import { Field, reduxForm } from "redux-form";
import { addPreception, signupStart } from "../../store/action/profileAction";



const Precription = (props, show) => {
  const { modelPrecription } = useSelector((state) => state.profile);
  const { handleSubmit, reset, pristine, submitting, imageFile, handleOnDrop } =
    props;
  const dispatch = useDispatch();
  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      }),
    );
    setselectedFiles(files);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

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
            <div className='close_div'>
             
              <ImCross className='close_icon' onClick={()=>dispatch(addPreception()) }/>
             
            </div>

            <div className='login-form'>
              <div className='mb-5'>
                <Form>
                  <Dropzone
                    onDrop={(acceptedFiles) => {
                      handleAcceptedFiles(acceptedFiles);
                    }}>
                    {({ getRootProps, getInputProps }) => (
                      <div className='dropzone'>
                        <div
                          className='dz-message needsclick'
                          {...getRootProps()}>
                          <input {...getInputProps()} />
                          <div className='mb-3'>
                            <FaFileUpload className='icon_upload' />
                          </div>
                          <h4>Drop files here or click to upload.</h4>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                  <div className='dropzone-previews mt-3' id='file-previews'>
                    {selectedFiles.map((f, i) => {
                      return (
                        <Card
                          className='mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete'
                          key={i + "-file"}>
                          <div className='p-2'>
                            <Row className='align-items-center'>
                              <Col className='col-auto'>
                                <img
                                  data-dz-thumbnail=''
                                  height='200'
                                  className='avatar-sm rounded bg-light'
                                  alt={f.name}
                                  src={f.preview}
                                />
                              </Col>
                              <Col>
                                <Link
                                  to='#'
                                  className='text-muted font-weight-bold'>
                                  {f.name}
                                </Link>
                                <p className='mb-0'>
                                  <strong>{f.formattedSize}</strong>
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </Form>
                <Button className='my-2'>Submit</Button>
              </div>
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
