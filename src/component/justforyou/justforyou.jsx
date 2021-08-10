import React from "react";

import {AiFillStar} from "react-icons/ai";
import {MdFavoriteBorder} from "react-icons/md";
import {BiCart} from "react-icons/bi";
import {Link} from "react-router-dom";

const Justforyou = (data) => {
  return (
    <Link to="/product_details">
      <div className="product-grid">
        <div className="product-image">
          <a href="#" className="image_wrap">
            <img className="image" src={data.data.img} />
          </a>
          <span className="product-discount-label">-33%</span>
          <ul className="product-links">
            <li>
              <a href="#" data-tip="Add to Wishlist">
                <MdFavoriteBorder className="icon" />
              </a>
            </li>

            <li>
              <a href="#" data-tip="Add to Cart">
                <BiCart className="icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="product-content">
          <ul className="rating">
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
          </ul>
          <h3 className="title">{data.data.name}</h3>
          <div className="price">
            <span>$90.00</span> $66.00
          </div>
          {/* <a className="add-to-cart" href="#">
          add to cart
        </a> */}
        </div>
      </div>
    </Link>
  );
};

export default Justforyou;
