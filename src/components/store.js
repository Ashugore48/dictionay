// store.js

import { configureStore } from '@reduxjs/toolkit';
import searchHistoryReducer from './searchHistorySlice';

const store = configureStore({
  reducer: {
    searchHistory: searchHistoryReducer, // Add the searchHistorySlice reducer
    // Add other reducers if needed
  },
});

export default store;
