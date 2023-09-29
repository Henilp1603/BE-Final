import React from "react";
import "./heroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero_section" id="hero-section">
      <div className="hero_main_container">
        <div className="hero_text_content">
          <h1 className="hero_main_text">
            We Just Call Ourselves
            <br />
            <span className="hero_sec_text">
              <img
                src="img/Logo.png"
                alt=""
                className="hero_text_logo"
                id="logoimg"
              />
              etter.
            </span>
            We are actually the <br />
            <span className="hero_sec_text">
              <img
                src="img/Logo.png"
                alt=""
                className="hero_text_logo"
                id="logoimg"
              />
              est.
            </span>
          </h1>
          <h4 className="hero_bottom_text">
            We are a B2B and B2C importer and distributors of textile embroidery
            machine cards. We also works as import facilitators and outsourcers
            for many products and provide electronics and electrical related
            services.
          </h4>

         <a href="#product-section"> <button type="button" className="btn explore_btn" id="cta">
            Explore our range of products
          </button></a>
          <h4 className="hero_last_text">
            Trusted by more than 25+ Retailers across India
          </h4>
          <img src="/img/hero1.png" alt="heroImg" className="hero_img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
