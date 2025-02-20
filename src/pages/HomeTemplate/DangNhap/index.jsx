import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "./slice";
import { Navigate } from "react-router-dom";
export default function DangNhap() {
  const state = useSelector((state) => state.LogInReducer);
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  if (state.data) {
    return <Navigate to="/" />;
  }
  const handleError = () => {
    const { error } = state;
    if (!error) return "";
    return (
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">{error.response.data.content}</span>{" "}
      </div>
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(actLogin(user));
  };
  return (
    <div className="mt-20">
      Dang Nhap
      <div>
        <form onSubmit={handleLogin} className="max-w-sm mx-auto">
          {handleError()}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tài khoản
            </label>
            <input
              name="taiKhoan"
              onChange={handleOnChange}
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mật khẩu
            </label>
            <input
              name="matKhau"
              onChange={handleOnChange}
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
