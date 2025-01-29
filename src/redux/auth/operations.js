import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  authApi.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authApi.post("/users/signup", credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authApi.post("/users/login", credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      console.error("Login error:", errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logout = createAsyncThunk("logout", async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("No token found");
  }
  setAuthHeader(token);
  try {
    await authApi.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    console.error(
      "Logout error:",
      error.response ? error.response.data : error.message
    );
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk("refresh", async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }
  setAuthHeader(token);
  try {
    const { data } = await authApi.get("/users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
