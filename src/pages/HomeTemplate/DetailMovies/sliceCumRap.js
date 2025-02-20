import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";

export const fetchDanhSachCumRap = createAsyncThunk(
  "fetchDanhSachCumRap",
  async (maHeThongRap, { rejectWithValue }) => {
    try {
      const result = await api.get(
        // `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=BHDStar"
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
const danhDachCumRapSlice = createSlice({
  name: "danhDachCumRapSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDanhSachCumRap.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDanhSachCumRap.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDanhSachCumRap.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default danhDachCumRapSlice.reducer;
