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
    currentOwner: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    changeOwner(state, action) {
      state.currentOwner = action.payload;
    },
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
        // console.log("AP:", action.payload);
        state.listCards.push(action.payload);
      })
      .addCase(addCard.pending, handlePending)
      .addCase(addCard.rejected, handleRejected)
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        //Immer!
        state.listCards = state.listCards.filter(
          (card) => card._id !== action.payload
        );
      })
      .addCase(deleteCard.pending, handlePending)
      .addCase(deleteCard.rejected, handleRejected)
      .addCase(editCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { id, title, taskValue, priority, deadline } = action.payload;
        //Immer!
        state.listCards = state.listCards.map((card) =>
          card._id === id
            ? { ...card, title, taskValue, priority, deadline }
            : card
        );
      });
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { changeOwner } = cardsSlice.actions;
