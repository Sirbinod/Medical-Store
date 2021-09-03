import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Swiper from "react-id-swiper";

const ProductImage = (data) => {
  return (
    <>
      <Card className='main-image-card'>
        <img
          className='main-image'
          src={`https://api.pharmamandu.com/${data.image.path}`}
          alt=''
        />
      </Card>
      {/* <div className='thump-image'>
        <Card className='thump-image-card'>
          <img
            classname='thump-images'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2li3p2kRb5Zq4SOFnKtKCRELyYbB2MgWUg&usqp=CAU'
            alt=''
          />
        </Card>
        <Card className='thump-image-card'>
          <img
            classname='thump-images'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQbmUdwwVL4qY8TJCL0wgI4aBK9Qu2c6oK7ERGM9gcIzko6oOYxIljDdbgjOUdlxA7zw&usqp=CAU'
            alt=''
          />
        </Card>
        <Card className='thump-image-card'>
          <img
            classname='thump-images'
            src='https://d35cnulyv0pa6p.cloudfront.net/products/images/2017/23450/1.jpg'
            alt=''
          />
        </Card>
        <Card className='thump-image-card'>
          <img
            classname='thump-images'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfQt-TNudl-EicF9jk-FYLCuNpP5E6jWFzw&usqp=CAU'
            alt=''
          />
        </Card>
      </div>
    */}
    </>
  );
};

export default ProductImage;
