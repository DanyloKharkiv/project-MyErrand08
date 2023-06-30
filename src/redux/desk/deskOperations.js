import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://tasks-backed.onrender.com/api/';

export const fetchDesks = createAsyncThunk(
  'desks/getAlldesks',

  async thunkApi => {
    try {
      const response = await axios.get('/desk');
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