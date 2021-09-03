import {
  ADD_TO_CART,
  CART_DATA_FETCH,
  CART_FAIL,
  CART_START,
  DECREASE_QUANTITY,
  DELETE_FROM_CART,
  CART_EMPTY,
} from "../action/actionType";

const initState = {
  loading: false,
  success: false,
  cart: [],
  quantity: 0,
  totalPrice: 0,
  error: null,
  number: 0,
};

const cartReducer = (state = initState, action) => {
  const items = action.payload;
  switch (action.type) {
    case CART_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART:
      const { product, data, quantity } = action.payload;
      const prevcarts = state.cart.products;

      const filteredProduct = prevcarts.filter(
        (x) => x.product._id === product._id,
      );
      if (filteredProduct.length > 0) {
        // find index of filtered product
        // prevcarts.index
        // update proce of filtered product
        // filteredProduct.
      } else {
        prevcarts.push(data.data);
      }

      const cartItem = cartItem.products.filter(
        (item) => item.products_id === items.data.products._id,
      );
      if (cartItem === undefined) {
        return {
          ...state,
          quantity: state.quantity ? state.quantity : action.quantity,
          loading: false,
          success: true,
          cart: prevcarts,
        };
      } else
        return {
          ...state,
          quantity: state.quantity
            ? state.cart.products.quantity + state.quantity
            : state.cart.products.quantity,
        };

    case CART_DATA_FETCH:
      return {
        ...state,
        loading: false,
        success: true,
        cart: action.payload,
      };
    case CART_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    // case DECREASE_QUANTITY:
    //   const carts = state.cart;
    //   if (state.quantity === 1) {
    //     const ramainingItems = (carts, items) =>
    //       carts.filter((cartItem) => cartItem._is !== items.dat._id);
    //     return ramainingItems(carts, items);
    //   } else {
    //     return carts.map((item) =>
    //       item._id === items.data._id
    //         ? { ...state, quantity: state.quantity - 1 }
    //         : state,
    //     );
    //   }

    case CART_EMPTY:
      return {
        ...state,
        cart: [],
        quantity: 0,
      };
    case DELETE_FROM_CART:
      const { products } = action.payload;
      const prevcart = state.cart.products;

      const filteredRemove = prevcart.filter(
        (x) => x.product._id !== products.product._id,
      );
      if (filteredRemove.length > 0) {
      } else {
        prevcart.push(filteredRemove);
      }
      return {
        ...state,
        loading: false,
        success: true,
        quantity: state.quantity - products.quantity,
        // cart: prevcart
      };

    default:
      return state;
  }
};
export default cartReducer;
