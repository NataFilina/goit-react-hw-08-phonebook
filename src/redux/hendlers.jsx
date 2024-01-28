export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, { payload, error }) => {
  state.isLoading = false;
  state.error =
    payload?.message || payload || error?.message || 'Something went wrong';
};

export const handleFulfilled = state => {
  state.isLoading = false;
};
