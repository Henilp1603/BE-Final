import React from "react";
import "./ProductListSection.css";
import ProductCard from "../Product-Card/ProductCard";
import ProductData from "../../assets/ProductData.js";

const ProductListSection = () => {
  return (
    <section className="product_list_section section" id="product-section">
      <div className="heading_div" id="product_heading_div">
        <h1 className="heading_text">Our Services and Products</h1>
      </div>

      <div className="product_list">
        {ProductData.map((item, index) => (
          <ProductCard item={item} addToCartBtn={false} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProductListSection;
