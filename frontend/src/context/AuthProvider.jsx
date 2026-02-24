import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return JSON.parse(localStorage.getItem("isAuthenticated")) || false;
  });

    useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    const login = () => {
    setIsAuthenticated(true);
    };

    const logout = () => {
    setIsAuthenticated(false);
    };

    return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
    </AuthContext.Provider>
    );
};
