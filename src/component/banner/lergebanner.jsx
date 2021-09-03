import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {Card, Button} from "react-bootstrap";

const Lergebanner = (data) => {
  console.log(data, "0987654321");
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true}>
        {data.data &&
          data.data.map((banner) => (
            <Card className='lerge_banner text-white'>
              <Card.Img
                className='banner_image'
                src={`https://api.pharmamandu.com/${banner.image.path}`}
                alt='Card image'
              />
              <Card.ImgOverlay>
                <div className='banner_contain'>
                  <Card.Title className='banner_s_text'>
                    {banner.name}
                  </Card.Title>
                  <Card.Text className='banner_l_text'>
                    {banner.description}
                  </Card.Text>
                  <Button className='banner_button px-4'>
                    {banner.buttonText}
                  </Button>
                </div>
              </Card.ImgOverlay>
            </Card>
          ))}
      </Carousel>
    </div>
  );
};

export default Lergebanner;
