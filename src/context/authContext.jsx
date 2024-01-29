import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { decryptData, encryptData } from "../utils/encryption";

const AuthContext = createContext({
  authData: {
    isAuthenticated: false,
  },
  setAuthData: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthValue] = useState(() => {
    if (typeof window === "undefined") {
      return {
        isAuthenticated: false,
      };
    }
    try {
      const encryptedData = localStorage.getItem("authData");
      if (encryptedData) {
        const decryptedData = decryptData(encryptedData);
        return JSON.parse(decryptedData);
      }
      return {
        isAuthenticated: false,
      };
    } catch (error) {
      console.log(error);
      return {
        isAuthenticated: false,
      };
    }
  });

  const setAuthData = (data) => {
    try {
      setAuthValue(data);
      if (typeof window !== "undefined") {
        const encryptedData = encryptData(JSON.stringify(data));
        localStorage.setItem("authData", encryptedData);
      }
    } catch (error) {
      console.error("Error setting authData:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
