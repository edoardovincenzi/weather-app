// src/features/counter/counterSlice.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'counter',
  initialState: { search: '' },
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    reset: (state) => {
      state.search = '';
    },
  },
});

export const { setSearch, reset } = searchSlice.actions;

export default searchSlice.reducer;
