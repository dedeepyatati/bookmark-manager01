"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // You can add your search logic here (e.g., redirect or filter)
    setIsModalOpen(false);
  };

  return (
    <div className='sticky top-0 z-50 w-full border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center gap-8'>
            <Link href="/" className='flex items-center space-x-2'>
              <span className='font-bold text-2xl'>
                <span className='bg-gradient-to-r from-purple-600 to bg-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent'>BookMark</span>
                <span>-</span>
                <span className='text-foreground'>Manager</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className='hidden md:flex items-center gap-4'>
            <Link href="/GetStartedButtonPage" className='text-sm font-medium text-foreground transition-colours hover:text-foreground'>
              Add Bookmark
            </Link>
            <Link href={"/About"} className='text-sm font-medium text-foreground transition-colours hover:text-foreground'>
              About
            </Link>

            {/* Search button
            <button
              onClick={toggleModal}
              className='flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white'
            >
              🔍
            </button> */}

            {/* user actions */}
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className='hidden md:flex items-center gap-2'>
                <SignInButton>
                  <Button>Login</Button>
                </SignInButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Search Bookmarks</h2>
              <button
                onClick={toggleModal}
                className="text-lg text-gray-600"
              >
                X
              </button>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for bookmarks..."
              className="mt-4 w-full p-3 border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleSearch}
              className="mt-4 w-full bg-purple-600 text-white p-3 rounded-lg"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
