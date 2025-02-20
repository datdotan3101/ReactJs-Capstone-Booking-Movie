import { configureStore } from "@reduxjs/toolkit";
import CarouselReducer from "./../pages/HomeTemplate/HomePage/Carousel/slice";
import ListMoviesReducer from "./../pages/HomeTemplate/Phim/slice";
import DetailMoviesReducer from "./../pages/HomeTemplate/DetailMovies/sliceThongTinPhim";
import ListLogoReducer from "./../pages/HomeTemplate/DetailMovies/sliceLogoCines";
import ListHourReducer from "./../pages/HomeTemplate/DetailMovies/sliceLich";
import ListSeatReducer from "./../pages/HomeTemplate/DetailRoom/sliceBooking";
import ListCumRapReducer from "./../pages/HomeTemplate/DetailMovies/sliceCumRap";
import LogInReducer from "./../pages/HomeTemplate/DangNhap/slice";
export const store = configureStore({
  reducer: {
    CarouselReducer,
    ListMoviesReducer,
    DetailMoviesReducer,
    ListLogoReducer,
    ListHourReducer,
    ListSeatReducer,
    ListCumRapReducer,
    LogInReducer,
  },
});
