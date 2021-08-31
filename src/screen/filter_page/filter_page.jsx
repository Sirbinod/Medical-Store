import React, {useEffect, useState} from "react";
import {Form, Row, Col} from "react-bootstrap";
import {BsGrid3X3Gap, BsListUl} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import Justforyou from "../../component/justforyou/justforyou";
import {AiFillStar} from "react-icons/ai";
import List_view from "../../component/product_card/list_view";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Carousel from "react-multi-carousel";
import Paginator from "react-hooks-paginator";
import "react-multi-carousel/lib/styles.css";
import { productFetch } from "../../store/action/productAction";

const Filter_page = (props) => {
  const [filterData, setFilterData] = useState();
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  console.log(props, "filter page here");
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);
  let firstFilterData;

  if (product) {
    firstFilterData =
      product &&
      product.filter(
        (productFilter) => productFilter.category._id === props.match.params.id,
      );
  }
  useEffect(() => {
    dispatch(productFetch());
    setFilterData(firstFilterData);
  }, [dispatch]);

  const showPrescription = () => {
    const prescription =
      product &&
      product.filter(
        (productFilter) => productFilter.needPrescription === true,
      );
    setFilterData(prescription);
  };

  const showNonPrescription = () => {
    const nonPrescription =
      product &&
      product.filter(
        (productFilter) => productFilter.needPrescription === false,
      );
    setFilterData(nonPrescription);
  };

  console.log(
    filterData,
    "filetr datatatatatatatattataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  );
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 580 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },
      items: 2,
    },
  };
  const pageLimit = 4;
  const [isGrid, setIsGrid] = useState(true);
  const isGridView = () => {
    setIsGrid(true);
  };
  const isListView = () => {
    setIsGrid(false);
  };

  console.log(filterData, "filter data");

  return (
    <>
      <div className='filter_page'>
        <div className='container'>
          <Breadcrumb className='mt-3'>
            <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
            <Breadcrumb.Item href=''>Health Care</Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
          <Row className='filter'>
            <Col xl={3} className='filter_left'>
              <div className='filter_heading'>
                <span>Filter By</span>
              </div>
              <div className='filterby'>
                <span>Availability</span>
                <div className='filterby_check'>
                  <Form>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                      <div className='form-check'>
                        <label className='form-check-label text-muted'>
                          <input
                            type='checkbox'
                            onChange={showPrescription}
                            className='form-check-input'
                          />
                          Prescriptions
                        </label>
                      </div>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                      <div className='form-check'>
                        <label className='form-check-label text-muted'>
                          <input
                            type='checkbox'
                            onChange={showNonPrescription}
                            className='form-check-input'
                          />
                          Non-Prescriptions
                        </label>
                      </div>
                    </Form.Group>
                  </Form>
                </div>
              </div>
              <div className='filterby'>
                <span>Price</span>
                <div className='filterby_check'>
                  <Form>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                      <div className='form-check'>
                        <label className='form-check-label text-muted'>
                          <input
                            type='checkbox'
                            // onChange={show200}
                            className='form-check-input'
                          />
                          <span>0</span>-<span>200</span>
                        </label>
                      </div>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                      <div className='form-check'>
                        <label className='form-check-label text-muted'>
                          <input
                            type='checkbox'
                            // onChange={show500}
                            className='form-check-input'
                          />
                          <span>201</span>-<span>500</span>
                        </label>
                      </div>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                      <div className='form-check'>
                        <label className='form-check-label text-muted'>
                          <input
                            type='checkbox'
                            // onChange={show1000}
                            className='form-check-input'
                          />
                          <span>501</span>-<span>1000</span>
                        </label>
                      </div>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Col>
            <Col className='filter_right'>
              <div className='filter_right_header'>
                <Col className='col-6'>
                  <div className='grid_list'>
                    <BsGrid3X3Gap
                      className='grid_list_icon'
                      onClick={() => {
                        isGridView();
                      }}
                    />
                    <BsListUl
                      className='grid_list_icon'
                      onClick={() => {
                        isListView();
                      }}
                    />
                  </div>
                </Col>
                <Col className='col-6'>
                  <div className='sortby'>
                    <span className='sortby-w'>Sort By:</span>
                    <Form.Select aria-label='Default select example'>
                      <option>Open this select menu</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </Form.Select>
                  </div>
                </Col>
              </div>
              <div className='filter_products'>
                {isGrid ? (
                  <Row>
                    {loading ? (
                      <>loading..</>
                    ) : (
                      filterData &&
                      filterData.map((data) => (
                        <Col xl={3} className='mb-4'>
                          <Justforyou data={data} />
                        </Col>
                      ))
                    )}
                  </Row>
                ) : (
                  <Row>
                    {loading ? (
                      <>loading..</>
                    ) : filterData ? (
                      filterData.map((listData) => (
                        <div className='mb-4'>
                          <List_view data={listData} />
                        </div>
                      ))
                    ) : (
                      <></>
                    )}
                  </Row>
                )}
              </div>
              {/* shop product pagination */}
            </Col>
          </Row>
          <div className='my-5'>
            <div className='most-popular'>
              <h3 className='most-popular-title'>Related Products</h3>
            </div>
            {loading ? (
              <>loading...</>
            ) : (
              <Carousel responsive={responsive}>
                {firstFilterData &&
                  firstFilterData.map((data) => <Justforyou data={data} />)}
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter_page;
