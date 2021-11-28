import { createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = "http://localhost:5000/";

export const login = createAsyncThunk("api", 
async (credentials) => {
  const response = await fetch(API_URL + "/login", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response;
});
