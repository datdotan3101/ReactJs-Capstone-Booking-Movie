import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../../services/api";

export const fetchImageCarousel = createAsyncThunk(
  "fetchImgCarousel",
  async (__dirname, { rejectWithValue }) => {
    try {
      const result = await api.get("QuanLyPhim/LayDanhSachBanner");
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
const fetchImagesCarousel = createSlice({
  name: "fetchImagesCarousel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImageCarousel.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImageCarousel.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchImageCarousel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default fetchImagesCarousel.reducer;
