// searchHistorySlice.js

import { createSlice } from '@reduxjs/toolkit';

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState: [],
  reducers: {
    addToHistory: (state, action) => {
      state.unshift(action.payload); // Add the new search query to the beginning of the history array
    },
    clearHistory: (state) => {
      state = []; // Clear the search history
    },
  },
});

export const { addToHistory, clearHistory } = searchHistorySlice.actions;
export default searchHistorySlice.reducer;
