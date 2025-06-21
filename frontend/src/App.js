// src/App.js

import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory'; // Импортируем ShopCategory
import Product from './Pages/Product';
import Cart from './Pages/Cart'; // Импортируем Cart
import Login from './Pages/Login'; // Импортируем Login
import LoginSignUp from './Pages/LoginSignup'; // Импортируем LoginSignUp
import { Routes, Route } from 'react-router-dom'; 
import PrivateRoute from './utils/PrivateRoute'; // Защищённый маршрут
import { AuthProvider } from './context/AuthContext'; 
import ShopContextProvider from './context/ShopContext'; // Импортируем ShopContextProvider
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import UploadAllProductsScript from './Pages/UploadAllProductsScript';

function App() {
  return (
    <AuthProvider>
      <ShopContextProvider> {/* Оборачиваем все в ShopContextProvider */}
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          
          {/* Защищённый маршрут для корзины */}
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<LoginSignUp />} />
          <Route path="/upload-script" element={<UploadAllProductsScript />} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </AuthProvider>
  );
}

export default App;
