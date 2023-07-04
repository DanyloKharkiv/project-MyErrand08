import { createSlice } from '@reduxjs/toolkit';
import {
  addDesk,
  deleteDesk,
  fetchDesks,
  setActiveDeskId,
  changeActiveDeskById,
  changeDeskNameById,
  changeDeskIconById,
  changeDeskBGById,
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
      .addCase(changeActiveDeskById.rejected, handleRejected)

      .addCase(changeDeskNameById.fulfilled, (state, action) => {
        state.desks.isLoading = false;
        state.desks.error = null;
        state.desks.changeDeskTitle = action.payload.title;
      })
      .addCase(changeDeskNameById.pending, handlePending)
      .addCase(changeDeskNameById.rejected, handleRejected)

      .addCase(changeDeskIconById.fulfilled, (state, action) => {
        state.desks.isLoading = false;
        state.desks.error = null;
        state.desks.changeDeskIcon = action.payload.icon;
      })
      .addCase(changeDeskIconById.pending, handlePending)
      .addCase(changeDeskIconById.rejected, handleRejected)

      .addCase(changeDeskBGById.fulfilled, (state, action) => {
        state.desks.isLoading = false;
        state.desks.error = null;
        state.desks.changeDeskBG = action.payload.background;
      })
      .addCase(changeDeskBGById.pending, handlePending)
      .addCase(changeDeskBGById.rejected, handleRejected);
  },
});

export const desksReducer = desksSlice.reducer;
