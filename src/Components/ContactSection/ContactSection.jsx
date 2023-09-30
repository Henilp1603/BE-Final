import React from 'react'
import './contactsection.css'

const ContactSection = () => {
  return (
    <section className="contact_section ">
        <div className="contact_div">
            <div className="qr_section">
                <img src="/img/QRcode.png" alt="qr" className="qr_img"/>
            </div>
            <h1 className="qr_title">Scan the qr code to contact us</h1>
            <div className="conatct_details">
                <div className="conatct_detail"><span className="conatct_icon_cir"><i className="ri-mail-fill conatct_icon"></i></span><h3>gyaneshgaurav95@gmail.com</h3> </div>
                <div className="conatct_detail"><span className="conatct_icon_cir"><i className="ri-phone-fill"></i></span><h3>+91 9913076285</h3> </div>
            </div>
        <div className="checkout_right_btn_div">
          <button
            type="button"
            className="checkout_right_btn cont_btn"
          >
            Click here to call us
          </button>
        </div>
        </div>

    </section>
  )
}

export default ContactSection
