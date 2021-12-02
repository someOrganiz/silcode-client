import { ICredentials } from "../../models/ICredentials";
import { AppDispatch } from "../store";
import { authSlice } from "./AuthSlice";
import { PROFILE } from "../../utils/routes";
import router, { Router } from "next/router";

const API_URL = "http://localhost:5000/auth";

export const login =
  (credentials: ICredentials) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.authRequesting());
      const response = await signRequest(credentials, "/login");
      if (!response.ok) {
        response
          .json()
          .then((res) =>
            dispatch(authSlice.actions.authRequestingError(res?.message))
          );
      } else {
        response.json().then((res) => {
          dispatch(authSlice.actions.authRequestingSuccess(res.atoken));
          localStorage.setItem("atoken", res.atoken);
          router.push(PROFILE);
        });
      }
    } catch (error: any) {
      dispatch(authSlice.actions.authRequestingError(error?.message));
    }
  };

export const register =
  (credentials: ICredentials) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.authRequesting());
      const response = await signRequest(credentials, "/registration");
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

export const logout = () => async (dispatch: AppDispatch) => {
  localStorage.removeItem("atoken");
  dispatch(authSlice.actions.initialize());
};

export const auth = () => async (dispatch: AppDispatch) => {
  dispatch(dispatch(authSlice.actions.authRequesting()));
  try {
    const token = localStorage.getItem("atoken");
    if (!token) {
      dispatch(authSlice.actions.initialize());
    } else {
      dispatch(authSlice.actions.authRequesting());
      const response = await authRequest(token, "/auth");
      if (!response.ok) {
        response
          .json()
          .then((res) =>
            dispatch(authSlice.actions.authRequestingError(res.message))
          );
      } else {
        response.json().then((res) => {
          console.log(res);
          dispatch(authSlice.actions.authRequestingSuccess(token));
        });
      }
    }
  } catch (error: any) {
    dispatch(authSlice.actions.authRequestingError(error?.message));
  }
};

async function signRequest(creds: ICredentials, endpoint: string) {
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

async function authRequest(token: string, endpoint: string) {
  const response = await fetch(API_URL + endpoint, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return response;
}
