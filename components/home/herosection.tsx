"use client";

import React from "react";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-blue-300">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-grow text-center text-white">
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-white">Bookmark Manager</span>
        </h1>
        <p className="text-lg mt-2">
          Organize and manage your favorite links effortlessly.
        </p>

        {/* Get Started Button */}
        <Link href="/GetStartedButtonPage">
          <button className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg text-white text-lg font-medium">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Herosection;
