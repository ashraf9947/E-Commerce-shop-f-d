import React, { useState, useEffect } from "react";
import Classes from "./navbar.module.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import admin_avatar from "../Assets/admin.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  // 🔐 Временно вставляем access-токен вручную
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ5OTQ1NDU5LCJpYXQiOjE3NDk5NDE4NTksImp0aSI6ImVhOWYyOGNjY2NjZDQ2YjI5NjNlMDAyYWZlZWY5YjRmIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5Ac2hvcC5jb20ifQ.WzZa74286T6hfYra-JoBe2xc3pxcXr35PjbCh6ZixHE";

  const fetchCartCount = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/cart-items", {

        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setCartCount(response.data.total_items);
    } catch (error) {
      console.error("❌ Ошибка при получении количества товаров в корзине:", error);
    }
  };

  useEffect(() => {
    fetchCartCount();
  }, []);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className={Classes.navbar}>
      {/* Логотип */}
      <div className={Classes.nav_logo}>
        <img src={logo} alt="logo" />
        <p>CINDERELLA</p>
      </div>

      {/* Меню */}
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

      {/* Аватар + корзина */}
      <div className={Classes.cart}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={admin_avatar}
            alt="avatar"
            style={{ width: "32px", height: "32px", borderRadius: "50%" }}
          />
          <span style={{ fontWeight: "bold" }}>admin</span>
          <button onClick={handleLogout}>Logout</button>
        </div>

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
