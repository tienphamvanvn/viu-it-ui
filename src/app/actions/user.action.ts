// types
import { History } from "@/app/types/common.type";
import { VIUThunk } from "@/app/types/viu.type";
import { UserActionTypes } from "@/app/types/user.type";

// utils
import httpRequest from "@/app/utils/httpRequest";

export const signIn =
  (payload: { studentId: string; password: string }): VIUThunk =>
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

      localStorage.setItem("accessToken", data.token);
    } catch (error) {
      console.log("asdfasdf");
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
      console.log("asdfasdf");
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
