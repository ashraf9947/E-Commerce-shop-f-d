import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  const publicRoutes = ['/shop', '/shopcategory', '/login', '/loginsignup'];

  if (publicRoutes.includes(location.pathname.toLowerCase())) {
    return children ? children : <Outlet />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
