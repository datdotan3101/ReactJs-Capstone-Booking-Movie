import { configureStore } from "@reduxjs/toolkit";
import CarouselReducer from "./../pages/HomeTemplate/HomePage/Carousel/slice";
import ListMoviesReducer from "./../pages/HomeTemplate/Phim/slice";
import DetailMoviesReducer from "./../pages/HomeTemplate/DetailMovies/sliceThongTinPhim";
import ListLogoReducer from "./../pages/HomeTemplate/DetailMovies/sliceLogoCines";
import ListHourReducer from "./../pages/HomeTemplate/DetailMovies/sliceLich";
import ListSeatReducer from "./../pages/HomeTemplate/DetailRoom/sliceBooking";
export const store = configureStore({
  reducer: {
    CarouselReducer,
    ListMoviesReducer,
    DetailMoviesReducer,
    ListLogoReducer,
    ListHourReducer,
    ListSeatReducer,
  },
});
