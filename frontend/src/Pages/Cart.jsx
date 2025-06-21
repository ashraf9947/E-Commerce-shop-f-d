import React, { useContext, useEffect, useState } from "react";
import CartItems from "../Components/CartItems/CartItems";
import { ShopContext } from "../context/ShopContext"; // Assuming Cart data is stored here

const Cart = () => {
  const { cartItems, getTotalCartAmount, getTotalCartItems } = useContext(ShopContext);  // Get cart data from context
  const [cartData, setCartData] = useState([]);

  // UseEffect to fetch cart data from context
  useEffect(() => {
    if (cartItems) {
      setCartData(Object.values(cartItems));  // Set cart data (items in the cart)
    }
  }, [cartItems]);

  return (
    <div className="cart-page">
      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <CartItems cartData={cartData} />
      )}
      <div className="cart-summary">
        <h3>Total Items: {getTotalCartItems()}</h3>
        <h3>Total Amount: ${getTotalCartAmount()}</h3>
      </div>
    </div>
  );
};

export default Cart;
