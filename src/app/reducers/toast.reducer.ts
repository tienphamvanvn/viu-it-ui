// types
import {
  ToastState,
  ToastActions,
  ToastActionTypes,
} from "@/app/types/toast.type";

const initialState: ToastState = {
  success: null,
  error: null,
};

export const toastReducer = (
  state: ToastState = initialState,
  action: ToastActions
): ToastState => {
  switch (action.type) {
    case ToastActionTypes.TOAST_SUCCESS:
      return {
        ...state,
        success: action.payload.success,
      };
    case ToastActionTypes.TOAST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
