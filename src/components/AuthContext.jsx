import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [redirectPath, setRedirectPath] = useState('/');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (email) => {
    const username = email.split('@')[0];
    setUser(username);
    localStorage.setItem('user', username);
    navigate(redirectPath);
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
    setRedirectPath('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setRedirectPath }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
