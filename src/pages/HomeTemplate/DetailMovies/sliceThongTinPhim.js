import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";
import { fetchListMovies } from "../Phim/slice";

export const fetchDetailsMovie = createAsyncThunk(
  "fetchDetailMovie",
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const initialState = {
  loading: false,
  data: null,
  error: null,
};
const DetailMovieSlice = createSlice({
  name: "DetailMovieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailsMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDetailsMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchListMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default DetailMovieSlice.reducer;
