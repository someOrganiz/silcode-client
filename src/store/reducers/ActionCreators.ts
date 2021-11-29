import { ICredentials } from "../../models/ICredentials";
import { AppDispatch } from "../store";
import { authSlice } from "./AuthSlice";
const API_URL = "http://localhost:5000/auth";

export const login =
  (credentials: ICredentials) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.authRequesting());
      const response = await auth(credentials, "/login");
      if (response?.payload) {
        dispatch(authSlice.actions.authRequestingError(response));
      }
      dispatch(authSlice.actions.authRequestingSuccess(response));
    } catch (error: any) {
      dispatch(authSlice.actions.authRequestingError(error?.message));
    }
  };

export const register =
  (credentials: ICredentials) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.authRequesting());
      const response = await auth(credentials, "/registration");
      if (response?.statusCode) {
        dispatch(authSlice.actions.authRequestingError(response));
      } else {
        dispatch(authSlice.actions.authRequestingSuccess(response));
      }
    } catch (error: any) {
      dispatch(authSlice.actions.authRequestingError(error?.message));
    }
  };

async function auth(creds: ICredentials, endpoint: string) {
  const response = await fetch(API_URL + endpoint, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  }).then((res) => res.json());
  return response;
}
