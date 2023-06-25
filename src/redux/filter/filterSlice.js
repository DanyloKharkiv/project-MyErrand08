import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    radio: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setRadio(state, action) {
      state.radio = action.payload;
      },
  },
});

export const { setRadio } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;