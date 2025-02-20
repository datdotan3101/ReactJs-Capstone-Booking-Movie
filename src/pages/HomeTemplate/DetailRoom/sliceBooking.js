import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";
import { act } from "react";

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
  listSeatSelected: [],
};

const findIndexSeat = (data, numberSeat) => {
  return data.findIndex((seat) => seat.tenGhe === numberSeat);
};
const ListSeatSlice = createSlice({
  name: "ListSeatSlice",
  initialState,
  reducers: {
    setSeatSelected: (state, action) => {
      const { payload } = action;
      const index = findIndexSeat(state.listSeatSelected, payload.tenGhe);
      const listSeatSelectedClone = [...state.listSeatSelected];
      if (index !== -1) {
        listSeatSelectedClone.splice(index, 1);
      } else {
        listSeatSelectedClone.push(payload);
      }
      state.listSeatSelected = listSeatSelectedClone;
    },
  },
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
export const { setSeatSelected } = ListSeatSlice.actions;
export default ListSeatSlice.reducer;
