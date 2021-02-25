import { createSlice } from "@reduxjs/toolkit";

const initLayoutState = {
  config: {
    aside: false,
  },
};

const actionTypes = {
  set_config: "SET_CONFIG"
};

const setConfig = (field, data) => dispatch => {
  dispatch(layoutSlice.actions.setConfig({ type: actionTypes.set_config, field, data }));
};

export const layoutActions = {
  setConfig,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState: initLayoutState,
  reducers: {
    setConfig: (state, action) => {
      const { field, data } = action.payload;
      state.config[field] = data;
    },
  }
});