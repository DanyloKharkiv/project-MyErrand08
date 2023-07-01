import { createSlice } from "@reduxjs/toolkit";

import { fetchCards, addCard, deleteCard, editCard } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.log("ERROR");
};

const cardsSlice = createSlice({
  name: "cards",

  initialState: {
    listCards: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.listCards = action.payload;
      })
      .addCase(fetchCards.pending, handlePending)
      .addCase(fetchCards.rejected, handleRejected)
      .addCase(addCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.listCards.push(action.payload);
      })
      .addCase(addCard.pending, handlePending)
      .addCase(addCard.rejected, handleRejected)
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        //Immer!
        state.listCards = state.listCards.filter(
          (card) => card.id !== action.payload.id
        );
      })
      .addCase(deleteCard.pending, handlePending)
      .addCase(deleteCard.rejected, handleRejected)
      .addCase(editCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // найти в listCards карту с action.payload.id
        // заменить карту на action.payload
      });
  },
});

export const cardsReducer = cardsSlice.reducer;
