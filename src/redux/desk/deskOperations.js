import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://tasks-backed.onrender.com/api/';

export const fetchDesks = createAsyncThunk(
  'desks/getAlldesks',

  async thunkApi => {
    try {
        const response = await axios.get('/desk');
        console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getDeskById = createAsyncThunk(
  'desks/getDeskById',

  async (deskId, thunkApi) => {
    try {
      const response = await axios.get(`/desk/${deskId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addDesk = createAsyncThunk(
  'desks/addDesk',

  async (desk, thunkApi) => {
    try {
      const response = await axios.post('/desk', desk);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteDesk = createAsyncThunk(
  'desks/deleteContact',

  async (deskId, thunkApi) => {
    try {
      await axios.delete(`/desk/${deskId}`);
      return deskId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const setActiveDeskId = createAsyncThunk(
  'desks/setActiveDeskId',

  async (deskId, thunkApi) => {
    try {
      return deskId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);