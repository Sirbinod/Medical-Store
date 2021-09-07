import {Switch, Route} from "react-router-dom";
import Home from "./screen/home";
import NavigationBar from "../src/component/navigationBar/navigationBar";
import Filter_page from "./screen/filter_page/filter_page";
import Footer from "./component/footer/footer";
import Product_details from "./screen/product_details/product_details";
import Wish_list from "./screen/wish_List/wish_list";
import RightSideBar from "./component/rightSideBar/rightSideBar";
import CartRightSideBar from "./component/rightSideBar/addToCart";
import Cart_List from "./screen/cart_List/cart_list";
import Checkout from "./screen/checkout/checkout";
import Blog from "./screen/blog/blog";
import BlogDetails from "./screen/blog/blogDetails";
import About from "./screen/about/about";
import Contact from "./screen/contact/contact";
import Login from "./screen/auth/login";
import { ToastProvider } from "react-toast-notifications";
import Logout from "./screen/auth/logout";
import Signup from "./screen/auth/signup";
import OrderOut from "./screen/checkout/orderout";
import Success from "./screen/success/success";
import Precription from "./screen/auth/precription";
function App() {
  return (
    <>
      <ToastProvider placement='top-left'>
        <NavigationBar />
        <Login />
        <Signup />
        <Precription />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/filter/:id' component={Filter_page} />
          <Route path='/product_details/:id' component={Product_details} />
          <Route path='/wish_list' component={Wish_list} />
          <Route path='/cart_list' component={Cart_List} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/blog' component={Blog} />
          <Route path='/blog_details' component={BlogDetails} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/logout' component={Logout} />
          <Route path='/order' component={OrderOut} />
          <Route path='/order-success' component={Success} />
        </Switch>
        <RightSideBar />
        <CartRightSideBar />
        <Footer />
      </ToastProvider>
    </>
  );
}

export default App;
