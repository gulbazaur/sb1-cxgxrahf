import React from 'react';
import { useParams } from 'react-router-dom';

export function CategoryPage() {
  const { category, subcategory } = useParams();

  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm font-medium mb-8">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <span className="text-gray-500">{category}</span>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="text-gray-900">{subcategory}</li>
          </ol>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {subcategory}
          </h1>

          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
              alt="Category Header"
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
            />
          </div>

          <div className="space-y-6 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Feature one explanation and detailed description</li>
              <li>Feature two with comprehensive breakdown</li>
              <li>Feature three with in-depth analysis</li>
              <li>Feature four with practical examples</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Detailed Analysis</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Professional tip one with practical application
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Professional tip two with real-world examples
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Professional tip three with industry insights
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Conclusion</h2>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}