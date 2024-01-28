import { createSlice } from '@reduxjs/toolkit';
const {
  handlePending,
  handleRejected,
  handleFulfilled,
} = require('./hendlers');

const rootSlice = createSlice({
  name: 'rootSlice',
  initialState: {
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const rootSliceReducer = rootSlice.reducer;
