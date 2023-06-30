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
  async ({ idColumn, title }, thunkAPI) => {
    try {
      const response = await axios.put(`/columns/${idColumn}`, { title });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
