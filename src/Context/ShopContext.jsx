import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  // Добавить товар в корзину (увеличить количество)
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Уменьшить количество товара в корзине
  const decreaseCartQuantity = (itemId) => {
    setCartItems((prev) => {
      const currentQty = prev[itemId];
      if (!currentQty) return prev; // если нет товара, просто вернуть текущее состояние

      if (currentQty === 1) {
        // если количество 1, удаляем товар из корзины (устанавливаем 0)
        return { ...prev, [itemId]: 0 };
      } else {
        // иначе уменьшаем количество на 1
        return { ...prev, [itemId]: currentQty - 1 };
      }
    });
  };

  // Полностью удалить товар из корзины (установить количество 0)
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));
  };

  // Подсчет общей суммы товаров в корзине
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount.toFixed(2);
  };

  // Подсчет общего количества товаров в корзине
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
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
