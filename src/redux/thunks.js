import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContact,
  currentUser,
  deleteContactApi,
  getContacts,
  loginUser,
  logoutUser,
  registerNewUser,
} from 'service/contacts-service';

export const registerNewUserThunk = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      return await registerNewUser(data);
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      return await loginUser(data);
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      return await currentUser(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      return await logoutUser(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      return await createContact(data);
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await deleteContactApi(contact);
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);
