import React from "react";
import { IoIosCall } from "react-icons/io";
import { BsLink45Deg } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Contact = () => {
  return (
    <div className='contact-area'>
      <div className='container'>
        {/* <div className="contact-map mb-10">
              <LocationMap latitude="47.444" longitude="-122.176" />
            </div> */}
        <div className='custom-row'>
          <div className='col-lg-4 col-md-5'>
            <div className='contact-info-wrap'>
              <div className='single-contact-info'>
                <div className='contact-icon'>
                  <IoIosCall className='contact-icon-del' />
                </div>
                <div className='contact-info-dec'>
                  <p>+012 345 678 102</p>
                  <p>+012 345 678 102</p>
                </div>
              </div>
              <div className='single-contact-info'>
                <div className='contact-icon'>
                  <BsLink45Deg className='contact-icon-del' />
                </div>
                <div className='contact-info-dec'>
                  <p>
                    <a href='mailto:yourname@email.com'>yourname@email.com</a>
                  </p>
                  <p>
                    <a href='https://yourwebsitename.com'>
                      yourwebsitename.com
                    </a>
                  </p>
                </div>
              </div>
              <div className='single-contact-info'>
                <div className='contact-icon'>
                  <FaMapMarkerAlt className='contact-icon-del' />
                </div>
                <div className='contact-info-dec'>
                  <p>Address goes here, </p>
                  <p>street, Crossroad 123.</p>
                </div>
              </div>
              <div className='contact-social'>
                <h3>Follow Us</h3>
                <ul>
                  <li>
                    <a href='//facebook.com'>
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href='//pinterest.com'>
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href='//thumblr.com'>
                      <AiOutlineTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-8 col-md-7'>
            <div className='contact-form'>
              <div className='contact-title'>
                <h2>Get In Touch</h2>
              </div>
              <form className='contact-form-style'>
                <div className='row form-row'>
                  <div className='form-col col-lg-6'>
                    <input
                      className='textarea'
                      name='name'
                      placeholder='Name*'
                      type='text'
                    />
                  </div>
                  <div className='form-col col-lg-6'>
                    <input
                      className='textarea'
                      name='email'
                      placeholder='Email*'
                      type='email'
                    />
                  </div>
                  <div className='form-col col-lg-12'>
                    <input
                      className='textarea'
                      name='subject'
                      placeholder='Subject*'
                      type='text'
                    />
                  </div>
                  <div className='form-col col-lg-12'>
                    <input
                      className='messtext'
                      name='message'
                      placeholder='Your Message*'
                      defaultValue={""}
                    />
                    <button className='submit' type='submit'>
                      SEND
                    </button>
                  </div>
                </div>
              </form>
              <p className='form-message' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
