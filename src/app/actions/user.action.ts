// types
import { History } from "@/app/types/common.type";
import { VIUThunk } from "@/app/types/viu.type";
import { UserActionTypes } from "@/app/types/user.type";

// types
import { ToastActionTypes } from "@/app/types/toast.type";

// utils
import httpRequest from "@/app/utils/httpRequest";
import { errorHandler } from "@/app/utils/errorHandler";

export const signUp =
  (
    payload: {
      student_id: string;
      name: string;
      birthday: string;
      password: string;
    },
    history: History
  ): VIUThunk =>
  async dispatch => {
    try {
      const { data } = await httpRequest.post("/api/auth/signup", payload, {
        showSpinner: true,
      });

      dispatch({
        type: UserActionTypes.SIGNUP,
      });

      dispatch({
        type: ToastActionTypes.TOAST_SUCCESS,
        payload: { success: data.message },
      });

      history.push("/signin");
    } catch (error) {
      dispatch({
        type: ToastActionTypes.TOAST_FAILURE,
        payload: { error: errorHandler(error) },
      });
    }
  };

export const signIn =
  (
    payload: { student_id: string; password: string },
    history: History
  ): VIUThunk =>
  async dispatch => {
    try {
      const { data } = await httpRequest.post("/api/auth/signin", payload, {
        showSpinner: true,
      });

      dispatch({
        type: UserActionTypes.SIGNIN,
        payload: {
          isLogged: true,
          token: data.token,
          profile: data.profile,
        },
      });

      dispatch({
        type: ToastActionTypes.TOAST_SUCCESS,
        payload: { success: data.message },
      });

      localStorage.setItem("accessToken", data.token);

      history.push("/home");
    } catch (error) {
      dispatch({
        type: ToastActionTypes.TOAST_FAILURE,
        payload: { error: errorHandler(error) },
      });
    }
  };

export const signOut =
  (history: History): VIUThunk =>
  async dispatch => {
    try {
      await httpRequest.post("/api/auth/signout");

      dispatch({
        type: UserActionTypes.SIGNOUT,
        payload: {
          isLogged: false,
          token: null,
          profile: null,
        },
      });

      localStorage.removeItem("accessToken");
      history.push("/signin");
    } catch (error) {
      dispatch({
        type: ToastActionTypes.TOAST_FAILURE,
        payload: { error: errorHandler(error) },
      });
    }
  };

export const setUserData = (): VIUThunk => async dispatch => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    const { data } = await httpRequest.post("/api/auth/refreshtoken", null, {
      showSpinner: true,
    });
    dispatch({
      type: UserActionTypes.SET_USER_DATA,
      payload: {
        isLogged: true,
        isCorrectToken: true,
        token: data.token,
        profile: data.profile,
      },
    });
  }
};
