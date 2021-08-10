import React, {useEffect, useState} from "react";
import {Form, Row, Col} from "react-bootstrap";
import {BsGrid3X3Gap, BsListUl} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import Justforyou from "../../component/justforyou/justforyou";
import {AiFillStar} from "react-icons/ai";
import List_view from "../../component/product_card/list_view";

const Filter_page = () => {
  // const dispatch = useDispatch();
  // const {product, loading} = useSelector((state) => state.product);
  // useEffect(() => {
  //   dispatch(productFetch());
  // }, [dispatch]);
  const product = [
    {
      id: 1,
      name: "Heart Medicen Bundle",
      price: "12",
      cut_price: "20",
      discount: "30%",
      img: "https://images.all-free-download.com/images/graphicthumb/medical_tablets_01_hd_pictures_168382.jpg",
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

  const [isGrid, setIsGrid] = useState(true);
  const isGridView = () => {
    setIsGrid(true);
  };
  const isListView = () => {
    setIsGrid(false);
  };

  return (
    <div className="filter_page">
      <div className="container">
        <Row className="filter">
          <Col xl={3} className="filter_left">
            <div className="filter_heading">
              <span>Filter By</span>
            </div>
            <div className="filterby">
              <span>Brand</span>
              <div className="filterby_check">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="filterby">
              <span>Price</span>
              <div className="filterby_check">
                <Form>
                  <Form.Group className="d-flex" controlId="formBasicPassword">
                    <Form.Control type="number" placeholder="0" />
                    <span className="price_compare">-</span>

                    <Form.Control type="number" placeholder="100" />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="filterby">
              <span>Brand</span>
              <div className="filterby_check">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label={
                        <div className="">
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                        </div>
                      }
                    />
                    <Form.Check
                      type="checkbox"
                      label={
                        <div className="">
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{
                              color: "rgb(191 187 184)",
                              fontSize: "1.3rem",
                            }}
                          />
                        </div>
                      }
                    />
                    <Form.Check
                      type="checkbox"
                      label={
                        <div className="">
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{
                              color: "rgb(191 187 184)",
                              fontSize: "1.3rem",
                            }}
                          />
                          <AiFillStar
                            style={{
                              color: "rgb(191 187 184)",
                              fontSize: "1.3rem",
                            }}
                          />
                        </div>
                      }
                    />
                    <Form.Check
                      type="checkbox"
                      label={
                        <div className="">
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{
                              color: "rgb(191 187 184)",
                              fontSize: "1.3rem",
                            }}
                          />
                          <AiFillStar
                            style={{
                              color: "rgb(191 187 184)",
                              fontSize: "1.3rem",
                            }}
                          />
                          <AiFillStar
                            style={{
                              color: "rgb(191 187 184)",
                              fontSize: "1.3rem",
                            }}
                          />
                        </div>
                      }
                    />
                    <Form.Check
                      type="checkbox"
                      label={
                        <div className="">
                          <AiFillStar
                            style={{color: "#f57224", fontSize: "1.3rem"}}
                          />
                          <AiFillStar
                            style={{
                              color: "rgb(191 187 184)",
                              fontSize: "1.3rem",
                            }}
                          />
                          <AiFillStar
                            style={{
                              color: "rgb(191 187 184)",
                              fontSize: "1.3rem",
                            }}
                          />
                          <AiFillStar
                            style={{
                              color: "rgb(191 187 184)",
                              fontSize: "1.3rem",
                            }}
                          />
                          <AiFillStar
                            style={{
                              color: "rgb(191 187 184)",
                              fontSize: "1.3rem",
                            }}
                          />
                        </div>
                      }
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Col>
          <Col className="filter_right">
            <div className="filter_right_header">
              <Col className="col-6">
                <div className="grid_list">
                  <BsGrid3X3Gap
                    className="grid_list_icon"
                    onClick={() => {
                      isGridView();
                    }}
                  />
                  <BsListUl
                    className="grid_list_icon"
                    onClick={() => {
                      isListView();
                    }}
                  />
                </div>
              </Col>
              <Col className="col-6">
                <div className="sortby">
                  <span className="sortby-w">Sort By:</span>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </Col>
            </div>
            <div className="filter_products">
              {isGrid ? (
                <Row>
                  {product.map((data) => (
                    <Col xl={3} className="mb-4">
                      <Justforyou data={data} />
                    </Col>
                  ))}
                </Row>
              ) : (
                <Row>
                  {product.map((data) => (
                    <List_view data={data} />
                  ))}
                </Row>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Filter_page;
