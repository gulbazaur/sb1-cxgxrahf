import React from 'react';
import { categories } from '../data/categories';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="w-full bg-white py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Welcome to CategoryHub
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Your comprehensive guide to understanding various categories and topics. 
            Explore in-depth information, guides, and expert insights across multiple domains.
          </p>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Explore Our Knowledge Base
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="ml-2 text-xl font-semibold text-gray-900">{category.name}</h2>
              </div>
              <p className="text-gray-600 mb-4">
                {category.name === 'Electronics' && 'Comprehensive guides about modern technology and devices.'}
                {category.name === 'Media' && 'In-depth analysis of entertainment and digital content.'}
                {category.name === 'Fashion' && 'Expert insights into style trends and fashion history.'}
              </p>
              <ul className="space-y-2">
                {category.subcategories.map((sub) => (
                  <li key={sub}>
                    <Link 
                      to={`/category/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-12">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Expand Your Knowledge
          </h2>
          <p className="text-white text-opacity-90 text-center">
            Join our community of learners and enthusiasts. Discover detailed articles, 
            guides, and resources across all categories.
          </p>
        </div>
      </div>
    </main>
  );
}