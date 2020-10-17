import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initState = {
  cart: [],
};

export const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newProductID = action.id;
      const newCart = [...state.cart, newProductID];
      return { cart: newCart };
    case REMOVE_FROM_CART:
      const removedID = action.id;
      const remaingCart = state.cart.filter((item) => item !== removedID);
      return { cart: remaingCart };
    default:
      return state;
  }
};
