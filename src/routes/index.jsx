import { Route } from "react-router-dom";
import HomeTemplate from "../pages/HomeTemplate";
import HomePage from "../pages/HomeTemplate/HomePage";
import Phim from "../pages/HomeTemplate/Phim";
import DetailMovies from "../pages/HomeTemplate/DetailMovies";
import DatVe from "../pages/HomeTemplate/DetailRoom";
import DangNhap from "../pages/HomeTemplate/DangNhap";
import DangKy from "../pages/HomeTemplate/DangKy";
const routes = [
  {
    path: "",
    element: HomeTemplate,
    children: [
      {
        path: "",
        element: HomePage,
      },
      {
        path: "detail/:id",
        element: DetailMovies,
      },
      {
        path: "phim",
        element: Phim,
      },
      {
        path: "chitietphongve/:id",
        element: DatVe,
      },
      {
        path: "dang-nhap",
        element: DangNhap,
      },
      { path: "dang-ky", element: DangKy },
    ],
  },
];

export const renderRoute = () => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.children.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};
