import React from "react";

export default function ThongTinRap({ rap }) {
  return (
    <div className="mx-2 p-2 border-b border-gray-700">
      <ul>
        <li className="flex">
          <img
            className="w-[50px] h-auto rounded"
            src="https://picsum.photos/200"
            alt={rap.tenCumRap}
          />
          <div className="ml-2">
            <h5 className="font-semibold">{rap.tenCumRap}</h5>
            <p className="text-sm text-gray-400">{rap.diaChi}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
