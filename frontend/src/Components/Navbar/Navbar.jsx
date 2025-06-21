import React, { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/api";
import Classes from "./navbar.module.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import admin_avatar from "../Assets/admin.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [cartCount, setCartCount] = useState(0);
  const { user, logout, authTokens, isAuthenticated } = useContext(AuthContext);

  // Оборачиваем fetchCartCount в useCallback, чтобы избежать изменений при каждом рендере
  const fetchCartCount = useCallback(async () => {
    if (!authTokens?.access) return;

    try {
      const response = await api.get("/cart-items/");
      setCartCount(response.data.total_items);
    } catch (error) {
      console.error("❌ Ошибка при получении корзины:", error);
    }
  }, [authTokens]);

  useEffect(() => {
    fetchCartCount();
  }, [fetchCartCount]);

  return (
    <div className={Classes.navbar}>
      <div className={Classes.nav_logo}>
        <img src={logo} alt="logo" />
        <p>CINDERELLA</p>
      </div>

      <ul className={Classes.nav_menu}>
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

      <div className={Classes.cart}>
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

        <Link to="/cart" className={Classes.cart_icon_container}>
          <img src={cart_icon} alt="cart" />
          {cartCount > 0 && (
            <span className={Classes.nav_cart_count}>{cartCount}</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
