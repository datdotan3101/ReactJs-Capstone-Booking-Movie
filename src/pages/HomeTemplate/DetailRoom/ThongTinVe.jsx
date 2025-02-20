import React from "react";

export default function ThongTinVe({ movie }) {
  return (
    <div>
      <h2>{movie.tenPhim}</h2>
      <p>Cụm rạp: {movie.tenCumRap}</p>
      <p>Rạp: {movie.tenRap}</p>
    </div>
  );
}
