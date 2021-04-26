import { combineReducers } from "redux";

import * as auth from "app/modules/Auth/_redux/authRedux";
import { coursesSlice } from "app/modules/Courses/_redux/coursesRedux";
import { annSlice } from "app/modules/Announcements/_redux/annRedux";
import { activitiesSlice } from "app/modules/Activities/_redux/activitiesRedux";
import { ccasesSlice } from "app/modules/ClinicalCases/_redux/ccasesRedux";
import { hcnSlice } from "app/modules/HCN/_redux/hcnRedux";
import { notificationSlice } from "app/components/_redux/notificationRedux";
import { studentsSlice } from "app/modules/Students/_redux/studentsRedux";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  notifications: notificationSlice.reducer,
  announcements: annSlice.reducer,
  activities: activitiesSlice.reducer,
  courses: coursesSlice.reducer,
  clinicalCases: ccasesSlice.reducer,
  hcn: hcnSlice.reducer,
  students: studentsSlice.reducer,
});
