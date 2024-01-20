import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './thunks';

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};

const handleRejected = (state, actions) => {
  state.contacts.isLoading = false;
  state.contacts.error = actions.payload.message;
};

const handleFulfilled = state => {
  state.contacts.isLoading = false;
};

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload.id
        );
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
