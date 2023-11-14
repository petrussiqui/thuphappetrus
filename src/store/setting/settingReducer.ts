import { en } from "languages/en";
import { SettingStoreConstant } from "./settingConstants";
import { Reducer } from "react";

const initialState: TSettingInitialState = {
  library: en,
};

export const SettingReducer: Reducer<TSettingInitialState,TReduxAction> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SettingStoreConstant.CHANGE_LANGUAGE:
      return { ...state, library: payload };
    default:
      return { ...state };
  }
};
