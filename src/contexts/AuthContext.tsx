
import React, { createContext, useContext, useState, useEffect } from 'react';

export type SupportedChain = 'solana' | 'base' | 'lisk' | 'avalanche' | 'arbitrum' | 'celo' | 'starknet' | 'aptos' | 'sui';
export type SupportedWallet = 'argent' | 'phantom' | 'coinbase' | 'metamask' | 'petra' | 'slush' | 'brave';

type UserType = {
  id: string;
  name: string;
  email: string;
  walletAddress?: string;
  chain?: SupportedChain;
  wallet?: SupportedWallet;
  isVendor?: boolean;
  profileCompleted?: boolean;
  tutorialCompleted?: boolean;
  avatar?: string;
  phone?: string;
  businessName?: string;
} | null;

interface AuthContextType {
  user: UserType;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  connectWallet: (address: string, chain: SupportedChain, wallet: SupportedWallet) => Promise<void>;
  updateProfile: (updates: Partial<UserType>) => void;
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
        email,
        profileCompleted: false,
        tutorialCompleted: false
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

  const register = async (userData: any) => {
    setIsLoading(true);
    try {
      const mockUser = {
        id: 'user_' + Date.now(),
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        phone: userData.phone,
        isVendor: userData.isVendor || false,
        businessName: userData.businessName,
        profileCompleted: false,
        tutorialCompleted: false
      };
      
      setUser(mockUser);
      localStorage.setItem('kelo_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Registration failed:', error);
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
        email: 'googleuser@example.com',
        profileCompleted: false,
        tutorialCompleted: false
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

  const connectWallet = async (address: string, chain: SupportedChain, wallet: SupportedWallet) => {
    setIsLoading(true);
    try {
      // Mock wallet connection - would be replaced with actual wallet integration
      const mockUser = {
        id: 'wallet_' + Date.now(),
        name: 'Wallet User',
        email: `${address.substring(0, 6)}...${address.substring(address.length - 4)}@wallet.kelo`,
        walletAddress: address,
        chain,
        wallet,
        profileCompleted: false,
        tutorialCompleted: false
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

  const updateProfile = (updates: Partial<UserType>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('kelo_user', JSON.stringify(updatedUser));
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
        register,
        loginWithGoogle,
        connectWallet,
        updateProfile,
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
