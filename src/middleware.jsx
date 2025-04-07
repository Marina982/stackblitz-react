import { Link, Navigate, Outlet } from 'react-router-dom';
import { jwtVerify } from 'jose';
import { useEffect, useState } from 'react';

const AuthMiddleware = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem('token');
        const secretKey = new TextEncoder().encode('minhaChaveSecreta');
        
        if (!token) {
          throw new Error("Token não encontrado!");
        }

        await jwtVerify(token, secretKey);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return <p>Carregando...</p>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default AuthMiddleware;
