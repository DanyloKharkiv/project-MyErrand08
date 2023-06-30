import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  radio: '',
  backImg:'',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setRadio(state, action) {
      state.radio = action.payload;
    },
    setBackImg(state, action) {
      state.backImg = action.payload;
    }
  },
});

export const { setRadio, setBackImg } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;