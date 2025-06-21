// src/context/ShopContext.jsx

import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"; // Массив продуктов

export const ShopContext = createContext(null); // Экспортируем сам контекст

// Функция для создания дефолтной корзины
const getDefaultCart = () => {
  let cart = {};
  // Заполняем корзину товарами с количеством 0
  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0; // Инициализация корзины с нулевым количеством
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  // Состояние для хранения корзины
  const [cartItems, setCartItems] = useState(getDefaultCart);

  // Добавление товара в корзину (увеличение количества)
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Уменьшение количества товара в корзине
  const decreaseCartQuantity = (itemId) => {
    setCartItems((prev) => {
      const currentQty = prev[itemId];
      if (!currentQty) return prev; // Если товара нет в корзине, возвращаем текущее состояние

      if (currentQty === 1) {
        return { ...prev, [itemId]: 0 }; // Если товара 1, удаляем его
      } else {
        return { ...prev, [itemId]: currentQty - 1 }; // Иначе уменьшаем количество
      }
    });
  };

  // Удаление товара из корзины
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0, // Убираем товар из корзины, ставим количество 0
    }));
  };

  // Подсчёт общей суммы товаров в корзине
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Ищем продукт по id
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item]; // Умножаем цену на количество
      }
    }
    return totalAmount.toFixed(2); // Возвращаем сумму с двумя знаками после запятой
  };

  // Подсчёт общего количества товаров в корзине
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]; // Суммируем количество товаров в корзине
      }
    }
    return totalItem;
  };

  // Значения, передаваемые в контекст
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
      {children} {/* Даем доступ к контексту всем дочерним компонентам */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider; // Экспортируем компонент по умолчанию
