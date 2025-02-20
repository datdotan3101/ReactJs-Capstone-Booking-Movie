import React from "react";
import { Link } from "react-router-dom";

export default function ListMovie({ movies }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105">
      <a href="#">
        <img
          className="w-full h-56 object-cover rounded-t-lg"
          src={movies.hinhAnh}
          alt={movies.tenPhim}
        />
      </a>
      <div className="p-5 text-center">
        <a href="#">
          <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {movies.tenPhim}
          </h5>
        </a>
        <Link
          to={`/detail/${movies.maPhim}`}
          className="inline-block w-full text-center text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
}
