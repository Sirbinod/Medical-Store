import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {Card, Button} from "react-bootstrap";

const Lergebanner = () => {
  const bgimage =
    "https://image.shutterstock.com/image-photo/pills-drugs-medicine-on-blue-260nw-1710934186.jpg";
  return (
    <div>
      <Carousel autoPlay={false} infiniteLoop={true}>
        <Card className="lerge_banner text-white">
          <Card.Img
            className="banner_image"
            src="https://t3.ftcdn.net/jpg/02/28/20/08/360_F_228200877_hJtrKF1lEnN8AUDLtewIohPXZSwxH1no.jpg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <div className="banner_contain">
              <Card.Title className="banner_s_text">Get upto</Card.Title>
              <Card.Text className="banner_l_text">
                20% of upto Rs 2000
              </Card.Text>
              <Button className="banner_button">Shop Now</Button>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card className="lerge_banner text-white">
          <Card.Img
            className="banner_image"
            src="https://thumbs.dreamstime.com/b/shopping-cart-medical-pills-green-background-banner-shopping-cart-medical-pills-green-background-banner-203006886.jpg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <div className="banner_contain">
              <Card.Title className="banner_s_text">Get upto</Card.Title>
              <Card.Text className="banner_l_text">
                20% of upto Rs 2000
              </Card.Text>
              <Button className="banner_button">Shop Now</Button>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card className="lerge_banner text-white">
          <Card.Img
            className="banner_image"
            src="https://images.unsplash.com/photo-1584362917165-526a968579e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <div className="banner_contain">
              <Card.Title className="banner_s_text">Get upto</Card.Title>
              <Card.Text className="banner_l_text">
                20% of upto Rs 2000
              </Card.Text>
              <Button className="banner_button">Shop Now</Button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Carousel>
    </div>
  );
};

export default Lergebanner;
