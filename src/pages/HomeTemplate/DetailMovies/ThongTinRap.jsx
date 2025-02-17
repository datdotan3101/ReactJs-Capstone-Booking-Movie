import React from "react";

export default function ThongTinRap() {
  return (
    <div className="mx-2">
      <ul>
        <li className="flex">
          <img
            className="w-[50px] h-auto"
            src="https://picsum.photos/200"
            alt=""
          />
          <div className="ml-2">
            <h5> GLX - Nguyễn Du</h5>
            <p>Địa chỉ</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
