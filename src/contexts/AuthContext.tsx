
import React, { createContext, useContext, useState, useEffect } from 'react';

type UserType = {
  id: string;
  name: string;
  email: string;
  walletAddress?: string;
  isVendor?: boolean;
} | null;

interface AuthContextType {
  user: UserType;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  connectWallet: (address: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem('kelo_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock API call - would be replaced with actual auth API
      const mockUser = {
        id: 'user_' + Date.now(),
        name: email.split('@')[0],
        email
      };
      
      setUser(mockUser);
      localStorage.setItem('kelo_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Mock Google OAuth - would be replaced with actual Google OAuth
      const mockUser = {
        id: 'google_' + Date.now(),
        name: 'Google User',
        email: 'googleuser@example.com'
      };
      
      setUser(mockUser);
      localStorage.setItem('kelo_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Google login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const connectWallet = async (address: string) => {
    setIsLoading(true);
    try {
      // Mock wallet connection - would be replaced with actual wallet integration
      const mockUser = {
        id: 'wallet_' + Date.now(),
        name: 'Wallet User',
        email: `${address.substring(0, 6)}...${address.substring(address.length - 4)}@wallet.kelo`,
        walletAddress: address
      };
      
      setUser(mockUser);
      localStorage.setItem('kelo_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Wallet connection failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('kelo_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        loginWithGoogle,
        connectWallet,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

export default AuthContext;
