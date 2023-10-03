import React from "react";
import "./cartproduct.css";
import { useCartContext } from "../../Contexts/CartContext";

const CartProduct = ({ item }) => {
  let { removeItem, incrementItem, decrementItem } = useCartContext();
  console.log(item);
  return (
    <div className="checkout_product">
     <div className="cart_img_div"> <img src={`${item.image}`} alt="" className="checkout_product_img" /></div>
      <div className="checkout_product_name_price">
        <h2 className="checkout_product_name">{item.product_name}</h2>
        <h3 className="checkout_product_price">₹{item.price}</h3>
      </div>
      <div className="quantity_div">
        <span>
          <i
            className="ri-add-circle-fill quantity_icon"
            onClick={() => incrementItem(item.id)}
          ></i>
        </span>
        <p className="quantity">{item.quantity}</p>
        <span>
          <i
            className="ri-indeterminate-circle-fill quantity_icon"
            onClick={() => decrementItem(item.id)}
          ></i>
        </span>
      </div>
      <span className="delete_icon_circle" onClick={() => removeItem(item.id)}>
        <i className="ri-close-circle-fill delete_icon"></i>
      </span>
    </div>
  );
};

export default CartProduct;
