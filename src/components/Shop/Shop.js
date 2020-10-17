import React from "react";
import Product from "../Product/Product";

const Shop = () => {
  const product = [
    { id: 1, name: "item-1" },
    { id: 2, name: "item-2" },
    { id: 3, name: "item-3" },
  ];
  return (
    <div>
      <h1>Shop</h1>
      {product.map((pd) => (
        <Product products={pd}></Product>
      ))}
    </div>
  );
};

export default Shop;
