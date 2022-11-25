import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API = axios.create({
  baseURL: "http://34.159.147.205",
  headers: {
    ContentType: "application/json",
  },
});

export const auth = createAsyncThunk(
  "auth/auth",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("/users/google/", {
        auth_token: data
      });
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response.data.message);
    }
  }
);
