
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import type { SupportedChain, SupportedWallet } from '@/contexts/AuthContext';

export const useAuthProvider = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  
  const loginWithEmail = async (email: string, password: string) => {
    try {
      await auth.login(email, password);
      toast({
        title: "Login successful",
        description: "Welcome back to Kelo!"
      });
      navigate('/dashboard');
      return true;
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
      return false;
    }
  };
  
  const loginWithGoogle = async () => {
    try {
      await auth.loginWithGoogle();
      toast({
        title: "Login successful",
        description: "Welcome to Kelo!"
      });
      navigate('/dashboard');
      return true;
    } catch (error) {
      toast({
        title: "Google login failed",
        description: "Please try again later.",
        variant: "destructive"
      });
      return false;
    }
  };
  
  const loginWithWallet = async (address: string, chain: SupportedChain, wallet: SupportedWallet) => {
    try {
      await auth.connectWallet(address, chain, wallet);
      toast({
        title: "Wallet connected",
        description: "Your wallet is now connected to Kelo!"
      });
      navigate('/invest/dashboard');
      return true;
    } catch (error) {
      toast({
        title: "Wallet connection failed",
        description: "Please try again later.",
        variant: "destructive"
      });
      return false;
    }
  };
  
  const logout = () => {
    auth.logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
    navigate('/');
  };
  
  return {
    ...auth,
    loginWithEmail,
    loginWithGoogle,
    loginWithWallet,
    logout
  };
};

export default useAuthProvider;
