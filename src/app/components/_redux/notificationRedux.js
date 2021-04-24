import { createSlice } from "@reduxjs/toolkit";

const initialNotificationState = {
  open: false,
  message: "",
  variant: "success",
};

const set_notification = {
  set_notification: "SET_NOTIFICATION",
};

const setNotificationField = (field, data) => (dispatch) => {
  dispatch(
    notificationSlice.actions.setNotificationField({
      type: set_notification.set_notification,
      field,
      data,
    })
  );
};

const setNotification = (message, variant = "success") => (dispatch) => {
  dispatch(
    notificationSlice.actions.setNotification({
      type: set_notification.set_notification,
      message,
      variant,
    })
  );
};

export const notificationActions = {
  setNotificationField,
  setNotification,
};

export const notificationSlice = createSlice({
  name: "Notification",
  initialState: initialNotificationState,
  reducers: {
    setNotificationField: (state, action) => {
      const { field, data } = action.payload;
      state[field] = data;
    },
    setNotification: (state, action) => {
      const { message, variant } = action.payload;
      state.message = message;
      state.variant = variant;
      state.open = true;
    },
  },
});
