import React, { useEffect } from "react";
import ListMovie from "./ListMovie";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMovies } from "./slice";

export default function Phim() {
  const state = useSelector((state) => state.ListMoviesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListMovies());
  }, []);

  const renderListMovies = () => {
    const { data } = state;
    return data?.map((movies) => (
      <ListMovie key={movies.maPhim} movies={movies} />
    ));
  };
  return (
    <div className="mt-20">
      Phim
      <div className="grid grid-cols-4 gap-6">{renderListMovies()}</div>
    </div>
  );
}
