import { createSelector } from '@reduxjs/toolkit';

export const selectorItems = state => state.contacts.contacts.items;
export const selectorFilter = state => state.filter.filter;
export const selectorIsAuth = state => state.auth.token;
export const selectorProfile = state => state.auth.profile;
export const selectorGlobalLoading = state => state.root.isLoading;
export const selectorGlobalError = state => state.root.error;

export const selector = createSelector(
  selectorItems,
  selectorFilter,
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
