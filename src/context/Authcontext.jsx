import { createContext, useState, useEffect, useContext } from "react";
import { base_url } from "../library/api";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    sessionStorage.getItem("authToken")
  );
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Logout function
  const logout = () => {
    sessionStorage.removeItem("authToken");
    setAuthToken(null);
    setUser(null);
  };

  // Login function
  const login = async (username, password) => {
    setLoading(true);
    const data = { username: username, password: password };

    try {
      const response = await axios.post(`${base_url}/login`, data);
      const { token, user } = response.data;

      setAuthToken(token);
      sessionStorage.setItem("authToken", token);
      setUser(user);

      setTimeout(() => {
        setLoading(false);
      }, 3000);

      return { token, user };
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      throw error;
    }
  };

  // Signup function
  const signup = async (
    firstName,
    lastName,
    address,
    phone,
    password,
    email
  ) => {
    const data = { firstName, lastName, address, phone, email, password };

    try {
      const response = await axios.post(`${base_url}/signup`, data);
      return response.data;
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    if (storedToken) {
      setAuthToken(storedToken);
      // Ideally, verify the token and fetch user data here if needed
    }
    setLoading(false);
  }, [authToken]); // We only need to track `authToken` here

  return (
    <AuthContext.Provider
      value={{ authToken, user, login, signup, logout, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
