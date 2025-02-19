import React, { useEffect, useMemo } from "react";
import ListMovie from "./ListMovie";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMovies } from "./slice";

export default function Phim() {
  const state = useSelector((state) => state.ListMoviesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListMovies());
  }, [dispatch]);

  const renderListMovies = useMemo(() => {
    return state.data?.map((movies) => (
      <ListMovie key={movies.maPhim} movies={movies} />
    ));
  }, [state.data]);

  return (
    <div className="mt-20">
      Phim
      <div className="grid grid-cols-4 gap-6">{renderListMovies}</div>
    </div>
  );
}
