export const IS_LOADING = 'IS_LOADING';
export const THROW_ERROR = 'THROW_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const isLoading = () => ({
  type: IS_LOADING
});

export const throwError = (error) => ({
  type: THROW_ERROR,
  error
});

export const clearError = () => ({
  type: CLEAR_ERROR
});