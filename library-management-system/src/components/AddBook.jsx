import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';  
import { categories } from '../redux/Books';  



function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    image_url: '', 
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.author) newErrors.author = 'Author is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.rating || formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }
    if (!formData.image_url) {
      newErrors.image_url = 'Please provide a valid image URL (jpg, jpeg, png, gif, bmp)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addBook(formData));  // Dispatch the action to add the book to Redux store
      navigate('/books/all');  // Navigate to the book list page
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter book title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="author" className="text-lg font-medium text-gray-700 mb-2">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter author's name"
          />
          {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="text-lg font-medium text-gray-700 mb-2">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select a category</option>
            {categories.filter(cat => cat !== 'All').map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium text-gray-700 mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="4"
            placeholder="Enter a brief description of the book"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="rating" className="text-lg font-medium text-gray-700 mb-2">Rating (0-5)</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Rate the book from 0 to 5"
          />
          {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="image_url" className="text-lg font-medium text-gray-700 mb-2">Image URL</label>
          <input
            type="url"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter image URL"
          />
          {errors.image_url && <p className="text-red-500 text-sm mt-1">{errors.image_url}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
    
  );
}

export default AddBook;
