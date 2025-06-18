
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserDropdown = () => {
  const { user, logout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center">
          <User className="h-4 w-4 mr-2" />
          {user?.name || 'Account'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profile" className="cursor-pointer">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to={user?.isVendor ? "/vendor/dashboard" : "/dashboard"} className="cursor-pointer">
            Dashboard
          </Link>
        </DropdownMenuItem>
        {user?.walletAddress && (
          <DropdownMenuItem asChild>
            <Link to="/invest/dashboard" className="cursor-pointer">Investments</Link>
          </DropdownMenuItem>
        )}
        {!user?.tutorialCompleted && (
          <DropdownMenuItem asChild>
            <Link to="/tutorial" className="cursor-pointer">Complete Tutorial</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
