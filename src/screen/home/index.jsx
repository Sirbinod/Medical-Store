import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import Lergebanner from "../../component/banner/lergebanner";
import Justforyou from "../../component/justforyou/justforyou";
import money from "../../assets/image/credit-card 1.svg";
import truck from "../../assets/image/shipping-truck 1.svg";
import person from "../../assets/image/customer-support 1.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  discountProduct,
  latestProducts,
  popularProduct,
  productFetch,
} from "../../store/action/productAction";
import { useState } from "react";
import { normalGet } from "../../utility/requiest";
import { bannerapi } from "../../utility/api";

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

const Home = () => {
  const [modelBanner, setModelBanner] = useState({
    loading: false,
    error: null,
    bannerItem: null,
  });

  const dispatch = useDispatch();
  const { loading, popular, mostDiscount, latestProduct } = useSelector(
    (state) => state.product,
  );

  const fetchBanner = async () => {
    setModelBanner({ ...modelBanner, loading: true });

    try {
      const res = await normalGet(bannerapi);
      setModelBanner({
        ...modelBanner,
        loading: false,
        bannerItem: res.data.data,
      });
    } catch (err) {
      if (err.response) {
        setModelBanner({
          ...modelBanner,
          loading: false,
          error: err.response.data.message,
        });
      } else {
        setModelBanner({
          ...modelBanner,
          loading: false,
          error: "Unable to fetch data from server",
        });
      }
    }
  };
  useEffect(() => {
    fetchBanner();
    dispatch(popularProduct());
    dispatch(discountProduct());
    dispatch(latestProducts());
  }, [dispatch]);
  const banner =
    modelBanner.bannerItem &&
    modelBanner.bannerItem.filter((data) => data.type === "Banner");

  const largeAds =
    modelBanner.bannerItem &&
    modelBanner.bannerItem.filter((data) => data.type === "Large Aid");
  const smallAds =
    modelBanner.bannerItem &&
    modelBanner.bannerItem.filter((data) => data.type === "Small Aid");
  return (
    <>
      <div>
        <section className='banner-section'>
          <Lergebanner data={banner} />
        </section>
        <section>
          <div className='container'>
            <div className='flash-deal'>
              <div className='flash-title'>
                <h3>Most Discount</h3>
              </div>
              {/* <Button
                style={{
                  color: "white",
                  backgroundColor: "#269b9b",
                  borderColor: "#269b9b",
                }}>
                More
              </Button> */}
            </div>
            {loading ? (
              <>loading ... </>
            ) : mostDiscount ? (
              <Carousel responsive={responsive}>
                {mostDiscount.map((mostDisData) => (
                  <Justforyou data={mostDisData} />
                ))}
              </Carousel>
            ) : (
              <> </>
            )}
          </div>
        </section>

        <section>
          <div className='container'>
            <Row className='banar'>
              {largeAds &&
                largeAds.map((lAds) => (
                  <Col xs={12} lg={6}>
                    <Card className='text-white '>
                      <Card.Img
                        className='addss-image'
                        src={`https://api.pharmamandu.com/${lAds.image.path}`}
                        alt='Card image'
                      />
                      <Card.ImgOverlay>
                        <Card.Title>{lAds.name}</Card.Title>
                        <Card.Text>{lAds.buttonText}</Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='most-popular'>
              <h3 className='most-popular-title'>Most Popular</h3>
              {/* <Button
                style={{
                  color: "white",
                  backgroundColor: "#269b9b",
                  borderColor: "#269b9b",
                }}>
                More
              </Button> */}
            </div>

            {loading ? (
              <>loading ... </>
            ) : popular ? (
              <Carousel responsive={responsive}>
                {popular.map((popularData) => (
                  <Justforyou data={popularData} />
                ))}
              </Carousel>
            ) : (
              <> </>
            )}
          </div>
        </section>
        <section>
          <div className='container'>
            <Row className='banar'>
              {smallAds &&
                smallAds.map((sAds) => (
                  <Col xs={12} lg={4}>
                    <Card className='text-white '>
                      <Card.Img
                        className='addss-image'
                        src={`https://api.pharmamandu.com/${sAds.image.path}`}
                        alt='Card image'
                      />
                      <Card.ImgOverlay>
                        <Card.Title>{sAds.name}</Card.Title>
                        <Card.Text>{sAds.buttonText}</Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='just-for-you'>
              <h3 className='grid-title'>Just For You</h3>
              {/* <Button
                style={{
                  color: "white",
                  backgroundColor: "#269b9b",
                  borderColor: "#269b9b",
                }}>
                More
              </Button> */}
            </div>
            {loading ? (
              <> Loading.... </>
            ) : latestProduct.data ? (
              <Carousel responsive={responsive}>
                {latestProduct.data.map((latestData) => (
                  <Justforyou data={latestData} />
                ))}
              </Carousel>
            ) : (
              <></>
            )}
          </div>
        </section>
        <section className='info-section'>
          <div className='container'>
            <Row>
              <Col>
                <div className='info-card'>
                  <div className='info-logo'>
                    <img
                      className='info-image'
                      src={truck}
                      alt='delivery truck'
                    />
                  </div>
                  <div className='info-body'>
                    <span className='info-body-h'>Free Delivery</span>
                    <span className='info-body-p'>
                      For all orders over Rs 10000
                    </span>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='info-card'>
                  <div className='info-logo'>
                    <img
                      className='info-image'
                      src={person}
                      alt='hepl person'
                    />
                  </div>
                  <div className='info-body'>
                    <span className='info-body-h'>24/7 HELP CENTER</span>
                    <span className='info-body-p'>Dedicated 24/7 support</span>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='info-card'>
                  <div className='info-logo'>
                    <img
                      className='info-image'
                      src={money}
                      alt='save payment card'
                    />
                  </div>
                  <div className='info-body'>
                    <span className='info-body-h'>PAYMENT</span>
                    <span className='info-body-p'>Cash on Delivery</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
