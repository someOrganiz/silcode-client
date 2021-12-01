import { ICredentials } from "../../models/ICredentials";
import { AppDispatch } from "../store";
import { authSlice } from "./AuthSlice";
const API_URL = "http://localhost:5000/auth";

export const login =
  (credentials: ICredentials) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.authRequesting());
      const response = await auth(credentials, "/login");
      if (!response.ok) {
        response
          .json()
          .then((res) =>
            dispatch(authSlice.actions.authRequestingError(res?.message))
          );
      } else {
        response
          .json()
          .then((res) =>
            dispatch(authSlice.actions.authRequestingSuccess(res.atoken))
          );
      }
    } catch (error: any) {
      dispatch(authSlice.actions.authRequestingError(error?.message));
    }
  };

export const register =
  (credentials: ICredentials) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.authRequesting());
      const response = await auth(credentials, "/registration");
      if (!response.ok) {
        response
          .json()
          .then((res) =>
            dispatch(authSlice.actions.authRequestingError(res?.message))
          );
      } else {
        response
          .json()
          .then((res) =>
            dispatch(authSlice.actions.authRequestingSuccess(res.atoken))
          );
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
  });
  return response;
}
