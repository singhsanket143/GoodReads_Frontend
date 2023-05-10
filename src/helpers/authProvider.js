import React, { useState } from 'react';
import AuthContext from './authContext';
import Cookies from 'universal-cookie'

const cookies = new Cookies();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // logic to check authentication using cookies
    console.log(cookies.get('jwtToken'));
    if(cookies.get('jwtToken'))
    setIsAuthenticated(true);
  };

  const logout = () => {
    // logic to clear cookies
    console.log(cookies.remove('jwtToken', "/"));
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;