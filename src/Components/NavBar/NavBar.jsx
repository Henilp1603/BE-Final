import React from "react";
import "./navbar.css";
import Toggle from "../Toggle-Switch/Toggle";
import {Link, NavLink} from "react-router-dom";
import {useCartContext} from "../../Contexts/CartContext";

const NavBar = ({logo = true, toggleS = true, navItem = true}) => {
  const {total_item} = useCartContext();

  return (
    <nav className="nav_conatiner">
      <div className="website_nav">
        {logo && (
          <div className="logo_sec">
            <span>
              <img src="/img/Logo.png" alt="logo" className="logo_img" />
            </span>
            <p className="logo_name">
              Better <br />
              Equipments.
            </p>
          </div>
        )}
        {toggleS && <Toggle />}

        {navItem && (
          <div className="nav_items">
            <ul className="nav_items_ul">
              <NavLink to="/" className="nav_item">
                Home
              </NavLink>
              <NavLink to="/contact" className="nav_item">
                Contact
              </NavLink>
              <li className="nav_item">
                <Link to="/cart">
                  <button
                    type="button"
                    className="qute_btn btn"
                    id="get_quote_btn"
                  >
                    Get a quote
                    {total_item !== 0 ? (
                      <span className="num_cir">{total_item}</span>
                    ) : (
                      <span></span>
                    )}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="mobile_nav">
        <div className="nav_icons">
          <NavLink to="/">
            <i className="ri-home-line icon"></i>
          </NavLink>
          <NavLink to="/contact">
            <i className="ri-phone-line icon"></i>
          </NavLink>
          <Link to="/">
            <img
              src="/img/mobile-logo.png"
              alt="sfs"
              className="mobile_logo_img"
            />
          </Link>
          <NavLink to="/productpage">
            <i class="ri-store-3-line icon"></i>
          </NavLink>
          <NavLink to="/cart">
            <i className="ri-shopping-cart-line icon"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
