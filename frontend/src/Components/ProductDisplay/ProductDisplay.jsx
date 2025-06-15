// src/pages/ProductDisplay.jsx

import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../api/api";

const ProductDisplay = ({ product }) => {
  const { authTokens } = useContext(AuthContext);

  const handleAddToCart = async () => {
    if (!authTokens?.access) {
      alert("❌ Please log in to add items to the cart.");
      return;
    }

    try {
      const response = await axios.post(
        "/cart-items/",
        { product_id: product.id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
            "Content-Type": "application/json",
          },
        }
      );

      if ([200, 201].includes(response.status)) {
        alert("✅ Product added to cart!");
      } else {
        console.warn("Unexpected response:", response);
        alert("⚠️ Unexpected server response.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("❌ Failed to add to cart. Check console for more info.");
    }
  };

  // Полный путь к изображению
  const imageUrl = product.image ? `http://127.0.0.1:8000${product.image}` : "/placeholder.jpg";

  

  return (
    <div className="productDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[...Array(4)].map((_, idx) => (
            <img key={idx} src={imageUrl} alt={`preview-${idx}`} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={imageUrl} alt="main" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="star-dull" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          This ultra-soft sweatshirt ensures warmth and comfort for your child,
          made with a high-quality cotton blend perfect for all-day wear.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL", "XXL"].map(size => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Woman, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Modern, latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
