import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_items">
        <img src="/img/mobile-logo.png" alt="sfs" className="footer_logo_img" />
        <h3 className="footer_text">Made with <i className="ri-heart-fill"></i></h3>
        <a href="#" className="scrollUp"><span className="circle"><i className="ri-arrow-up-line"></i></span></a>
      </div>
    </footer>
  )
}

export default Footer
