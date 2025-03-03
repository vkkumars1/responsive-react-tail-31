
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-purple pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Shop the Latest Tech Gadgets
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up">
            Discover premium electronics at unbeatable prices. Free shipping on all orders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link 
              to="/products" 
              className="flex items-center justify-center gap-2 bg-white text-purple hover:bg-gray-100 px-6 py-3 rounded-md transition-all duration-300 w-full sm:w-auto"
            >
              Shop Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              to="/signup" 
              className="flex items-center justify-center border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md transition-all duration-300 w-full sm:w-auto"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
