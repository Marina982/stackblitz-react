import { Link, Navigate, Outlet } from 'react-router-dom';
import { jwtVerify } from 'jose';
import { useEffect, useState } from 'react';

const AuthMiddleware = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      const secretKey = new TextEncoder().encode('minha chave secreta');
      const isAuthenticated = await jwtVerify(token, secretKey);
      if (isAuthenticated) {
        setIsAuthenticated(true);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return <Link to="/">Você está sem acesso!</Link>;
  }
  return isAuthenticated == true ? <Outlet /> : <Navigate to="/" />;
};

export default AuthMiddleware;