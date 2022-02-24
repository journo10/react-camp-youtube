import { cartItems } from "../initialValues/cartItems";
import { ADD_TO_CARD, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  cartItems: cartItems,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CARD:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
      };
    default:
      return state;
  }
};
export default cartReducer;
