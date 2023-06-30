import { createSlice } from "@reduxjs/toolkit";
import { addDesk, deleteDesk, fetchDesks } from "./deskOperations";

const initialState = {
  desks: {
    items: [],
    isLoading: false,
    error: null,
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
        const index = state.desks.items.findIndex(
          desk => desk.id === action.payload.id
        );
        state.desks.items.splice(index, 1);
      })
          .addCase(deleteDesk.pending, handlePending)
          .addCase(deleteDesk.rejected, handleRejected)
          
      
  },
});

export const desksReducer = desksSlice.reducer;