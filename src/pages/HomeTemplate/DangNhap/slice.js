import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";

// Action đăng nhập
export const actLogin = createAsyncThunk(
  "actionLogin",
  async (user, { rejectWithValue }) => {
    try {
      const result = await api.post("QuanLyNguoiDung/DangNhap", user);
      const userInfo = result.data.content;

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      return userInfo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Action đăng xuất
export const actLogout = () => (dispatch) => {
  localStorage.removeItem("userInfo"); // Xóa khỏi localStorage
  dispatch(logout()); // Dispatch action logout để cập nhật Redux state
};

// Lấy thông tin user từ localStorage
const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  loading: false,
  data: userInfo,
  error: null,
};

const actionLoginSlice = createSlice({
  name: "actionLoginSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null; // Xóa dữ liệu người dùng khi logout
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(actLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(actLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = actionLoginSlice.actions;
export default actionLoginSlice.reducer;
