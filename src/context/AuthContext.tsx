import React, { createContext, useState, useEffect } from 'react';

interface AuthContextValue {
  isAuthenticated: boolean;
  user: any; // Replace 'any' with your user data type
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: any) => void; // Replace 'any' with your user data type
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => {},
  setUser: () => {},
});

const AuthProvider = ({ children }: React.PropsWithChildren<any>) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Replace with your logic to check if a user is already logged in on load (e.g., checking localStorage)
  useEffect(() => {
    // const storedUser = localStorage.getItem('user');
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setIsAuthenticated, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthProvider };
