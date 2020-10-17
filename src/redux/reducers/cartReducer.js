import fakeData from "../../fakeData";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initState = {
  cart: [],
  products: fakeData,
};

export const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log(action);
      // const newProductID = action.id;
      const newItems = {
        productId: action.id,
        name: action.name,
        //adding unique id to cart items
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItems];
      return { ...state, cart: newCart };
    case REMOVE_FROM_CART:
      const removedID = action.id;
      const remaingCart = state.cart.filter(
        (item) => item.cartId !== removedID
      );
      return { ...state, cart: remaingCart };
    default:
      return state;
  }
};
