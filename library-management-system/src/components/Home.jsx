import React from "react";
import { Link } from "react-router-dom";
import { books, categories } from "../redux/Books";

function Home() {
  const popularBooks = books.slice(0, 4);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Book Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${category.toLowerCase()}`}
              className="text-center hover:scale-105 transition duration-300"
            >
              <img src={`${category}.png`} className="rounded-lg " />
              <p className=" text-black text-2xl font-bold">{category}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Popular Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {popularBooks.map((book) => (
            <div
              key={book.id}
              className="border border-gray-300 rounded-lg shadow-lg p-4 hover:scale-105 transition duration-300"
            >
              <img src={book.image_url} className="w-full" alt="" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {book.title}
              </h3>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <Link
                to={`/book/${book.id}`}
                className=" hover:text-blue-800 hover:underline text-lg font-medium transition-all duration-300"
              >
                <button className="bg-amber-950 rounded-lg w-full h-10 text-white">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
