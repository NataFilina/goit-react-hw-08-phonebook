import { createSlice } from '@reduxjs/toolkit';
import {
  loginUserThunk,
  logoutThunk,
  refreshThunk,
  registerNewUserThunk,
} from './thunks';
import { handleFulfilled } from './hendlers';

const initialState = {
  token: '',
  profile: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(registerNewUserThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload.user;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload.user;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.profile = payload;
      })
      .addCase(refreshThunk.rejected, state => {
        state.profile = '';
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.token = '';
        state.profile = null;
        state.isRefreshing = false;
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const authReducer = authSlice.reducer;
