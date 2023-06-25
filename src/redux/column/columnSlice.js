import { createSlice } from "@reduxjs/toolkit";
import { addColumn, deleteColumn, fetchColumns } from "./columnOperation";


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const columnsSlice = createSlice({
  name: "columns",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchColumns.pending]: handlePending,
    [fetchColumns.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchColumns.rejected]: handleRejected,

    [addColumn.pending]: handlePending,
    [addColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addColumn.rejected]: handleRejected,
    
    // [editColumn.pending]: handlePending,
    // [editColumn.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // },
    // [editColumn.rejected]: handleRejected,

    [deleteColumn.pending]: handlePending,
    [deleteColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(column => column.id === action.payload.id);
      state.items.splice(index, 1);
    },
    [deleteColumn.rejected]: handleRejected,
  },
});

export const columnsReducer = columnsSlice.reducer;

export const selectColumnsItems = state => state.columns.items;
export const selectColumnsIsLoading = state => state.columns.isLoading;
export const selectColumnsError = state => state.columns.error;