import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addCard = createAsyncThunk(
  "cards/addCard",
  async (card, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", card);
      return response.data;
    } catch (e) {
      console.log("ERROR addCard");
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCards = createAsyncThunk(
  "cards/fetchAll",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks?ownerColumn=${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "card/deleteCard",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/tasks/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editCard = createAsyncThunk(
  "card/editCard",
  async (data, thunkAPI) => {
    try {
      const { id, title, taskValue, priority, deadline } = data;
      await axios.patch(`/tasks/${id}`, {
        title,
        taskValue,
        priority,
        deadline,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
