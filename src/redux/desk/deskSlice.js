import { createSlice } from '@reduxjs/toolkit';
import {
  addDesk,
  deleteDesk,
  fetchDesks,
  setActiveDeskId,
  changeActiveDeskById,
} from './deskOperations';

const initialState = {
  desks: {
    items: [],
    isLoading: false,
    error: null,
    activeDeskId: null,
    changeDeskId: null,
    changeDeskTitle: null,
    changeDeskIcon: null,
    changeDeskBG: null,
  },
};

const handlePending = state => {
  state.desks.isLoading = true;
};

const handleRejected = (state, action) => {
  state.desks.isLoading = false;
  state.desks.error = action.payload;
};

const desksSlice = createSlice({
  name: 'desks',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(fetchDesks.pending, handlePending)

      .addCase(fetchDesks.fulfilled, (state, action) => {
        state.desks.items = action.payload;
        state.desks.isLoading = false;
        state.error = null;
      })

      .addCase(fetchDesks.rejected, handleRejected)

      .addCase(addDesk.rejected, handleRejected)

      .addCase(addDesk.pending, handlePending)

      .addCase(addDesk.fulfilled, (state, action) => {
        state.desks.isLoading = false;
        state.desks.error = null;
        state.desks.items.push(action.payload);
      })
      .addCase(deleteDesk.fulfilled, (state, action) => {
        state.desks.isLoading = false;
        state.desks.error = null;
        state.desks.activeDeskId = null;
        state.desks.items = state.desks.items.filter(({ _id }) => _id !== action.payload);
      })
      .addCase(deleteDesk.pending, handlePending)
      .addCase(deleteDesk.rejected, handleRejected)

      .addCase(setActiveDeskId.fulfilled, (state, action) => {
        state.desks.isLoading = false;
        state.desks.error = null;
        state.desks.activeDeskId = action.payload;
      })
      .addCase(setActiveDeskId.pending, handlePending)
      .addCase(setActiveDeskId.rejected, handleRejected)

      .addCase(changeActiveDeskById.fulfilled, (state, action) => {
        state.desks.isLoading = false;
        state.desks.error = null;
        state.desks.changeDeskId = action.payload._id;
        state.desks.changeDeskTitle = action.payload.title;
        state.desks.changeDeskIcon = action.payload.icon;
        state.desks.changeDeskBG = action.payload.background;
      })
      .addCase(changeActiveDeskById.pending, handlePending)
      .addCase(changeActiveDeskById.rejected, handleRejected);
  },
});

export const desksReducer = desksSlice.reducer;
