import React from "react";

const Product = (props) => {
  const { name, id } = props.products;
  return (
    <div>
      <h2>{name}</h2>
      <button>Add to cart</button>
      <hr/>
    </div>
  );
};

export default Product;
