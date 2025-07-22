import React from 'react';
import { ShoppingCart, User, Heart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { state: cartState } = useCart();
  const { state: authState, logout } = useAuth();

  const totalItems = cartState.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">F1</span>
            </div>
            <span className="text-xl font-bold">VELOCITY</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`hover:text-red-400 transition-colors ${
                currentPage === 'home' ? 'text-red-400' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`hover:text-red-400 transition-colors ${
                currentPage === 'products' ? 'text-red-400' : ''
              }`}
            >
              Products
            </button>
            <button
              onClick={() => onNavigate('category')}
              className={`hover:text-red-400 transition-colors ${
                currentPage === 'category' ? 'text-red-400' : ''
              }`}
            >
              Tees
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('products')}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => onNavigate('cart')}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {authState.isAuthenticated ? (
              <div className="relative group">
                <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                  <User className="w-5 h-5" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-gray-700">
                      {authState.user?.name}
                    </div>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => onNavigate('login')}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;