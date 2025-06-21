// src/context/ShopContext.jsx

import React, { createContext, useState, useEffect } from "react";
import { ProductsApi } from "../apiClient";
import { apiConfig } from "../apiClient/config";

export const ShopContext = createContext(null);

const getDefaultCart = (all_product) => {
  let cart = {};
  if (all_product) {
    for (let index = 0; index < all_product.length; index++) {
      cart[all_product[index].id] = 0;
    }
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsApi = new ProductsApi(apiConfig);
        const response = await productsApi.productsList();
        setAll_product(response.data);
        setCartItems(getDefaultCart(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const decreaseCartQuantity = (itemId) => {
    setCartItems((prev) => {
      const currentQty = prev[itemId];
      if (!currentQty) return prev;

      if (currentQty === 1) {
        return { ...prev, [itemId]: 0 };
      } else {
        return { ...prev, [itemId]: currentQty - 1 };
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount.toFixed(2);
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    decreaseCartQuantity,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue} className="shop-context-provider">
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
