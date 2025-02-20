import React from "react";
import { Link } from "react-router-dom";

export default function Gio({ hours }) {
  return (
    <div >
      <Link
        to={`/chitietphongve/${hours.maLichChieu}`}
        className="text-green-500"
      >
        {hours?.ngayChieuGioChieu
          ? new Date(hours.ngayChieuGioChieu).toLocaleTimeString("vi-VN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false, // Hiển thị định dạng 24h
            })
          : "Không có dữ liệu"}
      </Link>
    </div>
  );
}
