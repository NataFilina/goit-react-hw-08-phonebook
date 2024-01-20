import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer: reducer,
});
