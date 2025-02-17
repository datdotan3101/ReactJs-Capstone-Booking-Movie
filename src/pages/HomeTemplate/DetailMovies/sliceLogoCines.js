import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";

export const fetchListCines = createAsyncThunk(
  "fetchListCines",
  async (__dirname, { rejectWithValue }) => {
    try {
      const result = await api.get("QuanLyRap/LayThongTinHeThongRap");
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
const ListCinesSlice = createSlice({
  name: "ListCinesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListCines.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchListCines.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchListCines.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default ListCinesSlice.reducer;
