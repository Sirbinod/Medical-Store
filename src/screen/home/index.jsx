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
  const dispatch = useDispatch();
  const { loading, popular, mostDiscount, latestProduct } = useSelector(
    (state) => state.product,
  );

  useEffect(() => {
    dispatch(popularProduct());
    dispatch(discountProduct());
    dispatch(latestProducts());
  }, [dispatch]);

  const products = [
    {
      id: 1,
      name: "Helth well madiceny Bundle",
      price: "12",
      cut_price: "20",
      discount: "30%",
      img: "https://images.all-free-download.com/images/graphicthumb/medical_tablets_01_hd_pictures_168382.jpg",
    },
    {
      id: 2,
      name: "Helth well madicenK20",
      price: "17",
      cut_price: "29",
      discount: "39%",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "Helth well madicen max",
      price: "15",
      cut_price: "23",
      discount: "32%",
      img: "https://www.statnews.com/wp-content/uploads/2020/01/AdobeStock_278701497.jpeg",
    },
    {
      id: 4,
      name: "Helth well madicen",
      price: "20",
      cut_price: "40",
      discount: "50%",
      img: "https://img1.cgtrader.com/items/2006796/6d5b0e429e/medicine-small-glass-bottle-with-pills-3d-model-max-bip.jpg",
    },
    {
      id: 5,
      name: "Helth well madicenn Shirts",
      price: "29",
      cut_price: "70",
      discount: "69%",
      img: "https://5.imimg.com/data5/TU/AV/KU/SELLER-40577526/diabetes-capsules-500x500.jpg",
    },
    {
      id: 6,
      name: "Helth well madicen",
      price: "19",
      cut_price: "29",
      discount: "38%",
      img: "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2021/03/03093821/coronavirus-vaccines-darknet-featured.jpg",
    },

    {
      id: 7,
      name: "Helth well madiceny Bundle",
      price: "12",
      cut_price: "20",
      discount: "30%",
      img: "https://5.imimg.com/data5/AM/OY/QV/SELLER-86154752/bramhi-ghruit-ayurvedic-medicine-500x500.jpg",
    },
    {
      id: 8,
      name: "Helth well madicenK20",
      price: "17",
      cut_price: "29",
      discount: "39%",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSL5PaRP9VXDo3dIJe3ZV4gqle-S4rO98KPA&usqp=CAU",
    },
    {
      id: 9,
      name: "Helth well madicen max",
      price: "13",
      cut_price: "25",
      discount: "39%",
      img: "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/05/19/149906-remdesivir-usepti.jpg?itok=VhR2dVEI",
    },
    {
      id: 10,
      name: "Helth well madicen",
      price: "22",
      cut_price: "40",
      discount: "48%",
      img: "https://www.rosemontpharma.com/assets/images/medicine-poured-into-measuring-spoon.jpg",
    },
  ];

  return (
    <>
      <div>
        <section className='banner-section'>
          <Lergebanner />
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
              <Col xs={12} lg={6}>
                <Card className=' bg-dark text-white '>
                  {/* <Card.Img
                    className='addss-image'
                    src='https://images.ctfassets.net/hrltx12pl8hq/6TOyJZTDnuutGpSMYcFlfZ/4dfab047c1d94bbefb0f9325c54e08a2/01-nature_668593321.jpg?fit=fill&w=480&h=270'
                    alt='Card image'
                  /> */}
                  <Card.ImgOverlay>
                    <Card.Title>Ads Card</Card.Title>
                    <Card.Text>This is Ad place</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12} lg={6}>
                <Card className='bg-dark text-white'>
                  {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                  <Card.ImgOverlay>
                    <Card.Title>Card Ads</Card.Title>
                    <Card.Text>This is Ad place</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
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
              <Col xs={12} lg={4}>
                <Card className=' bg-dark text-white '>
                  {/* <Card.Img
                  className="addss-image"
                  src="https://images.ctfassets.net/hrltx12pl8hq/6TOyJZTDnuutGpSMYcFlfZ/4dfab047c1d94bbefb0f9325c54e08a2/01-nature_668593321.jpg?fit=fill&w=480&h=270"
                  alt="Card image"
                /> */}
                  <Card.ImgOverlay>
                    <Card.Title>Ads Card</Card.Title>
                    <Card.Text>This is Ad place</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12} lg={4}>
                <Card className='bg-dark text-white'>
                  {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                  <Card.ImgOverlay>
                    <Card.Title>Card Ads</Card.Title>
                    <Card.Text>This is Ad place</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12} lg={4}>
                <Card className='bg-dark text-white'>
                  {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                  <Card.ImgOverlay>
                    <Card.Title>Card Ads</Card.Title>
                    <Card.Text>This is Ad place</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
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
                      For all orders over $120
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
                    <span className='info-body-h'>SAFE PAYMENT</span>
                    <span className='info-body-p'>100% secure payment</span>
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
