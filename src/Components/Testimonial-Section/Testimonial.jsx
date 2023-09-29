import React from 'react'
import "./testimonial.css"
import { testimonialData } from './TestimonialData'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <section className="testimonial_section section" id="testimonial-section">
          <div className="heading_div" id="testiomonial_heading_div">
            <h1 className="heading_text">Why our customers love us?</h1>
          </div>
          <div className="testimonial_div">
            <div className="testimonial_cards">
             {
                testimonialData.map((item,index)=>(
                    <TestimonialCard item={item} key={index}/>
                ))
             }
            </div>
            <div>
              <h3 className="testimonial_bottom_txt">
                These are just 3, we can give you a dozen more reasons why our
                customers love us. But if you are really interested in finding
                out, give us a call and find it yourself!
              </h3>
            </div>
          </div>
        </section>
  )
}

export default Testimonial
