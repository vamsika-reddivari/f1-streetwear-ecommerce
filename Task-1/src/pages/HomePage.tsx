import React from 'react';
import { ArrowRight, Zap, Trophy, Flag } from 'lucide-react';
import { categories } from '../data/products';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/12789/pexels-photo-12789.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-12 h-12 text-red-500 mr-4" />
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              VELOCITY
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Premium F1-inspired streetwear that captures the speed, precision, and passion of Formula 1 racing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('products')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <button
              onClick={() => onNavigate('category')}
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Shop Tees
            </button>
          </div>
        </div>

        {/* Animated elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Trophy className="w-8 h-8 text-yellow-400" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce">
          <Flag className="w-8 h-8 text-red-500" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Racing Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our collection inspired by the world's most prestigious racing circuits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl ${
                  category.isActive 
                    ? 'cursor-pointer transform hover:scale-105' 
                    : 'cursor-not-allowed opacity-75'
                }`}
                onClick={() => category.isActive && onNavigate('category')}
              >
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {category.name}
                  </h3>
                  {category.isActive ? (
                    <div className="flex items-center text-red-400">
                      <span className="text-sm font-medium">Shop Now</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  ) : (
                    <span className="text-gray-400 text-sm">Coming Soon</span>
                  )}
                </div>

                {category.isActive && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">
                Quick delivery inspired by pit stop precision
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Championship Quality</h3>
              <p className="text-gray-400">
                Premium materials worthy of racing champions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flag className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Exclusive Designs</h3>
              <p className="text-gray-400">
                Limited edition pieces for true F1 fans
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;