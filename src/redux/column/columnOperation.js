import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://tasks-backed.onrender.com/api/';

export const fetchColumns = createAsyncThunk(
  "columns/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/columns");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  "columns/addColumn",
  async ({ ownerDesk, title }, thunkAPI) => {
    try {
      const response = await axios.post("/columns", { ownerDesk, title });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  "columns/deleteColumn",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/columns/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editColumn  = createAsyncThunk(
  "columns/editColumn",
  async ({ _id, title }, thunkAPI) => {
    try {
      const response = await axios.put(`/columns/${_id}`, { title });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
