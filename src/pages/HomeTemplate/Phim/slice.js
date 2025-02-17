import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./../../../services/api";
export const fetchListMovies = createAsyncThunk(
  "fetchListMovies",
  async (__dirname, { rejectWithValue }) => {
    try {
      const result = await api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
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
const listMoviesSlice = createSlice({
  name: "listMoviesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchListMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchListMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default listMoviesSlice.reducer;
