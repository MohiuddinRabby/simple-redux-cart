import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/actions/cartAction";

const Cart = (props) => {
  //   console.log("cart", props);
  const { cart } = props;
  return (
    <div className="container">
      <h3>Cart : {cart.length}</h3>
      <Link to="/">Home</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/cartItems">View cart items</Link>
      <hr />
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
