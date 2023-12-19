import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentJob: null,
  loading: false,
  error: false,
};

const jobSlice = createSlice({
  name: 'currentJob',
  initialState,
  reducers: {
    searchStart: (state) => {
      state.loading = true;
    },
    searchSuccess: (state, action) => {
      state.currentJob = action.payload;
      state.loading = false;
    },
    searchFiler: (state) => {
      state.loading = false;
      state.error = true;
    },
    searchOut: (state) => {
      state.loading = false;
      state.error = false;
      state.currentJob = null;
    },
  },
});

export const { searchStart, searchSuccess, searchFiler, searchOut } =
  jobSlice.actions;

export default jobSlice.reducer;
