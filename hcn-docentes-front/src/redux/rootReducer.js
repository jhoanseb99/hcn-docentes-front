import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import { annSlice } from "../app/modules/Announcements/_redux/annRedux";
import { activitiesSlice } from "../app/modules/Activities/_redux/activitiesRedux";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  announcements: annSlice.reducer,
  activities: activitiesSlice.reducer,
});