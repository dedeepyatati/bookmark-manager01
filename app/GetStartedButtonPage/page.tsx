"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Search } from "lucide-react";

interface Bookmark {
  title: string;
  url: string;
  category: string;
  favorite: boolean;
}

const BookmarkManager = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleAddBookmark = () => {
    if (title && url && category) {
      const newBookmark: Bookmark = { title, url, category, favorite };
      if (editIndex !== null) {
        const updatedBookmarks = [...bookmarks];
        updatedBookmarks[editIndex] = newBookmark;
        setBookmarks(updatedBookmarks.sort((a, b) => Number(b.favorite) - Number(a.favorite)));
        showMessage("Bookmark updated successfully!");
        setEditIndex(null);
      } else {
        setBookmarks(
          [...bookmarks, newBookmark].sort((a, b) => Number(b.favorite) - Number(a.favorite))
        );
        showMessage("Bookmark added successfully!");
      }
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle("");
    setUrl("");
    setCategory("");
    setFavorite(false);
  };

  const handleEditBookmark = (index: number) => {
    const bookmark = bookmarks[index];
    setTitle(bookmark.title);
    setUrl(bookmark.url);
    setCategory(bookmark.category);
    setFavorite(bookmark.favorite);
    setEditIndex(index);
    showMessage("Update your bookmark details!");
  };

  const handleToggleFavorite = (index: number) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks[index].favorite = !updatedBookmarks[index].favorite;
    setBookmarks(updatedBookmarks.sort((a, b) => Number(b.favorite) - Number(a.favorite)));
  };

  const handleDeleteBookmark = (index: number) => {
    const updatedBookmarks = bookmarks.filter((_, i) => i !== index);
    setBookmarks(updatedBookmarks);
    showMessage("Bookmark deleted successfully!");
    setConfirmDeleteIndex(null);
  };

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2000);
  };

  // Filter bookmarks by category instead of title
  const filteredBookmarks = bookmarks.filter((bookmark) =>
    bookmark.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 relative">
      {/* Page Title Centered */}
      <h1 className="text-3xl font-bold text-center mb-6">Add your Bookmarks</h1>

      {/* Search Icon Button Positioned Lower */}
      <button
        onClick={() => setShowSearchBar(!showSearchBar)}
        className="fixed top-16 right-5 z-50 bg-blue-500 text-white p-2 rounded-full transition-transform duration-150 hover:scale-110"
      >
        <Search size={20} />
      </button>

      {/* Search Bar for Category */}
      {showSearchBar && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 w-96 bg-white shadow-lg border p-2 rounded-lg z-40"
        >
          <input
            type="text"
            placeholder="Search by category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </motion.div>
      )}

      {/* Success Message */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-5 left-1/2 -translate-x-[50%] z-50"
        >
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            {message}
          </div>
        </motion.div>
      )}

      {/* Input Fields */}
      <div className="flex flex-col items-center mb-4 mt-16">
        <input
          type="text"
          placeholder="Bookmark Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-1/2 mb-2"
        />
        <input
          type="text"
          placeholder="Bookmark URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 w-1/2 mb-2"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-1/2 mb-2"
        />
        <button
          onClick={handleAddBookmark}
          className="bg-blue-500 text-white px-4 py-2 rounded transition-transform duration-200 hover:scale-105"
        >
          {editIndex !== null ? "Update Bookmark" : "Add Bookmark"}
        </button>
      </div>

      {/* Bookmark List */}
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Title</th>
            <th className="border p-2">URL</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Favorite</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookmarks.map((bookmark, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="border"
            >
              <td className="border p-2">{bookmark.title}</td>
              <td className="border p-2">
                <a
                  href={bookmark.url}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {bookmark.url}
                </a>
              </td>
              <td className="border p-2">{bookmark.category}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleToggleFavorite(index)}
                  className="p-1 border rounded transition-transform duration-150 hover:scale-110"
                >
                  {bookmark.favorite ? "★" : "☆"}
                </button>
              </td>
              <td className="border p-2 flex gap-2 justify-center">
                <button
                  onClick={() => handleEditBookmark(index)}
                  className="bg-yellow-400 px-2 py-1 rounded transition-transform duration-150 hover:scale-105"
                >
                  Edit
                </button>
                <button
                  onClick={() => setConfirmDeleteIndex(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded transition-transform duration-150 hover:scale-105"
                >
                  Delete
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {confirmDeleteIndex !== null && (
        <Dialog
          open={true}
          onClose={() => setConfirmDeleteIndex(null)}
          className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6"
          >
            <Dialog.Title className="text-lg font-bold mb-4">Confirm Deletion</Dialog.Title>
            <p className="mb-4">Are you sure you want to delete this bookmark?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleDeleteBookmark(confirmDeleteIndex)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setConfirmDeleteIndex(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </Dialog>
      )}
    </div>
  );
};

export default BookmarkManager;
