import React from "react";
import { Link } from "react-router-dom";
export default function ListMovie({ movies }) {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="w-full h-52 object-contain rounded-t-lg"
            src={movies.hinhAnh}
            alt=""
          />
        </a>
        <div className="p-5 flex-grow flex items-center justify-center">
          <a href="#">
            <h5 className="text-xl font-bold text-gray-900 dark:text-white text-center">
              {movies.tenPhim}
            </h5>
          </a>
        </div>
        <Link
          to={`/detail/${movies.maPhim}`}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
}
