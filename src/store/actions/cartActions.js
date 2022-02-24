export const ADD_TO_CARD = "ADD_TO_CARD";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCard = (product) => {
  return {
    type: ADD_TO_CARD,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
