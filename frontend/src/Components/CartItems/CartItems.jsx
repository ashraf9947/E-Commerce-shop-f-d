import React, { useEffect, useState, useContext } from "react";
import api from "../../api/api";
import remove_icon from "../Assets/cart_cross_icon.png";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getTotalCartItems } = useContext(ShopContext);

  // === Загрузка корзины ===
  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await api.get("/cart-items/");
      setCartItems(response.data);
    } catch (error) {
      console.error("❌ Ошибка при загрузке корзины:", error);
    }
    setLoading(false);
  };

  // === При монтировании компонента ===
  useEffect(() => {
    fetchCart();
  }, []);

  // === Удаление товара ===
  const handleRemove = async (itemId) => {
    try {
      await api.delete(`/cart-items/${itemId}/`);
      fetchCart();
    } catch (error) {
      console.error("❌ Ошибка при удалении товара:", error);
    }
  };

  // === Изменение количества ===
  const handleChangeQuantity = async (itemId, quantity) => {
    try {
      await api.patch(`/cart-items/${itemId}/`, { quantity });
      fetchCart();
    } catch (error) {
      console.error("❌ Ошибка при изменении количества:", error);
    }
  };

  // === Сумма всех товаров ===
  const getTotalCartAmount = () => {
    return cartItems
      .reduce((sum, item) => {
        const price = parseFloat(item.product.price || 0);
        return sum + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  // === Общее количество товаров ===
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (loading) return <div>⏳ Загрузка корзины...</div>;

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartItems.length === 0 && <div>🛒 Корзина пуста</div>}
      {cartItems.map((item) => {
        const product = item.product;
        if (!product) return null;

        const imageUrl = product.image
          ? `http://127.0.0.1:8000${product.image}`
          : "https://via.placeholder.com/80";

        return (
          <div className="cartItems-format" key={item.id}>
            <img
              src={imageUrl}
              alt={product.name}
              style={{ width: "80px", height: "auto" }}
            />
            <p>{product.name}</p>
            <p>$ {product.price}</p>

            <div className="cartItem-quantity-controls">
              <button
                onClick={() =>
                  item.quantity > 1
                    ? handleChangeQuantity(item.id, item.quantity - 1)
                    : handleRemove(item.id)
                }
                className="quantity-btn"
              >
                -
              </button>
              <span className="cartItem-quantity">{item.quantity}</span>
              <button
                onClick={() => handleChangeQuantity(item.id, item.quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>

            <p>$ {(parseFloat(product.price) * item.quantity).toFixed(2)}</p>
            <img
              className="cartItem-remove-icon"
              src={remove_icon}
              alt="remove"
              onClick={() => handleRemove(item.id)}
            />
          </div>
        );
      })}

      {/* Итоговая сумма */}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItems-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        {/* Промокод */}
        <div className="cartItems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartItems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      {/* Общее количество */}
      <p>🧮 Всего товаров в корзине: {totalQuantity}</p>

      {/* Иконка с количеством */}
      <div className="cart-icon" style={{ position: "relative", marginTop: "20px" }}>
        🛒
        {totalQuantity > 0 && (
          <span
            className="cart-count"
            style={{
              position: "absolute",
              top: "-6px",
              right: "-6px",
              background: "green",
              color: "white",
              fontSize: "12px",
              padding: "2px 6px",
              borderRadius: "50%",
            }}
          >
            {totalQuantity}
          </span>
        )}
      </div>
    </div>
  );
};

export default CartItems;
