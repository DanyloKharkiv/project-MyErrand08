import axios from 'axios';
import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://tasks-backed.onrender.com/api/';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/register', credentials);
    setAuthToken(data.accessToken);
    Notify.success('Registrated succesfully!');
    return data;
  } catch (error) {
     Notify.failure('Registration failed!');
    return thunkAPI.rejectWithValue(error);
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setAuthToken(data.accessToken);
    Notify.success('Login sucess!');
    return data;
  } catch (error) {
    Notify.failure('Login failed!');
    return thunkAPI.rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthToken();
    Notify.info('Logout');
  } catch (error) {
    Notify.failure('Something go wrong with your logout!');
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.accessToken;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthToken(persistedToken);
    const { data } = await axios.get('/users/refresh');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateTheme = createAsyncThunk('user/setTheme', async (newTheme) => {
  try {
    const { data } = await axios.patch('/users', { theme: newTheme });
    return data;
  } catch (error) {
    console.log(error);
  }
});