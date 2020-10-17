import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartAction";

const ViewItems = (props) => {
  //   console.log("cart", props);
  const { cart, removeFromCart } = props;
  return (
    <div className="container">
      <h1>Items list</h1>
      {cart.length < 1 ? (
        <h4 className="text-danger">No items in cart</h4>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.cartId} className="py-2">
              {item.name} &nbsp;&nbsp;
              <button onClick={() => removeFromCart(item.cartId)}>x</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewItems);
