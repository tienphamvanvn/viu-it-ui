import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

// types
import { AppState } from "./app.type";
import { UserState } from "./user.type";
import { ToastState } from "./toast.type";

export type VIUState = {
  app: AppState;
  user: UserState;
  toast: ToastState;
};

export type VIUDispatch = ThunkDispatch<VIUState, unknown, Action<string>>;

export type VIUThunk = ThunkAction<
  Promise<void>,
  VIUState,
  unknown,
  Action<string>
>;
