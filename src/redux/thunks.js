import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  createContact,
  currentUser,
  deleteContactApi,
  getContacts,
  loginUser,
  logoutUser,
  registerNewUser,
} from 'service/contacts-service';
export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const registerNewUserThunk = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const resp = await registerNewUser(data);
      setToken(resp.token);
      return resp;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const resp = await loginUser(data);
      setToken(resp.token);
      return resp;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    if (!token) return rejectWithValue('No valid token');
    setToken(token);
    try {
      return await currentUser();
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await logoutUser();
      removeToken();
      return resp;
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
