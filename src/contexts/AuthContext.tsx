import axios from 'axios';
import React, { createContext, useState, ReactNode, useEffect } from "react";

// Define types for user and context
export interface Token {
	user_id?: number;
	username?: string;
	token: string | null;
}

export interface AuthContextType {
	user: User | null;
	signup: (userData: User) => void;
	login: (userData: User) => void;
	logout: () => void;
	checkUserSession: () => void;
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

	const checkUserSession = async (/* userData: User */) => {
    const storedUser = localStorage.getItem('userLogged');

    const checkStoredConfig = {
      method: 'get',
      url: 'https://loqui-6bmx.onrender.com/login',
      data: storedUser,
    };
    if (storedUser) {
      try {
        await axios(checkStoredConfig);
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error(
          'Error verifying session, your session has been terminated, please log in again',
          error
        );
        localStorage.removeItem('userLogged');
      }
    }
  };

  const login = async (userData: User) => {
    const loginConfig = {
      method: 'post',
      url: 'https://loqui-6bmx.onrender.com/login',
      data: userData,
    };

    try {
      const result = await axios(loginConfig);
      setUser(userData);
      localStorage.setItem('userLogged', JSON.stringify(result.data));
      /* 			console.log("Logged in user:", userData.username); // Log user data
       */
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const signup = async (userData: User) => {
    const signupConfig = {
      method: 'post',
      url: 'https://loqui-6bmx.onrender.com/signup',
      data: userData,
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
      url: 'https://loqui-6bmx.onrender.com/login',
      data: logoutData,
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

	useEffect(() => {
		checkUserSession();
	}, []);

	return (
		<AuthContext.Provider
			value={{ user, signup, login, logout, checkUserSession }}
		>
			{children}
		</AuthContext.Provider>
	);
};
