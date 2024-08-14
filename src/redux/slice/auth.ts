import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  profile: {},
};

const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.profile = {};
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setAuthenticated, logout, setToken, setProfile, updateProfile } =
  authSlice.actions;

export default authSlice.reducer;
