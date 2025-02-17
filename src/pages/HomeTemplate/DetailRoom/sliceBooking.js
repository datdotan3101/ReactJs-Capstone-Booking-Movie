import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";

export const fetchListSeat = createAsyncThunk(
  "fetchListSeat",
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.get(
        `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
      );
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
const ListSeatSlice = createSlice({
  name: "ListSeatSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListSeat.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchListSeat.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchListSeat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default ListSeatSlice.reducer;
