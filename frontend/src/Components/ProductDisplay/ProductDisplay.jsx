// src/pages/ProductDisplay.jsx

import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { AuthContext } from "../../context/AuthContext";
import { CartItemsApi } from "apiClient";
import { apiConfig } from "apiClient/config";

const ProductDisplay = ({ product }) => {
  const { authTokens } = useContext(AuthContext);

  const handleAddToCart = async () => {
    if (!authTokens?.access) {
      alert(" Please log in to add items to the cart");
      return;
    }

    try {
      const cartItemsApi = new CartItemsApi(apiConfig);
      await cartItemsApi.cartItemsCreate({
        product_id: product.id,
        quantity: 1,
      },
      );
      alert(" Product added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert(" Failed to add to cart. Check console for more info.");
    }
  };

  
  const imageUrl = product.image || "/placeholder.jpg";

  
  console.log(imageUrl)
  return (
    <div className="productDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={imageUrl} alt="main" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img  src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star-dull" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price">${product.price}</div>
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
