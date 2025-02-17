import React from "react";

export default function Rap({ logo }) {
  return (
    <div className="border-r-2 border-b-2 border-gray-200">
      {/* Logo và tên rạp  */}
      <div className="flex">
        <img className="w-[50px]" src={logo.logo} alt="" />
        <h2 className="ml-6">{logo.tenHeThongRap}</h2>
      </div>
    </div>
  );
}
