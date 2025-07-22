import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import type { User } from '../types/index';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthContextType {
  state: AuthState;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  resetPassword: (email: string, otp: string, newPassword: string) => Promise<boolean>;
  sendOTP: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const user: User = {
      id: '1',
      email,
      name: email.split('@')[0],
    };
    setState({ user, isAuthenticated: true });
    return true;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const user: User = {
      id: Date.now().toString(),
      email,
      name,
    };
    setState({ user, isAuthenticated: true });
    return true;
  };

  const logout = () => {
    setState({ user: null, isAuthenticated: false });
  };

  const sendOTP = async (email: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  };

  const resetPassword = async (
    email: string,
    otp: string,
    newPassword: string
  ): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        signup,
        logout,
        resetPassword,
        sendOTP,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
