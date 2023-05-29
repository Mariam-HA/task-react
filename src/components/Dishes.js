import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const Dishes = () => {
  const productsList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <div className="plapla">{productsList}</div>;
};
export default Dishes;
