import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import LoginSignUp from './Pages/LoginSignup';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import ShopContextProvider from './context/ShopContext';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import UploadAllProductsScript from './Pages/UploadAllProductsScript';
import Shop from './Pages/Shop';

function App() {
  return (
    <AuthProvider>
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginsignup" element={<LoginSignUp />} />
          <Route path="/upload-script" element={<UploadAllProductsScript />} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </AuthProvider>
  );
}

export default App;
