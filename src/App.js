import {Switch, Route} from "react-router-dom";
import Home from "./screen/home";
import NavigationBar from "../src/component/navigationBar/navigationBar";
import Filter_page from "./screen/filter_page/filter_page";
import Footer from "./component/footer/footer";
import Product_details from "./screen/product_details/product_details";
import Wish_list from "./screen/wish_List/wish_list";
import RightSideBar from "./component/rightSideBar/rightSideBar";
import CartRightSideBar from "./component/rightSideBar/addToCart";

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filter" component={Filter_page} />
        <Route path="/product_details" component={Product_details} />
        <Route path="/wish_list" component={Wish_list} />
      </Switch>
      <RightSideBar />
      <CartRightSideBar />
      <Footer />
    </>
  );
}

export default App;
