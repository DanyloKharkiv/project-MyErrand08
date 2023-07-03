import { createSlice } from "@reduxjs/toolkit";
import { addColumn, deleteColumn, editColumn, fetchColumns } from "./columnOperation";


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
    
    [editColumn.pending]: handlePending,
    [editColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const editColumn = action.payload;
      
      console.log(editColumn);
        const index = state.items.findIndex(column => column._id === editColumn._id);
        if (index !== -1) { 
          state.items[index] = editColumn;
        }
    },
    [editColumn.rejected]: handleRejected,

    [deleteColumn.pending]: handlePending,
    [deleteColumn.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ _id }) => _id !== action.payload);
    },
    [deleteColumn.rejected]: handleRejected,
  },
});

export const columnsReducer = columnsSlice.reducer;

export const selectColumnsItems = state => state.columns.items;
export const selectColumnsIsLoading = state => state.columns.isLoading;
export const selectColumnsError = state => state.columns.error;