import React from "react";
import {Col, Row, Button} from "react-bootstrap";
import {AiFillStar} from "react-icons/ai";

const Product_details = () => {
  return (
    <>
      <div className="container">
        <section class="my-5">
          <div class="row">
            <div class="col-md-6 mb-4 mb-md-0">
              <div id="mdb-lightbox-ui"></div>

              <div class="mdb-lightbox">
                <div class="row product-gallery mx-1">
                  <div class="col-12 mb-0">
                    <figure class=" rounded z-depth-1 main-img">
                      <img
                        src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        class="img-fluid z-depth-1"
                      />
                    </figure>
                    <div class="row">
                      <div class="col-3">
                        <div class="view overlay rounded z-depth-1 gallery-item">
                          <img
                            src="https://static.toiimg.com/thumb/msid-81596056,width-1200,height-900,resizemode-4/.jpg"
                            class="img-fluid"
                          />
                          <div class="mask rgba-white-slight"></div>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="view overlay rounded z-depth-1 gallery-item">
                          <img
                            src="https://static.toiimg.com/thumb/msid-81596056,width-1200,height-900,resizemode-4/.jpg"
                            class="img-fluid"
                          />
                          <div class="mask rgba-white-slight"></div>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="view overlay rounded z-depth-1 gallery-item">
                          <img
                            src="https://static.toiimg.com/thumb/msid-81596056,width-1200,height-900,resizemode-4/.jpg"
                            class="img-fluid"
                          />
                          <div class="mask rgba-white-slight"></div>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="view overlay rounded z-depth-1 gallery-item">
                          <img
                            src="https://static.toiimg.com/thumb/msid-81596056,width-1200,height-900,resizemode-4/.jpg"
                            class="img-fluid"
                          />
                          <div class="mask rgba-white-slight"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h5>Local Medicien</h5>
              <p class="mb-2 text-muted text-uppercase small">Health Care</p>
              <div className="product-rating d-flex align-items-center">
                <div className="rating">
                  <AiFillStar style={{color: "#f57224"}} />
                  <AiFillStar style={{color: "#f57224"}} />
                  <AiFillStar style={{color: "#f57224"}} />
                  <AiFillStar style={{color: "#f57224"}} />
                  <AiFillStar style={{color: "#f57224"}} />
                </div>
                <span className="reviews mx-2">30 reviews</span>
              </div>
              <div className="product-details-old-price">
                <span className="cut-price">$300</span>
                <span className="discount">33% off</span>
              </div>
              <p>
                <span class="mr-1">
                  <strong>$12.99</strong>
                </span>
              </p>
              <p class="pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, sapiente illo. Sit error voluptas repellat rerum
                quidem, soluta enim perferendis voluptates laboriosam.
                Distinctio, officia quis dolore quos sapiente tempore alias.
              </p>

              <hr />
              <div class="table-responsive mb-2">
                <table class="table table-sm table-borderless">
                  <tbody>
                    <tr>
                      <td class="pl-0 pb-0 w-25">Quantity</td>
                      <td class="pb-0">Select size</td>
                    </tr>
                    <tr>
                      <td class="pl-0">
                        <div class="def-number-input number-input safari_only mb-0 d-flex">
                          <button className="w-25">-</button>
                          <input
                            class="quantity  w-25"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                          />
                          <button
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="plus w-25"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <div class="mt-1">
                          <div class="form-check form-check-inline pl-0">
                            <input
                              type="radio"
                              class="form-check-input"
                              id="small"
                              name="materialExampleRadios"
                              checked
                            />
                            <label
                              class="form-check-label small text-uppercase card-link-secondary"
                              for="small"
                            >
                              Small
                            </label>
                          </div>
                          <div class="form-check form-check-inline pl-0">
                            <input
                              type="radio"
                              class="form-check-input"
                              id="medium"
                              name="materialExampleRadios"
                            />
                            <label
                              class="form-check-label small text-uppercase card-link-secondary"
                              for="medium"
                            >
                              Medium
                            </label>
                          </div>
                          <div class="form-check form-check-inline pl-0">
                            <input
                              type="radio"
                              class="form-check-input"
                              id="large"
                              name="materialExampleRadios"
                            />
                            <label
                              class="form-check-label small text-uppercase card-link-secondary"
                              for="large"
                            >
                              Large
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button type="button" class="btn btn-primary btn-md mr-1 mb-2">
                Buy now
              </button>
              <button type="button" class="btn btn-light btn-md mr-1 mb-2">
                <i class="fas fa-shopping-cart pr-2"></i>Add to cart
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Product_details;
