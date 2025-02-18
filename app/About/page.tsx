"use client";
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            About Bookmark Manager
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            An intuitive, user-friendly platform to organize, categorize, and manage your favorite links with ease.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-16">
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300">
              Bookmark Manager is designed to simplify your online experience. Whether you are managing personal bookmarks or organizing links for your business, this platform helps you save and categorize everything in one place.
              <br />
              <br />
              We aim to provide an effortless way to store and organize your digital resources. With seamless integration with Clerk for authentication and a user-centric interface, managing your bookmarks has never been this easy.
            </p>
          </div>

          <div className="w-full sm:w-1/2 mt-8 sm:mt-0 text-center">
            {/* Placeholder for an icon or abstract design */}
            <div className="w-32 h-32 bg-blue-700 rounded-full mx-auto flex items-center justify-center">
              <span className="text-4xl text-white">🔖</span>
            </div>
            <p className="mt-4 text-lg text-gray-300">Visualize your bookmarks with ease using Bookmark Manager.</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Features</h2>
          <p className="text-lg sm:text-xl text-gray-200">
            Discover the key features that make Bookmark Manager a powerful tool for managing your digital resources.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Easy Categorization</h3>
            <p>
              Categorize your bookmarks into folders or tags, making it easier to find what you are looking for quickly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Seamless Authentication</h3>
            <p>
              Sign in with ease using Clerk for secure authentication and save your bookmarks across devices.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Search & Filter</h3>
            <p>
              Quickly search and filter through your saved bookmarks to find exactly what you need when you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
