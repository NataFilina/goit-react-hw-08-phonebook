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
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.profile = payload;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.token = '';
        state.profile = null;
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const authReducer = authSlice.reducer;
