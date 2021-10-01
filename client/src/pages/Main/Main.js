import React from "react";
import ProductList from "../../components/common/ProductList/ProductList";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import img from "../iphone12.jpg";

const Main = () => {
  return (
    <div>
      <ProductCard
        id={1}
        image={img}
        name={"Iphone 12"}
        category={"телефоны"}
        color={"белый"}
        brand={"Apple"}
        price={34000}
      />
    </div>
  );
};

export default Main;
