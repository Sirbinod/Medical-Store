import React, { useState } from "react";

import ProductImage from "./product_image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Justforyou from "../../component/justforyou/justforyou";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productFetch } from "../../store/action/productAction";
import { addCart } from "../../store/action/cartAction";
import { useToasts } from "react-toast-notifications";
import { normalGet } from "../../utility/requiest";
import { productDetailapi } from "../../utility/api";
import { categoryFetch } from "../../store/action/categoryAction";
import { loginOpen } from "../../store/action/profileAction";
import { Spinner } from "react-bootstrap";

const Product_details = (props) => {
  const { addToast } = useToasts();
  const { user, isLoggedIn } = useSelector((state) => state.profile);
  const { category } = useSelector((state) => state.category);
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [modelState, setmodelState] = useState({
    loading: false,
    error: null,
    productDetails: null,
  });

  const fetchDetails = async () => {
    const id = props.match.params.id;
    try {
      setmodelState({
        ...modelState,
        loading: true,
      });

      const response = await normalGet(productDetailapi(id));
      setmodelState({
        ...modelState,
        loading: false,
        productDetails: response.data.data,
      });
    } catch (err) {
      if (err.response) {
        setmodelState({
          ...modelState,
          loading: false,
          error: err.response.data.message,
        });
      } else {
        setmodelState({
          ...modelState,
          loading: false,
          error: "Unable to fetch Data form server ",
        });
      }
    }
  };
  useEffect(() => {
    fetchDetails();
    dispatch(productFetch());
    dispatch(categoryFetch());
  }, [dispatch]);

  let suggested;
  if (!modelState.loading) {
    suggested = product.filter(
      (listData) =>
        listData.category._id === modelState.productDetails.category._id,
    );
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 580 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },
      items: 2,
    },
  };

  if (modelState.productDetails) {
    return (
      <>
        <div className='container'>
          <section class='my-5'>
            <div class='row'>
              <div class='col-md-6 mb-4 mb-md-0 custom-col'>
                <ProductImage image={modelState.productDetails.image} />
              </div>
              <div class='col-md-6' style={{ padding: "0 2.4rem" }}>
                <h4>{modelState.productDetails.name}</h4>
                <p class='mb-2 text-muted text-uppercase small'>
                  {modelState.productDetails.chemicalName}
                </p>
                {modelState.productDetails.discount == 0 ? (
                  <></>
                ) : (
                  <div className='product-details-old-price'>
                    {/* <span className='cut-price'>$300</span> */}
                    <span className='discount'>
                      {modelState.productDetails.discount}
                    </span>
                  </div>
                )}

                <p className='mt-3'>
                  <strong
                    style={{
                      fontWeight: "700",
                      fontSize: "1.4rem",
                      color: "#ffb50d",
                    }}>
                    Rs.
                    {modelState.productDetails.cost}
                  </strong>
                </p>
                <p className='mt-3'>
                  <span style={{ fontWeight: "600" }}>Company Name: </span>
                  {modelState.productDetails.companyName}
                </p>
                <div className='product-description'>
                  <h5 className='product-description-tit'>Ingredient</h5>
                  <p class='pt-1'>{modelState.productDetails.ingredient}</p>
                </div>
                <div className='product-description'>
                  <h5 className='product-description-tit'>Side Effects</h5>
                  <p class='pt-1'>{modelState.productDetails.sideEffects}</p>
                </div>

                <hr />
                {/* <div className='quantity'>
                  <span>Qauntity</span>
                  <div className='quantity-control'>
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                  </div>
                </div> */}
                <div className='btn-group'>
                  <div
                    className='add-button'
                    onClick={() =>
                      isLoggedIn
                        ? dispatch(
                            addCart(
                              modelState.productDetails._id,
                              user.token,
                              addToast,
                            ),
                          )
                        : dispatch(loginOpen())
                    }>
                    Add To Card
                  </div>
                  {/* <div className='wish-button'>Add Wishlist</div> */}
                </div>
              </div>
            </div>
          </section>

          <div className='my-5'>
            <div className='most-popular'>
              <h3 className='most-popular-title'>Latest product</h3>
            </div>
            <Carousel responsive={responsive}>
              {suggested && suggested.map((data) => <Justforyou data={data} />)}
            </Carousel>
          </div>
        </div>
      </>
    );
  } else if (modelState.loading) {
    return (
      <div
        style={{
          width: "14rem",
          height: "100vh",
          margin: "auto",
          padding: "10rem 0",
        }}>
        <Spinner
          style={{ width: "8rem", height: "8rem", margin: "2rem 0" }}
          animation='border'
          variant='info'
        />
      </div>
    );
  } else {
    return <>{modelState.error}</>;
  }
  return <>I dont know</>;
};

export default Product_details;
