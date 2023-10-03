import React from "react";
import {useCartContext} from "../../Contexts/CartContext";
import {useNavigate} from "react-router-dom";

const ProductCard = ({item, addToCartBtn}) => {
  const {addToCart} = useCartContext();

  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart(item.id, item.product_price, item);
    navigate("/cart");
  };

  return (
    <div className="product_card">
      <div className="product_img_div">
        <img src={`${item.product_img}`} alt="pro-1" className="product_img" />
      </div>
      <div className="product_detail_div">
        <div className="product_name_price">
          <h2 className="product_name">{item.product_name}</h2>
          <h3 className="product_price">{`Price : Rs ${item.product_price}/card`}</h3>
        </div>
        <div className="product_disc_div">
          <p className="product_disc">{item.product_disc}</p>
        </div>
      </div>
      <div className="product_buy_btn_div">
        {addToCartBtn && (
          <buttons
            type="button"
            className="btn add_to_cart_btn"
            onClick={() => addToCart(item.id, item.product_price, item)}
          >
            Add to Cart
          </buttons>
        )}
        <button type="button" className="btn buy_btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
