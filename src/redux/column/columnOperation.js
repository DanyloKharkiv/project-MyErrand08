import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6432a773d0127730d2d6e36b.mockapi.io/';

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
    async ({ title }, thunkAPI) => {
    try {
      const response = await axios.post("/columns", { title });
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
