import React, { useEffect } from "react";
import ListMovie from "./ListMovie";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMovies } from "./slice";

export default function Phim() {
  const state = useSelector((state) => state.ListMoviesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListMovies());
  }, [dispatch]);

  const renderListMovies = () => {
    return state.data?.map((movie) => (
      <ListMovie key={movie.maPhim} movies={movie} />
    ));
  };

  return (
    <div className="container mx-auto mt-16 px-4 py-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-8 uppercase tracking-wide text-indigo-400">
        Danh Sách Phim
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderListMovies()}
      </div>
    </div>
  );
}
