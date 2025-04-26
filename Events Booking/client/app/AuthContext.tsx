import React, { createContext, useContext, useState } from 'react';

// ✅ Extended user data type
interface User {
  _id: string;
  email: string;
  name: string;
  city: string;
  gender: string;
  age: number;
}

// Define context type
interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
  serverIP: string; // ✅ Added serverIP to context
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const serverIP = 'http://192.168.0.80:5001'; // ✅ Store your IP address here

  return (
    <AuthContext.Provider value={{ user, setUser, serverIP }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy usage
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
