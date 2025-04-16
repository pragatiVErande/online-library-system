import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

const Header = ({ children }) => (
  <div className="flex flex-col">

    <nav className="bg-amber-950 h-20 justify-center flex text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-all duration-300 flex items-center">
          <FaBook className="mr-2" /> e-Granthalaya
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline text-lg font-medium transition-all duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books/all" className="hover:underline text-lg font-medium transition-all duration-300">
              Browse Books
            </Link>
          </li>
          <li>
            <Link to="/add-book" className="hover:underline text-lg font-medium transition-all duration-300">
              Add Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    <main className="flex-grow container mx-auto p-6 sm:p-8">
      {children}
    </main>

  </div>
);

export default Header;
