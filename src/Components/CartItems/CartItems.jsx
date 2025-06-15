import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/api";
import remove_icon from "../Assets/cart_cross_icon.png";
import "./CartItems.css";

const CartItems = () => {
  const { authTokens } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!authTokens || !authTokens.access) {
        console.warn("Пользователь не авторизован");
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const response = await api.get("/cart-items/", {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        });
        setCartItems(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке корзины:", error);
      }
      setLoading(false);
    };

    fetchCartItems();
  }, [authTokens]);

  // ... остальной код CartItems.jsx (handleRemove, handleChangeQuantity, getTotalCartAmount и рендер) ...

  const getTotalCartItems = () => {
    // Implementation of getTotalCartItems function
  };

  return (
    <div>
      {/* ... existing JSX ... */}
      <p>Всего товаров в корзине: {getTotalCartItems()}</p>
    </div>
  );
};

export default CartItems; 