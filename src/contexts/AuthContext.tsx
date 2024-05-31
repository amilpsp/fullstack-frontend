import axios from 'axios';
import React, { createContext, useState, ReactNode } from 'react';

// Define types for user and context

export interface AuthContextType {
  user: User | null;
  signup: (userData: User) => void;
  login: (userData: User) => void;
  logout: () => void;
}

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

// Create a provider component

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (userData: User) => {
    const loginConfig = {
      method: 'post',
      url: 'http://localhost:8080/login',
      data: userData
    };

    try {
      const result = await axios(loginConfig);
      setUser(userData);
      localStorage.setItem('userLogged', JSON.stringify(result.data));
      console.log('Logged in user:', userData.username); // Log user data
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const signup = async (userData: User) => {
    const signupConfig = {
      method: 'post',
      url: 'http://localhost:8080/signup',
      data: userData
    };

    try {
      const result = await axios(signupConfig);
      await login(result.data);
    } catch (error) {
      throw new Error('Signup failed');
    }
  };

  const logout = async () => {
    const logoutData = JSON.parse(localStorage.getItem('userLogged') || '{}');
    const logoutConfig = {
      method: 'delete',
      url: 'http://localhost:8080/login',
      data: logoutData
    };

    try {
      await axios(logoutConfig);
    } catch (error) {
      console.log(
        "wasn't able to remove the logged in session from the database"
      );
    }
    localStorage.removeItem('userLogged');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
