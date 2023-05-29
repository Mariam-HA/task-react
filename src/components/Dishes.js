import React from "react";
import products from "../products";

const Dishes = () => {
  const productsList = products.map((product) => {
    return (
      <div className="mainDishes">
        <img src={product.image} alt={product.name}></img>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    );
  });
  return (
    <div>
      <div className="plapla">{productsList}</div>;
    </div>
  );
};
export default Dishes;
