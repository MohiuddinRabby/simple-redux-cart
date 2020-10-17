import React from "react";

const Product = (props) => {
  const { product, addToCart } = props;
  return (
    <div>
      <h2>{product.name}</h2>
      <button className="btn btn-info btn-sm" onClick={() => addToCart(product.id, product.name)}>
        Add to cart
      </button>
      <hr />
    </div>
  );
};

export default Product;
