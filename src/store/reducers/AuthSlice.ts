import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthResponse {
  user: IUser;
  refreshToken: string;
  accessToken: string;
}
interface IUser {
  role: string;
  id: string;
}
interface AuthState {
  isLoading: boolean;
  isError: boolean;
  user: IUser;
}

const initialState: AuthState = {
  isLoading: false,
  isError: false,
  user: {} as IUser,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRequesting(state) {
      state.isLoading = true;
      state.isError = false;
    },
    authRequestingSuccess(state, action: PayloadAction<AuthResponse>) {
      state.user = action.payload.user;
      state.isLoading = false;
      state.isError = false;
    },
    authRequestingError(state, action: PayloadAction<AuthResponse>) {
      state.user = action.payload.user;
      state.isLoading = false;
      state.isError = false;
    },
  },
});
