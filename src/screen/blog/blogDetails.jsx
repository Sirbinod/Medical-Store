import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <div className='blog-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='blog-details-wrapper'>
              <div className='blog-details-top'>
                <div className='blog-details-img'>
                  <img
                    alt=''
                    src='https://www.afd.fr/sites/afd/files/styles/visuel_principal/public/2019-10-09-27-46/flickr-marco-verch.jpg?itok=XH4x7-Y4'
                  />
                </div>
                <div className='blog-details-content'>
                  <div className='blog-meta-2'>
                    <span>22 April, 2018</span>
                  </div>
                  <h3>
                    14 Emerging Fashion Influencers Who Are Going to Own 2018
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprhendit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qei officia
                    deser mollit anim id est laborum. Sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam.{" "}
                  </p>
                  <blockquote>
                    Lorem ipsum dolor sit amet, consecte adipisicing elit, sed
                    do eiusmod tempor incididunt labo dolor magna aliqua. Ut
                    enim ad minim veniam quis nostrud.
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehendrit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              <div className='dec-img-wrapper'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='dec-img mb-50'>
                      <img
                        alt=''
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/blog/blog-details.jpg"
                        }
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='dec-img mb-50'>
                      <img
                        alt=''
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/blog/blog-details-2.jpg"
                        }
                      />
                    </div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehendrit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
