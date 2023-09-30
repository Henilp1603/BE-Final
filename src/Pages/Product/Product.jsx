import React from "react";
import "./product.css";
import ProductCard from "../../Components/Product-Card/ProductCard";
import { useProductContext } from "../../Contexts/ProductContext";
import NavBar from "../../Components/NavBar/NavBar";
import ProductData from "../../assets/ProductData.js";
import { Link, NavLink } from "react-router-dom";

const Product = () => {

  return (
    <>
      <section className="product_page_section section">
        <div className="product_page_heading_div">
          <h1 className="product_page_heading">Our Products</h1>
        </div>
        <div className="product_list">
          {ProductData.map((item, index) => (
            <ProductCard item={item} key={index} addToCartBtn={true} />
          ))}
        </div>
        <div className="product_page_bottom_txt_div">
          <h3 className="product_page_bottom_txt">
            We are adding more products to our inventory soon
          </h3>
        </div>
        <div className="product_page_btn_div">
          <Link to="/cart">
            {" "}
            <button type="button" className="product_page_btn">
              Proceed to cart
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Product;
