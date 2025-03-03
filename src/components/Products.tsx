import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

// Product data
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life.',
    price: 199.99,
    image: '/lovable-uploads/958f145f-76e0-468d-a360-a16f4d4f35bf.png'
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor, GPS, and 7-day battery life.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&h=300&q=80'
  },
  {
    id: 3,
    name: 'Smartphone',
    description: 'Latest model with 6.7-inch display, 128GB storage, and triple camera system.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&h=300&q=80'
  }
];

const Products = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600">
            Check out our most popular items
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple font-bold text-xl">${product.price.toFixed(2)}</span>
                  <button className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition-colors duration-300">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
