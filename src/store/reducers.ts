import { combineReducers } from "redux";
import { SettingReducer } from "./setting/settingReducer";

export const rootReducer = combineReducers({
  setting: SettingReducer,
});
