import React, { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import admin_avatar from "../Assets/admin.png";
import { Link } from "react-router-dom";
import { CartItemsApi } from "apiClient";
import { apiConfig } from "apiClient/config";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [cartCount, setCartCount] = useState(0);
  const { user, logout, authTokens, isAuthenticated } = useContext(AuthContext);

  // Оборачиваем fetchCartCount в useCallback, чтобы избежать изменений при каждом рендере
  const fetchCartCount = useCallback(async () => {
    if (!authTokens?.access) return;

    try {
      const cartItemsApi = new CartItemsApi(apiConfig);
      const response = await cartItemsApi.cartItemsList();
      // Assuming the API returns an array of cart items, we need to calculate the total quantity
      const totalItems = response.data.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
    } catch (error) {
      console.error("❌ Ошибка при получении корзины:", error);
    }
  }, [authTokens]);

  useEffect(() => {
    fetchCartCount();
  }, [fetchCartCount]);

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f8f8f8",
  };

  const navLogoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const navMenuStyle = {
    display: "flex",
    listStyleType: "none",
    gap: "30px",
  };

  const cartStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const cartIconContainerStyle = {
    position: "relative",
  };

  const navCartCountStyle = {
    position: "absolute",
    top: "-6px",
    right: "-6px",
    background: "red",
    color: "white",
    fontSize: "12px",
    padding: "2px 6px",
    borderRadius: "50%",
  };

  return (
    <div style={navbarStyle}>
      <div style={navLogoStyle}>
        <img src={logo} alt="logo" />
        <p>CINDERELLA</p>
      </div>

      <ul style={navMenuStyle}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div style={cartStyle}>
        {isAuthenticated ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={admin_avatar}
              alt="avatar"
              style={{ width: "32px", height: "32px", borderRadius: "50%" }}
            />
            <span style={{ fontWeight: "bold" }}>{user?.username}</span>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <Link to="/cart" style={cartIconContainerStyle}>
          <img src={cart_icon} alt="cart" />
          {cartCount > 0 && (
            <span style={navCartCountStyle}>{cartCount}</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
