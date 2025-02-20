import React from "react";

export default function GheDat({ movie }) {
  return (
    <div>
      <table>
        <thead>
          <h1>Thông tin phim</h1>
          <h1>{movie.tenPhim}</h1>
          <h1>Cụm rạp: {movie.tenCumRap}</h1>
          <h1>Rạp: {movie.tenRap}</h1>
          <h1>Giờ chiếu: {movie.gioChieu}</h1>
        </thead>
      </table>
    </div>
  );
}
