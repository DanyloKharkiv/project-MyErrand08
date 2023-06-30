import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://tasks-backed.onrender.com/api/";

export const fetchBoard = createAsyncThunk(
  "board/fetchBoard",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/board");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "board/addtask",
  async ({ name, number }, thunkAPI) => {
    try {
      const resp = await axios.post("/board", { name, number });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "board/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const resp = await axios.delete(`/board/${taskId}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
