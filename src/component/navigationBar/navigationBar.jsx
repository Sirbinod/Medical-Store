import React from "react";
import {
  Button,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {BiSearch} from "react-icons/bi";
import {BiCart} from "react-icons/bi";
import {BsList, BsPersonFill} from "react-icons/bs";
import {MdFavoriteBorder} from "react-icons/md";
import PropTypes from "prop-types";

import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "react-redux";

import {showRightSidebarAction} from "../../store/layout/action";
import rightSideBar from "../rightSideBar/rightSideBar";

const NavigationBar = (props) => {
  // show category manu and hide scrolly
  // const handleScroll = () => {
  //   const selector = document.querySelector(".custom-btn");
  //   if (window.scrollY > 280) {
  //     return selector && selector.classList
  //       ? selector.classList.add("show")
  //       : null;
  //   } else {
  //     return selector && selector.classList
  //       ? selector.classList.remove("show")
  //       : null;
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);
  // demo category data

  const showRightSidebar = useSelector((state) => state.Layout);
  // const dispatch = useDispatch();
  // const showRightSideBar = () => {
  //   dispatch(showRightSidebarAction(!showRightSidebar));
  // };

  const Category = [
    {title: "Genral Medicine"},
    {title: "Health & Beauty"},
    {title: "Babies Medicine"},
    {title: "Pets medicine"},
    {title: "Sport & Lifestyle"},
    {title: "Healthy Living"},
  ];
  return (
    <header>
      {/* top navigationbar */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-contain">
            <Link to="/" className="logo">
              <h2>Pharmamandu</h2>
            </Link>

            {/* search field  */}
            <Form className="inline-form">
              <input
                className="form-control"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              ></input>
              <Button className="search-btn" type="submit">
                <BiSearch />
              </Button>
            </Form>
            <div className="group-cart">
              <div className="icons">
                <span className="count-cart">0</span>

                <MdFavoriteBorder
                  onClick={() => {
                    document
                      .getElementsByTagName("body")[0]
                      .classList.add("right-bar-enabled");
                  }}
                  className="icon"
                />
              </div>

              <Dropdown className="carts">
                <Dropdown.Toggle className="cart_dropdown" id="dropdown-basic">
                  <div className="icons">
                    <span className="counts-cart">0</span>
                    <BiCart className="icon" />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu className="cart_manu">
                  <Dropdown.Item className="cart_total_info">
                    <div>
                      Item: <span>3</span>
                    </div>
                    <div>
                      Total: <span>$200:00</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="cart_product">
                    <div className="cart_product_image">
                      <img
                        src="https://thumbs.dreamstime.com/b/small-medicine-tablets-pills-spilling-out-bottle-71025019.jpg"
                        alt="cart_image"
                        style={{height: "100%"}}
                      />
                    </div>
                    <div className="cart_product_info">
                      <h5 className="cart_product_name">Cart product</h5>
                      <div className="cart_product_price">
                        <span className="cart_price">$100</span>
                        <span className="cart_quentity"> Quantity:01</span>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="cart_link_button">
                    <div className="view_cart">View Cart</div>
                    <div className="check_out">Check Out</div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div className="price-cart">
                <span className="price-title">My Cart</span>
                <span className="price">$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end top navigationbar  */}

      {/* main nav  */}
      <div className="header-main">
        <div className="container">
          <Navbar expand="lg" className="navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Dropdown>
                <Dropdown.Toggle
                  className="custom_category"
                  id="dropdown-basic"
                >
                  ALl Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {Category.map((cat) => (
                    <Dropdown.Item href="/filter">{cat.title}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Nav className="nav-contain">
                <Nav.Link href="#link">Flash Sale</Nav.Link>
                <Nav.Link href="#link">Track Order</Nav.Link>
                <Nav.Link href="#link">Store Location</Nav.Link>
                <Nav.Link href="#link">Offer</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
              <Nav className="nav-login">
                <Nav.Link href="#link">
                  <BsPersonFill className="login-icon" /> Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form className="small-form">
              <input
                className="form-control small-d-control"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              ></input>
              <Button className="search-btn small-d-search" type="submit">
                <BiSearch />
              </Button>
            </Form>
          </Navbar>
        </div>
      </div>
      {/* end main category  */}
    </header>
  );
};

export default NavigationBar;
