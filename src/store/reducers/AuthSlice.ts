import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthResponse {
  payload: any;
  type: string;
}

interface IUser {
  role: string;
  id: string;
}
interface AuthState {
  isLoading: boolean;
  isError: string;
  user: IUser;
}

const initialState: AuthState = {
  isLoading: false,
  isError: "",
  user: {} as IUser,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize(state) {
      state.isLoading = false;
      state.isError = "";
      state.user = {} as IUser;
    },
    authRequesting(state) {
      state.isLoading = true;
      state.isError = "";
    },
    authRequestingSuccess(state, action: PayloadAction<AuthResponse>) {
      // state.user = action.payload.user;
      state.isLoading = false;
      state.isError = "";
    },
    authRequestingError(state, action: PayloadAction<any>) {
      // state.user = action.payload.user;
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default authSlice.reducer;
