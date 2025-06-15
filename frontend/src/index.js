import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { AuthProvider } from './context/AuthContext';          // ✅ импортируем AuthProvider
import ShopContextProvider from './context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>                   {/* ✅ сначала обёртка для authTokens */}
      <ShopContextProvider>         {/* ✅ теперь можно использовать authTokens в корзине */}
        <App />
      </ShopContextProvider>
    </AuthProvider>
  </React.StrictMode>
);

// Optional performance logging
reportWebVitals();
