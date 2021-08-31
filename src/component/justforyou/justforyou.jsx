import React, { useEffect } from "react";

import { AiFillStar } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { BiCart } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { addCart } from "../../store/action/cartAction";
import { useToasts } from "react-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import { loginOpen } from "../../store/action/profileAction";

const Justforyou = (data) => {
  const { addToast } = useToasts();
  const { user, isLoggedIn } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(productDetail(props.match.params.id));
  //   dispatch(productFetch());
  // }, [dispatch]);

  return (
    <div className='product-grid'>
      <div className='product-image'>
        <a href={`/product_details/${data.data._id}`} className='image_wrap'>
          <img
            className='image'
            src={`http://pharmamanduapi.lightwebgroup.com${data.data.image.path}`}
          />
        </a>
        {data.data.discount !== 0 ? (
          <span className='product-discount-label'>{data.data.discount}</span>
        ) : (
          ""
        )}

        <ul className='product-links'>
          {/* <li>
            <a href='#' data-tip='Add to Wishlist'>
              <MdFavoriteBorder className='icon' />
            </a>
          </li> */}

          <li>
            <a
              onClick={() =>
                isLoggedIn
                  ? dispatch(addCart(data.data._id, user.token, addToast))
                  : dispatch(loginOpen())
              }
              data-tip='Add to Cart'>
              <BiCart className='icon' />
            </a>
          </li>
          <li>
            <Link
              to={`/product_details/${data.data._id}`}
              data-tip='View Details'>
              <FiEye className='icon' />
            </Link>
          </li>
        </ul>
      </div>
      <div className='product-content'>
        {/* <ul className="rating">
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
            <AiFillStar style={{color: "#f57224"}} />
          </ul> */}
        <h3 className='title'>{data.data.name}</h3>
        <div className='price'>
          {/* <span>$0.00</span> */}
          {data.data.cost}
        </div>
        {/* <a className="add-to-cart" href="#">
          add to cart
        </a> */}
      </div>
    </div>
  );
};

export default Justforyou;
