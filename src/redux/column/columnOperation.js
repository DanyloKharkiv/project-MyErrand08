import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://tasks-backed.onrender.com/api/';

export const fetchColumns = createAsyncThunk(
  "columns/fetchAll",
  async (idDesk, thunkAPI) => {
    try {
      const response = await axios.get(`/columns?ownerDesk=${idDesk}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  "columns/addColumn",
  async ({ title, ownerDesk, ownerUser }, thunkAPI) => {
    try {
      const response = await axios.post("/columns", {title, ownerDesk, ownerUser});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  "columns/deleteColumn",
  async (_id, thunkAPI) => {
    try {
      await axios.delete(`/columns/${_id}`);
      return _id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editColumn  = createAsyncThunk(
  "columns/editColumn",
  async ({ _id, title }, thunkAPI) => {
    try {
      console.log("id=", _id, ", title=", title);
      const response = await axios.patch(`/columns/${_id}`, { title });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
