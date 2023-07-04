import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

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

export const changeDeskNameById = createAsyncThunk(
  'desks/changeDeskNameById',

  async (newTitle, thunkApi) => {
    try {
      const response = await axios.patch(`/desk/${newTitle._id}/title`, {
        title: newTitle.title,
      });
      Notify.success('The desk title was changed succesfully!');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const changeDeskIconById = createAsyncThunk(
  'desks/changeDeskIconById',

  async (newIcon, thunkApi) => {
    try {
      const response = await axios.patch(`/desk/${newIcon._id}/icon`, {
        icon: newIcon.icon,
      });
      Notify.success('The desk icon was changed succesfully!');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const changeDeskBGById = createAsyncThunk(
  'desks/changeDeskBGById',

  async (newbackImg, thunkApi) => {
    try {
      const response = await axios.patch(`/desk/${newbackImg._id}/background`, {
        background: newbackImg.background,
      });
      Notify.success('The desk background was changed succesfully!');
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

export const changeActiveDeskById = createAsyncThunk(
  'desks/changeActiveDeskById',

  async (params, thunkApi) => {
    try {
      return params;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
