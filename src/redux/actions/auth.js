import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import TokenService from "../service/userService/tokenService";

const API = axios.create({
  baseURL: "http://34.159.147.205",
  headers: {
    ContentType: "application/json",
  },
});

export const auth = createAsyncThunk(
  "auth/auth",
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const response = await API.post("/users/google/", {
        auth_token: data
      });
      if(response.data.tokens){ 
        console.log(response)
        TokenService.setUser(response.data.tokens)
      }
      
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response.data.message);
    }
  }
);
