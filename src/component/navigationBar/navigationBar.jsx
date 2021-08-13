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
import {BsPersonFill} from "react-icons/bs";
import {MdFavoriteBorder} from "react-icons/md";

import {Link} from "react-router-dom";

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
              <div className="icons">
                <span className="count-cart">0</span>
                <BiCart
                  onClick={() => {
                    document
                      .getElementsByTagName("body")[0]
                      .classList.add("cart-right-bar-enabled");
                  }}
                  className="icon"
                />
              </div>

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
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown link
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Submenu &raquo;
                          </a>
                          <ul class="dropdown-menu dropdown-submenu">
                            <li>
                              <a class="dropdown-item" href="#">
                                Submenu item 1
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Submenu item 2
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Submenu item 3 &raquo;{" "}
                              </a>
                              <ul class="dropdown-menu dropdown-submenu">
                                <li>
                                  <a class="dropdown-item" href="#">
                                    Multi level 1
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">
                                    Multi level 2
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Submenu item 4
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Submenu item 5
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
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
