import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="mainDishes" key={product.id}>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductItem;
