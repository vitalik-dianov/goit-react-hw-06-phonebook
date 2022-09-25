import { createSlice } from '@reduxjs/toolkit';

const filterInitSlice = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitSlice,
  reducers: {
    setFilter(state, action) {
     return state = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
