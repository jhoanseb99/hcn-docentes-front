import { createSlice } from "@reduxjs/toolkit";

const initAdvState = {
  table: []
};

const actionTypes = {
  set_table: "SET_TABLE"
};


const setTable = table => dispatch => {
  dispatch(advSlice.actions.setTable({ type: actionTypes.set_table, table }));
};

export const actions = {
  setTable,
};

export const advSlice = createSlice({
  name: "Adv",
  initialState: initAdvState,
  reducers: {
    setTable: (state, action) => {
      const { table } = action.payload;
      state.table = table;
    },
  }
});