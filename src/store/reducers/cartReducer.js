import {
  ADD_TO_CART,
  CART_DATA_FETCH,
  CART_FAIL,
  CART_START,
  DECREASE_QUANTITY,
  DELETE_FROM_CART,
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
      const cartItem = cartItem.filter(
        (item) => item.data.products_id === items.data.products._id,
      );
      if (cartItem === undefined) {
        return {
          ...state,
          quantity: state.quantity ? state.quantity : 1,
          loading: false,
          success: true,
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

    case DECREASE_QUANTITY:
      const carts = state.cart;
      if (state.quantity === 1) {
        const ramainingItems = (carts, items) =>
          carts.filter((cartItem) => cartItem._is !== items.dat._id);
        return ramainingItems(carts, items);
      } else {
        return carts.map((item) =>
          item._id === items.data._id
            ? { ...state, quantity: state.quantity - 1 }
            : state,
        );
      }
    // case DELETE_FROM_CART:
    //   const remainingItems = (cartItem, product) =>
    //     cartItems.filter(
    //       (cartItem) => cartItem.cartItemId !== product.cartItemId,
    //     );
    //   return remainingItems(cartItems, product);

    default:
      return state;
  }
};
export default cartReducer;
