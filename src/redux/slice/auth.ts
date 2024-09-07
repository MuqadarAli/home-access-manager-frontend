import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: null,
  profile: {},
  community_id: null,
};

const authSlice: any = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.profile = {};
      state.community_id = null;
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
    setCommunityId: (state, action) => {
      state.community_id = action.payload;
    },
  },
});

export const {
  setAuthenticated,
  logout,
  setToken,
  setProfile,
  updateProfile,
  setCommunityId,
} = authSlice.actions;

export default authSlice.reducer;
