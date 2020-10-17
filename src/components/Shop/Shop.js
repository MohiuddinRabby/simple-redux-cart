import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import Product from "../Product/Product";

const Shop = (props) => {
  // console.log(props);
  const { products, addToCart } = props;
  return (
    <div className="container">
      <h2>Shop</h2>
      <hr />
      <div className="row">
        {products.map((pd) => (
          <div className="col-md-4" key={pd.id}>
            <Product  product={pd} addToCart={addToCart}></Product>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = {
  addToCart: addToCart,
};
/**way-1 to connect */

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop);

/**way-2 to connect */
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
