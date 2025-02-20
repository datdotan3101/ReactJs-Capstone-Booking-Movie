import React, { useState } from "react";
import ThongTinRap from "./ThongTinRap";

export default function Rap({ logo }) {
  const [showCinemas, setShowCinemas] = useState(false);

  return (
    <div className="border-r-2 border-b-2 border-gray-700 p-2">
      {/* Logo hệ thống rạp */}
      <div
        className="flex items-center cursor-pointer p-2 hover:bg-gray-800 rounded"
        onClick={() => setShowCinemas(!showCinemas)}
      >
        <img
          className="w-[50px] rounded"
          src={logo.logo}
          alt={logo.tenHeThongRap}
        />
        <h2 className="ml-4 font-semibold">{logo.tenHeThongRap}</h2>
      </div>

      {/* Danh sách cụm rạp */}
      {showCinemas && (
        <div className="ml-4 mt-2">
          {logo.danhSachCumRap?.map((rap) => (
            <ThongTinRap key={rap.maCumRap} rap={rap} />
          ))}
        </div>
      )}
    </div>
  );
}
