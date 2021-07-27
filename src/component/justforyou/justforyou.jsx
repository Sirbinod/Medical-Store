import React from "react";
import {Card} from "react-bootstrap";
import {AiFillStar} from "react-icons/ai";
const Justforyou = (data) => {
  return (
    <div>
      <Card style={{width: "14.2rem", height: "26.3rem"}}>
        <Card.Img className="product-image" variant="top" src={data.data.img} />
        <Card.Body>
          <Card.Title>{data.data.name}</Card.Title>
          <Card.Text>
            <span className="current-price">${data.data.price}</span>
          </Card.Text>
          <div className="star-rating">
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
          </div>
          <div className="cut-price">
            <span className="old-price">${data.data.cut_price}</span>
            <span className="discount">-{data.data.discount}</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Justforyou;
