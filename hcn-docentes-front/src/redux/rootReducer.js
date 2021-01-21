import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import { advSlice } from "../app/modules/Advertisements/redux/advRedux";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  adv: advSlice.reducer,
});