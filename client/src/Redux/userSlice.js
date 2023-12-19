import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    loginFiler: (state) => {
      state.loading = false;
      state.error = true;
    },
    logOut: (state) => {
      (state.loading = false),
        (state.error = false),
        (state.currentUser = null);
    },
  },
});

export const { loginStart, loginSuccess, loginFiler, logOut } =
  userSlice.actions;

export default userSlice.reducer;
