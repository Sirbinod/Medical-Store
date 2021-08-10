import React from "react";
import {Card} from "react-bootstrap";
import {MdFavoriteBorder} from "react-icons/md";


const Flashcard = (data) => {
  console.log(data.data.name, "what is problem");

  return (
    <Card style={{width: "14.5rem", height: "25rem"}}>

      <Card.Img className="product-image" variant="top" src={data.data.img} />
      <Card.Body>
        <Card.Title>{data.data.name}</Card.Title>
        <Card.Text>
          <span className="current-price">${data.data.price}</span>
        </Card.Text>
        <div className="cut-price">
          <span className="old-price">${data.data.cut_price}</span>
          <span className="discount">-{data.data.discount}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Flashcard;
