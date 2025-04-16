import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { books } from '../redux/Books';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <div className="text-center text-xl font-semibold text-gray-600 py-8">Book not found</div>;
  }

  return (
    <div className="bg-amber-200 max-w-3xl mx-auto px-6 py-8  rounded-lg shadow-lg scale-90 ">
      <img src={book.image_url} className='my-2 rounded-lg w-full ' alt="" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{book.title}</h1>
      <p className="text-xl font-medium text-gray-700 mb-2">by {book.author}</p>
      <p className="text-gray-600 text-lg mb-4">Category: <span className="font-semibold">{book.category}</span></p>
      <p className="text-gray-800 mb-6">{book.description}</p>
      <p className="text-lg font-semibold text-gray-700 mb-6">Rating: <span className="text-black">{book.rating} / 5</span></p>
      
      <div className="flex justify-between items-center">
        <Link to="/books/all" >
        <button className="text-white hover:bg-blue-600 duration-300 transition text-lg font-medium bg-amber-950 p-2 rounded-lg" >
          Back to Browse
          </button>
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="bg-amber-950 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
