import { createSlice } from "@reduxjs/toolkit";
import { fetchBoard, addTask, deleteTask } from "../../services/board-servises";
const boardSlice = createSlice({
  name: "board",
  initialState: {
    title: "",
    // icon: '',
    background: "",
    columns: [],
    tasks: [],
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchBoard.fulfilled, (state, { payload }) => {
        state.board = payload;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.board.tasks.push(payload);
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        const index = state.tasks.findIndex((task) => task.id === payload.id);
        state.board.tasks.splice(index, 1);
      }),
 
});
export const boardReducer = boardSlice.reducer;
