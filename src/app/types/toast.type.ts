export interface ToastState {
  success: string | null;
  error: string | null;
}

export enum ToastActionTypes {
  TOAST_SUCCESS = "toast/TOAST_SUCCESS",
  TOAST_FAILURE = "toast/TOAST_FAILURE",
}

export interface ToastSuccess {
  type: typeof ToastActionTypes.TOAST_SUCCESS;
  payload: { success: string };
}

export interface ToastFailure {
  type: typeof ToastActionTypes.TOAST_FAILURE;
  payload: { error: string };
}

export type ToastActions = ToastSuccess | ToastFailure;
