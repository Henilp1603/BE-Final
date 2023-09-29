import React, { useState } from 'react'
import "./toggle.css"
import { useNavigate } from 'react-router-dom'

const Toggle = () => {
    const [ischecked,setIschecked]=useState(true);
    const navigate=useNavigate()
    const navigateToProduct = ()=>{
        setIschecked(false)
        navigate("/productpage")
    }
    
    const navigateToHome = ()=>{
        setIschecked(true)
        navigate("/")
    }
  return (
    <div className="switches-container">
          <input
            type="radio"
            id="switchWebsite"
            name="switch"
            value="website"
            checked={ischecked}
            onClick={navigateToHome}
          />
          <input
            type="radio"
            id="switchProduct"
            name="switch"
            value="product"
            checked={!ischecked}
            onClick={navigateToProduct}
          />
          <label htmlFor="switchWebsite">Website</label>
          <label htmlFor="switchProduct">Products</label>
          <div className="switch-wrapper">
            <div className="switch">
              <div>Website</div>
              <div>Products</div>
            </div>
          </div>
        </div>
  )
}

export default Toggle
