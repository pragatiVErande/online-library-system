import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { books } from '../redux/Books';

function BrowseBooks() {
  const { category } = useParams();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filtered = category === 'all'
      ? books
      : books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    setFilteredBooks(filtered);
  }, [category]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const searched = books.filter(book =>
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
    setFilteredBooks(searched);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Browse Books: {category}</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title or author"
          className="w-full md:w-1/2 lg:w-1/3 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
           
            <div key={book.id} className="border border-gray-300 rounded-lg shadow-lg p-4 hover:shadow-xl hover:scale-105 transition hover:border-blue-500">
               <Link 
            to={`/book/${book.id}`} >
              <img  src={book.image_url} className='w-full rounded-lg' alt="" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <p className="text-gray-500 text-sm mb-4">Category: {book.category}</p>
              
              </Link>
              <Link 
                to={`/book/${book.id}`} 
                className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-all duration-300"
              >
                <button className="bg-black rounded-lg w-full h-10 text-white">View Details</button>
              </Link>
            </div>
            
            
          ))
        ) : (
          <p className="col-span-3 text-center text-lg text-gray-500">No books found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
