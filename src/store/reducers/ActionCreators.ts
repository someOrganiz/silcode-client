import { ICredentials } from "../../models/ICredentials";
import { AppDispatch, store } from "../store";
import { authSlice } from "./AuthSlice";
import { HOME, PROFILE } from "../../utils/routes";
import router, { Router } from "next/router";
import $apiAuth from "../../http/$apiAuth";

interface AuthResponse {
  token: string;
}

export const login =
  (credentials: ICredentials) => async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.authRequesting());
    const response = await $apiAuth
      .post("/signin", { ...credentials })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("atoken", res.data.atoken);
        dispatch(authSlice.actions.authRequestingSuccess(res.data));
      })
      .catch((err) =>
        dispatch(
          authSlice.actions.authRequestingError(err?.response?.data?.message)
        )
      );
  };

export const register =
  (credentials: ICredentials) => async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.authRequesting());
    const response = await $apiAuth
      .post("/signup", { ...credentials })
      .then((res) =>
        dispatch(authSlice.actions.authRequestingSuccess(res.data))
      )
      .catch((err) =>
        dispatch(
          authSlice.actions.authRequestingError(err?.response?.data?.message)
        )
      );
  };

export const logout = () => async (dispatch: AppDispatch) => {
  localStorage.removeItem("atoken");
  dispatch(authSlice.actions.initialize());
  router.push(HOME);
};

export const auth = () => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.authRequesting());
  const token = localStorage.getItem("atoken");
  if (!token) {
    dispatch(authSlice.actions.initialize());
  } else {
    const response = await $apiAuth
      .post("/auth", { Headers: token })
      .then((res) =>
        dispatch(authSlice.actions.authRequestingSuccess(res.data))
      )
      .catch((err) =>
        dispatch(
          authSlice.actions.authRequestingError(err?.response?.data?.message)
        )
      );
  }
};
