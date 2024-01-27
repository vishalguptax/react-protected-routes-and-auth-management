import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext({
  authData: {
    isAuthenticated: false,
  },
  setAuthData: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("authData"));
    } catch (error) {
      return {
        isAuthenticated: false,
      };
    }
  });

  useEffect(() => {
    if (authData) {
      localStorage.setItem("authData", JSON.stringify(authData));
    }
  }, [authData]);

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
