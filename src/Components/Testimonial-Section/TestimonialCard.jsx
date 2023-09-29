import React from "react";
import "./testimonial.css";

const TestimonialCard = ({item}) => {
  return (
    <div className="testimonial_card">
      <h2 className="testimonial_card_title">{item.title}</h2>
      <div className="testimonial_chat_div">
        <div className="testimonial_chat chat_left">
          {item.chatR1 && (
            <>
              <h4 className="chat_title title_left">Client</h4>
              <div className="chat_box chat_r">{item.chatR1}</div>
            </>
          )}
        </div>
        <div className="testimonial_chat chat_right">
          {item.chatL1 && (
            <>
              <h4 className="chat_title title_right">Better Equipments</h4>
              <div className="chat_box chat_l">{item.chatL1}</div>
            </>
          )}
        </div>
        <div className="testimonial_chat chat_left">
          {item.chatR2 && (
            <>
              <h4 className="chat_title title_left">Client</h4>
              <div className="chat_box chat_r">{item.chatR2}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
