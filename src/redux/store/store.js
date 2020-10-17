import { createStore } from "redux";
import { CartReducer } from "../reducers/cartReducer";

export const cartStore = createStore(CartReducer);
