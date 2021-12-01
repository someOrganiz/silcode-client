import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StrToken = string;
type StrError = string;
interface AuthState {
  isLoading: boolean;
  isError: StrError;
  token: StrToken;
}

const initialState: AuthState = {
  isLoading: false,
  isError: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize(state) {
      state.isLoading = false;
      state.isError = "";
      state.token = "";
    },
    authRequesting(state) {
      state.isLoading = true;
      state.isError = "";
    },
    authRequestingSuccess(state, action: PayloadAction<StrToken>) {
      state.token = action.payload;
      state.isLoading = false;
      state.isError = "";
    },
    authRequestingError(state, action: PayloadAction<StrError>) {
      state.token = "";
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default authSlice.reducer;
