import React from "react";
import { useDispatch } from "react-redux";
import { actLogout } from "./slice"; // Import action đăng xuất

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actLogout());
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      Đăng xuất
    </button>
  );
}
